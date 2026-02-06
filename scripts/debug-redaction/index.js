#!/usr/bin/env node
"use strict";

const REDACTED = "<redacted>";

const SENSITIVE_HEADER_KEYS = new Set([
  "authorization",
  "proxy-authorization",
  "cookie",
  "set-cookie",
  "x-api-key",
]);

const SENSITIVE_KEY_PATTERN = /(token|secret|api[-_]?key|password|authorization|cookie)/i;

function isObject(value) {
  return value !== null && typeof value === "object";
}

function redactCookieValue(value) {
  if (typeof value !== "string") {
    return REDACTED;
  }
  return value
    .split(";")
    .map((part) => {
      const segment = part.trim();
      if (!segment) return segment;
      const equalsIndex = segment.indexOf("=");
      if (equalsIndex < 0) return segment;
      const key = segment.slice(0, equalsIndex).trim();
      return key ? `${key}=${REDACTED}` : REDACTED;
    })
    .join("; ");
}

function redactAuthorizationValue(value) {
  if (typeof value !== "string") {
    return REDACTED;
  }
  if (/^bearer\s+/i.test(value)) {
    return "Bearer <redacted>";
  }
  if (/^basic\s+/i.test(value)) {
    return "Basic <redacted>";
  }
  return REDACTED;
}

function redactHeaderValue(key, value) {
  const lowerKey = String(key).toLowerCase();
  if (lowerKey === "cookie" || lowerKey === "set-cookie") {
    return redactCookieValue(value);
  }
  if (lowerKey === "authorization" || lowerKey === "proxy-authorization") {
    return redactAuthorizationValue(value);
  }
  return REDACTED;
}

function redactString(input) {
  if (typeof input !== "string") {
    return input;
  }

  let value = input;

  value = value.replace(/\bBearer\s+[A-Za-z0-9\-._~+/]+=*/gi, "Bearer <redacted>");
  value = value.replace(
    /\b[A-Za-z0-9_-]{16,}\.[A-Za-z0-9_-]{16,}\.[A-Za-z0-9_-]{16,}\b/g,
    REDACTED,
  );
  value = value.replace(/\bsk-proj-[A-Za-z0-9_-]{20,}\b/g, REDACTED);
  value = value.replace(/\bsk-[A-Za-z0-9]{20,}\b/g, REDACTED);
  value = value.replace(/\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, REDACTED);
  value = value.replace(/\bAIza[0-9A-Za-z\-_]{35}\b/g, REDACTED);
  value = value.replace(/\bAKIA[0-9A-Z]{16}\b/g, REDACTED);

  value = value.replace(
    /(api[_-]?key\s*[:=]\s*)(['"]?)[^'",;\s]+/gi,
    (_, prefix, quote) => `${prefix}${quote}${REDACTED}`,
  );
  value = value.replace(
    /(token\s*[:=]\s*)(['"]?)[^'",;\s]+/gi,
    (_, prefix, quote) => `${prefix}${quote}${REDACTED}`,
  );
  value = value.replace(
    /(authorization\s*[:=]\s*)(['"]?)[^'",;\s]+/gi,
    (_, prefix, quote) => `${prefix}${quote}${REDACTED}`,
  );
  value = value.replace(
    /(cookie\s*[:=]\s*)([^\r\n]+)/gi,
    (_, prefix, cookieContent) => `${prefix}${redactCookieValue(cookieContent)}`,
  );
  value = value.replace(
    /(set-cookie\s*[:=]\s*)([^\r\n]+)/gi,
    (_, prefix, cookieContent) => `${prefix}${redactCookieValue(cookieContent)}`,
  );

  return value;
}

function redactForLogging(input, seen = new WeakSet()) {
  if (typeof input === "string") {
    return redactString(input);
  }
  if (
    input === null ||
    input === undefined ||
    typeof input === "number" ||
    typeof input === "boolean"
  ) {
    return input;
  }
  if (typeof input === "bigint") {
    return String(input);
  }
  if (Buffer.isBuffer(input)) {
    return redactString(input.toString("utf8"));
  }
  if (Array.isArray(input)) {
    return input.map((item) => redactForLogging(item, seen));
  }
  if (!isObject(input)) {
    return redactString(String(input));
  }
  if (seen.has(input)) {
    return "[Circular]";
  }
  seen.add(input);

  const output = {};
  for (const [key, value] of Object.entries(input)) {
    const lowerKey = String(key).toLowerCase();
    if (SENSITIVE_HEADER_KEYS.has(lowerKey)) {
      output[key] = redactHeaderValue(key, value);
      continue;
    }
    if (SENSITIVE_KEY_PATTERN.test(String(key))) {
      if (lowerKey.includes("cookie")) {
        output[key] = redactCookieValue(value);
      } else if (lowerKey.includes("authorization")) {
        output[key] = redactAuthorizationValue(value);
      } else {
        output[key] = REDACTED;
      }
      continue;
    }
    output[key] = redactForLogging(value, seen);
  }

  return output;
}

module.exports = {
  REDACTED,
  redactCookieValue,
  redactForLogging,
  redactString,
};

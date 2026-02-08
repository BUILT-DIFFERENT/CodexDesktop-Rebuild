---
title: Use Zod Mini for Bundle-Sensitive Applications
impact: LOW-MEDIUM
impactDescription: Full Zod is typically ≈5–13 kB gzipped; Zod Mini is ≈1.9–2.1 kB, often reducing validation bundle cost by ~64–70% in bundle-sensitive frontend builds
tags: perf, bundle, mini, tree-shaking
---

## Use Zod Mini for Bundle-Sensitive Applications

For frontend applications where bundle size is critical, install `zod` and import the mini build from `zod/mini`. Zod Mini provides a functional API that tree-shakes better and can reduce validation bundle cost by roughly ~64–70%.

**When to consider Zod Mini:**

```typescript
// Your app if:
// - Bundle size is critical (mobile-first, slow networks)
// - Edge functions with size limits
// - Simple validation needs (no complex transforms)
// - Tree-shaking is important

// Zod full build: ≈5–13 kB gzipped (depends on usage/tree-shaking)
import { z } from 'zod'

// Zod Mini: ≈1.9–2.1 kB gzipped (when tree-shaken)
import * as z from 'zod/mini'
```

**Standard Zod (method chaining):**

```typescript
import { z } from 'zod'

// Methods are attached to schema objects - hard to tree-shake
const userSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().int().positive(),
})

const result = userSchema.safeParse(data)
```

**Zod Mini (functional API):**

```typescript
import * as z from 'zod/mini'

// Functions are imported individually - tree-shakeable
const userSchema = z.object({
  name: z.pipe(z.string(), z.minLength(1), z.maxLength(100)),
  email: z.pipe(z.string(), z.email()),
  age: z.pipe(z.number(), z.int(), z.positive()),
})

const result = z.safeParse(userSchema, data)
```

**API differences:**

```typescript
// Standard Zod
z.string().min(5).max(100).email()
z.number().int().positive()
z.array(z.string()).min(1)
schema.parse(data)
schema.safeParse(data)

// Zod Mini
z.pipe(z.string(), z.minLength(5), z.maxLength(100), z.email())
z.pipe(z.number(), z.int(), z.positive())
z.pipe(z.array(z.string()), z.minLength(1))
z.parse(schema, data)
z.safeParse(schema, data)
```

**When to stick with regular Zod:**

```typescript
// Use regular Zod when:
// - Server-side where bundle size doesn't matter
// - Complex schemas with many transforms
// - Need full method chaining ergonomics
// - Bundle size isn't a constraint

// The full build is often still acceptable - only optimize if needed
// Server: this size is usually negligible
// Browser: it matters more on constrained/mobile networks
```

**Shared schemas between packages:**

```typescript
// shared-schemas/package.json
{
  "dependencies": {
    "zod": "^4.x"  // Install stable zod, import mini via 'zod/mini'
  }
}

// If you need both, Zod Mini schemas work with regular Zod
// But prefer consistency - pick one for your codebase
```

**Bundle size comparison:**

| Package | Gzipped Size | Use Case |
|---------|--------------|----------|
| `zod` (full build) | ≈5–13 kB | Full API/features |
| `zod/mini` | ≈1.9–2.1 kB | Bundle-critical frontend paths |

**When NOT to use this pattern:**
- Server-side applications (bundle size irrelevant)
- When method chaining ergonomics are preferred
- Complex schemas that benefit from full API

Reference: [Zod Mini](https://zod.dev/packages/mini)

import{bB,a2,a9,a8}from"./index-CgwAo6pj.js";import{c}from"./cytoscape.esm-DtBltrT8.js";
const Z={exports:{}};
const $={exports:{}};
const Q={exports:{}};
const ut=Q.exports;
let j;
function ft(...args) {
  if (!j) {
    j=1;

    ((G, b) => {((I, L) => {G.exports=L()})(ut, () => (N => {
      const I={};

      class L {
        constructor(o) {
            if (I[o]) {
              return I[o].exports;
            }const e=I[o]={i:o,l:false,exports:{}};
            N[o].call(e.exports,e,e.exports,L);
            e.l=true;
            return e.exports;
          }

        static i(o) {return o}
        static d(o, e, t) {
          if (!L.o(o,e)) {
            Object.defineProperty(o,e,{configurable:false,enumerable:true,get:t});
          }
        }

        static n(o) {
          const e=o&&o.__esModule?() => o.default:() => o;
          L.d(e,"a",e);
          return e;
        }

        static o(o, e) {return Object.prototype.hasOwnProperty.call(o,e)}
      }

      L.m=N;
      L.c=I;
      L.p="";
      return L(L.s=26);
    })([((N, I, L) => {
      function o(){}
      o.QUALITY=1;
      o.DEFAULT_CREATE_BENDS_AS_NEEDED=false;
      o.DEFAULT_INCREMENTAL=false;
      o.DEFAULT_ANIMATION_ON_LAYOUT=true;
      o.DEFAULT_ANIMATION_DURING_LAYOUT=false;
      o.DEFAULT_ANIMATION_PERIOD=50;
      o.DEFAULT_UNIFORM_LEAF_NODE_SIZES=false;
      o.DEFAULT_GRAPH_MARGIN=15;
      o.NODE_DIMENSIONS_INCLUDE_LABELS=false;
      o.SIMPLE_NODE_SIZE=40;
      o.SIMPLE_NODE_HALF_SIZE=o.SIMPLE_NODE_SIZE/2;
      o.EMPTY_COMPOUND_NODE_SIZE=40;
      o.MIN_EDGE_LENGTH=1;
      o.WORLD_BOUNDARY=1000000/* 1e6 */;
      o.INITIAL_WORLD_BOUNDARY=o.WORLD_BOUNDARY/1000/* 1e3 */;
      o.WORLD_CENTER_X=1200;
      o.WORLD_CENTER_Y=900;
      N.exports=o;
    }),((N, I, L) => {
      const o=L(2);
      const e=L(8);
      const t=L(9);
      function i(g,n,d){
        o.call(this,d);
        this.isOverlapingSourceAndTarget=false;
        this.vGraphObject=d;
        this.bendpoints=[];
        this.source=g;
        this.target=n;
      }i.prototype=Object.create(o.prototype);for (const l in o) {
        i[l]=o[l];
      }
      i.prototype.getSource=function(){return this.source};
      i.prototype.getTarget=function(){return this.target};
      i.prototype.isInterGraph=function(){return this.isInterGraph};
      i.prototype.getLength=function(){return this.length};
      i.prototype.isOverlapingSourceAndTarget=function(){return this.isOverlapingSourceAndTarget};
      i.prototype.getBendpoints=function(){return this.bendpoints};
      i.prototype.getLca=function(){return this.lca};
      i.prototype.getSourceInLca=function(){return this.sourceInLca};
      i.prototype.getTargetInLca=function(){return this.targetInLca};

      i.prototype.getOtherEnd=function(g){if (this.source===g) {
        return this.target;
      }if (this.target===g) {
        return this.source;
      }throw"Node is not incident with this edge"};

      i.prototype.getOtherEndInGraph=function(g,n){
        let d=this.getOtherEnd(g);
        const r=n.getGraphManager().getRoot();

        while (true) {if (d.getOwner()==n) {
          return d;
        }if (d.getOwner()==r) {
          break;
        }d=d.getOwner().getParent()}

        return null
      };

      i.prototype.updateLength=function(){
        const g=new Array(4);
        this.isOverlapingSourceAndTarget=e.getIntersection(this.target.getRect(),this.source.getRect(),g);

        if (!this.isOverlapingSourceAndTarget) {
          this.lengthX=g[0]-g[2];
          this.lengthY=g[1]-g[3];
          Math.abs(this.lengthX)<1&&(this.lengthX=t.sign(this.lengthX));
          Math.abs(this.lengthY)<1&&(this.lengthY=t.sign(this.lengthY));
          this.length=Math.sqrt(this.lengthX*this.lengthX+this.lengthY*this.lengthY);
        }
      };

      i.prototype.updateLengthSimple=function(){
        this.lengthX=this.target.getCenterX()-this.source.getCenterX();
        this.lengthY=this.target.getCenterY()-this.source.getCenterY();

        if (Math.abs(this.lengthX)<1) {
          (this.lengthX = t.sign(this.lengthX));
        }

        if (Math.abs(this.lengthY)<1) {
          (this.lengthY = t.sign(this.lengthY));
        }

        this.length=Math.sqrt(this.lengthX*this.lengthX+this.lengthY*this.lengthY);
      };

      N.exports=i;
    }),((N, I, L) => {function o(e){this.vGraphObject=e}N.exports=o}),((N, I, L) => {
      const o=L(2);
      const e=L(10);
      const t=L(13);
      const i=L(0);
      const l=L(16);
      const g=L(4);
      function n(r,h,a,p){
        if (a==null&&p==null) {
          (p = h);
        }

        o.call(this,p);

        if (r.graphManager!=null) {
          (r = r.graphManager);
        }

        this.estimatedSize=e.MIN_VALUE;
        this.inclusionTreeDepth=e.MAX_VALUE;
        this.vGraphObject=p;
        this.edges=[];
        this.graphManager=r;

        if (a!=null&&h!=null) {
          this.rect=new t(h.x,h.y,a.width,a.height);
        } else {
          this.rect=new t;
        }
      }n.prototype=Object.create(o.prototype);for (const d in o) {
        n[d]=o[d];
      }
      n.prototype.getEdges=function(){return this.edges};
      n.prototype.getChild=function(){return this.child};
      n.prototype.getOwner=function(){return this.owner};
      n.prototype.getWidth=function(){return this.rect.width};
      n.prototype.setWidth=function(r){this.rect.width=r};
      n.prototype.getHeight=function(){return this.rect.height};
      n.prototype.setHeight=function(r){this.rect.height=r};
      n.prototype.getCenterX=function(){return this.rect.x+this.rect.width/2};
      n.prototype.getCenterY=function(){return this.rect.y+this.rect.height/2};
      n.prototype.getCenter=function(){return new g(this.rect.x+this.rect.width/2,this.rect.y+this.rect.height/2)};
      n.prototype.getLocation=function(){return new g(this.rect.x,this.rect.y)};
      n.prototype.getRect=function(){return this.rect};
      n.prototype.getDiagonal=function(){return Math.sqrt(this.rect.width*this.rect.width+this.rect.height*this.rect.height)};
      n.prototype.getHalfTheDiagonal=function(){return Math.sqrt(this.rect.height*this.rect.height+this.rect.width*this.rect.width)/2};

      n.prototype.setRect=function(r,h){
        this.rect.x=r.x;
        this.rect.y=r.y;
        this.rect.width=h.width;
        this.rect.height=h.height;
      };

      n.prototype.setCenter=function(r,h){
        this.rect.x=r-this.rect.width/2;
        this.rect.y=h-this.rect.height/2;
      };

      n.prototype.setLocation=function(r,h){
        this.rect.x=r;
        this.rect.y=h;
      };

      n.prototype.moveBy=function(r,h){
        this.rect.x+=r;
        this.rect.y+=h;
      };

      n.prototype.getEdgeListToNode=function(r){
        const h=[];
        const a=this;

        a.edges.forEach(p => {if(p.target==r){if (p.source!=a) {
          throw"Incorrect edge source!";
        }h.push(p)}});

        return h;
      };

      n.prototype.getEdgesBetween=function(r){
        const h=[];
        const a=this;

        a.edges.forEach(p => {
          if (!(p.source==a||p.target==a)) {
            throw"Incorrect edge source and/or target";
          }

          if ((p.target==r || p.source==r)) {
            h.push(p);
          }
        });

        return h;
      };

      n.prototype.getNeighborsList=function(){
        const r=new Set;
        const h=this;

        h.edges.forEach(a => {if (a.source==h) {
          r.add(a.target);
        } else {if (a.target!=h) {
          throw"Incorrect incidency!";
        }r.add(a.source)}});

        return r;
      };

      n.prototype.withChildren=function(){
        const r=new Set;
        let h;
        let a;
        r.add(this);

        if (this.child!=null) {
          for (let p=this.child.getNodes(), v=0; v<p.length; v++) {
            h=p[v];
            a=h.withChildren();
            a.forEach(D => {r.add(D)});
          }
        }

        return r
      };

      n.prototype.getNoOfChildren=function(){
        let r=0;
        let h;
        if (this.child==null) {
          r=1;
        } else {
          for (let a=this.child.getNodes(), p=0; p<a.length; p++) {
            h=a[p];
            r+=h.getNoOfChildren();
          }
        }

        if (r==0) {
          (r = 1);
        }

        return r;
      };

      n.prototype.getEstimatedSize=function(){if (this.estimatedSize==e.MIN_VALUE) {
        throw"assert failed";
      }return this.estimatedSize};

      n.prototype.calcEstimatedSize=function(){return this.child==null?this.estimatedSize=(this.rect.width+this.rect.height)/2:(this.estimatedSize=this.child.calcEstimatedSize(),this.rect.width=this.estimatedSize,this.rect.height=this.estimatedSize,this.estimatedSize)};

      n.prototype.scatter=function(){
        let r;
        let h;
        const a=-i.INITIAL_WORLD_BOUNDARY;
        const p=i.INITIAL_WORLD_BOUNDARY;
        r=i.WORLD_CENTER_X+l.nextDouble()*(p-a)+a;
        const v=-i.INITIAL_WORLD_BOUNDARY;
        const D=i.INITIAL_WORLD_BOUNDARY;
        h=i.WORLD_CENTER_Y+l.nextDouble()*(D-v)+v;
        this.rect.x=r;
        this.rect.y=h;
      };

      n.prototype.updateBounds=function(){if (this.getChild()==null) {
        throw"assert failed";
      }if(this.getChild().getNodes().length!=0){
        const r=this.getChild();
        r.updateBounds(true);
        this.rect.x=r.getLeft();
        this.rect.y=r.getTop();
        this.setWidth(r.getRight()-r.getLeft());
        this.setHeight(r.getBottom()-r.getTop());

        if (i.NODE_DIMENSIONS_INCLUDE_LABELS) {
          const h=r.getRight()-r.getLeft();
          const a=r.getBottom()-r.getTop();

          if (this.labelWidth>h) {
            this.rect.x-=(this.labelWidth-h)/2;
            this.setWidth(this.labelWidth);
          }

          if (this.labelHeight>a) {
            this.labelPos=="center"?this.rect.y-=(this.labelHeight-a)/2:this.labelPos=="top"&&(this.rect.y-=this.labelHeight-a);
            this.setHeight(this.labelHeight);
          }
        }
      }};

      n.prototype.getInclusionTreeDepth=function(){if (this.inclusionTreeDepth==e.MAX_VALUE) {
        throw"assert failed";
      }return this.inclusionTreeDepth};

      n.prototype.transform=function(r){
        let h=this.rect.x;

        if (h>i.WORLD_BOUNDARY) {
          h=i.WORLD_BOUNDARY;
        } else if (h<-i.WORLD_BOUNDARY) {
          (h = -i.WORLD_BOUNDARY);
        }

        let a=this.rect.y;

        if (a>i.WORLD_BOUNDARY) {
          a=i.WORLD_BOUNDARY;
        } else if (a<-i.WORLD_BOUNDARY) {
          (a = -i.WORLD_BOUNDARY);
        }

        const p=new g(h,a);
        const v=r.inverseTransformPoint(p);
        this.setLocation(v.x,v.y)
      };

      n.prototype.getLeft=function(){return this.rect.x};
      n.prototype.getRight=function(){return this.rect.x+this.rect.width};
      n.prototype.getTop=function(){return this.rect.y};
      n.prototype.getBottom=function(){return this.rect.y+this.rect.height};
      n.prototype.getParent=function(){return this.owner==null?null:this.owner.getParent()};
      N.exports=n;
    }),((N, I, L) => {
      function o(e,t){
        if (e==null&&t==null) {
          this.x=0;
          this.y=0;
        } else {
          this.x=e;
          this.y=t;
        }
      }
      o.prototype.getX=function(){return this.x};
      o.prototype.getY=function(){return this.y};
      o.prototype.setX=function(e){this.x=e};
      o.prototype.setY=function(e){this.y=e};
      o.prototype.getDifference=function(e){return new DimensionD(this.x-e.x,this.y-e.y)};
      o.prototype.getCopy=function(){return new o(this.x,this.y)};

      o.prototype.translate=function(e){
        this.x+=e.width;
        this.y+=e.height;
        return this;
      };

      N.exports=o;
    }),((N, I, L) => {
      const o=L(2);
      const e=L(10);
      const t=L(0);
      const i=L(6);
      const l=L(3);
      const g=L(1);
      const n=L(13);
      const d=L(12);
      const r=L(11);
      function h(p,v,D){
        o.call(this,D);
        this.estimatedSize=e.MIN_VALUE;
        this.margin=t.DEFAULT_GRAPH_MARGIN;
        this.edges=[];
        this.nodes=[];
        this.isConnected=false;
        this.parent=p;

        if (v!=null&&v instanceof i) {
          this.graphManager=v;
        } else if (v!=null&&v instanceof Layout) {
          (this.graphManager = v.graphManager);
        }
      }h.prototype=Object.create(o.prototype);for (const a in o) {
        h[a]=o[a];
      }
      h.prototype.getNodes=function(){return this.nodes};
      h.prototype.getEdges=function(){return this.edges};
      h.prototype.getGraphManager=function(){return this.graphManager};
      h.prototype.getParent=function(){return this.parent};
      h.prototype.getLeft=function(){return this.left};
      h.prototype.getRight=function(){return this.right};
      h.prototype.getTop=function(){return this.top};
      h.prototype.getBottom=function(){return this.bottom};
      h.prototype.isConnected=function(){return this.isConnected};

      h.prototype.add=function(p,v,D){if(v==null&&D==null){
        const u=p;if (this.graphManager==null) {
          throw"Graph has no graph mgr!";
        }if (this.getNodes().includes(u)) {
          throw"Node already in graph!";
        }
        u.owner=this;
        this.getNodes().push(u);
        return u;
      }else{const T=p;if (!(this.getNodes().includes(v)&&this.getNodes().includes(D))) {
        throw"Source or target not in graph!";
      }if (!(v.owner==D.owner&&v.owner==this)) {
        throw"Both owners must be this graph!";
      }return v.owner!=D.owner?null:(T.source=v,T.target=D,T.isInterGraph=false,this.getEdges().push(T),v.edges.push(T),D!=v&&D.edges.push(T),T);}};

      h.prototype.remove=function(p){const v=p;if(p instanceof l){
        if (v==null) {
          throw"Node is null!";
        }if (!(v.owner!=null&&v.owner==this)) {
          throw"Owner graph is invalid!";
        }if (this.graphManager==null) {
          throw"Owner graph manager is invalid!";
        }
        const D=v.edges.slice();
        var u;
        for (let T=D.length, y=0; y<T; y++) {
          u=D[y];

          if (u.isInterGraph) {
            this.graphManager.remove(u);
          } else {
            u.source.owner.remove(u);
          }
        }var O=this.nodes.indexOf(v);if (O==-1) {
          throw"Node not in owner node list!";
        }this.nodes.splice(O,1)
      }else if(p instanceof g){
        var u=p;if (u==null) {
            throw"Edge is null!";
          }if (!(u.source!=null&&u.target!=null)) {
            throw"Source and/or target is null!";
          }if (!(u.source.owner!=null&&u.target.owner!=null&&u.source.owner==this&&u.target.owner==this)) {
            throw"Source and/or target owner is invalid!";
          }
        const s=u.source.edges.indexOf(u);
        const f=u.target.edges.indexOf(u);
        if (!(s>-1&&f>-1)) {
          throw"Source and/or target doesn't know this edge!";
        }
        u.source.edges.splice(s,1);

        if (u.target!=u.source) {
          u.target.edges.splice(f,1);
        }

        var O=u.source.owner.getEdges().indexOf(u);if (O==-1) {
            throw"Not in owner's edge list!";
          }u.source.owner.getEdges().splice(O,1)
      }};

      h.prototype.updateLeftTop=function(){
        let p=e.MAX_VALUE;
        let v=e.MAX_VALUE;
        let D;
        let u;
        let T;
        const y=this.getNodes();
        for(let O=y.length, s=0;s<O;s++){
          const f=y[s];
          D=f.getTop();
          u=f.getLeft();

          if (p>D) {
            (p = D);
          }

          if (v>u) {
            (v = u);
          }
        }return p==e.MAX_VALUE?null:(y[0].getParent().paddingLeft!=null?T=y[0].getParent().paddingLeft:T=this.margin,this.left=v-T,this.top=p-T,new d(this.left,this.top))
      };

      h.prototype.updateBounds=function(p){
        let v=e.MAX_VALUE;
        let D=-e.MAX_VALUE;
        let u=e.MAX_VALUE;
        let T=-e.MAX_VALUE;
        let y;
        let O;
        let s;
        let f;
        let c;
        const E=this.nodes;
        for(let A=E.length, m=0;m<A;m++){
          const C=E[m];

          if (p&&C.child!=null) {
            C.updateBounds();
          }

          y=C.getLeft();
          O=C.getRight();
          s=C.getTop();
          f=C.getBottom();

          if (v>y) {
            (v = y);
          }

          if (D<O) {
            (D = O);
          }

          if (u>s) {
            (u = s);
          }

          if (T<f) {
            (T = f);
          }
        }const R=new n(v,u,D-v,T-u);

        if (v==e.MAX_VALUE) {
          this.left=this.parent.getLeft();
          this.right=this.parent.getRight();
          this.top=this.parent.getTop();
          this.bottom=this.parent.getBottom();
        }

        if (E[0].getParent().paddingLeft!=null) {
          c=E[0].getParent().paddingLeft;
        } else {
          c=this.margin;
        }

        this.left=R.x-c;
        this.right=R.x+R.width+c;
        this.top=R.y-c;
        this.bottom=R.y+R.height+c;
      };

      h.calculateBounds=p => {
        let v=e.MAX_VALUE;
        let D=-e.MAX_VALUE;
        let u=e.MAX_VALUE;
        let T=-e.MAX_VALUE;
        let y;
        let O;
        let s;
        let f;
        for(let c=p.length, E=0;E<c;E++){
          const A=p[E];
          y=A.getLeft();
          O=A.getRight();
          s=A.getTop();
          f=A.getBottom();

          if (v>y) {
            (v = y);
          }

          if (D<O) {
            (D = O);
          }

          if (u>s) {
            (u = s);
          }

          if (T<f) {
            (T = f);
          }
        }const m=new n(v,u,D-v,T-u);return m
      };

      h.prototype.getInclusionTreeDepth=function(){return this==this.graphManager.getRoot()?1:this.parent.getInclusionTreeDepth()};

      h.prototype.getEstimatedSize=function(){if (this.estimatedSize==e.MIN_VALUE) {
        throw"assert failed";
      }return this.estimatedSize};

      h.prototype.calcEstimatedSize=function(){
        let p=0;
        const v=this.nodes;
        for(let D=v.length, u=0;u<D;u++){const T=v[u];p+=T.calcEstimatedSize()}

        if (p==0) {
          this.estimatedSize=t.EMPTY_COMPOUND_NODE_SIZE;
        } else {
          this.estimatedSize=p/Math.sqrt(this.nodes.length);
        }

        return this.estimatedSize;
      };

      h.prototype.updateConnected=function(){
        const p=this;if(this.nodes.length==0){this.isConnected=true;return}
        const v=new r;
        const D=new Set;
        let u=this.nodes[0];
        let T;
        let y;
        const O=u.withChildren();
        for(O.forEach(m => {
          v.push(m);
          D.add(m);
        });v.length!==0;){
          u=v.shift();
          T=u.getEdges();
          for(let s=T.length, f=0;f<s;f++){
            const c=T[f];
            y=c.getOtherEndInGraph(u,this);

            if (y!=null&&!D.has(y)) {const E=y.withChildren();E.forEach(m => {
              v.push(m);
              D.add(m);
            })}
          }
        }
        this.isConnected=false;

        if (D.size>=this.nodes.length) {
          let A=0;
          D.forEach(m => {
            if (m.owner==p) {
              A++;
            }
          });

          if (A==this.nodes.length) {
            (this.isConnected = true);
          }
        }
      };

      N.exports=h;
    }),((N, I, L) => {
      let o;
      const e=L(1);
      function t(i){
        o=L(5);
        this.layout=i;
        this.graphs=[];
        this.edges=[];
      }

      t.prototype.addRoot=function(){
        const i=this.layout.newGraph();
        const l=this.layout.newNode(null);
        const g=this.add(i,l);
        this.setRootGraph(g);
        return this.rootGraph;
      };

      t.prototype.add=function(i,l,g,n,d){if(g==null&&n==null&&d==null){
        if (i==null) {
          throw"Graph is null!";
        }if (l==null) {
          throw"Parent node is null!";
        }if (this.graphs.includes(i)) {
          throw"Graph already in this graph mgr!";
        }
        this.graphs.push(i);

        if (i.parent!=null) {
          throw"Already has a parent!";
        }

        if (l.child!=null) {
          throw"Already has a child!";
        }
        i.parent=l;
        l.child=i;
        return i;
      }else{
        d=g;
        n=l;
        g=i;
        const r=n.getOwner();
        const h=d.getOwner();
        if (!(r!=null&&r.getGraphManager()==this)) {
          throw"Source not in this graph mgr!";
        }if (!(h!=null&&h.getGraphManager()==this)) {
          throw"Target not in this graph mgr!";
        }if (r==h) {
          g.isInterGraph=false;
          return r.add(g,n,d);
        }
        g.isInterGraph=true;
        g.source=n;
        g.target=d;

        if (this.edges.includes(g)) {
          throw"Edge already in inter-graph edge list!";
        }

        this.edges.push(g);

        if (!(g.source!=null&&g.target!=null)) {
          throw"Edge source and/or target is null!";
        }

        if (!(!g.source.edges.includes(g)&&!g.target.edges.includes(g))) {
          throw"Edge already in source and/or target incidency list!";
        }
        g.source.edges.push(g);
        g.target.edges.push(g);
        return g;
      }};

      t.prototype.remove=function(i){if(i instanceof o){
        const l=i;if (l.getGraphManager()!=this) {
            throw"Graph not in this graph mgr";
          }if (!(l==this.rootGraph||l.parent!=null&&l.parent.graphManager==this)) {
            throw"Invalid parent node!";
          }let g=[];g=g.concat(l.getEdges());
        var n;
        for (var d=g.length, r=0; r<d; r++) {
          n=g[r];
          l.remove(n);
        }let h=[];h=h.concat(l.getNodes());let a;d=h.length;for (var r=0; r<d; r++) {
            a=h[r];
            l.remove(a);
          }

        if (l==this.rootGraph) {
          this.setRootGraph(null);
        }

        var p=this.graphs.indexOf(l);
        this.graphs.splice(p,1);
        l.parent=null;
      }else if(i instanceof e){
        n=i;

        if (n==null) {
          throw"Edge is null!";
        }

        if (!n.isInterGraph) {
          throw"Not an inter-graph edge!";
        }if (!(n.source!=null&&n.target!=null)) {
          throw"Source and/or target is null!";
        }if (!(n.source.edges.includes(n)&&n.target.edges.includes(n))) {
          throw"Source and/or target doesn't know this edge!";
        }var p=n.source.edges.indexOf(n);
        n.source.edges.splice(p,1);
        p=n.target.edges.indexOf(n);
        n.target.edges.splice(p,1);

        if (!(n.source.owner!=null&&n.source.owner.getGraphManager()!=null)) {
          throw"Edge owner graph or owner graph manager is null!";
        }

        if (!n.source.owner.getGraphManager().edges.includes(n)) {
          throw"Not in owner graph manager's edge list!";
        }var p=n.source.owner.getGraphManager().edges.indexOf(n);n.source.owner.getGraphManager().edges.splice(p,1)
      }};

      t.prototype.updateBounds=function(){this.rootGraph.updateBounds(true)};
      t.prototype.getGraphs=function(){return this.graphs};

      t.prototype.getAllNodes=function(){if(this.allNodes==null){
        let i=[];
        const l=this.getGraphs();
        for (let g=l.length, n=0; n<g; n++) {
          i=i.concat(l[n].getNodes());
        }this.allNodes=i
      }return this.allNodes};

      t.prototype.resetAllNodes=function(){this.allNodes=null};
      t.prototype.resetAllEdges=function(){this.allEdges=null};
      t.prototype.resetAllNodesToApplyGravitation=function(){this.allNodesToApplyGravitation=null};

      t.prototype.getAllEdges=function(){if(this.allEdges==null){
        let i=[];
        const l=this.getGraphs();
        l.length;for (let g=0; g<l.length; g++) {
          i=i.concat(l[g].getEdges());
        }
        i=i.concat(this.edges);
        this.allEdges=i;
      }return this.allEdges};

      t.prototype.getAllNodesToApplyGravitation=function(){return this.allNodesToApplyGravitation};

      t.prototype.setAllNodesToApplyGravitation=function(i){if (this.allNodesToApplyGravitation!=null) {
        throw"assert failed";
      }this.allNodesToApplyGravitation=i};

      t.prototype.getRoot=function(){return this.rootGraph};

      t.prototype.setRootGraph=function(i){
        if (i.getGraphManager()!=this) {
          throw"Root not in this graph mgr!";
        }
        this.rootGraph=i;

        if (i.parent==null) {
          (i.parent = this.layout.newNode("Root node"));
        }
      };

      t.prototype.getLayout=function(){return this.layout};

      t.prototype.isOneAncestorOfOther=(i, l) => {
        if (!(i!=null&&l!=null)) {
          throw"assert failed";
        }if (i==l) {
          return true;
        }
        let g=i.getOwner();
        let n;
        do{
          n=g.getParent();

          if (n==null) {
            break;
          }

          if (n==l) {
            return true;
          }
          g=n.getOwner();

          if (g==null) {
            break
          }
        }while(true);g=l.getOwner();do{
          n=g.getParent();

          if (n==null) {
            break;
          }

          if (n==i) {
            return true;
          }
          g=n.getOwner();

          if (g==null) {
            break
          }
        }while(true);return false;
      };

      t.prototype.calcLowestCommonAncestors=function(){
        let i;
        let l;
        let g;
        let n;
        let d;
        const r=this.getAllEdges();
        for(let h=r.length, a=0;a<h;a++){
          i=r[a];
          l=i.source;
          g=i.target;
          i.lca=null;
          i.sourceInLca=l;
          i.targetInLca=g;

          if (l==g)
            {i.lca=l.getOwner();continue}

          for(n=l.getOwner();i.lca==null;){
            i.targetInLca=g;

            for (d=g.getOwner(); i.lca==null; ) {
              if(d==n){i.lca=d;break}if (d==this.rootGraph) {
                break;
              }if (i.lca!=null) {
                throw"assert failed";
              }
              i.targetInLca=d.getParent();
              d=i.targetInLca.getOwner();
            }

            if (n==this.rootGraph) {
              break;
            }

            if (i.lca==null) {
              i.sourceInLca=n.getParent();
              n=i.sourceInLca.getOwner();
            }
          }if (i.lca==null) {
            throw"assert failed"
          }
        }
      };

      t.prototype.calcLowestCommonAncestor=(i, l) => {if (i==l) {
        return i.getOwner();
      }let g=i.getOwner();do{if (g==null) {
        break;
      }let n=l.getOwner();do{if (n==null) {
        break;
      }if (n==g) {
        return n;
      }n=n.getParent().getOwner()}while(true);g=g.getParent().getOwner()}while(true);return g};

      t.prototype.calcInclusionTreeDepths=function(i,l){
        if (i==null&&l==null) {
          i=this.rootGraph;
          l=1;
        }

        let g;
        const n=i.getNodes();
        for (let d=n.length, r=0; r<d; r++) {
          g=n[r];
          g.inclusionTreeDepth=l;

          if (g.child!=null) {
            this.calcInclusionTreeDepths(g.child,l+1);
          }
        }
      };

      t.prototype.includesInvalidEdge=function(){
        let i;
        for (let l=this.edges.length, g=0; g<l; g++) {
          i=this.edges[g];

          if (this.isOneAncestorOfOther(i.source,i.target)) {
            return true;
          }
        }return false;
      };

      N.exports=t;
    }),((N, I, L) => {
      const o=L(0);function e(){}for (const t in o) {
        e[t]=o[t];
      }
      e.MAX_ITERATIONS=2500;
      e.DEFAULT_EDGE_LENGTH=50;
      e.DEFAULT_SPRING_STRENGTH=0.45/* .45 */;
      e.DEFAULT_REPULSION_STRENGTH=4500;
      e.DEFAULT_GRAVITY_STRENGTH=0.4/* .4 */;
      e.DEFAULT_COMPOUND_GRAVITY_STRENGTH=1;
      e.DEFAULT_GRAVITY_RANGE_FACTOR=3.8;
      e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=1.5;
      e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION=true;
      e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION=true;
      e.DEFAULT_COOLING_FACTOR_INCREMENTAL=0.3/* .3 */;
      e.COOLING_ADAPTATION_FACTOR=0.33/* .33 */;
      e.ADAPTATION_LOWER_NODE_LIMIT=1000/* 1e3 */;
      e.ADAPTATION_UPPER_NODE_LIMIT=5000/* 5e3 */;
      e.MAX_NODE_DISPLACEMENT_INCREMENTAL=100;
      e.MAX_NODE_DISPLACEMENT=e.MAX_NODE_DISPLACEMENT_INCREMENTAL*3;
      e.MIN_REPULSION_DIST=e.DEFAULT_EDGE_LENGTH/10;
      e.CONVERGENCE_CHECK_PERIOD=100;
      e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=0.1/* .1 */;
      e.MIN_EDGE_LENGTH=1;
      e.GRID_CALCULATION_CHECK_PERIOD=10;
      N.exports=e;
    }),((N, I, L) => {
      const o=L(12);function e(){}

      e.calcSeparationAmount=function(t,i,l,g){
        if (!t.intersects(i)) {
          throw"assert failed";
        }const n=new Array(2);
        this.decideDirectionsForOverlappingNodes(t,i,n);
        l[0]=Math.min(t.getRight(),i.getRight())-Math.max(t.x,i.x);
        l[1]=Math.min(t.getBottom(),i.getBottom())-Math.max(t.y,i.y);

        if (t.getX()<=i.getX()&&t.getRight()>=i.getRight()) {
          l[0]+=Math.min(i.getX()-t.getX(),t.getRight()-i.getRight());
        } else if (i.getX()<=t.getX()&&i.getRight()>=t.getRight()) {
          (l[0] += Math.min(t.getX()-i.getX(),i.getRight()-t.getRight()));
        }

        if (t.getY()<=i.getY()&&t.getBottom()>=i.getBottom()) {
          l[1]+=Math.min(i.getY()-t.getY(),t.getBottom()-i.getBottom());
        } else if (i.getY()<=t.getY()&&i.getBottom()>=t.getBottom()) {
          (l[1] += Math.min(t.getY()-i.getY(),i.getBottom()-t.getBottom()));
        }

        let d=Math.abs((i.getCenterY()-t.getCenterY())/(i.getCenterX()-t.getCenterX()));

        if (i.getCenterY()===t.getCenterY()&&i.getCenterX()===t.getCenterX()) {
          (d = 1);
        }

        let r=d*l[0];
        let h=l[1]/d;

        if (l[0]<h) {
          h=l[0];
        } else {
          r=l[1];
        }

        l[0]=-1*n[0]*(h/2+g);
        l[1]=-1*n[1]*(r/2+g);
      };

      e.decideDirectionsForOverlappingNodes=(t, i, l) => {
        if (t.getCenterX()<i.getCenterX()) {
          l[0]=-1;
        } else {
          l[0]=1;
        }

        if (t.getCenterY()<i.getCenterY()) {
          l[1]=-1;
        } else {
          l[1]=1;
        }
      };

      e.getIntersection2=function(t,i,l){
        const g=t.getCenterX();
        const n=t.getCenterY();
        const d=i.getCenterX();
        const r=i.getCenterY();
        if (t.intersects(i)) {
          l[0]=g;
          l[1]=n;
          l[2]=d;
          l[3]=r;
          return true;
        }
        const h=t.getX();
        const a=t.getY();
        const p=t.getRight();
        const v=t.getX();
        const D=t.getBottom();
        const u=t.getRight();
        const T=t.getWidthHalf();
        const y=t.getHeightHalf();
        const O=i.getX();
        const s=i.getY();
        const f=i.getRight();
        const c=i.getX();
        const E=i.getBottom();
        const A=i.getRight();
        const m=i.getWidthHalf();
        const C=i.getHeightHalf();
        let R=false;
        let M=false;
        if(g===d){if (n>r) {
          l[0]=g;
          l[1]=a;
          l[2]=d;
          l[3]=E;
          return false;
        }if (n<r) {
          l[0]=g;
          l[1]=D;
          l[2]=d;
          l[3]=s;
          return false;
        }}else if(n===r){if (g>d) {
          l[0]=h;
          l[1]=n;
          l[2]=f;
          l[3]=r;
          return false;
        }if (g<d) {
          l[0]=p;
          l[1]=n;
          l[2]=O;
          l[3]=r;
          return false;
        }}else{
          const S=t.height/t.width;
          const Y=i.height/i.width;
          const w=(r-n)/(d-g);
          let x=void 0;
          let F=void 0;
          let U=void 0;
          let P=void 0;
          let _=void 0;
          let X=void 0;

          if (-S===w) {
            if (g>d) {
              l[0]=v;
              l[1]=D;
              R=true;
            } else {
              l[0]=p;
              l[1]=a;
              R=true;
            }
          } else if (S===w) {
            if (g>d) {
              l[0]=h;
              l[1]=a;
              R=true;
            } else {
              l[0]=u;
              l[1]=D;
              R=true;
            }
          }

          if (-Y===w) {
            if (d>g) {
              l[2]=c;
              l[3]=E;
              M=true;
            } else {
              l[2]=f;
              l[3]=s;
              M=true;
            }
          } else if (Y===w) {
            if (d>g) {
              l[2]=O;
              l[3]=s;
              M=true;
            } else {
              l[2]=A;
              l[3]=E;
              M=true;
            }
          }

          if (R&&M) {
            return false;
          }

          if (g>d) {
            if (n>r) {
              x=this.getCardinalDirection(S,w,4);
              F=this.getCardinalDirection(Y,w,2);
            } else {
              x=this.getCardinalDirection(-S,w,3);
              F=this.getCardinalDirection(-Y,w,1);
            }
          } else if (n>r) {
            x=this.getCardinalDirection(-S,w,1);
            F=this.getCardinalDirection(-Y,w,3);
          } else {
            x=this.getCardinalDirection(S,w,2);
            F=this.getCardinalDirection(Y,w,4);
          }

          if (!R) {
            switch(x){case 1:
              {
                P=a;
                U=g+-y/w;
                l[0]=U;
                l[1]=P;
                break;
              }case 2:
              {
                U=u;
                P=n+T*w;
                l[0]=U;
                l[1]=P;
                break;
              }case 3:
              {
                P=D;
                U=g+y/w;
                l[0]=U;
                l[1]=P;
                break;
              }case 4:
              {
                U=v;
                P=n+-T*w;
                l[0]=U;
                l[1]=P;
                break
              }}
          }

          if (!M) {
            switch(F){case 1:
              {
                X=s;
                _=d+-C/w;
                l[2]=_;
                l[3]=X;
                break;
              }case 2:
              {
                _=A;
                X=r+m*w;
                l[2]=_;
                l[3]=X;
                break;
              }case 3:
              {
                X=E;
                _=d+C/w;
                l[2]=_;
                l[3]=X;
                break;
              }case 4:
              {
                _=c;
                X=r+-m*w;
                l[2]=_;
                l[3]=X;
                break
              }}
          }
        }return false;
      };

      e.getCardinalDirection=(t, i, l) => t>i?l:1+l%4;

      e.getIntersection=function(t,i,l,g){
        if (g==null) {
          return this.getIntersection2(t,i,l);
        }
        const n=t.x;
        const d=t.y;
        const r=i.x;
        const h=i.y;
        const a=l.x;
        const p=l.y;
        const v=g.x;
        const D=g.y;
        let u=void 0;
        let T=void 0;
        let y=void 0;
        let O=void 0;
        let s=void 0;
        let f=void 0;
        let c=void 0;
        let E=void 0;
        let A=void 0;
        y=h-d;
        s=n-r;
        c=r*d-n*h;
        O=D-p;
        f=a-v;
        E=v*p-a*D;
        A=y*f-O*s;
        return A===0?null:(u=(s*E-f*c)/A,T=(O*c-y*E)/A,new o(u,T));
      };

      e.angleOfVector=function(t,i,l,g){
        let n=void 0;

        if (t!==l) {
          n=Math.atan((g-i)/(l-t));
          l<t?n+=Math.PI:g<i&&(n+=this.TWO_PI);
        } else if (g<i) {
          n=this.ONE_AND_HALF_PI;
        } else {
          n=this.HALF_PI;
        }

        return n;
      };

      e.doIntersect=(t, i, l, g) => {
        const n=t.x;
        const d=t.y;
        const r=i.x;
        const h=i.y;
        const a=l.x;
        const p=l.y;
        const v=g.x;
        const D=g.y;
        const u=(r-n)*(D-p)-(v-a)*(h-d);
        if (u===0) {
          return false;
        }
        const T=((D-p)*(v-n)+(a-v)*(D-d))/u;
        const y=((d-h)*(v-n)+(r-n)*(D-d))/u;
        return T > 0&&T<1&&y > 0&&y<1;
      };

      e.HALF_PI=0.5/* .5 */*Math.PI;
      e.ONE_AND_HALF_PI=1.5*Math.PI;
      e.TWO_PI=2*Math.PI;
      e.THREE_PI=3*Math.PI;
      N.exports=e;
    }),((N, I, L) => {
      function o(){}
      o.sign=e => e>0?1:e<0?-1:0;
      o.floor=e => e<0?Math.ceil(e):Math.floor(e);
      o.ceil=e => e<0?Math.floor(e):Math.ceil(e);
      N.exports=o;
    }),((N, I, L) => {
      function o(){}
      o.MAX_VALUE=2147483647;
      o.MIN_VALUE=-2147483648;
      N.exports=o;
    }),((N, I, L) => {
      const o = (() => {function n(d,r){
        for (const a of r) {
          a.enumerable=a.enumerable||false;
          a.configurable=true;

          if ("value"in a) {
            (a.writable = true);
          }

          Object.defineProperty(d,a.key,a);
        }
      }return (d, r, h) => {
        if (r) {
          n(d.prototype,r);
        }

        if (h) {
          n(d,h);
        }

        return d;
      };})();function e(n,d){if (!(n instanceof d)) {
        throw new TypeError("Cannot call a class as a function")
      }}
      const t=d => ({
        value:d,
        next:null,
        prev:null
      });

      const i=(d, r, h, a) => {
        if (d!==null) {
          d.next=r;
        } else {
          a.head=r;
        }

        if (h!==null) {
          h.prev=r;
        } else {
          a.tail=r;
        }

        r.prev=d;
        r.next=h;
        a.length++;
        return r;
      };

      const l=(d, r) => {
        const h=d.prev;
        const a=d.next;

        if (h!==null) {
          h.next=a;
        } else {
          r.head=a;
        }

        if (a!==null) {
          a.prev=h;
        } else {
          r.tail=h;
        }

        d.prev = null;
        d.next = null;
        r.length--;
        return d;
      };

      const g = (() => {
        function n(d){
          const r=this;
          e(this,n);
          this.length=0;
          this.head=null;
          this.tail=null;
          d?.forEach(h => r.push(h));
        }

        o(n,[{key:"size",value() {return this.length}},{key:"insertBefore",value(r, h) {return i(h.prev,t(r),h,this)}},{key:"insertAfter",value(r, h) {return i(h,t(r),h.next,this)}},{key:"insertNodeBefore",value(r, h) {return i(h.prev,r,h,this)}},{key:"insertNodeAfter",value(r, h) {return i(h,r,h.next,this)}},{key:"push",value(r) {return i(this.tail,t(r),null,this)}},{key:"unshift",value(r) {return i(null,t(r),this.head,this)}},{key:"remove",value(r) {return l(r,this)}},{key:"pop",value() {return l(this.tail,this).value}},{key:"popNode",value() {return l(this.tail,this)}},{key:"shift",value() {return l(this.head,this).value}},{key:"shiftNode",value() {return l(this.head,this)}},{key:"get_object_at",value(r) {if(r<=this.length()){
          let a=this.head;
          for (let h=1; h<r; ) {
            a=a.next;
            h++;
          }return a.value
        }}},{key:"set_object_at",value(r, h) {if(r<=this.length()){
          let p=this.head;
          for (let a=1; a<r; ) {
            p=p.next;
            a++;
          }p.value=h
        }}}]);

        return n;
      })();

      N.exports=g
    }),((N, I, L) => {
      function o(e,t,i){
        this.x=null;
        this.y=null;

        if (e==null&&t==null&&i==null) {
          this.x=0;
          this.y=0;
        } else if (typeof e=="number"&&typeof t=="number"&&i==null) {
          this.x=e;
          this.y=t;
        } else if (e.constructor.name=="Point"&&t==null&&i==null) {
          i=e;
          this.x=i.x;
          this.y=i.y;
        }
      }
      o.prototype.getX=function(){return this.x};
      o.prototype.getY=function(){return this.y};
      o.prototype.getLocation=function(){return new o(this.x,this.y)};
      o.prototype.setLocation=function(e,t,i){
        if (e.constructor.name=="Point"&&t==null&&i==null) {
          i=e;
          this.setLocation(i.x,i.y);
        } else if (typeof e=="number"&&typeof t=="number"&&i==null) {
          if (parseInt(e)==e&&parseInt(t)==t) {
            this.move(e,t);
          } else {
            this.x=Math.floor(e+0.5/* .5 */);
            this.y=Math.floor(t+0.5/* .5 */);
          }
        }
      };

      o.prototype.move=function(e,t){
        this.x=e;
        this.y=t;
      };

      o.prototype.translate=function(e,t){
        this.x+=e;
        this.y+=t;
      };

      o.prototype.equals=function(e){if(e.constructor.name=="Point"){const t=e;return this.x==t.x&&this.y==t.y}return this==e};
      o.prototype.toString=function(){return `${new o().constructor.name}[x=${this.x},y=${this.y}]`;};
      N.exports=o;
    }),((N, I, L) => {
      function o(e,t,i,l){
        this.x=0;
        this.y=0;
        this.width=0;
        this.height=0;

        if (e!=null&&t!=null&&i!=null&&l!=null) {
          this.x=e;
          this.y=t;
          this.width=i;
          this.height=l;
        }
      }
      o.prototype.getX=function(){return this.x};
      o.prototype.setX=function(e){this.x=e};
      o.prototype.getY=function(){return this.y};
      o.prototype.setY=function(e){this.y=e};
      o.prototype.getWidth=function(){return this.width};
      o.prototype.setWidth=function(e){this.width=e};
      o.prototype.getHeight=function(){return this.height};
      o.prototype.setHeight=function(e){this.height=e};
      o.prototype.getRight=function(){return this.x+this.width};
      o.prototype.getBottom=function(){return this.y+this.height};
      o.prototype.intersects=function(e){return!(this.getRight()<e.x||this.getBottom()<e.y||e.getRight()<this.x||e.getBottom()<this.y)};
      o.prototype.getCenterX=function(){return this.x+this.width/2};
      o.prototype.getMinX=function(){return this.getX()};
      o.prototype.getMaxX=function(){return this.getX()+this.width};
      o.prototype.getCenterY=function(){return this.y+this.height/2};
      o.prototype.getMinY=function(){return this.getY()};
      o.prototype.getMaxY=function(){return this.getY()+this.height};
      o.prototype.getWidthHalf=function(){return this.width/2};
      o.prototype.getHeightHalf=function(){return this.height/2};
      N.exports=o;
    }),((N, I, L) => {
      const o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t => typeof t:t => t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;function e(){}
      e.lastID=0;
      e.createID=t => e.isPrimitive(t)?t:(t.uniqueID!=null||(t.uniqueID=e.getString(),e.lastID++),t.uniqueID);

      e.getString=t => {
        if (t==null) {
          (t = e.lastID);
        }

        return `Object#${t}`;
      };

      e.isPrimitive=t => {const i=typeof t === "undefined"?"undefined":o(t);return t==null||i!="object"&&i!="function"};
      N.exports=e;
    }),((N, I, L) => {
      function o(a){if (Array.isArray(a)) {
        const v=Array(a.length);
        for (let p=0; p<a.length; p++) {
          v[p]=a[p];
        }return v
      } else {
        return Array.from(a)
      }}
      const e=L(0);
      const t=L(6);
      const i=L(3);
      const l=L(1);
      const g=L(5);
      const n=L(4);
      const d=L(17);
      const r=L(27);
      function h(a){
        r.call(this);
        this.layoutQuality=e.QUALITY;
        this.createBendsAsNeeded=e.DEFAULT_CREATE_BENDS_AS_NEEDED;
        this.incremental=e.DEFAULT_INCREMENTAL;
        this.animationOnLayout=e.DEFAULT_ANIMATION_ON_LAYOUT;
        this.animationDuringLayout=e.DEFAULT_ANIMATION_DURING_LAYOUT;
        this.animationPeriod=e.DEFAULT_ANIMATION_PERIOD;
        this.uniformLeafNodeSizes=e.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
        this.edgeToDummyNodes=new Map;
        this.graphManager=new t(this);
        this.isLayoutFinished=false;
        this.isSubLayout=false;
        this.isRemoteUse=false;

        if (a!=null) {
          (this.isRemoteUse = a);
        }
      }
      h.RANDOM_SEED=1;
      h.prototype=Object.create(r.prototype);
      h.prototype.getGraphManager=function(){return this.graphManager};
      h.prototype.getAllNodes=function(){return this.graphManager.getAllNodes()};
      h.prototype.getAllEdges=function(){return this.graphManager.getAllEdges()};
      h.prototype.getAllNodesToApplyGravitation=function(){return this.graphManager.getAllNodesToApplyGravitation()};

      h.prototype.newGraphManager=function(){
        const a=new t(this);
        this.graphManager=a;
        return a;
      };

      h.prototype.newGraph=function(a){return new g(null,this.graphManager,a)};
      h.prototype.newNode=function(a){return new i(this.graphManager,a)};
      h.prototype.newEdge=a => new l(null,null,a);
      h.prototype.checkLayoutSuccess=function(){return this.graphManager.getRoot()==null||this.graphManager.getRoot().getNodes().length==0||this.graphManager.includesInvalidEdge()};

      h.prototype.runLayout=function(){
        this.isLayoutFinished=false;

        if (this.tilingPreLayout) {
          this.tilingPreLayout();
        }

        this.initParameters();
        let a;

        if (this.checkLayoutSuccess()) {
          a=false;
        } else {
          a=this.layout();
        }

        return e.ANIMATE==="during"?false:(a&&(this.isSubLayout||this.doPostLayout()),this.tilingPostLayout&&this.tilingPostLayout(),this.isLayoutFinished=true,a);
      };

      h.prototype.doPostLayout=function(){
        if (!this.incremental) {
          this.transform();
        }

        this.update();
      };

      h.prototype.update2=function(){
        if (this.createBendsAsNeeded) {
          this.createBendpointsFromDummyNodes();
          this.graphManager.resetAllEdges();
        }

        if (!this.isRemoteUse) {for (var a=this.graphManager.getAllEdges(),p=0; p<a.length; p++) {
          a[p];
        }for (var v=this.graphManager.getRoot().getNodes(),p=0; p<v.length; p++) {
          v[p];
        }this.update(this.graphManager.getRoot())}
      };

      h.prototype.update=function(a){if (a==null) {
        this.update2();
      } else if(a instanceof i){const p=a;if (p.getChild()!=null) {
        for (let v=p.getChild().getNodes(), D=0; D<v.length; D++) {
          update(v[D]);
        }
      }if(p.vGraphObject!=null){const u=p.vGraphObject;u.update(p)}}else if(a instanceof l){const T=a;if(T.vGraphObject!=null){const y=T.vGraphObject;y.update(T)}}else if(a instanceof g){const O=a;if(O.vGraphObject!=null){const s=O.vGraphObject;s.update(O)}}};

      h.prototype.initParameters=function(){
        if (!this.isSubLayout) {
          this.layoutQuality=e.QUALITY;
          this.animationDuringLayout=e.DEFAULT_ANIMATION_DURING_LAYOUT;
          this.animationPeriod=e.DEFAULT_ANIMATION_PERIOD;
          this.animationOnLayout=e.DEFAULT_ANIMATION_ON_LAYOUT;
          this.incremental=e.DEFAULT_INCREMENTAL;
          this.createBendsAsNeeded=e.DEFAULT_CREATE_BENDS_AS_NEEDED;
          this.uniformLeafNodeSizes=e.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
        }

        if (this.animationDuringLayout) {
          (this.animationOnLayout = false);
        }
      };

      h.prototype.transform=function(a){if (a==null) {
        this.transform(new n(0,0));
      } else {
        const p=new d;
        const v=this.graphManager.getRoot().updateLeftTop();
        if(v!=null){
          p.setWorldOrgX(a.x);
          p.setWorldOrgY(a.y);
          p.setDeviceOrgX(v.x);
          p.setDeviceOrgY(v.y);
          let u;
          for (let D=this.getAllNodes(), T=0; T<D.length; T++) {
            u=D[T];
            u.transform(p);
          }
        }
      }};

      h.prototype.positionNodesRandomly=function(a){if (a==null) {
        this.positionNodesRandomly(this.getGraphManager().getRoot());
        this.getGraphManager().getRoot().updateBounds(true);
      } else {
        let p;
        let v;
        for (let D=a.getNodes(), u=0; u<D.length; u++) {
          p=D[u];
          v=p.getChild();

          if (v==null||v.getNodes().length==0) {
            p.scatter();
          } else {
            this.positionNodesRandomly(v);
            p.updateBounds();
          }
        }
      }};

      h.prototype.getFlatForest=function(){
        let a=[];
        let p=true;
        let D=true;
        for (var v=this.graphManager.getRoot().getNodes(), u=0; u<v.length; u++) {
          if (v[u].getChild()!=null) {
            (D = false);
          }
        }if (!D) {
          return a;
        }
        let T=new Set;
        const y=[];
        let O=new Map;
        let s=[];
        for(s=s.concat(v);s.length>0&&p;){for(y.push(s[0]);y.length>0&&p;){
          const f=y[0];
          y.splice(0,1);
          T.add(f);
          for(var c=f.getEdges(),u=0;u<c.length;u++){const E=c[u].getOtherEnd(f);if (O.get(f)!=E) {
            if (!T.has(E)) {
              y.push(E);
              O.set(E,f);
            } else
              {p=false;break}
          }}
        }if (!p) {
          a=[];
        } else {
          const A=[].concat(o(T));a.push(A);for(var u=0;u<A.length;u++){
          const m=A[u];
          const C=s.indexOf(m);

          if (C>-1) {
            s.splice(C,1);
          }
        }
          T=new Set;
          O=new Map;
        }}return a
      };

      h.prototype.createDummyNodesForBendpoints=function(a){
        const p=[];
        let v=a.source;
        const D=this.graphManager.calcLowestCommonAncestor(a.source,a.target);
        for(let u=0;u<a.bendpoints.length;u++){
          const T=this.newNode(null);
          T.setRect(new Point(0,0),new Dimension(1,1));
          D.add(T);
          var y=this.newEdge(null);
          this.graphManager.add(y,v,T);
          p.add(T);
          v=T;
        }var y=this.newEdge(null);
        this.graphManager.add(y,v,a.target);
        this.edgeToDummyNodes.set(a,p);

        if (a.isInterGraph()) {
          this.graphManager.remove(a);
        } else {
          D.remove(a);
        }

        return p;
      };

      h.prototype.createBendpointsFromDummyNodes=function(){
        let a=[];
        a=a.concat(this.graphManager.getAllEdges());
        a=[].concat(o(this.edgeToDummyNodes.keys())).concat(a);

        for (const v of a) {
          if(v.bendpoints.length>0){for(let D=this.edgeToDummyNodes.get(v), u=0;u<D.length;u++){
            const T=D[u];
            const y=new n(T.getCenterX(),T.getCenterY());
            const O=v.bendpoints.get(u);
            O.x=y.x;
            O.y=y.y;
            T.getOwner().remove(T);
          }this.graphManager.add(v,v.source,v.target)}
        }
      };

      h.transform=(a, p, v, D) => {if(v!=null&&D!=null){let u=p;if(a<=50){const T=p/v;u-=(p-T)/50*(50-a)}else{const y=p*D;u+=(y-p)/50*(a-50)}return u}else{
        let O;
        let s;

        if (a<=50) {
          O=9*p/500;
          s=p/10;
        } else {
          O=9*p/50;
          s=-8*p;
        }

        return O*a+s;
      }};

      h.findCenterOfTree=a => {
        let p=[];p=p.concat(a);
        let v=[];
        const D=new Map;
        let u=false;
        let T=null;

        if ((p.length==1 || p.length==2)) {
          u=true;
          T=p[0];
        }

        for(var y=0;y<p.length;y++){
          var O=p[y];
          const s=O.getNeighborsList().size;
          D.set(O,O.getNeighborsList().size);

          if (s==1) {
            v.push(O);
          }
        }let f=[];for(f=f.concat(v);!u;){
          let c=[];
          c=c.concat(f);
          f=[];
          for(var y=0;y<p.length;y++){
            var O=p[y];
            const E=p.indexOf(O);

            if (E>=0) {
              p.splice(E,1);
            }

            const A=O.getNeighborsList();A.forEach(R => {if(!v.includes(R)){
              const M=D.get(R);
              const S=M-1;

              if (S==1) {
                f.push(R);
              }

              D.set(R,S);
            }})
          }
          v=v.concat(f);

          if ((p.length==1 || p.length==2)) {
            u=true;
            T=p[0];
          }
        }return T
      };

      h.prototype.setGraphManager=function(a){this.graphManager=a};
      N.exports=h;
    }),((N, I, L) => {
      function o(){}
      o.seed=1;
      o.x=0;

      o.nextDouble=() => {
        o.x=Math.sin(o.seed++)*10000/* 1e4 */;
        return o.x-Math.floor(o.x);
      };

      N.exports=o;
    }),((N, I, L) => {
      const o=L(4);function e(t,i){
        this.lworldOrgX=0;
        this.lworldOrgY=0;
        this.ldeviceOrgX=0;
        this.ldeviceOrgY=0;
        this.lworldExtX=1;
        this.lworldExtY=1;
        this.ldeviceExtX=1;
        this.ldeviceExtY=1;
      }
      e.prototype.getWorldOrgX=function(){return this.lworldOrgX};
      e.prototype.setWorldOrgX=function(t){this.lworldOrgX=t};
      e.prototype.getWorldOrgY=function(){return this.lworldOrgY};
      e.prototype.setWorldOrgY=function(t){this.lworldOrgY=t};
      e.prototype.getWorldExtX=function(){return this.lworldExtX};
      e.prototype.setWorldExtX=function(t){this.lworldExtX=t};
      e.prototype.getWorldExtY=function(){return this.lworldExtY};
      e.prototype.setWorldExtY=function(t){this.lworldExtY=t};
      e.prototype.getDeviceOrgX=function(){return this.ldeviceOrgX};
      e.prototype.setDeviceOrgX=function(t){this.ldeviceOrgX=t};
      e.prototype.getDeviceOrgY=function(){return this.ldeviceOrgY};
      e.prototype.setDeviceOrgY=function(t){this.ldeviceOrgY=t};
      e.prototype.getDeviceExtX=function(){return this.ldeviceExtX};
      e.prototype.setDeviceExtX=function(t){this.ldeviceExtX=t};
      e.prototype.getDeviceExtY=function(){return this.ldeviceExtY};
      e.prototype.setDeviceExtY=function(t){this.ldeviceExtY=t};

      e.prototype.transformX=function(t){
        let i=0;
        const l=this.lworldExtX;

        if (l!=0) {
          (i = this.ldeviceOrgX+(t-this.lworldOrgX)*this.ldeviceExtX/l);
        }

        return i;
      };

      e.prototype.transformY=function(t){
        let i=0;
        const l=this.lworldExtY;

        if (l!=0) {
          (i = this.ldeviceOrgY+(t-this.lworldOrgY)*this.ldeviceExtY/l);
        }

        return i;
      };

      e.prototype.inverseTransformX=function(t){
        let i=0;
        const l=this.ldeviceExtX;

        if (l!=0) {
          (i = this.lworldOrgX+(t-this.ldeviceOrgX)*this.lworldExtX/l);
        }

        return i;
      };

      e.prototype.inverseTransformY=function(t){
        let i=0;
        const l=this.ldeviceExtY;

        if (l!=0) {
          (i = this.lworldOrgY+(t-this.ldeviceOrgY)*this.lworldExtY/l);
        }

        return i;
      };

      e.prototype.inverseTransformPoint=function(t){const i=new o(this.inverseTransformX(t.x),this.inverseTransformY(t.y));return i};
      N.exports=e;
    }),((N, I, L) => {
      function o(r){if (Array.isArray(r)) {
        const a=Array(r.length);
        for (let h=0; h<r.length; h++) {
          a[h]=r[h];
        }return a
      } else {
        return Array.from(r)
      }}
      const e=L(15);
      const t=L(7);
      const i=L(0);
      const l=L(8);
      const g=L(9);

      class n extends e {
        constructor() {
          super();
          this.useSmartIdealEdgeLengthCalculation=t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
          this.idealEdgeLength=t.DEFAULT_EDGE_LENGTH;
          this.springConstant=t.DEFAULT_SPRING_STRENGTH;
          this.repulsionConstant=t.DEFAULT_REPULSION_STRENGTH;
          this.gravityConstant=t.DEFAULT_GRAVITY_STRENGTH;
          this.compoundGravityConstant=t.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
          this.gravityRangeFactor=t.DEFAULT_GRAVITY_RANGE_FACTOR;
          this.compoundGravityRangeFactor=t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
          this.displacementThresholdPerNode=3*t.DEFAULT_EDGE_LENGTH/100;
          this.coolingFactor=t.DEFAULT_COOLING_FACTOR_INCREMENTAL;
          this.initialCoolingFactor=t.DEFAULT_COOLING_FACTOR_INCREMENTAL;
          this.totalDisplacement=0;
          this.oldTotalDisplacement=0;
          this.maxIterations=t.MAX_ITERATIONS;
        }

        initParameters() {
          super.initParameters(args);
          this.totalIterations=0;
          this.notAnimatedIterations=0;
          this.useFRGridVariant=t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;
          this.grid=[];
        }

        calcIdealEdgeLengths() {
          let r;
          let h;
          let a;
          let p;
          let v;
          let D;
          for (let u=this.getGraphManager().getAllEdges(), T=0; T<u.length; T++) {
            r=u[T];
            r.idealLength=this.idealEdgeLength;

            if (r.isInterGraph) {
              a=r.getSource();
              p=r.getTarget();
              v=r.getSourceInLca().getEstimatedSize();
              D=r.getTargetInLca().getEstimatedSize();
              this.useSmartIdealEdgeLengthCalculation&&(r.idealLength+=v+D-2*i.SIMPLE_NODE_SIZE);
              h=r.getLca().getInclusionTreeDepth();
              r.idealLength+=t.DEFAULT_EDGE_LENGTH*t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR*(a.getInclusionTreeDepth()+p.getInclusionTreeDepth()-2*h);
            }
          }
        }

        initSpringEmbedder() {
          const r=this.getAllNodes().length;

          if (this.incremental) {
            r>t.ADAPTATION_LOWER_NODE_LIMIT&&(this.coolingFactor=Math.max(this.coolingFactor*t.COOLING_ADAPTATION_FACTOR,this.coolingFactor-(r-t.ADAPTATION_LOWER_NODE_LIMIT)/(t.ADAPTATION_UPPER_NODE_LIMIT-t.ADAPTATION_LOWER_NODE_LIMIT)*this.coolingFactor*(1-t.COOLING_ADAPTATION_FACTOR)));
            this.maxNodeDisplacement=t.MAX_NODE_DISPLACEMENT_INCREMENTAL;
          } else {
            r>t.ADAPTATION_LOWER_NODE_LIMIT?this.coolingFactor=Math.max(t.COOLING_ADAPTATION_FACTOR,1-(r-t.ADAPTATION_LOWER_NODE_LIMIT)/(t.ADAPTATION_UPPER_NODE_LIMIT-t.ADAPTATION_LOWER_NODE_LIMIT)*(1-t.COOLING_ADAPTATION_FACTOR)):this.coolingFactor=1;
            this.initialCoolingFactor=this.coolingFactor;
            this.maxNodeDisplacement=t.MAX_NODE_DISPLACEMENT;
          }

          this.maxIterations=Math.max(this.getAllNodes().length*5,this.maxIterations);
          this.totalDisplacementThreshold=this.displacementThresholdPerNode*this.getAllNodes().length;
          this.repulsionRange=this.calcRepulsionRange();
        }

        calcSpringForces() {
          let h;
          for (let r=this.getAllEdges(), a=0; a<r.length; a++) {
            h=r[a];
            this.calcSpringForce(h,h.idealLength);
          }
        }

        calcRepulsionForces(r = true, h = false) {
          let a;
          let p;
          let v;
          let D;
          const u=this.getAllNodes();
          let T;
          if (this.useFRGridVariant) {
            if (this.totalIterations%t.GRID_CALCULATION_CHECK_PERIOD==1&&r) {
              this.updateGrid();
            }

            T=new Set;

            for (a=0; a<u.length; a++) {
              v=u[a];
              this.calculateRepulsionForceOfANode(v,T,r,h);
              T.add(v);
            }
          } else {
            for (a=0; a<u.length; a++) {
              v=u[a];

              for (p=a+1; p<u.length; p++) {
                D=u[p];

                if (v.getOwner()==D.getOwner()) {
                  this.calcRepulsionForce(v,D);
                }
              }
            }
          }
        }

        calcGravitationalForces() {
          let r;
          for (let h=this.getAllNodesToApplyGravitation(), a=0; a<h.length; a++) {
            r=h[a];
            this.calcGravitationalForce(r);
          }
        }

        moveNodes() {
          let h;
          for (let r=this.getAllNodes(), a=0; a<r.length; a++) {
            h=r[a];
            h.move();
          }
        }

        calcSpringForce(r, h) {
          const a=r.getSource();
          const p=r.getTarget();
          let v;
          let D;
          let u;
          let T;
          if (this.uniformLeafNodeSizes&&a.getChild()==null&&p.getChild()==null) {
            r.updateLengthSimple();
          } else {
            r.updateLength();

            if (r.isOverlapingSourceAndTarget) {
              return;
            }
          }
          v=r.getLength();

          if (v!=0) {
            D=this.springConstant*(v-h);
            u=D*(r.lengthX/v);
            T=D*(r.lengthY/v);
            a.springForceX+=u;
            a.springForceY+=T;
            p.springForceX-=u;
            p.springForceY-=T;
          }
        }

        calcRepulsionForce(r, h) {
          const a=r.getRect();
          const p=h.getRect();
          const v=new Array(2);
          const D=new Array(4);
          let u;
          let T;
          let y;
          let O;
          let s;
          let f;
          let c;
          if (a.intersects(p)) {
            l.calcSeparationAmount(a,p,v,t.DEFAULT_EDGE_LENGTH/2);
            f=2*v[0];
            c=2*v[1];
            const E=r.noOfChildren*h.noOfChildren/(r.noOfChildren+h.noOfChildren);
            r.repulsionForceX-=E*f;
            r.repulsionForceY-=E*c;
            h.repulsionForceX+=E*f;
            h.repulsionForceY+=E*c;
          } else {
            if (this.uniformLeafNodeSizes&&r.getChild()==null&&h.getChild()==null) {
              u=p.getCenterX()-a.getCenterX();
              T=p.getCenterY()-a.getCenterY();
            } else {
              l.getIntersection(a,p,D);
              u=D[2]-D[0];
              T=D[3]-D[1];
            }

            if (Math.abs(u)<t.MIN_REPULSION_DIST) {
              (u = g.sign(u)*t.MIN_REPULSION_DIST);
            }

            if (Math.abs(T)<t.MIN_REPULSION_DIST) {
              (T = g.sign(T)*t.MIN_REPULSION_DIST);
            }

            y=u*u+T*T;
            O=Math.sqrt(y);
            s=this.repulsionConstant*r.noOfChildren*h.noOfChildren/y;
            f=s*u/O;
            c=s*T/O;
            r.repulsionForceX-=f;
            r.repulsionForceY-=c;
            h.repulsionForceX+=f;
            h.repulsionForceY+=c;
          }
        }

        calcGravitationalForce(r) {
          let h;
          let a;
          let p;
          let v;
          let D;
          let u;
          let T;
          let y;
          h=r.getOwner();
          a=(h.getRight()+h.getLeft())/2;
          p=(h.getTop()+h.getBottom())/2;
          v=r.getCenterX()-a;
          D=r.getCenterY()-p;
          u=Math.abs(v)+r.getWidth()/2;
          T=Math.abs(D)+r.getHeight()/2;

          if (r.getOwner()==this.graphManager.getRoot()) {
            y=h.getEstimatedSize()*this.gravityRangeFactor;
            (u>y||T>y)&&(r.gravitationForceX=-this.gravityConstant*v,r.gravitationForceY=-this.gravityConstant*D);
          } else {
            y=h.getEstimatedSize()*this.compoundGravityRangeFactor;
            (u>y||T>y)&&(r.gravitationForceX=-this.gravityConstant*v*this.compoundGravityConstant,r.gravitationForceY=-this.gravityConstant*D*this.compoundGravityConstant);
          }
        }

        isConverged() {
          let r;
          let h=false;

          if (this.totalIterations>this.maxIterations/3) {
            (h = Math.abs(this.totalDisplacement-this.oldTotalDisplacement)<2);
          }

          r=this.totalDisplacement<this.totalDisplacementThreshold;
          this.oldTotalDisplacement=this.totalDisplacement;
          return r||h;
        }

        animate() {
          if (this.animationDuringLayout&&!this.isSubLayout) {
            if (this.notAnimatedIterations==this.animationPeriod) {
              this.update();
              this.notAnimatedIterations=0;
            } else {
              this.notAnimatedIterations++;
            }
          }
        }

        calcNoOfChildrenForAllNodes() {
          let r;
          for (let h=this.graphManager.getAllNodes(), a=0; a<h.length; a++) {
            r=h[a];
            r.noOfChildren=r.getNoOfChildren();
          }
        }

        calcGrid(r) {
          let h=0;
          let a=0;
          h=parseInt(Math.ceil((r.getRight()-r.getLeft())/this.repulsionRange));
          a=parseInt(Math.ceil((r.getBottom()-r.getTop())/this.repulsionRange));
          const p=new Array(h);
          for (var v=0; v<h; v++) {
            p[v]=new Array(a);
          }for (var v=0; v<h; v++) {
            for (let D=0; D<a; D++) {
              p[v][D]=new Array;
            }
          }return p
        }

        addNodeToGrid(r, h, a) {
          let p=0;
          let v=0;
          let D=0;
          let u=0;
          p=parseInt(Math.floor((r.getRect().x-h)/this.repulsionRange));
          v=parseInt(Math.floor((r.getRect().width+r.getRect().x-h)/this.repulsionRange));
          D=parseInt(Math.floor((r.getRect().y-a)/this.repulsionRange));
          u=parseInt(Math.floor((r.getRect().height+r.getRect().y-a)/this.repulsionRange));
          for (let T=p; T<=v; T++) {
            for (let y=D; y<=u; y++) {
              this.grid[T][y].push(r);
              r.setGridCoordinates(p,v,D,u);
            }
          }
        }

        updateGrid() {
          let r;
          let h;
          const a=this.getAllNodes();
          this.grid=this.calcGrid(this.graphManager.getRoot());

          for (r=0; r<a.length; r++) {
            h=a[r];
            this.addNodeToGrid(h,this.graphManager.getRoot().getLeft(),this.graphManager.getRoot().getTop());
          }
        }

        calculateRepulsionForceOfANode(r, h, a, p) {if(this.totalIterations%t.GRID_CALCULATION_CHECK_PERIOD==1&&a||p){
          const v=new Set;r.surrounding=new Array;
          let D;
          const u=this.grid;
          for (var T=r.startX-1; T<r.finishX+2; T++) {
            for (let y=r.startY-1; y<r.finishY+2; y++) {
              if(!(T<0||y<0||T>=u.length||y>=u[0].length)){for (let O=0; O<u[T][y].length; O++) {
                D=u[T][y][O];

                if (!(r.getOwner()!=D.getOwner()||r==D)&&!h.has(D)&&!v.has(D)) {
                  const s=Math.abs(r.getCenterX()-D.getCenterX())-(r.getWidth()/2+D.getWidth()/2);
                  const f=Math.abs(r.getCenterY()-D.getCenterY())-(r.getHeight()/2+D.getHeight()/2);

                  if (s<=this.repulsionRange&&f<=this.repulsionRange) {
                    v.add(D);
                  }
                }
              }}
            }
          }r.surrounding=[].concat(o(v))
        }for (T=0; T<r.surrounding.length; T++) {
          this.calcRepulsionForce(r,r.surrounding[T])
        }}

        calcRepulsionRange() {return 0}
      }

      for (const d in e) {
          n[d]=e[d];
        }

      N.exports=n;
    }),((N, I, L) => {
      const o=L(1);
      const e=L(7);
      function t(l,g,n){
        o.call(this,l,g,n);
        this.idealLength=e.DEFAULT_EDGE_LENGTH;
      }t.prototype=Object.create(o.prototype);for (const i in o) {
        t[i]=o[i];
      }N.exports=t
    }),((N, I, L) => {
      const o=L(3);function e(i,l,g,n){
        o.call(this,i,l,g,n);
        this.springForceX=0;
        this.springForceY=0;
        this.repulsionForceX=0;
        this.repulsionForceY=0;
        this.gravitationForceX=0;
        this.gravitationForceY=0;
        this.displacementX=0;
        this.displacementY=0;
        this.startX=0;
        this.finishX=0;
        this.startY=0;
        this.finishY=0;
        this.surrounding=[];
      }e.prototype=Object.create(o.prototype);for (const t in o) {
        e[t]=o[t];
      }

      e.prototype.setGridCoordinates=function(i,l,g,n){
        this.startX=i;
        this.finishX=l;
        this.startY=g;
        this.finishY=n;
      };

      N.exports=e;
    }),((N, I, L) => {
      function o(e,t){
        this.width=0;
        this.height=0;

        if (e!==null&&t!==null) {
          this.height=t;
          this.width=e;
        }
      }
      o.prototype.getWidth=function(){return this.width};
      o.prototype.setWidth=function(e){this.width=e};
      o.prototype.getHeight=function(){return this.height};
      o.prototype.setHeight=function(e){this.height=e};
      N.exports=o;
    }),((N, I, L) => {
      const o=L(14);function e(){
        this.map={};
        this.keys=[];
      }
      e.prototype.put=function(t,i){
        const l=o.createID(t);

        if (!this.contains(l)) {
          this.map[l]=i;
          this.keys.push(t);
        }
      };

      e.prototype.contains=function(t){
        o.createID(t);
        return this.map[t]!=null;
      };

      e.prototype.get=function(t){const i=o.createID(t);return this.map[i]};
      e.prototype.keySet=function(){return this.keys};
      N.exports=e;
    }),((N, I, L) => {
      const o=L(14);function e(){this.set={}}
      e.prototype.add=function(t){
        const i=o.createID(t);

        if (!this.contains(i)) {
          (this.set[i] = t);
        }
      };
      e.prototype.remove=function(t){delete this.set[o.createID(t)]};
      e.prototype.clear=function(){this.set={}};
      e.prototype.contains=function(t){return this.set[o.createID(t)]==t};
      e.prototype.isEmpty=function(){return this.size()===0};
      e.prototype.size=function(){return Object.keys(this.set).length};

      e.prototype.addAllTo=function(t){
        const i=Object.keys(this.set);
        for (let l=i.length, g=0; g<l; g++) {
          t.push(this.set[i[g]])
        }
      };

      e.prototype.size=function(){return Object.keys(this.set).length};
      e.prototype.addAll=function(t){for(let i=t.length, l=0;l<i;l++){const g=t[l];this.add(g)}};
      N.exports=e;
    }),((N, I, L) => {
      const o = (() => {function l(g,n){
        for (const r of n) {
          r.enumerable=r.enumerable||false;
          r.configurable=true;

          if ("value"in r) {
            (r.writable = true);
          }

          Object.defineProperty(g,r.key,r);
        }
      }return (g, n, d) => {
        if (n) {
          l(g.prototype,n);
        }

        if (d) {
          l(g,d);
        }

        return g;
      };})();function e(l,g){if (!(l instanceof g)) {
        throw new TypeError("Cannot call a class as a function")
      }}
      const t=L(11);

      const i = (() => {
        function l(g,n){
          e(this,l);

          if ((n!==null || n!==void 0)) {
            (this.compareFunction = this._defaultCompareFunction);
          }

          let d=void 0;

          if (g instanceof t) {
            d=g.size();
          } else {
            d=g.length;
          }

          this._quicksort(g,0,d-1);
        }

        o(l,[{key:"_quicksort",value(n, d, r) {if(d<r){
          const h=this._partition(n,d,r);
          this._quicksort(n,d,h);
          this._quicksort(n,h+1,r);
        }}},{key:"_partition",value(n, d, r) {
          const h=this._get(n,d);
          let a=d;
          let p=r;

          while (true) {
            while (this.compareFunction(h,this._get(n,p))) {
              p--;
            }

            while (this.compareFunction(this._get(n,a),h)) {
              a++;
            }

            if (a<p) {
              this._swap(n,a,p);
              a++;
              p--;
            } else {
              return p
            }
          }
        }},{key:"_get",value(n, d) {return n instanceof t?n.get_object_at(d):n[d]}},{key:"_set",value(n, d, r) {
          if (n instanceof t) {
            n.set_object_at(d,r);
          } else {
            n[d]=r;
          }
        }},{key:"_swap",value(n, d, r) {
          const h=this._get(n,d);
          this._set(n,d,this._get(n,r));
          this._set(n,r,h);
        }},{key:"_defaultCompareFunction",value(n, d) {return d>n}}]);

        return l;
      })();

      N.exports=i
    }),((N, I, L) => {
      const o = (() => {function i(l,g){
        for (const d of g) {
          d.enumerable=d.enumerable||false;
          d.configurable=true;

          if ("value"in d) {
            (d.writable = true);
          }

          Object.defineProperty(l,d.key,d);
        }
      }return (l, g, n) => {
        if (g) {
          i(l.prototype,g);
        }

        if (n) {
          i(l,n);
        }

        return l;
      };})();

      class e {
        constructor(i, l) {if (!(i instanceof l)) {
          throw new TypeError("Cannot call a class as a function")
        }}

        static addListener(t, i) {this.listeners.push({event:t,callback:i})}
        static removeListener(t, i) {for(let l=this.listeners.length;l>=0;l--){
          const g=this.listeners[l];

          if (g.event===t&&g.callback===i) {
            this.listeners.splice(l,1);
          }
        }}

        static emit(t, i) {
          for (const g of this.listeners) {
            if (t===g.event) {
              g.callback(i);
            }
          }
        }
      }

      const t = (() => {
        function i(l, g, n = 1, d = -1, r = -1) {
          e(this,i);
          this.sequence1=l;
          this.sequence2=g;
          this.match_score=n;
          this.mismatch_penalty=d;
          this.gap_penalty=r;
          this.iMax=l.length+1;
          this.jMax=g.length+1;
          this.grid=new Array(this.iMax);
          for(let h=0;h<this.iMax;h++){this.grid[h]=new Array(this.jMax);for (let a=0; a<this.jMax; a++) {
            this.grid[h][a]=0
          }}this.tracebackGrid=new Array(this.iMax);for(let p=0;p<this.iMax;p++){this.tracebackGrid[p]=new Array(this.jMax);for (let v=0; v<this.jMax; v++) {
              this.tracebackGrid[p][v]=[null,null,null]
            }}
          this.alignments=[];
          this.score=-1;
          this.computeGrids();
        }

        o(i,[{key:"getScore",value() {return this.score}},{key:"getAlignments",value() {return this.alignments}},{key:"computeGrids",value() {for (let g=1; g<this.jMax; g++) {
          this.grid[0][g]=this.grid[0][g-1]+this.gap_penalty;
          this.tracebackGrid[0][g]=[false,false,true];
        }for (let n=1; n<this.iMax; n++) {
          this.grid[n][0]=this.grid[n-1][0]+this.gap_penalty;
          this.tracebackGrid[n][0]=[false,true,false];
        }for (let d=1; d<this.iMax; d++) {
          for(let r=1;r<this.jMax;r++){
            let h=void 0;

            if (this.sequence1[d-1]===this.sequence2[r-1]) {
              h=this.grid[d-1][r-1]+this.match_score;
            } else {
              h=this.grid[d-1][r-1]+this.mismatch_penalty;
            }

            const a=this.grid[d-1][r]+this.gap_penalty;
            const p=this.grid[d][r-1]+this.gap_penalty;
            const v=[h,a,p];
            const D=this.arrayAllMaxIndexes(v);
            this.grid[d][r]=v[D[0]];
            this.tracebackGrid[d][r]=[D.includes(0),D.includes(1),D.includes(2)];
          }
        }this.score=this.grid[this.iMax-1][this.jMax-1]}},{key:"alignmentTraceback",value() {const g=[];for(g.push({pos:[this.sequence1.length,this.sequence2.length],seq1:"",seq2:""});g[0];){
          const n=g[0];
          const d=this.tracebackGrid[n.pos[0]][n.pos[1]];

          if (d[0]) {
            g.push({pos:[n.pos[0]-1,n.pos[1]-1],seq1:this.sequence1[n.pos[0]-1]+n.seq1,seq2:this.sequence2[n.pos[1]-1]+n.seq2});
          }

          if (d[1]) {
            g.push({pos:[n.pos[0]-1,n.pos[1]],seq1:this.sequence1[n.pos[0]-1]+n.seq1,seq2:`-${n.seq2}`});
          }

          if (d[2]) {
            g.push({pos:[n.pos[0],n.pos[1]-1],seq1:`-${n.seq1}`,seq2:this.sequence2[n.pos[1]-1]+n.seq2});
          }

          if (n.pos[0]===0&&n.pos[1]===0) {
            this.alignments.push({sequence1:n.seq1,sequence2:n.seq2});
          }

          g.shift();
        }return this.alignments}},{key:"getAllIndexes",value(g, n) {
          const d=[];
          for (let r=-1; (r=g.indexOf(n,r+1))!==-1; ) {
            d.push(r);
          }return d
        }},{key:"arrayAllMaxIndexes",value(g) {return this.getAllIndexes(g,Math.max.apply(null,g))}}]);

        return i;
      })();N.exports=t
    }),((N, I, L) => {
      const o=() => {};
      o.FDLayout=L(18);
      o.FDLayoutConstants=L(7);
      o.FDLayoutEdge=L(19);
      o.FDLayoutNode=L(20);
      o.DimensionD=L(21);
      o.HashMap=L(22);
      o.HashSet=L(23);
      o.IGeometry=L(8);
      o.IMath=L(9);
      o.Integer=L(10);
      o.Point=L(12);
      o.PointD=L(4);
      o.RandomSeed=L(16);
      o.RectangleD=L(13);
      o.Transform=L(17);
      o.UniqueIDGeneretor=L(14);
      o.Quicksort=L(24);
      o.LinkedList=L(11);
      o.LGraphObject=L(2);
      o.LGraph=L(5);
      o.LEdge=L(1);
      o.LGraphManager=L(6);
      o.LNode=L(3);
      o.Layout=L(15);
      o.LayoutConstants=L(0);
      o.NeedlemanWunsch=L(25);
      N.exports=o;
    }),((N, I, L) => {
      function o(){this.listeners=[]}const e=o.prototype;
      N.exports=o;
    })]));})(Q);
  }

  return Q.exports;
}
const ct=$.exports;
let z;
function pt(...args) {
  if (!z) {
    z=1;

    ((G, b) => {((I, L) => {G.exports=L(ft())})(ct, N => (I => {
      const L={};function o(e){
        if (L[e]) {
          return L[e].exports;
        }const t=L[e]={i:e,l:false,exports:{}};
        I[e].call(t.exports,t,t.exports,o);
        t.l=true;
        return t.exports;
      }
      o.m=I;
      o.c=L;
      o.i=e => e;
      o.d=(e, t, i) => {
        if (!o.o(e,t)) {
          Object.defineProperty(e,t,{configurable:false,enumerable:true,get:i});
        }
      };

      o.n=e => {
        const t=e&&e.__esModule?() => e.default:() => e;
        o.d(t,"a",t);
        return t;
      };

      o.o=(e, t) => Object.prototype.hasOwnProperty.call(e,t);
      o.p="";
      return o(o.s=7);
    })([((I, L) => {I.exports=N}),((I, L, o) => {
      const e=o(0).FDLayoutConstants;function t(){}for (const i in e) {
        t[i]=e[i];
      }
      t.DEFAULT_USE_MULTI_LEVEL_SCALING=false;
      t.DEFAULT_RADIAL_SEPARATION=e.DEFAULT_EDGE_LENGTH;
      t.DEFAULT_COMPONENT_SEPERATION=60;
      t.TILE=true;
      t.TILING_PADDING_VERTICAL=10;
      t.TILING_PADDING_HORIZONTAL=10;
      t.TREE_REDUCTION_ON_INCREMENTAL=false;
      I.exports=t;
    }),((I, L, o) => {const e=o(0).FDLayoutEdge;function t(l,g,n){e.call(this,l,g,n)}t.prototype=Object.create(e.prototype);for (const i in e) {
      t[i]=e[i];
    }I.exports=t}),((I, L, o) => {const e=o(0).LGraph;function t(l,g,n){e.call(this,l,g,n)}t.prototype=Object.create(e.prototype);for (const i in e) {
      t[i]=e[i];
    }I.exports=t}),((I, L, o) => {
      const e=o(0).LGraphManager;

      class t extends e {
        constructor(l) {super(l)}
      }

      for (const i in e) {
        t[i]=e[i];
      }I.exports=t
    }),((I, L, o) => {
      const e=o(0).FDLayoutNode;
      const t=o(0).IMath;

      class i extends e {
        constructor(g, n, d, r) {super(g, n, d, r)}

        move() {
          const g=this.graphManager.getLayout();
          this.displacementX=g.coolingFactor*(this.springForceX+this.repulsionForceX+this.gravitationForceX)/this.noOfChildren;
          this.displacementY=g.coolingFactor*(this.springForceY+this.repulsionForceY+this.gravitationForceY)/this.noOfChildren;

          if (Math.abs(this.displacementX)>g.coolingFactor*g.maxNodeDisplacement) {
            (this.displacementX = g.coolingFactor*g.maxNodeDisplacement*t.sign(this.displacementX));
          }

          if (Math.abs(this.displacementY)>g.coolingFactor*g.maxNodeDisplacement) {
            (this.displacementY = g.coolingFactor*g.maxNodeDisplacement*t.sign(this.displacementY));
          }

          if (this.child==null) {
            this.moveBy(this.displacementX,this.displacementY);
          } else if (this.child.getNodes().length==0) {
            this.moveBy(this.displacementX,this.displacementY);
          } else {
            this.propogateDisplacementToChildren(this.displacementX,this.displacementY);
          }

          g.totalDisplacement+=Math.abs(this.displacementX)+Math.abs(this.displacementY);
          this.springForceX=0;
          this.springForceY=0;
          this.repulsionForceX=0;
          this.repulsionForceY=0;
          this.gravitationForceX=0;
          this.gravitationForceY=0;
          this.displacementX=0;
          this.displacementY=0;
        }

        propogateDisplacementToChildren(g, n) {
          let r;
          for (let d=this.getChild().getNodes(), h=0; h<d.length; h++) {
            r=d[h];

            if (r.getChild()==null) {
              r.moveBy(g,n);
              r.displacementX+=g;
              r.displacementY+=n;
            } else {
              r.propogateDisplacementToChildren(g,n);
            }
          }
        }

        setPred1(g) {this.pred1=g}
        getPred1() {return pred1}
        getPred2() {return pred2}
        setNext(g) {this.next=g}
        getNext() {return next}
        setProcessed(g) {this.processed=g}
        isProcessed() {return processed}
      }

      for (const l in e) {
          i[l]=e[l];
        }

      I.exports=i;
    }),((I, L, o) => {
      const e=o(0).FDLayout;
      const t=o(4);
      const i=o(3);
      const l=o(5);
      const g=o(2);
      const n=o(1);
      const d=o(0).FDLayoutConstants;
      const r=o(0).LayoutConstants;
      const h=o(0).Point;
      const a=o(0).PointD;
      const p=o(0).Layout;
      const v=o(0).Integer;
      const D=o(0).IGeometry;
      const u=o(0).LGraph;
      const T=o(0).Transform;

      class y extends e {
        constructor() {
          super();
          this.toBeTiled={};
        }

        newGraphManager() {
          const s=new t(this);
          this.graphManager=s;
          return s;
        }

        newGraph(s) {return new i(null,this.graphManager,s)}
        newNode(s) {return new l(this.graphManager,s)}
        newEdge(s) {return new g(null,null,s)}

        initParameters() {
          super.initParameters(args);

          if (!this.isSubLayout) {
            n.DEFAULT_EDGE_LENGTH<10?this.idealEdgeLength=10:this.idealEdgeLength=n.DEFAULT_EDGE_LENGTH;
            this.useSmartIdealEdgeLengthCalculation=n.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
            this.springConstant=d.DEFAULT_SPRING_STRENGTH;
            this.repulsionConstant=d.DEFAULT_REPULSION_STRENGTH;
            this.gravityConstant=d.DEFAULT_GRAVITY_STRENGTH;
            this.compoundGravityConstant=d.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
            this.gravityRangeFactor=d.DEFAULT_GRAVITY_RANGE_FACTOR;
            this.compoundGravityRangeFactor=d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
            this.prunedNodesAll=[];
            this.growTreeIterations=0;
            this.afterGrowthIterations=0;
            this.isTreeGrowing=false;
            this.isGrowthFinished=false;
            this.coolingCycle=0;
            this.maxCoolingCycle=this.maxIterations/d.CONVERGENCE_CHECK_PERIOD;
            this.finalTemperature=d.CONVERGENCE_CHECK_PERIOD/this.maxIterations;
            this.coolingAdjuster=1;
          }
        }

        layout() {
          const s=r.DEFAULT_CREATE_BENDS_AS_NEEDED;

          if (s) {
            this.createBendpoints();
            this.graphManager.resetAllEdges();
          }

          this.level=0;
          return this.classicLayout();
        }

        classicLayout() {
          this.nodesWithGravity=this.calculateNodesToApplyGravitationTo();
          this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
          this.calcNoOfChildrenForAllNodes();
          this.graphManager.calcLowestCommonAncestors();
          this.graphManager.calcInclusionTreeDepths();
          this.graphManager.getRoot().calcEstimatedSize();
          this.calcIdealEdgeLengths();

          if (this.incremental) {if(n.TREE_REDUCTION_ON_INCREMENTAL){
            this.reduceTrees();
            this.graphManager.resetAllNodesToApplyGravitation();
            var f=new Set(this.getAllNodes());
            var c=this.nodesWithGravity.filter(m => f.has(m));
            this.graphManager.setAllNodesToApplyGravitation(c)
          }} else {const s=this.getFlatForest();if (s.length>0) {
            this.positionNodesRadially(s);
          } else {
            this.reduceTrees();
            this.graphManager.resetAllNodesToApplyGravitation();
            var f=new Set(this.getAllNodes());
            var c=this.nodesWithGravity.filter(E => f.has(E));
            this.graphManager.setAllNodesToApplyGravitation(c);
            this.positionNodesRandomly();
          }}

          this.initSpringEmbedder();
          this.runSpringEmbedder();
          return true;
        }

        tick() {
          this.totalIterations++;

          if (this.totalIterations===this.maxIterations&&!this.isTreeGrowing&&!this.isGrowthFinished) {
            if (this.prunedNodesAll.length>0) {
              this.isTreeGrowing=true;
            } else {
              return true;
            }
          }

          if(this.totalIterations%d.CONVERGENCE_CHECK_PERIOD==0&&!this.isTreeGrowing&&!this.isGrowthFinished){
            if (this.isConverged()) {
              if (this.prunedNodesAll.length>0) {
                this.isTreeGrowing=true;
              } else {
                return true;
              }
            }
            this.coolingCycle++;

            if (this.layoutQuality==0) {
              this.coolingAdjuster=this.coolingCycle;
            } else if (this.layoutQuality==1) {
              (this.coolingAdjuster = this.coolingCycle/3);
            }

            this.coolingFactor=Math.max(this.initialCoolingFactor-this.coolingCycle ** (Math.log(100*(this.initialCoolingFactor-this.finalTemperature)) / Math.log(this.maxCoolingCycle))/100*this.coolingAdjuster,this.finalTemperature);
            this.animationPeriod=Math.ceil(this.initialAnimationPeriod*Math.sqrt(this.coolingFactor));
          }if(this.isTreeGrowing){if (this.growTreeIterations%10==0) {
            if (this.prunedNodesAll.length>0) {
              this.graphManager.updateBounds();
              this.updateGrid();
              this.growTree(this.prunedNodesAll);
              this.graphManager.resetAllNodesToApplyGravitation();
              const s=new Set(this.getAllNodes());
              const f=this.nodesWithGravity.filter(A => s.has(A));
              this.graphManager.setAllNodesToApplyGravitation(f);
              this.graphManager.updateBounds();
              this.updateGrid();
              this.coolingFactor=d.DEFAULT_COOLING_FACTOR_INCREMENTAL;
            } else {
              this.isTreeGrowing=false;
              this.isGrowthFinished=true;
            }
          }this.growTreeIterations++}if(this.isGrowthFinished){
          if (this.isConverged()) {
            return true;
          }

          if (this.afterGrowthIterations%10==0) {
            this.graphManager.updateBounds();
            this.updateGrid();
          }

          this.coolingFactor=d.DEFAULT_COOLING_FACTOR_INCREMENTAL*((100-this.afterGrowthIterations)/100);
          this.afterGrowthIterations++;
        }
          const c=!this.isTreeGrowing&&!this.isGrowthFinished;
          const E=this.growTreeIterations%10==1&&this.isTreeGrowing||this.afterGrowthIterations%10==1&&this.isGrowthFinished;
          this.totalDisplacement=0;
          this.graphManager.updateBounds();
          this.calcSpringForces();
          this.calcRepulsionForces(c,E);
          this.calcGravitationalForces();
          this.moveNodes();
          this.animate();
          return false;
        }

        getPositionsData() {
          const f={};
          for(let s=this.graphManager.getAllNodes(), c=0;c<s.length;c++){
            const E=s[c].rect;
            const A=s[c].id;
            f[A]={id:A,x:E.getCenterX(),y:E.getCenterY(),w:E.width,h:E.height}
          }return f
        }

        runSpringEmbedder() {
          this.initialAnimationPeriod=25;
          this.animationPeriod=this.initialAnimationPeriod;
          let s=false;if (d.ANIMATE==="during") {
            this.emit("layoutstarted");
          } else {
          while (!s) {
              s=this.tick();
            }

          this.graphManager.updateBounds()
        }
        }

        calculateNodesToApplyGravitationTo() {
          let s=[];
          let f;
          const c=this.graphManager.getGraphs();
          const E=c.length;
          let A;
          for (A=0; A<E; A++) {
            f=c[A];
            f.updateConnected();

            if (!f.isConnected) {
              (s = s.concat(f.getNodes()));
            }
          }return s
        }

        createBendpoints() {
          let s=[];s=s.concat(this.graphManager.getAllEdges());
          const f=new Set;
          let c;
          for(c=0;c<s.length;c++){const E=s[c];if(!f.has(E)){
            const A=E.getSource();
            const m=E.getTarget();
            if (A==m) {
              E.getBendpoints().push(new a);
              E.getBendpoints().push(new a);
              this.createDummyNodesForBendpoints(E);
              f.add(E);
            } else {
              let C=[];
              C=C.concat(A.getEdgeListToNode(m));
              C=C.concat(m.getEdgeListToNode(A));

              if (!f.has(C[0])) {if(C.length>1){let R;for(R=0;R<C.length;R++){
                const M=C[R];
                M.getBendpoints().push(new a);
                this.createDummyNodesForBendpoints(M);
              }}C.forEach(S => {f.add(S)})}
            }
          }if (f.size==s.length) {
            break
          }}
        }

        positionNodesRadially(s) {
          const f=new h(0,0);
          const c=Math.ceil(Math.sqrt(s.length));
          let E=0;
          let A=0;
          let m=0;
          let C=new a(0,0);
          for(let R=0;R<s.length;R++){
            if (R%c==0) {
              m=0;
              A=E;
              R!=0&&(A+=n.DEFAULT_COMPONENT_SEPERATION);
              E=0;
            }

            const M=s[R];
            const S=p.findCenterOfTree(M);
            f.x=m;
            f.y=A;
            C=y.radialLayout(M,S,f);

            if (C.y>E) {
              (E = Math.floor(C.y));
            }

            m=Math.floor(C.x+n.DEFAULT_COMPONENT_SEPERATION);
          }this.transform(new a(r.WORLD_CENTER_X-C.x/2,r.WORLD_CENTER_Y-C.y/2))
        }

        static radialLayout(s, f, c) {
          const E=Math.max(this.maxDiagonalInTree(s),n.DEFAULT_RADIAL_SEPARATION);y.branchRadialLayout(f,null,0,359,0,E);
          const A=u.calculateBounds(s);
          const m=new T;
          m.setDeviceOrgX(A.getMinX());
          m.setDeviceOrgY(A.getMinY());
          m.setWorldOrgX(c.x);
          m.setWorldOrgY(c.y);

          for (const R of s) {
            R.transform(m)
          }

          const M=new a(A.getMaxX(),A.getMaxY());return m.inverseTransformPoint(M)
        }

        static branchRadialLayout(s, f, c, E, A, m) {
          let C=(E-c+1)/2;

          if (C<0) {
            (C += 180);
          }

          const R=(C+c)%360;
          const M=R*D.TWO_PI/360;
          const S=A*Math.cos(M);
          const Y=A*Math.sin(M);
          s.setCenter(S,Y);let w=[];w=w.concat(s.getEdges());let x=w.length;

          if (f!=null) {
            x--;
          }

          let F=0;
          let U=w.length;
          let P;
          for(var _=s.getEdgesBetween(f);_.length>1;){
            const X=_[0];_.splice(0,1);const H=w.indexOf(X);

            if (H>=0) {
              w.splice(H,1);
            }

            U--;
            x--;
          }

          if (f!=null) {
            P=(w.indexOf(_[0])+1)%U;
          } else {
            P=0;
          }

          const W=Math.abs(E-c)/x;
          for(let B=P;F!=x;B=++B%U){const K=w[B].getOtherEnd(s);if(K!=f){
            const q=(c+F*W)%360;
            const ht=(q+W)%360;
            y.branchRadialLayout(K,s,q,ht,A+m,m);
            F++;
          }}
        }

        static maxDiagonalInTree(s) {
          let f=v.MIN_VALUE;

          for (const E of s) {
            const A=E.getDiagonal();

            if (A>f) {
              (f = A);
            }
          }

          return f
        }

        calcRepulsionRange() {return 2*(this.level+1)*this.idealEdgeLength}

        groupZeroDegreeMembers() {
          const s=this;
          const f={};
          this.memberGroups={};
          this.idToDummyNode={};
          const c=[];
          for(var E=this.graphManager.getAllNodes(), A=0;A<E.length;A++){
            var m=E[A];
            const C=m.getParent();

            if (this.getNodeDegreeWithChildren(m)===0&&(C.id==null||!this.getToBeTiled(C))) {
              c.push(m);
            }
          }for(var A=0;A<c.length;A++){
          var m=c[A];
          const R=m.getParent().id;

          if (typeof f[R] === "undefined") {
            (f[R] = []);
          }

          f[R]=f[R].concat(m);
        }Object.keys(f).forEach(M => {if(f[M].length>1){
          const S=`DummyCompound_${M}`;s.memberGroups[S]=f[M];
          const Y=f[M][0].getParent();
          const w=new l(s.graphManager);
          w.id=S;
          w.paddingLeft=Y.paddingLeft||0;
          w.paddingRight=Y.paddingRight||0;
          w.paddingBottom=Y.paddingBottom||0;
          w.paddingTop=Y.paddingTop||0;
          s.idToDummyNode[S]=w;
          const x=s.getGraphManager().add(s.newGraph(),w);
          const F=Y.getChild();
          F.add(w);

          for (const P of f[M]) {
            F.remove(P);
            x.add(P);
          }
        }})
        }

        clearCompounds() {
          const s={};
          const f={};
          this.performDFSOnCompounds();for (let c=0; c<this.compoundOrder.length; c++) {
            f[this.compoundOrder[c].id]=this.compoundOrder[c];
            s[this.compoundOrder[c].id]=[].concat(this.compoundOrder[c].getChild().getNodes());
            this.graphManager.remove(this.compoundOrder[c].getChild());
            this.compoundOrder[c].child=null;
          }
          this.graphManager.resetAllNodes();
          this.tileCompoundMembers(s,f);
        }

        clearZeroDegreeMembers() {
          const s=this;
          const f=this.tiledZeroDegreePack=[];
          Object.keys(this.memberGroups).forEach(c => {
            const E=s.idToDummyNode[c];
            f[c]=s.tileNodes(s.memberGroups[c],E.paddingLeft+E.paddingRight);
            E.rect.width=f[c].width;
            E.rect.height=f[c].height;
          })
        }

        repopulateCompounds() {for(let s=this.compoundOrder.length-1;s>=0;s--){
          const f=this.compoundOrder[s];
          const c=f.id;
          const E=f.paddingLeft;
          const A=f.paddingTop;
          this.adjustLocations(this.tiledMemberPack[c],f.rect.x,f.rect.y,E,A)
        }}

        repopulateZeroDegreeMembers() {
          const s=this;
          const f=this.tiledZeroDegreePack;
          Object.keys(f).forEach(c => {
            const E=s.idToDummyNode[c];
            const A=E.paddingLeft;
            const m=E.paddingTop;
            s.adjustLocations(f[c],E.rect.x,E.rect.y,A,m)
          })
        }

        getToBeTiled(s) {
          const f=s.id;if (this.toBeTiled[f]!=null) {
            return this.toBeTiled[f];
          }const c=s.getChild();if (c==null) {
            this.toBeTiled[f]=false;
            return false;
          }for(let E=c.getNodes(), A=0;A<E.length;A++){const m=E[A];if (this.getNodeDegree(m)>0) {
            this.toBeTiled[f]=false;
            return false;
          }if(m.getChild()==null){this.toBeTiled[m.id]=false;continue}if (!this.getToBeTiled(m)) {
            this.toBeTiled[f]=false;
            return false;
          }}
          this.toBeTiled[f]=true;
          return true;
        }

        getNodeDegree(s) {
          s.id;
          let c=0;
          for(let f=s.getEdges(), E=0;E<f.length;E++){
            const A=f[E];

            if (A.getSource().id!==A.getTarget().id) {
              (c = c+1);
            }
          }return c
        }

        getNodeDegreeWithChildren(s) {let f=this.getNodeDegree(s);if (s.getChild()==null) {
          return f;
        }for(let c=s.getChild().getNodes(), E=0;E<c.length;E++){const A=c[E];f+=this.getNodeDegreeWithChildren(A)}return f}

        performDFSOnCompounds() {
          this.compoundOrder=[];
          this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
        }

        fillCompexOrderByDFS(s) {
          for (const c of s) {
            if (c.getChild()!=null) {
              this.fillCompexOrderByDFS(c.getChild().getNodes());
            }

            if (this.getToBeTiled(c)) {
              this.compoundOrder.push(c);
            }
          }
        }

        adjustLocations(s, f, c, E, A) {
          f+=E;
          c+=A;
          const m=f;

          for (const R of s.rows) {
            f=m;
            let M=0;

            for (const Y of R) {
              Y.rect.x=f;
              Y.rect.y=c;
              f+=Y.rect.width+s.horizontalPadding;

              if (Y.rect.height>M) {
                (M = Y.rect.height);
              }
            }

            c+=M+s.verticalPadding
          }
        }

        tileCompoundMembers(s, f) {
          const c=this;
          this.tiledMemberPack=[];

          Object.keys(s).forEach(E => {
            const A=f[E];
            c.tiledMemberPack[E]=c.tileNodes(s[E],A.paddingLeft+A.paddingRight);
            A.rect.width=c.tiledMemberPack[E].width;
            A.rect.height=c.tiledMemberPack[E].height;
          });
        }

        tileNodes(s, f) {
          const c=n.TILING_PADDING_VERTICAL;
          const E=n.TILING_PADDING_HORIZONTAL;
          const A={rows:[],rowWidth:[],rowHeight:[],width:0,height:f,verticalPadding:c,horizontalPadding:E};
          s.sort((R, M) => R.rect.width*R.rect.height>M.rect.width*M.rect.height?-1:R.rect.width*R.rect.height<M.rect.width*M.rect.height?1:0);

          for (const C of s) {
            if (A.rows.length==0) {
              this.insertNodeToRow(A,C,0,f);
            } else if (this.canAddHorizontal(A,C.rect.width,C.rect.height)) {
              this.insertNodeToRow(A,C,this.getShortestRowIndex(A),f);
            } else {
              this.insertNodeToRow(A,C,A.rows.length,f);
            }

            this.shiftToLastRow(A);
          }

          return A
        }

        insertNodeToRow(s, f, c, E) {
          const A=E;if(c==s.rows.length){
              const m=[];
              s.rows.push(m);
              s.rowWidth.push(A);
              s.rowHeight.push(0);
            }let C=s.rowWidth[c]+f.rect.width;

          if (s.rows[c].length>0) {
            (C += s.horizontalPadding);
          }

          s.rowWidth[c]=C;

          if (s.width<C) {
            (s.width = C);
          }

          let R=f.rect.height;

          if (c>0) {
            (R += s.verticalPadding);
          }

          let M=0;

          if (R>s.rowHeight[c]) {
            M=s.rowHeight[c];
            s.rowHeight[c]=R;
            M=s.rowHeight[c]-M;
          }

          s.height+=M;
          s.rows[c].push(f);
        }

        getShortestRowIndex(s) {
          let f=-1;
          let c=Number.MAX_VALUE;
          for (let E=0; E<s.rows.length; E++) {
            if (s.rowWidth[E]<c) {
              f=E;
              c=s.rowWidth[E];
            }
          }return f
        }

        getLongestRowIndex(s) {
          let f=-1;
          let c=Number.MIN_VALUE;
          for (let E=0; E<s.rows.length; E++) {
            if (s.rowWidth[E]>c) {
              f=E;
              c=s.rowWidth[E];
            }
          }return f
        }

        canAddHorizontal(s, f, c) {
          const E=this.getShortestRowIndex(s);if (E<0) {
              return true;
            }const A=s.rowWidth[E];if (A+s.horizontalPadding+f<=s.width) {
              return true;
            }let m=0;

          if (s.rowHeight[E]<c&&E>0) {
            (m = c+s.verticalPadding-s.rowHeight[E]);
          }

          let C;

          if (s.width-A>=f+s.horizontalPadding) {
            C=(s.height+m)/(A+f+s.horizontalPadding);
          } else {
            C=(s.height+m)/s.width;
          }

          m=c+s.verticalPadding;
          let R;

          if (s.width<f) {
            R=(s.height+m)/f;
          } else {
            R=(s.height+m)/s.width;
          }

          if (R<1) {
            (R = 1/R);
          }

          if (C<1) {
            (C = 1/C);
          }

          return C<R;
        }

        shiftToLastRow(s) {
          const f=this.getLongestRowIndex(s);
          const c=s.rowWidth.length-1;
          const E=s.rows[f];
          const A=E[E.length-1];
          const m=A.width+s.horizontalPadding;
          if(s.width-s.rowWidth[c]>m&&f!=c){
            E.splice(-1,1);
            s.rows[c].push(A);
            s.rowWidth[f]=s.rowWidth[f]-m;
            s.rowWidth[c]=s.rowWidth[c]+m;
            s.width=s.rowWidth[instance.getLongestRowIndex(s)];
            let C=Number.MIN_VALUE;
            for (let R=0; R<E.length; R++) {
              if (E[R].height>C) {
                (C = E[R].height);
              }
            }

            if (f>0) {
              (C += s.verticalPadding);
            }

            const M=s.rowHeight[f]+s.rowHeight[c];
            s.rowHeight[f]=C;

            if (s.rowHeight[c]<A.height+s.verticalPadding) {
              (s.rowHeight[c] = A.height+s.verticalPadding);
            }

            const S=s.rowHeight[f]+s.rowHeight[c];
            s.height+=S-M;
            this.shiftToLastRow(s);
          }
        }

        tilingPreLayout() {
          if (n.TILE) {
            this.groupZeroDegreeMembers();
            this.clearCompounds();
            this.clearZeroDegreeMembers();
          }
        }
        tilingPostLayout() {
          if (n.TILE) {
            this.repopulateZeroDegreeMembers();
            this.repopulateCompounds();
          }
        }

        reduceTrees() {
          const s=[];
          let f=true;
          let c;

          while (f) {
            const E=this.graphManager.getAllNodes();
            const A=[];
            f=false;for (let m=0; m<E.length; m++) {
            c=E[m];

            if (c.getEdges().length==1&&!c.getEdges()[0].isInterGraph&&c.getChild()==null) {
              A.push([c,c.getEdges()[0],c.getOwner()]);
              f=true;
            }
          }if(f==true){
              const C=[];
              for (let R=0; R<A.length; R++) {
                if (A[R][0].getEdges().length==1) {
                  C.push(A[R]);
                  A[R][0].getOwner().remove(A[R][0]);
                }
              }
              s.push(C);
              this.graphManager.resetAllNodes();
              this.graphManager.resetAllEdges();
            }
          }

          this.prunedNodesAll=s
        }

        growTree(s) {
          const f=s.length;
          let E;
          for (let c=s[f-1], A=0; A<c.length; A++) {
            E=c[A];
            this.findPlaceforPrunedNode(E);
            E[2].add(E[0]);
            E[2].add(E[1],E[1].source,E[1].target);
          }
          s.splice(s.length-1,1);
          this.graphManager.resetAllNodes();
          this.graphManager.resetAllEdges();
        }

        findPlaceforPrunedNode(s) {
          let f;
          let c;
          const E=s[0];

          if (E==s[1].source) {
            c=s[1].target;
          } else {
            c=s[1].source;
          }

          const A=c.startX;
          const m=c.finishX;
          const C=c.startY;
          const R=c.finishY;
          const M=0;
          const S=0;
          const Y=0;
          const w=0;
          const x=[M,Y,S,w];
          if (C>0) {
            for (var F=A; F<=m; F++) {
              x[0]+=this.grid[F][C-1].length+this.grid[F][C].length-1;
            }
          }if (m<this.grid.length-1) {
              for (var F=C; F<=R; F++) {
                x[1]+=this.grid[m+1][F].length+this.grid[m][F].length-1;
              }
            }if (R<this.grid[0].length-1) {
              for (var F=A; F<=m; F++) {
                x[2]+=this.grid[F][R+1].length+this.grid[F][R].length-1;
              }
            }if (A>0) {
              for (var F=C; F<=R; F++) {
                x[3]+=this.grid[A-1][F].length+this.grid[A][F].length-1;
              }
            }
          let U=v.MAX_VALUE;
          let P;
          let _;
          for (let X=0; X<x.length; X++) {
            if (x[X]<U) {
              U=x[X];
              P=1;
              _=X;
            } else if (x[X]==U) {
              P++;
            }
          }if (P==3&&U==0) {
            if (x[0]==0&&x[1]==0&&x[2]==0) {
              f=1;
            } else if (x[0]==0&&x[1]==0&&x[3]==0) {
              f=0;
            } else if (x[0]==0&&x[2]==0&&x[3]==0) {
              f=3;
            } else if (x[1]==0&&x[2]==0&&x[3]==0) {
              (f = 2);
            }
          } else if(P==2&&U==0){
            var H=Math.floor(Math.random()*2);

            if (x[0]==0&&x[1]==0) {
              if (H==0) {
                f=0;
              } else {
                f=1;
              }
            } else if (x[0]==0&&x[2]==0) {
              if (H==0) {
                f=0;
              } else {
                f=2;
              }
            } else if (x[0]==0&&x[3]==0) {
              if (H==0) {
                f=0;
              } else {
                f=3;
              }
            } else if (x[1]==0&&x[2]==0) {
              if (H==0) {
                f=1;
              } else {
                f=2;
              }
            } else if (x[1]==0&&x[3]==0) {
              if (H==0) {
                f=1;
              } else {
                f=3;
              }
            } else if (H==0) {
              f=2;
            } else {
              f=3;
            }
          }else if (P==4&&U==0)
              {var H=Math.floor(Math.random()*4);f=H} else {
              f=_;
            }

          switch (f) {
          case 0:
            E.setCenter(c.getCenterX(),c.getCenterY()-c.getHeight()/2-d.DEFAULT_EDGE_LENGTH-E.getHeight()/2);
            break;
          case 1:
            E.setCenter(c.getCenterX()+c.getWidth()/2+d.DEFAULT_EDGE_LENGTH+E.getWidth()/2,c.getCenterY());
            break;
          case 2:
            E.setCenter(c.getCenterX(),c.getCenterY()+c.getHeight()/2+d.DEFAULT_EDGE_LENGTH+E.getHeight()/2);
            break;
          default:
            E.setCenter(c.getCenterX()-c.getWidth()/2-d.DEFAULT_EDGE_LENGTH-E.getWidth()/2,c.getCenterY());
            break;
          }
        }
      }

      for (const O in e) {
          y[O]=e[O];
        }

      I.exports=y;
    }),((I, L, o) => {
      const e={};
      e.layoutBase=o(0);
      e.CoSEConstants=o(1);
      e.CoSEEdge=o(2);
      e.CoSEGraph=o(3);
      e.CoSEGraphManager=o(4);
      e.CoSELayout=o(6);
      e.CoSENode=o(5);
      I.exports=e;
    })]));})($);
  }

  return $.exports;
}
const dt=Z.exports;
let J;
function vt(){
  if (!J) {
    J=1;

    ((G, b) => {((I, L) => {G.exports=L(pt())})(dt, N => (I => {
      const L={};

      class o {
        constructor(e) {
            if (L[e]) {
              return L[e].exports;
            }const t=L[e]={i:e,l:false,exports:{}};
            I[e].call(t.exports,t,t.exports,o);
            t.l=true;
            return t.exports;
          }

        static i(e) {return e}
        static d(e, t, i) {
          if (!o.o(e,t)) {
            Object.defineProperty(e,t,{configurable:false,enumerable:true,get:i});
          }
        }

        static n(e) {
          const t=e&&e.__esModule?() => e.default:() => e;
          o.d(t,"a",t);
          return t;
        }

        static o(e, t) {return Object.prototype.hasOwnProperty.call(e,t)}
      }

      o.m=I;
      o.c=L;
      o.p="";
      return o(o.s=1);
    })([((I, L) => {I.exports=N}),((I, L, o) => {
      const e=o(0).layoutBase.LayoutConstants;
      const t=o(0).layoutBase.FDLayoutConstants;
      const i=o(0).CoSEConstants;
      const l=o(0).CoSELayout;
      const g=o(0).CoSENode;
      const n=o(0).layoutBase.PointD;
      const d=o(0).layoutBase.DimensionD;
      const r={ready() {},stop() {},quality:"default",nodeDimensionsIncludeLabels:false,refresh:30,fit:true,padding:10,randomize:true,nodeRepulsion:4500,idealEdgeLength:50,edgeElasticity:0.45/* .45 */,nestingFactor:0.1/* .1 */,gravity:0.25/* .25 */,numIter:2500,tile:true,animate:"end",animationDuration:500,tilingPaddingVertical:10,tilingPaddingHorizontal:10,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:0.5/* .5 */};
      function h(D,u){const T={};for (var y in D) {
        T[y]=D[y];
      }for (var y in u) {
        T[y]=u[y];
      }return T}

      class a {
        constructor(D) {
            this.options=h(r,D);
            p(this.options);
          }

        run() {
          let D;
          let u;
          const T=this.options;
          this.idToLNode={};
          const y=this.layout=new l;
          const O=this;
          O.stopped=false;
          this.cy=this.options.cy;
          this.cy.trigger({type:"layoutstart",layout:this});
          const s=y.newGraphManager();this.gm=s;
          const f=this.options.eles.nodes();
          const c=this.options.eles.edges();
          this.root=s.addRoot();
          this.processChildrenList(this.root,this.getTopMostNodes(f),y);

          for (const A of c) {
            const m=this.idToLNode[A.data("source")];
            const C=this.idToLNode[A.data("target")];
            if(m!==C&&m.getEdgesBetween(C).length==0){const R=s.add(y.newEdge(),m,C);R.id=A.id()}
          }

          const M=(w, x) => {
            if (typeof w=="number") {
              (w = x);
            }

            const F=w.data("id");
            const U=O.idToLNode[F];
            return{x:U.getRect().getCenterX(),y:U.getRect().getCenterY()}
          };

          const S=function Y(){
            const w=() => {
              if (T.fit) {
                T.cy.fit(T.eles,T.padding);
              }

              if (!D) {
                D=true;
                O.cy.one("layoutready",T.ready);
                O.cy.trigger({type:"layoutready",layout:O});
              }
            };

            for (var x=O.options.refresh, F, U=0; U<x&&!F; U++) {
              F=O.stopped||O.layout.tick();
            }if(F){
            if (y.checkLayoutSuccess()&&!y.isSubLayout) {
              y.doPostLayout();
            }

            if (y.tilingPostLayout) {
              y.tilingPostLayout();
            }

            y.isLayoutFinished=true;
            O.options.eles.nodes().positions(M);
            w();
            O.cy.one("layoutstop",O.options.stop);
            O.cy.trigger({type:"layoutstop",layout:O});

            if (u) {
              cancelAnimationFrame(u);
            }

            D=false;
            return
          }const P=O.layout.getPositionsData();

            T.eles.nodes().positions((_, X) => {
              if (typeof _=="number") {
                (_ = X);
              }

              if (!_.isParent()) {for (var H=_.id(),W=P[H],B=_; W==null&&(W=P[B.data("parent")]||P[`DummyCompound_${B.data("parent")}`],P[H]=W,B=B.parent()[0],B!=null); )
                {}return W!=null?{x:W.x,y:W.y}:{x:_.position("x"),y:_.position("y")}}
            });

            w();
            u=requestAnimationFrame(Y);
          };

          y.addListener("layoutstarted",() => {
            if (O.options.animate==="during") {
              (u = requestAnimationFrame(S));
            }
          });
          y.runLayout();

          if (this.options.animate!=="during") {
            O.options.eles.nodes().not(":parent").layoutPositions(O,O.options,M);
            D=false;
          }

          return this;
        }

        getTopMostNodes(D) {
          const u={};
          for (let T=0; T<D.length; T++) {
            u[D[T].id()]=true;
          }const y=D.filter((O, s) => {
          if (typeof O=="number") {
            (O = s);
          }

          for(let f=O.parent()[0];f!=null;){if (u[f.id()]) {
              return false;
            }f=f.parent()[0]}return true;
        });return y
        }

        processChildrenList(D, u, T) {for(let y=u.length, O=0;O<y;O++){
          const s=u[O];
          const f=s.children();
          let c;
          const E=s.layoutDimensions({nodeDimensionsIncludeLabels:this.options.nodeDimensionsIncludeLabels});

          if (s.outerWidth()!=null&&s.outerHeight()!=null) {
            c=D.add(new g(T.graphManager,new n(s.position("x")-E.w/2,s.position("y")-E.h/2),new d(parseFloat(E.w),parseFloat(E.h))));
          } else {
            c=D.add(new g(this.graphManager));
          }

          c.id=s.data("id");
          c.paddingLeft=parseInt(s.css("padding"));
          c.paddingTop=parseInt(s.css("padding"));
          c.paddingRight=parseInt(s.css("padding"));
          c.paddingBottom=parseInt(s.css("padding"));

          if (this.options.nodeDimensionsIncludeLabels&&s.isParent()) {
            const A=s.boundingBox({includeLabels:true,includeNodes:false}).w;
            const m=s.boundingBox({includeLabels:true,includeNodes:false}).h;
            const C=s.css("text-halign");
            c.labelWidth=A;
            c.labelHeight=m;
            c.labelPos=C;
          }

          this.idToLNode[s.data("id")]=c;

          if (isNaN(c.rect.x)) {
            (c.rect.x = 0);
          }

          if (isNaN(c.rect.y)) {
            (c.rect.y = 0);
          }

          if (f!=null&&f.length>0) {
            let R;
            R=T.getGraphManager().add(T.newGraph(),c);
            this.processChildrenList(R,f,T);
          }
        }}

        stop() {
          this.stopped=true;
          return this;
        }
      }

      var p=u => {
        if (u.nodeRepulsion!=null) {
          (i.DEFAULT_REPULSION_STRENGTH = t.DEFAULT_REPULSION_STRENGTH=u.nodeRepulsion);
        }

        if (u.idealEdgeLength!=null) {
          (i.DEFAULT_EDGE_LENGTH = t.DEFAULT_EDGE_LENGTH=u.idealEdgeLength);
        }

        if (u.edgeElasticity!=null) {
          (i.DEFAULT_SPRING_STRENGTH = t.DEFAULT_SPRING_STRENGTH=u.edgeElasticity);
        }

        if (u.nestingFactor!=null) {
          (i.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=u.nestingFactor);
        }

        if (u.gravity!=null) {
          (i.DEFAULT_GRAVITY_STRENGTH = t.DEFAULT_GRAVITY_STRENGTH=u.gravity);
        }

        if (u.numIter!=null) {
          (i.MAX_ITERATIONS = t.MAX_ITERATIONS=u.numIter);
        }

        if (u.gravityRange!=null) {
          (i.DEFAULT_GRAVITY_RANGE_FACTOR = t.DEFAULT_GRAVITY_RANGE_FACTOR=u.gravityRange);
        }

        if (u.gravityCompound!=null) {
          (i.DEFAULT_COMPOUND_GRAVITY_STRENGTH = t.DEFAULT_COMPOUND_GRAVITY_STRENGTH=u.gravityCompound);
        }

        if (u.gravityRangeCompound!=null) {
          (i.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=u.gravityRangeCompound);
        }

        if (u.initialEnergyOnIncremental!=null) {
          (i.DEFAULT_COOLING_FACTOR_INCREMENTAL = t.DEFAULT_COOLING_FACTOR_INCREMENTAL=u.initialEnergyOnIncremental);
        }

        if (u.quality=="draft") {
          e.QUALITY=0;
        } else if (u.quality=="proof") {
          e.QUALITY=2;
        } else {
          e.QUALITY=1;
        }

        i.NODE_DIMENSIONS_INCLUDE_LABELS=t.NODE_DIMENSIONS_INCLUDE_LABELS=e.NODE_DIMENSIONS_INCLUDE_LABELS=u.nodeDimensionsIncludeLabels;
        i.DEFAULT_INCREMENTAL = !u.randomize;
        t.DEFAULT_INCREMENTAL = !u.randomize;
        e.DEFAULT_INCREMENTAL = !u.randomize;
        i.ANIMATE=t.ANIMATE=e.ANIMATE=u.animate;
        i.TILE=u.tile;
        i.TILING_PADDING_VERTICAL=typeof u.tilingPaddingVertical=="function"?u.tilingPaddingVertical.call():u.tilingPaddingVertical;
        i.TILING_PADDING_HORIZONTAL=typeof u.tilingPaddingHorizontal=="function"?u.tilingPaddingHorizontal.call():u.tilingPaddingHorizontal;
      };

      const v=u => {u("layout","cose-bilkent",a)};

      if (typeof cytoscape !== "undefined") {
        v(cytoscape);
      }

      I.exports=v;
    })]));})(Z);
  }

  return Z.exports;
}const yt=vt();const Et=bB(yt);c.use(Et);function et(G,b){G.forEach(N=>{
  const I={id:N.id,labelText:N.label,height:N.height,width:N.width,padding:N.padding??0};
  Object.keys(N).forEach(L=>{
    if (!["id","label","height","width","padding","x","y"].includes(L)) {
      (I[L] = N[L]);
    }
  });
  b.add({group:"nodes",data:I,position:{x:N.x??0,y:N.y??0}});
})}a2(et,"addNodes");function rt(G,b){G.forEach(N=>{
  const I={id:N.id,source:N.start,target:N.end};
  Object.keys(N).forEach(L=>{
    if (!["id","start","end"].includes(L)) {
      (I[L] = N[L]);
    }
  });
  b.add({group:"edges",data:I});
})}a2(rt,"addEdges");function it(G){return new Promise(b=>{
  const N=a8("body").append("div").attr("id","cy").attr("style","display:none");
  const I=c({container:document.getElementById("cy"),style:[{selector:"edge",style:{"curve-style":"bezier"}}]});
  N.remove();
  et(G.nodes,I);
  rt(G.edges,I);
  I.nodes().forEach(o => {o.layoutDimensions=()=>{const e=o.data();return{w:e.width,h:e.height}}});
  const L={name:"cose-bilkent",quality:"proof",styleEnabled:false,animate:false};
  I.layout(L).run();

  I.ready(o=>{
    a9.info("Cytoscape ready",o);
    b(I);
  });
});}a2(it,"createCytoscapeInstance");function nt(G){return G.nodes().map(b=>{
  const N=b.data();
  const I=b.position();
  const L={id:N.id,x:I.x,y:I.y};
  Object.keys(N).forEach(o=>{
    if (o!=="id") {
      (L[o] = N[o]);
    }
  });
  return L;
});}a2(nt,"extractPositionedNodes");function ot(G){return G.edges().map(b=>{
  const N=b.data();
  const I=b._private.rscratch;
  const L={id:N.id,source:N.source,target:N.target,startX:I.startX,startY:I.startY,midX:I.midX,midY:I.midY,endX:I.endX,endY:I.endY};
  Object.keys(N).forEach(o=>{
    if (!["id","source","target"].includes(o)) {
      (L[o] = N[o]);
    }
  });
  return L;
});}a2(ot,"extractPositionedEdges");async function st(G,b){a9.debug("Starting cose-bilkent layout algorithm");try{
  at(G);
  const N=await it(G);
  const I=nt(N);
  const L=ot(N);
  a9.debug(`Layout completed: ${I.length} nodes, ${L.length} edges`);
  return {nodes:I,edges:L};
}catch(N){
  a9.error("Error in cose-bilkent layout algorithm:",N);
  throw N;
}}a2(st,"executeCoseBilkentLayout");function at(G){if (!G) {
  throw new Error("Layout data is required");
}if (!G.config) {
  throw new Error("Configuration is required in layout data");
}if (!G.rootNode) {
  throw new Error("Root node is required");
}if (!G.nodes||!Array.isArray(G.nodes)) {
  throw new Error("No nodes found in layout data");
}if (!Array.isArray(G.edges)) {
  throw new Error("Edges array is required in layout data");
}return true;}a2(at,"validateLayoutData");

const Lt=a2(async(G,b,{insertCluster,insertEdge,insertEdgeLabel,insertMarkers,insertNode,log,positionEdgeLabel},{algorithm})=>{
  const g={};
  const n={};
  const d=b.select("g");
  insertMarkers(d,G.markers,G.type,G.diagramId);
  const r=d.insert("g").attr("class","subgraphs");
  const h=d.insert("g").attr("class","edgePaths");
  const a=d.insert("g").attr("class","edgeLabels");
  const p=d.insert("g").attr("class","nodes");
  log.debug("Inserting nodes into DOM for dimension calculation");

  await Promise.all(G.nodes.map(async u=>{if(u.isGroup){
    const T={...u};
    n[u.id]=T;
    g[u.id]=T;
    await insertCluster(r,u);
  }else{
    const T={...u};g[u.id]=T;
    const y=await insertNode(p,u,{config:G.config,dir:G.direction||"TB"});
    const O=y.node().getBBox();
    T.width=O.width;
    T.height=O.height;
    T.domId=y;
    log.debug(`Node ${u.id} dimensions: ${O.width}x${O.height}`);
  }}));

  log.debug("Running cose-bilkent layout algorithm");
  const v={...G,nodes:G.nodes.map(u=>{const T=g[u.id];return{...u,width:T.width,height:T.height}})};
  const D=await st(v,G.config);
  log.debug("Positioning nodes based on layout results");
  D.nodes.forEach(u=>{
    const T=g[u.id];

    if (T?.domId) {
      T.domId.attr("transform",`translate(${u.x}, ${u.y})`);
      T.x=u.x;
      T.y=u.y;
      log.debug(`Positioned node ${T.id} at center (${u.x}, ${u.y})`);
    }
  });

  D.edges.forEach(u=>{
    const T=G.edges.find(y => y.id===u.id);

    if (T) {
      (T.points = [{x:u.startX,y:u.startY},{x:u.midX,y:u.midY},{x:u.endX,y:u.endY}]);
    }
  });

  log.debug("Inserting and positioning edges");

  await Promise.all(G.edges.map(async u=>{
    await insertEdgeLabel(a,u);
    const T=g[u.start??""];
    const y=g[u.end??""];
    if(T&&y){const O=D.edges.find(s => s.id===u.id);if(O){
      log.debug("APA01 positionedEdge",O);
      const s={...u};
      const f=insertEdge(h,s,n,G.type,T,y,G.diagramId);
      positionEdgeLabel(s,f)
    }else{
      const s={...u,points:[{x:T.x||0,y:T.y||0},{x:y.x||0,y:y.y||0}]};
      const f=insertEdge(h,s,n,G.type,T,y,G.diagramId);
      positionEdgeLabel(s,f)
    }}
  }));

  log.debug("Cose-bilkent rendering completed");
},"render");

export const render = Lt;
//# sourceMappingURL=cose-bilkent-S5V4N54A-DOMi4s90.js.map

export{render as render};
//# sourceMappingURL=cose-bilkent-S5V4N54A-DOMi4s90.js.map

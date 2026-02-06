import{bB,a2,aE,b4,a9,a6,a5,an,ao,a4,a3,at,aA,aB,aC,a7,bg,bC,ad,a8,as,bD,bE}from"./index-CgwAo6pj.js";import{p}from"./chunk-4BX2VUAB-nk385TCt.js";import{p as p_1}from"./treemap-KMMF4GRG-CK1q9nlx.js";import{c}from"./cytoscape.esm-DtBltrT8.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";import"./clone-M7Y9qM5V.js";
const he={exports:{}};
const le={exports:{}};
const fe={exports:{}};
const gr=fe.exports;
let we;
function ur(){
  if (!we) {
    we=1;

    ((I, x) => {((P, N) => {I.exports=N()})(gr, () => (A => {
      const P={};

      class N {
        constructor(u) {
            if (P[u]) {
              return P[u].exports;
            }const h=P[u]={i:u,l:false,exports:{}};
            A[u].call(h.exports,h,h.exports,N);
            h.l=true;
            return h.exports;
          }

        static i(u) {return u}
        static d(u, h, a) {
          if (!N.o(u,h)) {
            Object.defineProperty(u,h,{configurable:false,enumerable:true,get:a});
          }
        }

        static n(u) {
          const h=u&&u.__esModule?() => u.default:() => u;
          N.d(h,"a",h);
          return h;
        }

        static o(u, h) {return Object.prototype.hasOwnProperty.call(u,h)}
      }

      N.m=A;
      N.c=P;
      N.p="";
      return N(N.s=28);
    })([((A, P, N) => {
      function u(){}
      u.QUALITY=1;
      u.DEFAULT_CREATE_BENDS_AS_NEEDED=false;
      u.DEFAULT_INCREMENTAL=false;
      u.DEFAULT_ANIMATION_ON_LAYOUT=true;
      u.DEFAULT_ANIMATION_DURING_LAYOUT=false;
      u.DEFAULT_ANIMATION_PERIOD=50;
      u.DEFAULT_UNIFORM_LEAF_NODE_SIZES=false;
      u.DEFAULT_GRAPH_MARGIN=15;
      u.NODE_DIMENSIONS_INCLUDE_LABELS=false;
      u.SIMPLE_NODE_SIZE=40;
      u.SIMPLE_NODE_HALF_SIZE=u.SIMPLE_NODE_SIZE/2;
      u.EMPTY_COMPOUND_NODE_SIZE=40;
      u.MIN_EDGE_LENGTH=1;
      u.WORLD_BOUNDARY=1000000/* 1e6 */;
      u.INITIAL_WORLD_BOUNDARY=u.WORLD_BOUNDARY/1000/* 1e3 */;
      u.WORLD_CENTER_X=1200;
      u.WORLD_CENTER_Y=900;
      A.exports=u;
    }),((A, P, N) => {
      const u=N(2);
      const h=N(8);
      const a=N(9);
      function e(l,i,g){
        u.call(this,g);
        this.isOverlapingSourceAndTarget=false;
        this.vGraphObject=g;
        this.bendpoints=[];
        this.source=l;
        this.target=i;
      }e.prototype=Object.create(u.prototype);for (const r in u) {
        e[r]=u[r];
      }
      e.prototype.getSource=function(){return this.source};
      e.prototype.getTarget=function(){return this.target};
      e.prototype.isInterGraph=function(){return this.isInterGraph};
      e.prototype.getLength=function(){return this.length};
      e.prototype.isOverlapingSourceAndTarget=function(){return this.isOverlapingSourceAndTarget};
      e.prototype.getBendpoints=function(){return this.bendpoints};
      e.prototype.getLca=function(){return this.lca};
      e.prototype.getSourceInLca=function(){return this.sourceInLca};
      e.prototype.getTargetInLca=function(){return this.targetInLca};

      e.prototype.getOtherEnd=function(l){if (this.source===l) {
        return this.target;
      }if (this.target===l) {
        return this.source;
      }throw"Node is not incident with this edge"};

      e.prototype.getOtherEndInGraph=function(l,i){
        let g=this.getOtherEnd(l);
        const t=i.getGraphManager().getRoot();

        while (true) {if (g.getOwner()==i) {
          return g;
        }if (g.getOwner()==t) {
          break;
        }g=g.getOwner().getParent()}

        return null
      };

      e.prototype.updateLength=function(){
        const l=new Array(4);
        this.isOverlapingSourceAndTarget=h.getIntersection(this.target.getRect(),this.source.getRect(),l);

        if (!this.isOverlapingSourceAndTarget) {
          this.lengthX=l[0]-l[2];
          this.lengthY=l[1]-l[3];
          Math.abs(this.lengthX)<1&&(this.lengthX=a.sign(this.lengthX));
          Math.abs(this.lengthY)<1&&(this.lengthY=a.sign(this.lengthY));
          this.length=Math.sqrt(this.lengthX*this.lengthX+this.lengthY*this.lengthY);
        }
      };

      e.prototype.updateLengthSimple=function(){
        this.lengthX=this.target.getCenterX()-this.source.getCenterX();
        this.lengthY=this.target.getCenterY()-this.source.getCenterY();

        if (Math.abs(this.lengthX)<1) {
          (this.lengthX = a.sign(this.lengthX));
        }

        if (Math.abs(this.lengthY)<1) {
          (this.lengthY = a.sign(this.lengthY));
        }

        this.length=Math.sqrt(this.lengthX*this.lengthX+this.lengthY*this.lengthY);
      };

      A.exports=e;
    }),((A, P, N) => {function u(h){this.vGraphObject=h}A.exports=u}),((A, P, N) => {
      const u=N(2);
      const h=N(10);
      const a=N(13);
      const e=N(0);
      const r=N(16);
      const l=N(5);
      function i(t,o,s,c){
        if (s==null&&c==null) {
          (c = o);
        }

        u.call(this,c);

        if (t.graphManager!=null) {
          (t = t.graphManager);
        }

        this.estimatedSize=h.MIN_VALUE;
        this.inclusionTreeDepth=h.MAX_VALUE;
        this.vGraphObject=c;
        this.edges=[];
        this.graphManager=t;

        if (s!=null&&o!=null) {
          this.rect=new a(o.x,o.y,s.width,s.height);
        } else {
          this.rect=new a;
        }
      }i.prototype=Object.create(u.prototype);for (const g in u) {
        i[g]=u[g];
      }
      i.prototype.getEdges=function(){return this.edges};
      i.prototype.getChild=function(){return this.child};
      i.prototype.getOwner=function(){return this.owner};
      i.prototype.getWidth=function(){return this.rect.width};
      i.prototype.setWidth=function(t){this.rect.width=t};
      i.prototype.getHeight=function(){return this.rect.height};
      i.prototype.setHeight=function(t){this.rect.height=t};
      i.prototype.getCenterX=function(){return this.rect.x+this.rect.width/2};
      i.prototype.getCenterY=function(){return this.rect.y+this.rect.height/2};
      i.prototype.getCenter=function(){return new l(this.rect.x+this.rect.width/2,this.rect.y+this.rect.height/2)};
      i.prototype.getLocation=function(){return new l(this.rect.x,this.rect.y)};
      i.prototype.getRect=function(){return this.rect};
      i.prototype.getDiagonal=function(){return Math.sqrt(this.rect.width*this.rect.width+this.rect.height*this.rect.height)};
      i.prototype.getHalfTheDiagonal=function(){return Math.sqrt(this.rect.height*this.rect.height+this.rect.width*this.rect.width)/2};

      i.prototype.setRect=function(t,o){
        this.rect.x=t.x;
        this.rect.y=t.y;
        this.rect.width=o.width;
        this.rect.height=o.height;
      };

      i.prototype.setCenter=function(t,o){
        this.rect.x=t-this.rect.width/2;
        this.rect.y=o-this.rect.height/2;
      };

      i.prototype.setLocation=function(t,o){
        this.rect.x=t;
        this.rect.y=o;
      };

      i.prototype.moveBy=function(t,o){
        this.rect.x+=t;
        this.rect.y+=o;
      };

      i.prototype.getEdgeListToNode=function(t){
        const o=[];
        const s=this;

        s.edges.forEach(c => {if(c.target==t){if (c.source!=s) {
          throw"Incorrect edge source!";
        }o.push(c)}});

        return o;
      };

      i.prototype.getEdgesBetween=function(t){
        const o=[];
        const s=this;

        s.edges.forEach(c => {
          if (!(c.source==s||c.target==s)) {
            throw"Incorrect edge source and/or target";
          }

          if ((c.target==t || c.source==t)) {
            o.push(c);
          }
        });

        return o;
      };

      i.prototype.getNeighborsList=function(){
        const t=new Set;
        const o=this;

        o.edges.forEach(s => {if (s.source==o) {
          t.add(s.target);
        } else {if (s.target!=o) {
          throw"Incorrect incidency!";
        }t.add(s.source)}});

        return t;
      };

      i.prototype.withChildren=function(){
        const t=new Set;
        let o;
        let s;
        t.add(this);

        if (this.child!=null) {
          for (let c=this.child.getNodes(), f=0; f<c.length; f++) {
            o=c[f];
            s=o.withChildren();
            s.forEach(T => {t.add(T)});
          }
        }

        return t
      };

      i.prototype.getNoOfChildren=function(){
        let t=0;
        let o;
        if (this.child==null) {
          t=1;
        } else {
          for (let s=this.child.getNodes(), c=0; c<s.length; c++) {
            o=s[c];
            t+=o.getNoOfChildren();
          }
        }

        if (t==0) {
          (t = 1);
        }

        return t;
      };

      i.prototype.getEstimatedSize=function(){if (this.estimatedSize==h.MIN_VALUE) {
        throw"assert failed";
      }return this.estimatedSize};

      i.prototype.calcEstimatedSize=function(){return this.child==null?this.estimatedSize=(this.rect.width+this.rect.height)/2:(this.estimatedSize=this.child.calcEstimatedSize(),this.rect.width=this.estimatedSize,this.rect.height=this.estimatedSize,this.estimatedSize)};

      i.prototype.scatter=function(){
        let t;
        let o;
        const s=-e.INITIAL_WORLD_BOUNDARY;
        const c=e.INITIAL_WORLD_BOUNDARY;
        t=e.WORLD_CENTER_X+r.nextDouble()*(c-s)+s;
        const f=-e.INITIAL_WORLD_BOUNDARY;
        const T=e.INITIAL_WORLD_BOUNDARY;
        o=e.WORLD_CENTER_Y+r.nextDouble()*(T-f)+f;
        this.rect.x=t;
        this.rect.y=o;
      };

      i.prototype.updateBounds=function(){if (this.getChild()==null) {
        throw"assert failed";
      }if(this.getChild().getNodes().length!=0){
        const t=this.getChild();
        t.updateBounds(true);
        this.rect.x=t.getLeft();
        this.rect.y=t.getTop();
        this.setWidth(t.getRight()-t.getLeft());
        this.setHeight(t.getBottom()-t.getTop());

        if (e.NODE_DIMENSIONS_INCLUDE_LABELS) {
          const o=t.getRight()-t.getLeft();
          const s=t.getBottom()-t.getTop();

          if (this.labelWidth) {
            if (this.labelPosHorizontal=="left") {
              this.rect.x-=this.labelWidth;
              this.setWidth(o+this.labelWidth);
            } else if (this.labelPosHorizontal=="center"&&this.labelWidth>o) {
              this.rect.x-=(this.labelWidth-o)/2;
              this.setWidth(this.labelWidth);
            } else if (this.labelPosHorizontal=="right") {
              this.setWidth(o+this.labelWidth);
            }
          }

          if (this.labelHeight) {
            if (this.labelPosVertical=="top") {
              this.rect.y-=this.labelHeight;
              this.setHeight(s+this.labelHeight);
            } else if (this.labelPosVertical=="center"&&this.labelHeight>s) {
              this.rect.y-=(this.labelHeight-s)/2;
              this.setHeight(this.labelHeight);
            } else if (this.labelPosVertical=="bottom") {
              this.setHeight(s+this.labelHeight);
            }
          }
        }
      }};

      i.prototype.getInclusionTreeDepth=function(){if (this.inclusionTreeDepth==h.MAX_VALUE) {
        throw"assert failed";
      }return this.inclusionTreeDepth};

      i.prototype.transform=function(t){
        let o=this.rect.x;

        if (o>e.WORLD_BOUNDARY) {
          o=e.WORLD_BOUNDARY;
        } else if (o<-e.WORLD_BOUNDARY) {
          (o = -e.WORLD_BOUNDARY);
        }

        let s=this.rect.y;

        if (s>e.WORLD_BOUNDARY) {
          s=e.WORLD_BOUNDARY;
        } else if (s<-e.WORLD_BOUNDARY) {
          (s = -e.WORLD_BOUNDARY);
        }

        const c=new l(o,s);
        const f=t.inverseTransformPoint(c);
        this.setLocation(f.x,f.y)
      };

      i.prototype.getLeft=function(){return this.rect.x};
      i.prototype.getRight=function(){return this.rect.x+this.rect.width};
      i.prototype.getTop=function(){return this.rect.y};
      i.prototype.getBottom=function(){return this.rect.y+this.rect.height};
      i.prototype.getParent=function(){return this.owner==null?null:this.owner.getParent()};
      A.exports=i;
    }),((A, P, N) => {
      const u=N(0);function h(){}for (const a in u) {
        h[a]=u[a];
      }
      h.MAX_ITERATIONS=2500;
      h.DEFAULT_EDGE_LENGTH=50;
      h.DEFAULT_SPRING_STRENGTH=0.45/* .45 */;
      h.DEFAULT_REPULSION_STRENGTH=4500;
      h.DEFAULT_GRAVITY_STRENGTH=0.4/* .4 */;
      h.DEFAULT_COMPOUND_GRAVITY_STRENGTH=1;
      h.DEFAULT_GRAVITY_RANGE_FACTOR=3.8;
      h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=1.5;
      h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION=true;
      h.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION=true;
      h.DEFAULT_COOLING_FACTOR_INCREMENTAL=0.3/* .3 */;
      h.COOLING_ADAPTATION_FACTOR=0.33/* .33 */;
      h.ADAPTATION_LOWER_NODE_LIMIT=1000/* 1e3 */;
      h.ADAPTATION_UPPER_NODE_LIMIT=5000/* 5e3 */;
      h.MAX_NODE_DISPLACEMENT_INCREMENTAL=100;
      h.MAX_NODE_DISPLACEMENT=h.MAX_NODE_DISPLACEMENT_INCREMENTAL*3;
      h.MIN_REPULSION_DIST=h.DEFAULT_EDGE_LENGTH/10;
      h.CONVERGENCE_CHECK_PERIOD=100;
      h.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=0.1/* .1 */;
      h.MIN_EDGE_LENGTH=1;
      h.GRID_CALCULATION_CHECK_PERIOD=10;
      A.exports=h;
    }),((A, P, N) => {
      function u(h,a){
        if (h==null&&a==null) {
          this.x=0;
          this.y=0;
        } else {
          this.x=h;
          this.y=a;
        }
      }
      u.prototype.getX=function(){return this.x};
      u.prototype.getY=function(){return this.y};
      u.prototype.setX=function(h){this.x=h};
      u.prototype.setY=function(h){this.y=h};
      u.prototype.getDifference=function(h){return new DimensionD(this.x-h.x,this.y-h.y)};
      u.prototype.getCopy=function(){return new u(this.x,this.y)};

      u.prototype.translate=function(h){
        this.x+=h.width;
        this.y+=h.height;
        return this;
      };

      A.exports=u;
    }),((A, P, N) => {
      const u=N(2);
      const h=N(10);
      const a=N(0);
      const e=N(7);
      const r=N(3);
      const l=N(1);
      const i=N(13);
      const g=N(12);
      const t=N(11);
      function o(c,f,T){
        u.call(this,T);
        this.estimatedSize=h.MIN_VALUE;
        this.margin=a.DEFAULT_GRAPH_MARGIN;
        this.edges=[];
        this.nodes=[];
        this.isConnected=false;
        this.parent=c;

        if (f!=null&&f instanceof e) {
          this.graphManager=f;
        } else if (f!=null&&f instanceof Layout) {
          (this.graphManager = f.graphManager);
        }
      }o.prototype=Object.create(u.prototype);for (const s in u) {
        o[s]=u[s];
      }
      o.prototype.getNodes=function(){return this.nodes};
      o.prototype.getEdges=function(){return this.edges};
      o.prototype.getGraphManager=function(){return this.graphManager};
      o.prototype.getParent=function(){return this.parent};
      o.prototype.getLeft=function(){return this.left};
      o.prototype.getRight=function(){return this.right};
      o.prototype.getTop=function(){return this.top};
      o.prototype.getBottom=function(){return this.bottom};
      o.prototype.isConnected=function(){return this.isConnected};

      o.prototype.add=function(c,f,T){if(f==null&&T==null){
        const d=c;if (this.graphManager==null) {
          throw"Graph has no graph mgr!";
        }if (this.getNodes().includes(d)) {
          throw"Node already in graph!";
        }
        d.owner=this;
        this.getNodes().push(d);
        return d;
      }else{const v=c;if (!(this.getNodes().includes(f)&&this.getNodes().includes(T))) {
        throw"Source or target not in graph!";
      }if (!(f.owner==T.owner&&f.owner==this)) {
        throw"Both owners must be this graph!";
      }return f.owner!=T.owner?null:(v.source=f,v.target=T,v.isInterGraph=false,this.getEdges().push(v),f.edges.push(v),T!=f&&T.edges.push(v),v);}};

      o.prototype.remove=function(c){const f=c;if(c instanceof r){
        if (f==null) {
          throw"Node is null!";
        }if (!(f.owner!=null&&f.owner==this)) {
          throw"Owner graph is invalid!";
        }if (this.graphManager==null) {
          throw"Owner graph manager is invalid!";
        }
        const T=f.edges.slice();
        var d;
        for (let v=T.length, L=0; L<v; L++) {
          d=T[L];

          if (d.isInterGraph) {
            this.graphManager.remove(d);
          } else {
            d.source.owner.remove(d);
          }
        }var b=this.nodes.indexOf(f);if (b==-1) {
          throw"Node not in owner node list!";
        }this.nodes.splice(b,1)
      }else if(c instanceof l){
        var d=c;if (d==null) {
            throw"Edge is null!";
          }if (!(d.source!=null&&d.target!=null)) {
            throw"Source and/or target is null!";
          }if (!(d.source.owner!=null&&d.target.owner!=null&&d.source.owner==this&&d.target.owner==this)) {
            throw"Source and/or target owner is invalid!";
          }
        const C=d.source.edges.indexOf(d);
        const G=d.target.edges.indexOf(d);
        if (!(C>-1&&G>-1)) {
          throw"Source and/or target doesn't know this edge!";
        }
        d.source.edges.splice(C,1);

        if (d.target!=d.source) {
          d.target.edges.splice(G,1);
        }

        var b=d.source.owner.getEdges().indexOf(d);if (b==-1) {
            throw"Not in owner's edge list!";
          }d.source.owner.getEdges().splice(b,1)
      }};

      o.prototype.updateLeftTop=function(){
        let c=h.MAX_VALUE;
        let f=h.MAX_VALUE;
        let T;
        let d;
        let v;
        const L=this.getNodes();
        for(let b=L.length, C=0;C<b;C++){
          const G=L[C];
          T=G.getTop();
          d=G.getLeft();

          if (c>T) {
            (c = T);
          }

          if (f>d) {
            (f = d);
          }
        }return c==h.MAX_VALUE?null:(L[0].getParent().paddingLeft!=null?v=L[0].getParent().paddingLeft:v=this.margin,this.left=f-v,this.top=c-v,new g(this.left,this.top))
      };

      o.prototype.updateBounds=function(c){
        let f=h.MAX_VALUE;
        let T=-h.MAX_VALUE;
        let d=h.MAX_VALUE;
        let v=-h.MAX_VALUE;
        let L;
        let b;
        let C;
        let G;
        let k;
        const Y=this.nodes;
        for(let K=Y.length, O=0;O<K;O++){
          const it=Y[O];

          if (c&&it.child!=null) {
            it.updateBounds();
          }

          L=it.getLeft();
          b=it.getRight();
          C=it.getTop();
          G=it.getBottom();

          if (f>L) {
            (f = L);
          }

          if (T<b) {
            (T = b);
          }

          if (d>C) {
            (d = C);
          }

          if (v<G) {
            (v = G);
          }
        }const n=new i(f,d,T-f,v-d);

        if (f==h.MAX_VALUE) {
          this.left=this.parent.getLeft();
          this.right=this.parent.getRight();
          this.top=this.parent.getTop();
          this.bottom=this.parent.getBottom();
        }

        if (Y[0].getParent().paddingLeft!=null) {
          k=Y[0].getParent().paddingLeft;
        } else {
          k=this.margin;
        }

        this.left=n.x-k;
        this.right=n.x+n.width+k;
        this.top=n.y-k;
        this.bottom=n.y+n.height+k;
      };

      o.calculateBounds=c => {
        let f=h.MAX_VALUE;
        let T=-h.MAX_VALUE;
        let d=h.MAX_VALUE;
        let v=-h.MAX_VALUE;
        let L;
        let b;
        let C;
        let G;
        for(let k=c.length, Y=0;Y<k;Y++){
          const K=c[Y];
          L=K.getLeft();
          b=K.getRight();
          C=K.getTop();
          G=K.getBottom();

          if (f>L) {
            (f = L);
          }

          if (T<b) {
            (T = b);
          }

          if (d>C) {
            (d = C);
          }

          if (v<G) {
            (v = G);
          }
        }const O=new i(f,d,T-f,v-d);return O
      };

      o.prototype.getInclusionTreeDepth=function(){return this==this.graphManager.getRoot()?1:this.parent.getInclusionTreeDepth()};

      o.prototype.getEstimatedSize=function(){if (this.estimatedSize==h.MIN_VALUE) {
        throw"assert failed";
      }return this.estimatedSize};

      o.prototype.calcEstimatedSize=function(){
        let c=0;
        const f=this.nodes;
        for(let T=f.length, d=0;d<T;d++){const v=f[d];c+=v.calcEstimatedSize()}

        if (c==0) {
          this.estimatedSize=a.EMPTY_COMPOUND_NODE_SIZE;
        } else {
          this.estimatedSize=c/Math.sqrt(this.nodes.length);
        }

        return this.estimatedSize;
      };

      o.prototype.updateConnected=function(){
        const c=this;if(this.nodes.length==0){this.isConnected=true;return}
        const f=new t;
        const T=new Set;
        let d=this.nodes[0];
        let v;
        let L;
        const b=d.withChildren();
        for(b.forEach(O => {
          f.push(O);
          T.add(O);
        });f.length!==0;){
          d=f.shift();
          v=d.getEdges();
          for(let C=v.length, G=0;G<C;G++){
            const k=v[G];
            L=k.getOtherEndInGraph(d,this);

            if (L!=null&&!T.has(L)) {const Y=L.withChildren();Y.forEach(O => {
              f.push(O);
              T.add(O);
            })}
          }
        }
        this.isConnected=false;

        if (T.size>=this.nodes.length) {
          let K=0;
          T.forEach(O => {
            if (O.owner==c) {
              K++;
            }
          });

          if (K==this.nodes.length) {
            (this.isConnected = true);
          }
        }
      };

      A.exports=o;
    }),((A, P, N) => {
      let u;
      const h=N(1);
      function a(e){
        u=N(6);
        this.layout=e;
        this.graphs=[];
        this.edges=[];
      }

      a.prototype.addRoot=function(){
        const e=this.layout.newGraph();
        const r=this.layout.newNode(null);
        const l=this.add(e,r);
        this.setRootGraph(l);
        return this.rootGraph;
      };

      a.prototype.add=function(e,r,l,i,g){if(l==null&&i==null&&g==null){
        if (e==null) {
          throw"Graph is null!";
        }if (r==null) {
          throw"Parent node is null!";
        }if (this.graphs.includes(e)) {
          throw"Graph already in this graph mgr!";
        }
        this.graphs.push(e);

        if (e.parent!=null) {
          throw"Already has a parent!";
        }

        if (r.child!=null) {
          throw"Already has a child!";
        }
        e.parent=r;
        r.child=e;
        return e;
      }else{
        g=l;
        i=r;
        l=e;
        const t=i.getOwner();
        const o=g.getOwner();
        if (!(t!=null&&t.getGraphManager()==this)) {
          throw"Source not in this graph mgr!";
        }if (!(o!=null&&o.getGraphManager()==this)) {
          throw"Target not in this graph mgr!";
        }if (t==o) {
          l.isInterGraph=false;
          return t.add(l,i,g);
        }
        l.isInterGraph=true;
        l.source=i;
        l.target=g;

        if (this.edges.includes(l)) {
          throw"Edge already in inter-graph edge list!";
        }

        this.edges.push(l);

        if (!(l.source!=null&&l.target!=null)) {
          throw"Edge source and/or target is null!";
        }

        if (!(!l.source.edges.includes(l)&&!l.target.edges.includes(l))) {
          throw"Edge already in source and/or target incidency list!";
        }
        l.source.edges.push(l);
        l.target.edges.push(l);
        return l;
      }};

      a.prototype.remove=function(e){if(e instanceof u){
        const r=e;if (r.getGraphManager()!=this) {
            throw"Graph not in this graph mgr";
          }if (!(r==this.rootGraph||r.parent!=null&&r.parent.graphManager==this)) {
            throw"Invalid parent node!";
          }let l=[];l=l.concat(r.getEdges());
        var i;
        for (var g=l.length, t=0; t<g; t++) {
          i=l[t];
          r.remove(i);
        }let o=[];o=o.concat(r.getNodes());let s;g=o.length;for (var t=0; t<g; t++) {
            s=o[t];
            r.remove(s);
          }

        if (r==this.rootGraph) {
          this.setRootGraph(null);
        }

        var c=this.graphs.indexOf(r);
        this.graphs.splice(c,1);
        r.parent=null;
      }else if(e instanceof h){
        i=e;

        if (i==null) {
          throw"Edge is null!";
        }

        if (!i.isInterGraph) {
          throw"Not an inter-graph edge!";
        }if (!(i.source!=null&&i.target!=null)) {
          throw"Source and/or target is null!";
        }if (!(i.source.edges.includes(i)&&i.target.edges.includes(i))) {
          throw"Source and/or target doesn't know this edge!";
        }var c=i.source.edges.indexOf(i);
        i.source.edges.splice(c,1);
        c=i.target.edges.indexOf(i);
        i.target.edges.splice(c,1);

        if (!(i.source.owner!=null&&i.source.owner.getGraphManager()!=null)) {
          throw"Edge owner graph or owner graph manager is null!";
        }

        if (!i.source.owner.getGraphManager().edges.includes(i)) {
          throw"Not in owner graph manager's edge list!";
        }var c=i.source.owner.getGraphManager().edges.indexOf(i);i.source.owner.getGraphManager().edges.splice(c,1)
      }};

      a.prototype.updateBounds=function(){this.rootGraph.updateBounds(true)};
      a.prototype.getGraphs=function(){return this.graphs};

      a.prototype.getAllNodes=function(){if(this.allNodes==null){
        let e=[];
        const r=this.getGraphs();
        for (let l=r.length, i=0; i<l; i++) {
          e=e.concat(r[i].getNodes());
        }this.allNodes=e
      }return this.allNodes};

      a.prototype.resetAllNodes=function(){this.allNodes=null};
      a.prototype.resetAllEdges=function(){this.allEdges=null};
      a.prototype.resetAllNodesToApplyGravitation=function(){this.allNodesToApplyGravitation=null};

      a.prototype.getAllEdges=function(){if(this.allEdges==null){
        let e=[];
        const r=this.getGraphs();
        r.length;for (let l=0; l<r.length; l++) {
          e=e.concat(r[l].getEdges());
        }
        e=e.concat(this.edges);
        this.allEdges=e;
      }return this.allEdges};

      a.prototype.getAllNodesToApplyGravitation=function(){return this.allNodesToApplyGravitation};

      a.prototype.setAllNodesToApplyGravitation=function(e){if (this.allNodesToApplyGravitation!=null) {
        throw"assert failed";
      }this.allNodesToApplyGravitation=e};

      a.prototype.getRoot=function(){return this.rootGraph};

      a.prototype.setRootGraph=function(e){
        if (e.getGraphManager()!=this) {
          throw"Root not in this graph mgr!";
        }
        this.rootGraph=e;

        if (e.parent==null) {
          (e.parent = this.layout.newNode("Root node"));
        }
      };

      a.prototype.getLayout=function(){return this.layout};

      a.prototype.isOneAncestorOfOther=(e, r) => {
        if (!(e!=null&&r!=null)) {
          throw"assert failed";
        }if (e==r) {
          return true;
        }
        let l=e.getOwner();
        let i;
        do{
          i=l.getParent();

          if (i==null) {
            break;
          }

          if (i==r) {
            return true;
          }
          l=i.getOwner();

          if (l==null) {
            break
          }
        }while(true);l=r.getOwner();do{
          i=l.getParent();

          if (i==null) {
            break;
          }

          if (i==e) {
            return true;
          }
          l=i.getOwner();

          if (l==null) {
            break
          }
        }while(true);return false;
      };

      a.prototype.calcLowestCommonAncestors=function(){
        let e;
        let r;
        let l;
        let i;
        let g;
        const t=this.getAllEdges();
        for(let o=t.length, s=0;s<o;s++){
          e=t[s];
          r=e.source;
          l=e.target;
          e.lca=null;
          e.sourceInLca=r;
          e.targetInLca=l;

          if (r==l)
            {e.lca=r.getOwner();continue}

          for(i=r.getOwner();e.lca==null;){
            e.targetInLca=l;

            for (g=l.getOwner(); e.lca==null; ) {
              if(g==i){e.lca=g;break}if (g==this.rootGraph) {
                break;
              }if (e.lca!=null) {
                throw"assert failed";
              }
              e.targetInLca=g.getParent();
              g=e.targetInLca.getOwner();
            }

            if (i==this.rootGraph) {
              break;
            }

            if (e.lca==null) {
              e.sourceInLca=i.getParent();
              i=e.sourceInLca.getOwner();
            }
          }if (e.lca==null) {
            throw"assert failed"
          }
        }
      };

      a.prototype.calcLowestCommonAncestor=(e, r) => {if (e==r) {
        return e.getOwner();
      }let l=e.getOwner();do{if (l==null) {
        break;
      }let i=r.getOwner();do{if (i==null) {
        break;
      }if (i==l) {
        return i;
      }i=i.getParent().getOwner()}while(true);l=l.getParent().getOwner()}while(true);return l};

      a.prototype.calcInclusionTreeDepths=function(e,r){
        if (e==null&&r==null) {
          e=this.rootGraph;
          r=1;
        }

        let l;
        const i=e.getNodes();
        for (let g=i.length, t=0; t<g; t++) {
          l=i[t];
          l.inclusionTreeDepth=r;

          if (l.child!=null) {
            this.calcInclusionTreeDepths(l.child,r+1);
          }
        }
      };

      a.prototype.includesInvalidEdge=function(){
        let e;
        const r=[];
        for (var l=this.edges.length, i=0; i<l; i++) {
          e=this.edges[i];

          if (this.isOneAncestorOfOther(e.source,e.target)) {
            r.push(e);
          }
        }for (var i=0; i<r.length; i++) {
          this.remove(r[i]);
        }return false;
      };

      A.exports=a;
    }),((A, P, N) => {
      const u=N(12);function h(){}

      h.calcSeparationAmount=function(a,e,r,l){
        if (!a.intersects(e)) {
          throw"assert failed";
        }const i=new Array(2);
        this.decideDirectionsForOverlappingNodes(a,e,i);
        r[0]=Math.min(a.getRight(),e.getRight())-Math.max(a.x,e.x);
        r[1]=Math.min(a.getBottom(),e.getBottom())-Math.max(a.y,e.y);

        if (a.getX()<=e.getX()&&a.getRight()>=e.getRight()) {
          r[0]+=Math.min(e.getX()-a.getX(),a.getRight()-e.getRight());
        } else if (e.getX()<=a.getX()&&e.getRight()>=a.getRight()) {
          (r[0] += Math.min(a.getX()-e.getX(),e.getRight()-a.getRight()));
        }

        if (a.getY()<=e.getY()&&a.getBottom()>=e.getBottom()) {
          r[1]+=Math.min(e.getY()-a.getY(),a.getBottom()-e.getBottom());
        } else if (e.getY()<=a.getY()&&e.getBottom()>=a.getBottom()) {
          (r[1] += Math.min(a.getY()-e.getY(),e.getBottom()-a.getBottom()));
        }

        let g=Math.abs((e.getCenterY()-a.getCenterY())/(e.getCenterX()-a.getCenterX()));

        if (e.getCenterY()===a.getCenterY()&&e.getCenterX()===a.getCenterX()) {
          (g = 1);
        }

        let t=g*r[0];
        let o=r[1]/g;

        if (r[0]<o) {
          o=r[0];
        } else {
          t=r[1];
        }

        r[0]=-1*i[0]*(o/2+l);
        r[1]=-1*i[1]*(t/2+l);
      };

      h.decideDirectionsForOverlappingNodes=(a, e, r) => {
        if (a.getCenterX()<e.getCenterX()) {
          r[0]=-1;
        } else {
          r[0]=1;
        }

        if (a.getCenterY()<e.getCenterY()) {
          r[1]=-1;
        } else {
          r[1]=1;
        }
      };

      h.getIntersection2=function(a,e,r){
        const l=a.getCenterX();
        const i=a.getCenterY();
        const g=e.getCenterX();
        const t=e.getCenterY();
        if (a.intersects(e)) {
          r[0]=l;
          r[1]=i;
          r[2]=g;
          r[3]=t;
          return true;
        }
        const o=a.getX();
        const s=a.getY();
        const c=a.getRight();
        const f=a.getX();
        const T=a.getBottom();
        const d=a.getRight();
        const v=a.getWidthHalf();
        const L=a.getHeightHalf();
        const b=e.getX();
        const C=e.getY();
        const G=e.getRight();
        const k=e.getX();
        const Y=e.getBottom();
        const K=e.getRight();
        const O=e.getWidthHalf();
        const it=e.getHeightHalf();
        let n=false;
        let m=false;
        if(l===g){if (i>t) {
          r[0]=l;
          r[1]=s;
          r[2]=g;
          r[3]=Y;
          return false;
        }if (i<t) {
          r[0]=l;
          r[1]=T;
          r[2]=g;
          r[3]=C;
          return false;
        }}else if(i===t){if (l>g) {
          r[0]=o;
          r[1]=i;
          r[2]=G;
          r[3]=t;
          return false;
        }if (l<g) {
          r[0]=c;
          r[1]=i;
          r[2]=b;
          r[3]=t;
          return false;
        }}else{
          const p=a.height/a.width;
          const E=e.height/e.width;
          const y=(t-i)/(g-l);
          let R=void 0;
          let M=void 0;
          let S=void 0;
          let W=void 0;
          let D=void 0;
          let q=void 0;

          if (-p===y) {
            if (l>g) {
              r[0]=f;
              r[1]=T;
              n=true;
            } else {
              r[0]=c;
              r[1]=s;
              n=true;
            }
          } else if (p===y) {
            if (l>g) {
              r[0]=o;
              r[1]=s;
              n=true;
            } else {
              r[0]=d;
              r[1]=T;
              n=true;
            }
          }

          if (-E===y) {
            if (g>l) {
              r[2]=k;
              r[3]=Y;
              m=true;
            } else {
              r[2]=G;
              r[3]=C;
              m=true;
            }
          } else if (E===y) {
            if (g>l) {
              r[2]=b;
              r[3]=C;
              m=true;
            } else {
              r[2]=K;
              r[3]=Y;
              m=true;
            }
          }

          if (n&&m) {
            return false;
          }

          if (l>g) {
            if (i>t) {
              R=this.getCardinalDirection(p,y,4);
              M=this.getCardinalDirection(E,y,2);
            } else {
              R=this.getCardinalDirection(-p,y,3);
              M=this.getCardinalDirection(-E,y,1);
            }
          } else if (i>t) {
            R=this.getCardinalDirection(-p,y,1);
            M=this.getCardinalDirection(-E,y,3);
          } else {
            R=this.getCardinalDirection(p,y,2);
            M=this.getCardinalDirection(E,y,4);
          }

          if (!n) {
            switch(R){case 1:
              {
                W=s;
                S=l+-L/y;
                r[0]=S;
                r[1]=W;
                break;
              }case 2:
              {
                S=d;
                W=i+v*y;
                r[0]=S;
                r[1]=W;
                break;
              }case 3:
              {
                W=T;
                S=l+L/y;
                r[0]=S;
                r[1]=W;
                break;
              }case 4:
              {
                S=f;
                W=i+-v*y;
                r[0]=S;
                r[1]=W;
                break
              }}
          }

          if (!m) {
            switch(M){case 1:
              {
                q=C;
                D=g+-it/y;
                r[2]=D;
                r[3]=q;
                break;
              }case 2:
              {
                D=K;
                q=t+O*y;
                r[2]=D;
                r[3]=q;
                break;
              }case 3:
              {
                q=Y;
                D=g+it/y;
                r[2]=D;
                r[3]=q;
                break;
              }case 4:
              {
                D=k;
                q=t+-O*y;
                r[2]=D;
                r[3]=q;
                break
              }}
          }
        }return false;
      };

      h.getCardinalDirection=(a, e, r) => a>e?r:1+r%4;

      h.getIntersection=function(a,e,r,l){
        if (l==null) {
          return this.getIntersection2(a,e,r);
        }
        const i=a.x;
        const g=a.y;
        const t=e.x;
        const o=e.y;
        const s=r.x;
        const c=r.y;
        const f=l.x;
        const T=l.y;
        let d=void 0;
        let v=void 0;
        let L=void 0;
        let b=void 0;
        let C=void 0;
        let G=void 0;
        let k=void 0;
        let Y=void 0;
        let K=void 0;
        L=o-g;
        C=i-t;
        k=t*g-i*o;
        b=T-c;
        G=s-f;
        Y=f*c-s*T;
        K=L*G-b*C;
        return K===0?null:(d=(C*Y-G*k)/K,v=(b*k-L*Y)/K,new u(d,v));
      };

      h.angleOfVector=function(a,e,r,l){
        let i=void 0;

        if (a!==r) {
          i=Math.atan((l-e)/(r-a));
          r<a?i+=Math.PI:l<e&&(i+=this.TWO_PI);
        } else if (l<e) {
          i=this.ONE_AND_HALF_PI;
        } else {
          i=this.HALF_PI;
        }

        return i;
      };

      h.doIntersect=(a, e, r, l) => {
        const i=a.x;
        const g=a.y;
        const t=e.x;
        const o=e.y;
        const s=r.x;
        const c=r.y;
        const f=l.x;
        const T=l.y;
        const d=(t-i)*(T-c)-(f-s)*(o-g);
        if (d===0) {
          return false;
        }
        const v=((T-c)*(f-i)+(s-f)*(T-g))/d;
        const L=((g-o)*(f-i)+(t-i)*(T-g))/d;
        return v > 0&&v<1&&L > 0&&L<1;
      };

      h.findCircleLineIntersections=(a, e, r, l, i, g, t) => {
        const o=(r-a)*(r-a)+(l-e)*(l-e);
        const s=2*((a-i)*(r-a)+(e-g)*(l-e));
        const c=(a-i)*(a-i)+(e-g)*(e-g)-t*t;
        const f=s*s-4*o*c;
        if (f>=0) {
          const T=(-s+Math.sqrt(s*s-4*o*c))/(2*o);
          const d=(-s-Math.sqrt(s*s-4*o*c))/(2*o);
          const v=null;
          return T>=0&&T<=1?[T]:d>=0&&d<=1?[d]:v
        } else {
          return null
        }
      };

      h.HALF_PI=0.5/* .5 */*Math.PI;
      h.ONE_AND_HALF_PI=1.5*Math.PI;
      h.TWO_PI=2*Math.PI;
      h.THREE_PI=3*Math.PI;
      A.exports=h;
    }),((A, P, N) => {
      function u(){}
      u.sign=h => h>0?1:h<0?-1:0;
      u.floor=h => h<0?Math.ceil(h):Math.floor(h);
      u.ceil=h => h<0?Math.floor(h):Math.ceil(h);
      A.exports=u;
    }),((A, P, N) => {
      function u(){}
      u.MAX_VALUE=2147483647;
      u.MIN_VALUE=-2147483648;
      A.exports=u;
    }),((A, P, N) => {
      const u = (() => {function i(g,t){
        for (const s of t) {
          s.enumerable=s.enumerable||false;
          s.configurable=true;

          if ("value"in s) {
            (s.writable = true);
          }

          Object.defineProperty(g,s.key,s);
        }
      }return (g, t, o) => {
        if (t) {
          i(g.prototype,t);
        }

        if (o) {
          i(g,o);
        }

        return g;
      };})();function h(i,g){if (!(i instanceof g)) {
        throw new TypeError("Cannot call a class as a function")
      }}
      const a=g => ({
        value:g,
        next:null,
        prev:null
      });

      const e=(g, t, o, s) => {
        if (g!==null) {
          g.next=t;
        } else {
          s.head=t;
        }

        if (o!==null) {
          o.prev=t;
        } else {
          s.tail=t;
        }

        t.prev=g;
        t.next=o;
        s.length++;
        return t;
      };

      const r=(g, t) => {
        const o=g.prev;
        const s=g.next;

        if (o!==null) {
          o.next=s;
        } else {
          t.head=s;
        }

        if (s!==null) {
          s.prev=o;
        } else {
          t.tail=o;
        }

        g.prev = null;
        g.next = null;
        t.length--;
        return g;
      };

      const l = (() => {
        function i(g){
          const t=this;
          h(this,i);
          this.length=0;
          this.head=null;
          this.tail=null;
          g?.forEach(o => t.push(o));
        }

        u(i,[{key:"size",value() {return this.length}},{key:"insertBefore",value(t, o) {return e(o.prev,a(t),o,this)}},{key:"insertAfter",value(t, o) {return e(o,a(t),o.next,this)}},{key:"insertNodeBefore",value(t, o) {return e(o.prev,t,o,this)}},{key:"insertNodeAfter",value(t, o) {return e(o,t,o.next,this)}},{key:"push",value(t) {return e(this.tail,a(t),null,this)}},{key:"unshift",value(t) {return e(null,a(t),this.head,this)}},{key:"remove",value(t) {return r(t,this)}},{key:"pop",value() {return r(this.tail,this).value}},{key:"popNode",value() {return r(this.tail,this)}},{key:"shift",value() {return r(this.head,this).value}},{key:"shiftNode",value() {return r(this.head,this)}},{key:"get_object_at",value(t) {if(t<=this.length()){
          let s=this.head;
          for (let o=1; o<t; ) {
            s=s.next;
            o++;
          }return s.value
        }}},{key:"set_object_at",value(t, o) {if(t<=this.length()){
          let c=this.head;
          for (let s=1; s<t; ) {
            c=c.next;
            s++;
          }c.value=o
        }}}]);

        return i;
      })();

      A.exports=l
    }),((A, P, N) => {
      function u(h,a,e){
        this.x=null;
        this.y=null;

        if (h==null&&a==null&&e==null) {
          this.x=0;
          this.y=0;
        } else if (typeof h=="number"&&typeof a=="number"&&e==null) {
          this.x=h;
          this.y=a;
        } else if (h.constructor.name=="Point"&&a==null&&e==null) {
          e=h;
          this.x=e.x;
          this.y=e.y;
        }
      }
      u.prototype.getX=function(){return this.x};
      u.prototype.getY=function(){return this.y};
      u.prototype.getLocation=function(){return new u(this.x,this.y)};
      u.prototype.setLocation=function(h,a,e){
        if (h.constructor.name=="Point"&&a==null&&e==null) {
          e=h;
          this.setLocation(e.x,e.y);
        } else if (typeof h=="number"&&typeof a=="number"&&e==null) {
          if (parseInt(h)==h&&parseInt(a)==a) {
            this.move(h,a);
          } else {
            this.x=Math.floor(h+0.5/* .5 */);
            this.y=Math.floor(a+0.5/* .5 */);
          }
        }
      };

      u.prototype.move=function(h,a){
        this.x=h;
        this.y=a;
      };

      u.prototype.translate=function(h,a){
        this.x+=h;
        this.y+=a;
      };

      u.prototype.equals=function(h){if(h.constructor.name=="Point"){const a=h;return this.x==a.x&&this.y==a.y}return this==h};
      u.prototype.toString=function(){return `${new u().constructor.name}[x=${this.x},y=${this.y}]`;};
      A.exports=u;
    }),((A, P, N) => {
      function u(h,a,e,r){
        this.x=0;
        this.y=0;
        this.width=0;
        this.height=0;

        if (h!=null&&a!=null&&e!=null&&r!=null) {
          this.x=h;
          this.y=a;
          this.width=e;
          this.height=r;
        }
      }
      u.prototype.getX=function(){return this.x};
      u.prototype.setX=function(h){this.x=h};
      u.prototype.getY=function(){return this.y};
      u.prototype.setY=function(h){this.y=h};
      u.prototype.getWidth=function(){return this.width};
      u.prototype.setWidth=function(h){this.width=h};
      u.prototype.getHeight=function(){return this.height};
      u.prototype.setHeight=function(h){this.height=h};
      u.prototype.getRight=function(){return this.x+this.width};
      u.prototype.getBottom=function(){return this.y+this.height};
      u.prototype.intersects=function(h){return!(this.getRight()<h.x||this.getBottom()<h.y||h.getRight()<this.x||h.getBottom()<this.y)};
      u.prototype.getCenterX=function(){return this.x+this.width/2};
      u.prototype.getMinX=function(){return this.getX()};
      u.prototype.getMaxX=function(){return this.getX()+this.width};
      u.prototype.getCenterY=function(){return this.y+this.height/2};
      u.prototype.getMinY=function(){return this.getY()};
      u.prototype.getMaxY=function(){return this.getY()+this.height};
      u.prototype.getWidthHalf=function(){return this.width/2};
      u.prototype.getHeightHalf=function(){return this.height/2};
      A.exports=u;
    }),((A, P, N) => {
      const u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a => typeof a:a => a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a;function h(){}
      h.lastID=0;
      h.createID=a => h.isPrimitive(a)?a:(a.uniqueID!=null||(a.uniqueID=h.getString(),h.lastID++),a.uniqueID);

      h.getString=a => {
        if (a==null) {
          (a = h.lastID);
        }

        return `Object#${a}`;
      };

      h.isPrimitive=a => {const e=typeof a === "undefined"?"undefined":u(a);return a==null||e!="object"&&e!="function"};
      A.exports=h;
    }),((A, P, N) => {
      function u(s){if (Array.isArray(s)) {
        const f=Array(s.length);
        for (let c=0; c<s.length; c++) {
          f[c]=s[c];
        }return f
      } else {
        return Array.from(s)
      }}
      const h=N(0);
      const a=N(7);
      const e=N(3);
      const r=N(1);
      const l=N(6);
      const i=N(5);
      const g=N(17);
      const t=N(29);

      class o extends t {
        constructor(s) {
          super();
          this.layoutQuality=h.QUALITY;
          this.createBendsAsNeeded=h.DEFAULT_CREATE_BENDS_AS_NEEDED;
          this.incremental=h.DEFAULT_INCREMENTAL;
          this.animationOnLayout=h.DEFAULT_ANIMATION_ON_LAYOUT;
          this.animationDuringLayout=h.DEFAULT_ANIMATION_DURING_LAYOUT;
          this.animationPeriod=h.DEFAULT_ANIMATION_PERIOD;
          this.uniformLeafNodeSizes=h.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
          this.edgeToDummyNodes=new Map;
          this.graphManager=new a(this);
          this.isLayoutFinished=false;
          this.isSubLayout=false;
          this.isRemoteUse=false;

          if (s!=null) {
            (this.isRemoteUse = s);
          }
        }

        getGraphManager() {return this.graphManager}
        getAllNodes() {return this.graphManager.getAllNodes()}
        getAllEdges() {return this.graphManager.getAllEdges()}
        getAllNodesToApplyGravitation() {return this.graphManager.getAllNodesToApplyGravitation()}

        newGraphManager() {
          const s=new a(this);
          this.graphManager=s;
          return s;
        }

        newGraph(s) {return new l(null,this.graphManager,s)}
        newNode(s) {return new e(this.graphManager,s)}
        newEdge(s) {return new r(null,null,s)}
        checkLayoutSuccess() {return this.graphManager.getRoot()==null||this.graphManager.getRoot().getNodes().length==0||this.graphManager.includesInvalidEdge()}

        runLayout() {
          this.isLayoutFinished=false;

          if (this.tilingPreLayout) {
            this.tilingPreLayout();
          }

          this.initParameters();
          let s;

          if (this.checkLayoutSuccess()) {
            s=false;
          } else {
            s=this.layout();
          }

          return h.ANIMATE==="during"?false:(s&&(this.isSubLayout||this.doPostLayout()),this.tilingPostLayout&&this.tilingPostLayout(),this.isLayoutFinished=true,s);
        }

        doPostLayout() {
          if (!this.incremental) {
            this.transform();
          }

          this.update();
        }

        update2() {
          if (this.createBendsAsNeeded) {
            this.createBendpointsFromDummyNodes();
            this.graphManager.resetAllEdges();
          }

          if (!this.isRemoteUse) {for (var s=this.graphManager.getAllEdges(),c=0; c<s.length; c++) {
            s[c];
          }for (var f=this.graphManager.getRoot().getNodes(),c=0; c<f.length; c++) {
            f[c];
          }this.update(this.graphManager.getRoot())}
        }

        update(s) {if (s==null) {
          this.update2();
        } else if(s instanceof e){const c=s;if (c.getChild()!=null) {
          for (let f=c.getChild().getNodes(), T=0; T<f.length; T++) {
            update(f[T]);
          }
        }if(c.vGraphObject!=null){const d=c.vGraphObject;d.update(c)}}else if(s instanceof r){const v=s;if(v.vGraphObject!=null){const L=v.vGraphObject;L.update(v)}}else if(s instanceof l){const b=s;if(b.vGraphObject!=null){const C=b.vGraphObject;C.update(b)}}}

        initParameters() {
          if (!this.isSubLayout) {
            this.layoutQuality=h.QUALITY;
            this.animationDuringLayout=h.DEFAULT_ANIMATION_DURING_LAYOUT;
            this.animationPeriod=h.DEFAULT_ANIMATION_PERIOD;
            this.animationOnLayout=h.DEFAULT_ANIMATION_ON_LAYOUT;
            this.incremental=h.DEFAULT_INCREMENTAL;
            this.createBendsAsNeeded=h.DEFAULT_CREATE_BENDS_AS_NEEDED;
            this.uniformLeafNodeSizes=h.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
          }

          if (this.animationDuringLayout) {
            (this.animationOnLayout = false);
          }
        }

        transform(s) {if (s==null) {
          this.transform(new i(0,0));
        } else {
          const c=new g;
          const f=this.graphManager.getRoot().updateLeftTop();
          if(f!=null){
            c.setWorldOrgX(s.x);
            c.setWorldOrgY(s.y);
            c.setDeviceOrgX(f.x);
            c.setDeviceOrgY(f.y);
            let d;
            for (let T=this.getAllNodes(), v=0; v<T.length; v++) {
              d=T[v];
              d.transform(c);
            }
          }
        }}

        positionNodesRandomly(s) {if (s==null) {
          this.positionNodesRandomly(this.getGraphManager().getRoot());
          this.getGraphManager().getRoot().updateBounds(true);
        } else {
          let c;
          let f;
          for (let T=s.getNodes(), d=0; d<T.length; d++) {
            c=T[d];
            f=c.getChild();

            if (f==null||f.getNodes().length==0) {
              c.scatter();
            } else {
              this.positionNodesRandomly(f);
              c.updateBounds();
            }
          }
        }}

        getFlatForest() {
          let s=[];
          let c=true;
          let T=true;
          for (var f=this.graphManager.getRoot().getNodes(), d=0; d<f.length; d++) {
            if (f[d].getChild()!=null) {
              (T = false);
            }
          }if (!T) {
            return s;
          }
          let v=new Set;
          const L=[];
          let b=new Map;
          let C=[];
          for(C=C.concat(f);C.length>0&&c;){for(L.push(C[0]);L.length>0&&c;){
            const G=L[0];
            L.splice(0,1);
            v.add(G);
            for(var k=G.getEdges(),d=0;d<k.length;d++){const Y=k[d].getOtherEnd(G);if (b.get(G)!=Y) {
              if (!v.has(Y)) {
                L.push(Y);
                b.set(Y,G);
              } else
                {c=false;break}
            }}
          }if (!c) {
            s=[];
          } else {
            const K=[].concat(u(v));s.push(K);for(var d=0;d<K.length;d++){
            const O=K[d];
            const it=C.indexOf(O);

            if (it>-1) {
              C.splice(it,1);
            }
          }
            v=new Set;
            b=new Map;
          }}return s
        }

        createDummyNodesForBendpoints(s) {
          const c=[];
          let f=s.source;
          const T=this.graphManager.calcLowestCommonAncestor(s.source,s.target);
          for(let d=0;d<s.bendpoints.length;d++){
            const v=this.newNode(null);
            v.setRect(new Point(0,0),new Dimension(1,1));
            T.add(v);
            var L=this.newEdge(null);
            this.graphManager.add(L,f,v);
            c.add(v);
            f=v;
          }var L=this.newEdge(null);
          this.graphManager.add(L,f,s.target);
          this.edgeToDummyNodes.set(s,c);

          if (s.isInterGraph()) {
            this.graphManager.remove(s);
          } else {
            T.remove(s);
          }

          return c;
        }

        createBendpointsFromDummyNodes() {
          let s=[];
          s=s.concat(this.graphManager.getAllEdges());
          s=[].concat(u(this.edgeToDummyNodes.keys())).concat(s);

          for (const f of s) {
            if(f.bendpoints.length>0){for(let T=this.edgeToDummyNodes.get(f), d=0;d<T.length;d++){
              const v=T[d];
              const L=new i(v.getCenterX(),v.getCenterY());
              const b=f.bendpoints.get(d);
              b.x=L.x;
              b.y=L.y;
              v.getOwner().remove(v);
            }this.graphManager.add(f,f.source,f.target)}
          }
        }

        static transform(s, c, f, T) {if(f!=null&&T!=null){let d=c;if(s<=50){const v=c/f;d-=(c-v)/50*(50-s)}else{const L=c*T;d+=(L-c)/50*(s-50)}return d}else{
          let b;
          let C;

          if (s<=50) {
            b=9*c/500;
            C=c/10;
          } else {
            b=9*c/50;
            C=-8*c;
          }

          return b*s+C;
        }}

        static findCenterOfTree(s) {
          let c=[];c=c.concat(s);
          let f=[];
          const T=new Map;
          let d=false;
          let v=null;

          if ((c.length==1 || c.length==2)) {
            d=true;
            v=c[0];
          }

          for(var L=0;L<c.length;L++){
            var b=c[L];
            const C=b.getNeighborsList().size;
            T.set(b,b.getNeighborsList().size);

            if (C==1) {
              f.push(b);
            }
          }let G=[];for(G=G.concat(f);!d;){
            let k=[];
            k=k.concat(G);
            G=[];
            for(var L=0;L<c.length;L++){
              var b=c[L];
              const Y=c.indexOf(b);

              if (Y>=0) {
                c.splice(Y,1);
              }

              const K=b.getNeighborsList();K.forEach(n => {if(!f.includes(n)){
                const m=T.get(n);
                const p=m-1;

                if (p==1) {
                  G.push(n);
                }

                T.set(n,p);
              }})
            }
            f=f.concat(G);

            if ((c.length==1 || c.length==2)) {
              d=true;
              v=c[0];
            }
          }return v
        }

        setGraphManager(s) {this.graphManager=s}
      }

      o.RANDOM_SEED=1;
      A.exports=o;
    }),((A, P, N) => {
      function u(){}
      u.seed=1;
      u.x=0;

      u.nextDouble=() => {
        u.x=Math.sin(u.seed++)*10000/* 1e4 */;
        return u.x-Math.floor(u.x);
      };

      A.exports=u;
    }),((A, P, N) => {
      const u=N(5);function h(a,e){
        this.lworldOrgX=0;
        this.lworldOrgY=0;
        this.ldeviceOrgX=0;
        this.ldeviceOrgY=0;
        this.lworldExtX=1;
        this.lworldExtY=1;
        this.ldeviceExtX=1;
        this.ldeviceExtY=1;
      }
      h.prototype.getWorldOrgX=function(){return this.lworldOrgX};
      h.prototype.setWorldOrgX=function(a){this.lworldOrgX=a};
      h.prototype.getWorldOrgY=function(){return this.lworldOrgY};
      h.prototype.setWorldOrgY=function(a){this.lworldOrgY=a};
      h.prototype.getWorldExtX=function(){return this.lworldExtX};
      h.prototype.setWorldExtX=function(a){this.lworldExtX=a};
      h.prototype.getWorldExtY=function(){return this.lworldExtY};
      h.prototype.setWorldExtY=function(a){this.lworldExtY=a};
      h.prototype.getDeviceOrgX=function(){return this.ldeviceOrgX};
      h.prototype.setDeviceOrgX=function(a){this.ldeviceOrgX=a};
      h.prototype.getDeviceOrgY=function(){return this.ldeviceOrgY};
      h.prototype.setDeviceOrgY=function(a){this.ldeviceOrgY=a};
      h.prototype.getDeviceExtX=function(){return this.ldeviceExtX};
      h.prototype.setDeviceExtX=function(a){this.ldeviceExtX=a};
      h.prototype.getDeviceExtY=function(){return this.ldeviceExtY};
      h.prototype.setDeviceExtY=function(a){this.ldeviceExtY=a};

      h.prototype.transformX=function(a){
        let e=0;
        const r=this.lworldExtX;

        if (r!=0) {
          (e = this.ldeviceOrgX+(a-this.lworldOrgX)*this.ldeviceExtX/r);
        }

        return e;
      };

      h.prototype.transformY=function(a){
        let e=0;
        const r=this.lworldExtY;

        if (r!=0) {
          (e = this.ldeviceOrgY+(a-this.lworldOrgY)*this.ldeviceExtY/r);
        }

        return e;
      };

      h.prototype.inverseTransformX=function(a){
        let e=0;
        const r=this.ldeviceExtX;

        if (r!=0) {
          (e = this.lworldOrgX+(a-this.ldeviceOrgX)*this.lworldExtX/r);
        }

        return e;
      };

      h.prototype.inverseTransformY=function(a){
        let e=0;
        const r=this.ldeviceExtY;

        if (r!=0) {
          (e = this.lworldOrgY+(a-this.ldeviceOrgY)*this.lworldExtY/r);
        }

        return e;
      };

      h.prototype.inverseTransformPoint=function(a){const e=new u(this.inverseTransformX(a.x),this.inverseTransformY(a.y));return e};
      A.exports=h;
    }),((A, P, N) => {
      function u(t){if (Array.isArray(t)) {
        const s=Array(t.length);
        for (let o=0; o<t.length; o++) {
          s[o]=t[o];
        }return s
      } else {
        return Array.from(t)
      }}
      const h=N(15);
      const a=N(4);
      const e=N(0);
      const r=N(8);
      const l=N(9);
      function i(){
        h.call(this);
        this.useSmartIdealEdgeLengthCalculation=a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
        this.gravityConstant=a.DEFAULT_GRAVITY_STRENGTH;
        this.compoundGravityConstant=a.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
        this.gravityRangeFactor=a.DEFAULT_GRAVITY_RANGE_FACTOR;
        this.compoundGravityRangeFactor=a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
        this.displacementThresholdPerNode=3*a.DEFAULT_EDGE_LENGTH/100;
        this.coolingFactor=a.DEFAULT_COOLING_FACTOR_INCREMENTAL;
        this.initialCoolingFactor=a.DEFAULT_COOLING_FACTOR_INCREMENTAL;
        this.totalDisplacement=0;
        this.oldTotalDisplacement=0;
        this.maxIterations=a.MAX_ITERATIONS;
      }i.prototype=Object.create(h.prototype);for (const g in h) {
        i[g]=h[g];
      }

      i.prototype.initParameters=function(...args) {
        h.prototype.initParameters.call(this,args);
        this.totalIterations=0;
        this.notAnimatedIterations=0;
        this.useFRGridVariant=a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;
        this.grid=[];
      };

      i.prototype.calcIdealEdgeLengths=function(){
        let t;
        let o;
        let s;
        let c;
        let f;
        let T;
        let d;
        for (let v=this.getGraphManager().getAllEdges(), L=0; L<v.length; L++) {
          t=v[L];
          o=t.idealLength;

          if (t.isInterGraph) {
            c=t.getSource();
            f=t.getTarget();
            T=t.getSourceInLca().getEstimatedSize();
            d=t.getTargetInLca().getEstimatedSize();
            this.useSmartIdealEdgeLengthCalculation&&(t.idealLength+=T+d-2*e.SIMPLE_NODE_SIZE);
            s=t.getLca().getInclusionTreeDepth();
            t.idealLength+=o*a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR*(c.getInclusionTreeDepth()+f.getInclusionTreeDepth()-2*s);
          }
        }
      };

      i.prototype.initSpringEmbedder=function(){
        const t=this.getAllNodes().length;

        if (this.incremental) {
          t>a.ADAPTATION_LOWER_NODE_LIMIT&&(this.coolingFactor=Math.max(this.coolingFactor*a.COOLING_ADAPTATION_FACTOR,this.coolingFactor-(t-a.ADAPTATION_LOWER_NODE_LIMIT)/(a.ADAPTATION_UPPER_NODE_LIMIT-a.ADAPTATION_LOWER_NODE_LIMIT)*this.coolingFactor*(1-a.COOLING_ADAPTATION_FACTOR)));
          this.maxNodeDisplacement=a.MAX_NODE_DISPLACEMENT_INCREMENTAL;
        } else {
          t>a.ADAPTATION_LOWER_NODE_LIMIT?this.coolingFactor=Math.max(a.COOLING_ADAPTATION_FACTOR,1-(t-a.ADAPTATION_LOWER_NODE_LIMIT)/(a.ADAPTATION_UPPER_NODE_LIMIT-a.ADAPTATION_LOWER_NODE_LIMIT)*(1-a.COOLING_ADAPTATION_FACTOR)):this.coolingFactor=1;
          this.initialCoolingFactor=this.coolingFactor;
          this.maxNodeDisplacement=a.MAX_NODE_DISPLACEMENT;
        }

        this.maxIterations=Math.max(this.getAllNodes().length*5,this.maxIterations);
        this.displacementThresholdPerNode=3*a.DEFAULT_EDGE_LENGTH/100;
        this.totalDisplacementThreshold=this.displacementThresholdPerNode*this.getAllNodes().length;
        this.repulsionRange=this.calcRepulsionRange();
      };

      i.prototype.calcSpringForces=function(){
        let o;
        for (let t=this.getAllEdges(), s=0; s<t.length; s++) {
          o=t[s];
          this.calcSpringForce(o,o.idealLength);
        }
      };

      i.prototype.calcRepulsionForces=function(t = true, o = false) {
        let s;
        let c;
        let f;
        let T;
        const d=this.getAllNodes();
        let v;
        if (this.useFRGridVariant) {
          if (this.totalIterations%a.GRID_CALCULATION_CHECK_PERIOD==1&&t) {
            this.updateGrid();
          }

          v=new Set;

          for (s=0; s<d.length; s++) {
            f=d[s];
            this.calculateRepulsionForceOfANode(f,v,t,o);
            v.add(f);
          }
        } else {
          for (s=0; s<d.length; s++) {
            f=d[s];

            for (c=s+1; c<d.length; c++) {
              T=d[c];

              if (f.getOwner()==T.getOwner()) {
                this.calcRepulsionForce(f,T);
              }
            }
          }
        }
      };

      i.prototype.calcGravitationalForces=function(){
        let t;
        for (let o=this.getAllNodesToApplyGravitation(), s=0; s<o.length; s++) {
          t=o[s];
          this.calcGravitationalForce(t);
        }
      };

      i.prototype.moveNodes=function(){
        let o;
        for (let t=this.getAllNodes(), s=0; s<t.length; s++) {
          o=t[s];
          o.move();
        }
      };

      i.prototype.calcSpringForce=function(t,o){
        const s=t.getSource();
        const c=t.getTarget();
        let f;
        let T;
        let d;
        let v;
        if (this.uniformLeafNodeSizes&&s.getChild()==null&&c.getChild()==null) {
          t.updateLengthSimple();
        } else {
          t.updateLength();

          if (t.isOverlapingSourceAndTarget) {
            return;
          }
        }
        f=t.getLength();

        if (f!=0) {
          T=t.edgeElasticity*(f-o);
          d=T*(t.lengthX/f);
          v=T*(t.lengthY/f);
          s.springForceX+=d;
          s.springForceY+=v;
          c.springForceX-=d;
          c.springForceY-=v;
        }
      };

      i.prototype.calcRepulsionForce=function(t,o){
        const s=t.getRect();
        const c=o.getRect();
        const f=new Array(2);
        const T=new Array(4);
        let d;
        let v;
        let L;
        let b;
        let C;
        let G;
        let k;
        if (s.intersects(c)) {
          r.calcSeparationAmount(s,c,f,a.DEFAULT_EDGE_LENGTH/2);
          G=2*f[0];
          k=2*f[1];
          const Y=t.noOfChildren*o.noOfChildren/(t.noOfChildren+o.noOfChildren);
          t.repulsionForceX-=Y*G;
          t.repulsionForceY-=Y*k;
          o.repulsionForceX+=Y*G;
          o.repulsionForceY+=Y*k;
        } else {
          if (this.uniformLeafNodeSizes&&t.getChild()==null&&o.getChild()==null) {
            d=c.getCenterX()-s.getCenterX();
            v=c.getCenterY()-s.getCenterY();
          } else {
            r.getIntersection(s,c,T);
            d=T[2]-T[0];
            v=T[3]-T[1];
          }

          if (Math.abs(d)<a.MIN_REPULSION_DIST) {
            (d = l.sign(d)*a.MIN_REPULSION_DIST);
          }

          if (Math.abs(v)<a.MIN_REPULSION_DIST) {
            (v = l.sign(v)*a.MIN_REPULSION_DIST);
          }

          L=d*d+v*v;
          b=Math.sqrt(L);
          C=(t.nodeRepulsion/2+o.nodeRepulsion/2)*t.noOfChildren*o.noOfChildren/L;
          G=C*d/b;
          k=C*v/b;
          t.repulsionForceX-=G;
          t.repulsionForceY-=k;
          o.repulsionForceX+=G;
          o.repulsionForceY+=k;
        }
      };

      i.prototype.calcGravitationalForce=function(t){
        let o;
        let s;
        let c;
        let f;
        let T;
        let d;
        let v;
        let L;
        o=t.getOwner();
        s=(o.getRight()+o.getLeft())/2;
        c=(o.getTop()+o.getBottom())/2;
        f=t.getCenterX()-s;
        T=t.getCenterY()-c;
        d=Math.abs(f)+t.getWidth()/2;
        v=Math.abs(T)+t.getHeight()/2;

        if (t.getOwner()==this.graphManager.getRoot()) {
          L=o.getEstimatedSize()*this.gravityRangeFactor;
          (d>L||v>L)&&(t.gravitationForceX=-this.gravityConstant*f,t.gravitationForceY=-this.gravityConstant*T);
        } else {
          L=o.getEstimatedSize()*this.compoundGravityRangeFactor;
          (d>L||v>L)&&(t.gravitationForceX=-this.gravityConstant*f*this.compoundGravityConstant,t.gravitationForceY=-this.gravityConstant*T*this.compoundGravityConstant);
        }
      };

      i.prototype.isConverged=function(){
        let t;
        let o=false;

        if (this.totalIterations>this.maxIterations/3) {
          (o = Math.abs(this.totalDisplacement-this.oldTotalDisplacement)<2);
        }

        t=this.totalDisplacement<this.totalDisplacementThreshold;
        this.oldTotalDisplacement=this.totalDisplacement;
        return t||o;
      };

      i.prototype.animate=function(){
        if (this.animationDuringLayout&&!this.isSubLayout) {
          if (this.notAnimatedIterations==this.animationPeriod) {
            this.update();
            this.notAnimatedIterations=0;
          } else {
            this.notAnimatedIterations++;
          }
        }
      };

      i.prototype.calcNoOfChildrenForAllNodes=function(){
        let t;
        for (let o=this.graphManager.getAllNodes(), s=0; s<o.length; s++) {
          t=o[s];
          t.noOfChildren=t.getNoOfChildren();
        }
      };

      i.prototype.calcGrid=function(t){
        let o=0;
        let s=0;
        o=parseInt(Math.ceil((t.getRight()-t.getLeft())/this.repulsionRange));
        s=parseInt(Math.ceil((t.getBottom()-t.getTop())/this.repulsionRange));
        const c=new Array(o);
        for (var f=0; f<o; f++) {
          c[f]=new Array(s);
        }for (var f=0; f<o; f++) {
          for (let T=0; T<s; T++) {
            c[f][T]=new Array;
          }
        }return c
      };

      i.prototype.addNodeToGrid=function(t,o,s){
        let c=0;
        let f=0;
        let T=0;
        let d=0;
        c=parseInt(Math.floor((t.getRect().x-o)/this.repulsionRange));
        f=parseInt(Math.floor((t.getRect().width+t.getRect().x-o)/this.repulsionRange));
        T=parseInt(Math.floor((t.getRect().y-s)/this.repulsionRange));
        d=parseInt(Math.floor((t.getRect().height+t.getRect().y-s)/this.repulsionRange));
        for (let v=c; v<=f; v++) {
          for (let L=T; L<=d; L++) {
            this.grid[v][L].push(t);
            t.setGridCoordinates(c,f,T,d);
          }
        }
      };

      i.prototype.updateGrid=function(){
        let t;
        let o;
        const s=this.getAllNodes();
        this.grid=this.calcGrid(this.graphManager.getRoot());

        for (t=0; t<s.length; t++) {
          o=s[t];
          this.addNodeToGrid(o,this.graphManager.getRoot().getLeft(),this.graphManager.getRoot().getTop());
        }
      };

      i.prototype.calculateRepulsionForceOfANode=function(t,o,s,c){if(this.totalIterations%a.GRID_CALCULATION_CHECK_PERIOD==1&&s||c){
        const f=new Set;t.surrounding=new Array;
        let T;
        const d=this.grid;
        for (var v=t.startX-1; v<t.finishX+2; v++) {
          for (let L=t.startY-1; L<t.finishY+2; L++) {
            if(!(v<0||L<0||v>=d.length||L>=d[0].length)){for (let b=0; b<d[v][L].length; b++) {
              T=d[v][L][b];

              if (!(t.getOwner()!=T.getOwner()||t==T)&&!o.has(T)&&!f.has(T)) {
                const C=Math.abs(t.getCenterX()-T.getCenterX())-(t.getWidth()/2+T.getWidth()/2);
                const G=Math.abs(t.getCenterY()-T.getCenterY())-(t.getHeight()/2+T.getHeight()/2);

                if (C<=this.repulsionRange&&G<=this.repulsionRange) {
                  f.add(T);
                }
              }
            }}
          }
        }t.surrounding=[].concat(u(f))
      }for (v=0; v<t.surrounding.length; v++) {
        this.calcRepulsionForce(t,t.surrounding[v])
      }};

      i.prototype.calcRepulsionRange=() => 0;
      A.exports=i;
    }),((A, P, N) => {
      const u=N(1);
      const h=N(4);
      function a(r,l,i){
        u.call(this,r,l,i);
        this.idealLength=h.DEFAULT_EDGE_LENGTH;
        this.edgeElasticity=h.DEFAULT_SPRING_STRENGTH;
      }a.prototype=Object.create(u.prototype);for (const e in u) {
        a[e]=u[e];
      }A.exports=a
    }),((A, P, N) => {
      const u=N(3);
      const h=N(4);

      class a extends u {
        constructor(r, l, i, g) {
          super(r, l, i, g);
          this.nodeRepulsion=h.DEFAULT_REPULSION_STRENGTH;
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
        }

        setGridCoordinates(r, l, i, g) {
          this.startX=r;
          this.finishX=l;
          this.startY=i;
          this.finishY=g;
        }
      }

      for (const e in u) {
          a[e]=u[e];
        }

      A.exports=a;
    }),((A, P, N) => {
      function u(h,a){
        this.width=0;
        this.height=0;

        if (h!==null&&a!==null) {
          this.height=a;
          this.width=h;
        }
      }
      u.prototype.getWidth=function(){return this.width};
      u.prototype.setWidth=function(h){this.width=h};
      u.prototype.getHeight=function(){return this.height};
      u.prototype.setHeight=function(h){this.height=h};
      A.exports=u;
    }),((A, P, N) => {
      const u=N(14);function h(){
        this.map={};
        this.keys=[];
      }
      h.prototype.put=function(a,e){
        const r=u.createID(a);

        if (!this.contains(r)) {
          this.map[r]=e;
          this.keys.push(a);
        }
      };

      h.prototype.contains=function(a){
        u.createID(a);
        return this.map[a]!=null;
      };

      h.prototype.get=function(a){const e=u.createID(a);return this.map[e]};
      h.prototype.keySet=function(){return this.keys};
      A.exports=h;
    }),((A, P, N) => {
      const u=N(14);function h(){this.set={}}
      h.prototype.add=function(a){
        const e=u.createID(a);

        if (!this.contains(e)) {
          (this.set[e] = a);
        }
      };
      h.prototype.remove=function(a){delete this.set[u.createID(a)]};
      h.prototype.clear=function(){this.set={}};
      h.prototype.contains=function(a){return this.set[u.createID(a)]==a};
      h.prototype.isEmpty=function(){return this.size()===0};
      h.prototype.size=function(){return Object.keys(this.set).length};

      h.prototype.addAllTo=function(a){
        const e=Object.keys(this.set);
        for (let r=e.length, l=0; l<r; l++) {
          a.push(this.set[e[l]])
        }
      };

      h.prototype.size=function(){return Object.keys(this.set).length};
      h.prototype.addAll=function(a){for(let e=a.length, r=0;r<e;r++){const l=a[r];this.add(l)}};
      A.exports=h;
    }),((A, P, N) => {
      function u(){}

      u.multMat=(h, a) => {
        const e=[];
        for(let r=0;r<h.length;r++){e[r]=[];for(let l=0;l<a[0].length;l++){e[r][l]=0;for (let i=0; i<h[0].length; i++) {
          e[r][l]+=h[r][i]*a[i][l]
        }}}return e
      };

      u.transpose=h => {
        const a=[];
        for(let e=0;e<h[0].length;e++){a[e]=[];for (let r=0; r<h.length; r++) {
          a[e][r]=h[r][e]
        }}return a
      };

      u.multCons=(h, a) => {
        const e=[];
        for (let r=0; r<h.length; r++) {
          e[r]=h[r]*a;
        }return e
      };

      u.minusOp=(h, a) => {
        const e=[];
        for (let r=0; r<h.length; r++) {
          e[r]=h[r]-a[r];
        }return e
      };

      u.dotProduct=(h, a) => {
        let e=0;
        for (let r=0; r<h.length; r++) {
          e+=h[r]*a[r];
        }return e
      };

      u.mag=function(h){return Math.sqrt(this.dotProduct(h,h))};

      u.normalize=function(h){
        const a=[];
        const e=this.mag(h);
        for (let r=0; r<h.length; r++) {
          a[r]=h[r]/e;
        }return a
      };

      u.multGamma=h => {
        const a=[];
        let e=0;
        for (let r=0; r<h.length; r++) {
          e+=h[r];
        }e*=-1/h.length;for (let l=0; l<h.length; l++) {
          a[l]=e+h[l];
        }return a
      };

      u.multL=(h, a, e) => {
        const r=[];
        const l=[];
        const i=[];
        for(let g=0;g<a[0].length;g++){
          let t=0;
          for (let o=0; o<a.length; o++) {
            t+=-0.5/* -.5 */*a[o][g]*h[o];
          }l[g]=t
        }for(let s=0;s<e.length;s++){
          let c=0;
          for (let f=0; f<e.length; f++) {
            c+=e[s][f]*l[f];
          }i[s]=c
        }for(let T=0;T<a.length;T++){
          let d=0;
          for (let v=0; v<a[0].length; v++) {
            d+=a[T][v]*i[v];
          }r[T]=d
        }return r
      };

      A.exports=u;
    }),((A, P, N) => {
      const u = (() => {function r(l,i){
        for (const t of i) {
          t.enumerable=t.enumerable||false;
          t.configurable=true;

          if ("value"in t) {
            (t.writable = true);
          }

          Object.defineProperty(l,t.key,t);
        }
      }return (l, i, g) => {
        if (i) {
          r(l.prototype,i);
        }

        if (g) {
          r(l,g);
        }

        return l;
      };})();function h(r,l){if (!(r instanceof l)) {
        throw new TypeError("Cannot call a class as a function")
      }}
      const a=N(11);

      const e = (() => {
        function r(l,i){
          h(this,r);

          if ((i!==null || i!==void 0)) {
            (this.compareFunction = this._defaultCompareFunction);
          }

          let g=void 0;

          if (l instanceof a) {
            g=l.size();
          } else {
            g=l.length;
          }

          this._quicksort(l,0,g-1);
        }

        u(r,[{key:"_quicksort",value(i, g, t) {if(g<t){
          const o=this._partition(i,g,t);
          this._quicksort(i,g,o);
          this._quicksort(i,o+1,t);
        }}},{key:"_partition",value(i, g, t) {
          const o=this._get(i,g);
          let s=g;
          let c=t;

          while (true) {
            while (this.compareFunction(o,this._get(i,c))) {
              c--;
            }

            while (this.compareFunction(this._get(i,s),o)) {
              s++;
            }

            if (s<c) {
              this._swap(i,s,c);
              s++;
              c--;
            } else {
              return c
            }
          }
        }},{key:"_get",value(i, g) {return i instanceof a?i.get_object_at(g):i[g]}},{key:"_set",value(i, g, t) {
          if (i instanceof a) {
            i.set_object_at(g,t);
          } else {
            i[g]=t;
          }
        }},{key:"_swap",value(i, g, t) {
          const o=this._get(i,g);
          this._set(i,g,this._get(i,t));
          this._set(i,t,o);
        }},{key:"_defaultCompareFunction",value(i, g) {return g>i}}]);

        return r;
      })();

      A.exports=e
    }),((A, P, N) => {
      function u(){}

      u.svd=function(h){
        this.U=null;
        this.V=null;
        this.s=null;
        this.m=0;
        this.n=0;
        this.m=h.length;
        this.n=h[0].length;
        const a=Math.min(this.m,this.n);

        this.s = (Tt => {
          const Ct=[];

          while (Tt-- >0) {
            Ct.push(0);
          }

          return Ct
        })(Math.min(this.m+1,this.n));

        this.U = (Tt => {const Ct=function Bt(bt){
          if (bt.length==0) {
            return 0;
          }
          const zt=[];
          for (let St=0; St<bt[0]; St++) {
            zt.push(Bt(bt.slice(1)));
          }return zt
        };return Ct(Tt)})([this.m,a]);

        this.V = (Tt => {const Ct=function Bt(bt){
          if (bt.length==0) {
            return 0;
          }
          const zt=[];
          for (let St=0; St<bt[0]; St++) {
            zt.push(Bt(bt.slice(1)));
          }return zt
        };return Ct(Tt)})([this.n,this.n]);

        const e = (Tt => {
          const Ct=[];

          while (Tt-- >0) {
            Ct.push(0);
          }

          return Ct
        })(this.n);

        const r = (Tt => {
          const Ct=[];

          while (Tt-- >0) {
            Ct.push(0);
          }

          return Ct
        })(this.m);

        const l=true;
        for(var i=Math.min(this.m-1,this.n), g=Math.max(0,Math.min(this.n-2,this.m)), t=0;t<Math.max(i,g);t++){if(t<i){this.s[t]=0;for (let o=t; o<this.m; o++) {
          this.s[t]=u.hypot(this.s[t],h[o][t]);
        }if(this.s[t]!==0){
          if (h[t][t]<0) {
            (this.s[t] = -this.s[t]);
          }

          for (let s=t; s<this.m; s++) {
            h[s][t]/=this.s[t];
          }h[t][t]+=1
        }this.s[t]=-this.s[t]}for(let c=t+1;c<this.n;c++){if (((Tt, Ct) => Tt&&Ct)(t<i, this.s[t]!==0)) {
          let f=0;
          for (let T=t; T<this.m; T++) {
            f+=h[T][t]*h[T][c];
          }f=-f/h[t][t];for (let d=t; d<this.m; d++) {
            h[d][c]+=f*h[d][t]
          }
        }e[c]=h[t][c]}if (((Tt, Ct) => Ct)(l, t<i)) {
          for (let v=t; v<this.m; v++) {
            this.U[v][t]=h[v][t];
          }
        }if(t<g){
          e[t]=0;for (let L=t+1; L<this.n; L++) {
            e[t]=u.hypot(e[t],e[L]);
          }if(e[t]!==0){
          if (e[t+1]<0) {
            (e[t] = -e[t]);
          }

          for (let b=t+1; b<this.n; b++) {
              e[b]/=e[t];
            }e[t+1]+=1
        }
          e[t]=-e[t];

          if (((Tt, Ct) => Tt&&Ct)(t+1<this.m, e[t]!==0)) {for (let C=t+1; C<this.m; C++) {
            r[C]=0;
          }for (let G=t+1; G<this.n; G++) {
            for (let k=t+1; k<this.m; k++) {
              r[k]+=e[G]*h[k][G];
            }
          }for (let Y=t+1; Y<this.n; Y++) {
            const K=-e[Y]/e[t+1];
            for (let O=t+1; O<this.m; O++) {
              h[O][Y]+=K*r[O]
            }
          }}

          for (let it=t+1; it<this.n; it++) {
            this.V[it][t]=e[it]
          }
        }}let n=Math.min(this.n,this.m+1);

        if (i<this.n) {
          (this.s[i] = h[i][i]);
        }

        if (this.m<n) {
          (this.s[n-1] = 0);
        }

        if (g+1<n) {
          (e[g] = h[g][n-1]);
        }

        e[n-1]=0;
        {for(let m=i;m<a;m++){for (let p=0; p<this.m; p++) {
          this.U[p][m]=0;
        }this.U[m][m]=1}for (let E=i-1; E>=0; E--) {
          if(this.s[E]!==0){for(let y=E+1;y<a;y++){
            let R=0;
            for (let M=E; M<this.m; M++) {
              R+=this.U[M][E]*this.U[M][y];
            }R=-R/this.U[E][E];for (let S=E; S<this.m; S++) {
              this.U[S][y]+=R*this.U[S][E]
            }
          }for (let W=E; W<this.m; W++) {
            this.U[W][E]=-this.U[W][E];
          }this.U[E][E]=1+this.U[E][E];for (let D=0; D<E-1; D++) {
            this.U[D][E]=0
          }}else{for (let q=0; q<this.m; q++) {
            this.U[q][E]=0;
          }this.U[E][E]=1}
        }}for(let V=this.n-1;V>=0;V--){if (((Tt, Ct) => Tt&&Ct)(V<g, e[V]!==0)) {
            for(let X=V+1;X<a;X++){
              let et=0;
              for (let z=V+1; z<this.n; z++) {
                et+=this.V[z][V]*this.V[z][X];
              }et=-et/this.V[V+1][V];for (let w=V+1; w<this.n; w++) {
                this.V[w][X]+=et*this.V[w][V]
              }
            }
          }for (let H=0; H<this.n; H++) {
            this.V[H][V]=0;
          }this.V[V][V]=1}
        const B=n-1;
        const _=2 ** -52;
        const ht=2 ** -966;

        while (n>0) {
          let Q=void 0;
          let It=void 0;
          for (Q=n-2; Q>=-1&&Q!==-1; Q--) {
            if(Math.abs(e[Q])<=ht+_*(Math.abs(this.s[Q])+Math.abs(this.s[Q+1]))){e[Q]=0;break}
          }if (Q===n-2) {
            It=4;
          } else
            {
              let Nt=void 0;for(Nt=n-1;Nt>=Q&&Nt!==Q;Nt--){const vt=(Nt!==n?Math.abs(e[Nt]):0)+(Nt!==Q+1?Math.abs(e[Nt-1]):0);if(Math.abs(this.s[Nt])<=ht+_*vt){this.s[Nt]=0;break}}

              if (Nt===Q) {
                It=3;
              } else if (Nt===n-1) {
                It=1;
              } else {
                It=2;
                Q=Nt;
              }
            }
          Q++;

          switch (It) {
          case 1:{let rt=e[n-2];e[n-2]=0;for(let gt=n-2;gt>=Q;gt--){
            let mt=u.hypot(this.s[gt],rt);
            const At=this.s[gt]/mt;
            const Ot=rt/mt;
            this.s[gt]=mt;

            if (gt!==Q) {
              rt=-Ot*e[gt-1];
              e[gt-1]=At*e[gt-1];
            }

            for (let Et=0; Et<this.n; Et++) {
              mt=At*this.V[Et][gt]+Ot*this.V[Et][n-1];
              this.V[Et][n-1]=-Ot*this.V[Et][gt]+At*this.V[Et][n-1];
              this.V[Et][gt]=mt;
            }
          }}break;
          case 2:{let Dt=e[Q-1];e[Q-1]=0;for(let Rt=Q;Rt<n;Rt++){
            let Ht=u.hypot(this.s[Rt],Dt);
            const Ut=this.s[Rt]/Ht;
            const Pt=Dt/Ht;
            this.s[Rt]=Ht;
            Dt=-Pt*e[Rt];
            e[Rt]=Ut*e[Rt];
            for (let Ft=0; Ft<this.m; Ft++) {
              Ht=Ut*this.U[Ft][Rt]+Pt*this.U[Ft][Q-1];
              this.U[Ft][Q-1]=-Pt*this.U[Ft][Rt]+Ut*this.U[Ft][Q-1];
              this.U[Ft][Rt]=Ht;
            }
          }}break;
          case 3:{
            const Yt=Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[n-1]),Math.abs(this.s[n-2])),Math.abs(e[n-2])),Math.abs(this.s[Q])),Math.abs(e[Q]));
            const Vt=this.s[n-1]/Yt;
            const F=this.s[n-2]/Yt;
            const U=e[n-2]/Yt;
            const $=this.s[Q]/Yt;
            const J=e[Q]/Yt;
            const Z=((F+Vt)*(F-Vt)+U*U)/2;
            const at=Vt*U*(Vt*U);
            let ct=0;

            if (((Tt, Ct) => Tt||Ct)(Z!==0, at!==0)) {
              ct=Math.sqrt(Z*Z+at);
              Z<0&&(ct=-ct);
              ct=at/(Z+ct);
            }

            let nt=($+Vt)*($-Vt)+ct;
            let tt=$*J;
            for(let j=Q;j<n-1;j++){
              let ut=u.hypot(nt,tt);
              let Mt=nt/ut;
              let pt=tt/ut;

              if (j!==Q) {
                (e[j-1] = ut);
              }

              nt=Mt*this.s[j]+pt*e[j];
              e[j]=Mt*e[j]-pt*this.s[j];
              tt=pt*this.s[j+1];
              this.s[j+1]=Mt*this.s[j+1];
              for (let xt=0; xt<this.n; xt++) {
                ut=Mt*this.V[xt][j]+pt*this.V[xt][j+1];
                this.V[xt][j+1]=-pt*this.V[xt][j]+Mt*this.V[xt][j+1];
                this.V[xt][j]=ut;
              }
              ut=u.hypot(nt,tt);
              Mt=nt/ut;
              pt=tt/ut;
              this.s[j]=ut;
              nt=Mt*e[j]+pt*this.s[j+1];
              this.s[j+1]=-pt*e[j]+Mt*this.s[j+1];
              tt=pt*e[j+1];
              e[j+1]=Mt*e[j+1];

              if (j<this.m-1) {
                for (let lt=0; lt<this.m; lt++) {
                  ut=Mt*this.U[lt][j]+pt*this.U[lt][j+1];
                  this.U[lt][j+1]=-pt*this.U[lt][j]+Mt*this.U[lt][j+1];
                  this.U[lt][j]=ut;
                }
              }
            }e[n-2]=nt
          }break;
          case 4:{
            if(this.s[Q]<=0){this.s[Q]=this.s[Q]<0?-this.s[Q]:0;for (let ot=0; ot<=B; ot++) {
              this.V[ot][Q]=-this.V[ot][Q]
            }}

            while (Q<B&&!(this.s[Q]>=this.s[Q+1])) {
              let Lt=this.s[Q];
              this.s[Q]=this.s[Q+1];
              this.s[Q+1]=Lt;

              if (Q<this.n-1) {
                for (let ft=0; ft<this.n; ft++) {
                  Lt=this.V[ft][Q+1];
                  this.V[ft][Q+1]=this.V[ft][Q];
                  this.V[ft][Q]=Lt;
                }
              }

              if (Q<this.m-1) {
                for (let st=0; st<this.m; st++) {
                  Lt=this.U[st][Q+1];
                  this.U[st][Q+1]=this.U[st][Q];
                  this.U[st][Q]=Lt;
                }
              }Q++
            }

            n--
          }break
          }
        }

        const Xt={U:this.U,V:this.V,S:this.s};return Xt
      };

      u.hypot=(h, a) => {
        let e=void 0;

        if (Math.abs(h)>Math.abs(a)) {
          e=a/h;
          e=Math.abs(h)*Math.sqrt(1+e*e);
        } else if (a!=0) {
          e=h/a;
          e=Math.abs(a)*Math.sqrt(1+e*e);
        } else {
          e=0;
        }

        return e;
      };

      A.exports=u;
    }),((A, P, N) => {
      const u = (() => {function e(r,l){
        for (const g of l) {
          g.enumerable=g.enumerable||false;
          g.configurable=true;

          if ("value"in g) {
            (g.writable = true);
          }

          Object.defineProperty(r,g.key,g);
        }
      }return (r, l, i) => {
        if (l) {
          e(r.prototype,l);
        }

        if (i) {
          e(r,i);
        }

        return r;
      };})();

      class h {
        constructor(e, r) {if (!(e instanceof r)) {
          throw new TypeError("Cannot call a class as a function")
        }}

        static addListener(a, e) {this.listeners.push({event:a,callback:e})}
        static removeListener(a, e) {for(let r=this.listeners.length;r>=0;r--){
          const l=this.listeners[r];

          if (l.event===a&&l.callback===e) {
            this.listeners.splice(r,1);
          }
        }}

        static emit(a, e) {
          for (const l of this.listeners) {
            if (a===l.event) {
              l.callback(e);
            }
          }
        }
      }

      const a = (() => {
        function e(r, l, i = 1, g = -1, t = -1) {
          h(this,e);
          this.sequence1=r;
          this.sequence2=l;
          this.match_score=i;
          this.mismatch_penalty=g;
          this.gap_penalty=t;
          this.iMax=r.length+1;
          this.jMax=l.length+1;
          this.grid=new Array(this.iMax);
          for(let o=0;o<this.iMax;o++){this.grid[o]=new Array(this.jMax);for (let s=0; s<this.jMax; s++) {
            this.grid[o][s]=0
          }}this.tracebackGrid=new Array(this.iMax);for(let c=0;c<this.iMax;c++){this.tracebackGrid[c]=new Array(this.jMax);for (let f=0; f<this.jMax; f++) {
              this.tracebackGrid[c][f]=[null,null,null]
            }}
          this.alignments=[];
          this.score=-1;
          this.computeGrids();
        }

        u(e,[{key:"getScore",value() {return this.score}},{key:"getAlignments",value() {return this.alignments}},{key:"computeGrids",value() {for (let l=1; l<this.jMax; l++) {
          this.grid[0][l]=this.grid[0][l-1]+this.gap_penalty;
          this.tracebackGrid[0][l]=[false,false,true];
        }for (let i=1; i<this.iMax; i++) {
          this.grid[i][0]=this.grid[i-1][0]+this.gap_penalty;
          this.tracebackGrid[i][0]=[false,true,false];
        }for (let g=1; g<this.iMax; g++) {
          for(let t=1;t<this.jMax;t++){
            let o=void 0;

            if (this.sequence1[g-1]===this.sequence2[t-1]) {
              o=this.grid[g-1][t-1]+this.match_score;
            } else {
              o=this.grid[g-1][t-1]+this.mismatch_penalty;
            }

            const s=this.grid[g-1][t]+this.gap_penalty;
            const c=this.grid[g][t-1]+this.gap_penalty;
            const f=[o,s,c];
            const T=this.arrayAllMaxIndexes(f);
            this.grid[g][t]=f[T[0]];
            this.tracebackGrid[g][t]=[T.includes(0),T.includes(1),T.includes(2)];
          }
        }this.score=this.grid[this.iMax-1][this.jMax-1]}},{key:"alignmentTraceback",value() {const l=[];for(l.push({pos:[this.sequence1.length,this.sequence2.length],seq1:"",seq2:""});l[0];){
          const i=l[0];
          const g=this.tracebackGrid[i.pos[0]][i.pos[1]];

          if (g[0]) {
            l.push({pos:[i.pos[0]-1,i.pos[1]-1],seq1:this.sequence1[i.pos[0]-1]+i.seq1,seq2:this.sequence2[i.pos[1]-1]+i.seq2});
          }

          if (g[1]) {
            l.push({pos:[i.pos[0]-1,i.pos[1]],seq1:this.sequence1[i.pos[0]-1]+i.seq1,seq2:`-${i.seq2}`});
          }

          if (g[2]) {
            l.push({pos:[i.pos[0],i.pos[1]-1],seq1:`-${i.seq1}`,seq2:this.sequence2[i.pos[1]-1]+i.seq2});
          }

          if (i.pos[0]===0&&i.pos[1]===0) {
            this.alignments.push({sequence1:i.seq1,sequence2:i.seq2});
          }

          l.shift();
        }return this.alignments}},{key:"getAllIndexes",value(l, i) {
          const g=[];
          for (let t=-1; (t=l.indexOf(i,t+1))!==-1; ) {
            g.push(t);
          }return g
        }},{key:"arrayAllMaxIndexes",value(l) {return this.getAllIndexes(l,Math.max.apply(null,l))}}]);

        return e;
      })();A.exports=a
    }),((A, P, N) => {
      const u=() => {};
      u.FDLayout=N(18);
      u.FDLayoutConstants=N(4);
      u.FDLayoutEdge=N(19);
      u.FDLayoutNode=N(20);
      u.DimensionD=N(21);
      u.HashMap=N(22);
      u.HashSet=N(23);
      u.IGeometry=N(8);
      u.IMath=N(9);
      u.Integer=N(10);
      u.Point=N(12);
      u.PointD=N(5);
      u.RandomSeed=N(16);
      u.RectangleD=N(13);
      u.Transform=N(17);
      u.UniqueIDGeneretor=N(14);
      u.Quicksort=N(25);
      u.LinkedList=N(11);
      u.LGraphObject=N(2);
      u.LGraph=N(6);
      u.LEdge=N(1);
      u.LGraphManager=N(7);
      u.LNode=N(3);
      u.Layout=N(15);
      u.LayoutConstants=N(0);
      u.NeedlemanWunsch=N(27);
      u.Matrix=N(24);
      u.SVD=N(26);
      A.exports=u;
    }),((A, P, N) => {
      function u(){this.listeners=[]}const h=u.prototype;
      A.exports=u;
    })]));})(fe);
  }

  return fe.exports;
}
const dr=le.exports;
let Oe;
function vr(){
  if (!Oe) {
    Oe=1;

    ((I, x) => {((P, N) => {I.exports=N(ur())})(dr, A => (()=>{
      const P={45:((a,e,r)=>{
        const l={};
        l.layoutBase=r(551);
        l.CoSEConstants=r(806);
        l.CoSEEdge=r(767);
        l.CoSEGraph=r(880);
        l.CoSEGraphManager=r(578);
        l.CoSELayout=r(765);
        l.CoSENode=r(991);
        l.ConstraintHandler=r(902);
        a.exports=l;
      }),806:((a,e,r)=>{
        const l=r(551).FDLayoutConstants;function i(){}for (const g in l) {
          i[g]=l[g];
        }
        i.DEFAULT_USE_MULTI_LEVEL_SCALING=false;
        i.DEFAULT_RADIAL_SEPARATION=l.DEFAULT_EDGE_LENGTH;
        i.DEFAULT_COMPONENT_SEPERATION=60;
        i.TILE=true;
        i.TILING_PADDING_VERTICAL=10;
        i.TILING_PADDING_HORIZONTAL=10;
        i.TRANSFORM_ON_CONSTRAINT_HANDLING=true;
        i.ENFORCE_CONSTRAINTS=true;
        i.APPLY_LAYOUT=true;
        i.RELAX_MOVEMENT_ON_CONSTRAINTS=true;
        i.TREE_REDUCTION_ON_INCREMENTAL=true;
        i.PURE_INCREMENTAL=i.DEFAULT_INCREMENTAL;
        a.exports=i;
      }),767:((a,e,r)=>{const l=r(551).FDLayoutEdge;function i(t,o,s){l.call(this,t,o,s)}i.prototype=Object.create(l.prototype);for (const g in l) {
        i[g]=l[g];
      }a.exports=i}),880:((a,e,r)=>{const l=r(551).LGraph;function i(t,o,s){l.call(this,t,o,s)}i.prototype=Object.create(l.prototype);for (const g in l) {
        i[g]=l[g];
      }a.exports=i}),578:((a,e,r)=>{const l=r(551).LGraphManager;function i(t){l.call(this,t)}i.prototype=Object.create(l.prototype);for (const g in l) {
        i[g]=l[g];
      }a.exports=i}),765:((a,e,r)=>{
        const l=r(551).FDLayout;
        const i=r(578);
        const g=r(880);
        const t=r(991);
        const o=r(767);
        const s=r(806);
        const c=r(902);
        const f=r(551).FDLayoutConstants;
        const T=r(551).LayoutConstants;
        const d=r(551).Point;
        const v=r(551).PointD;
        const L=r(551).DimensionD;
        const b=r(551).Layout;
        const C=r(551).Integer;
        const G=r(551).IGeometry;
        const k=r(551).LGraph;
        const Y=r(551).Transform;
        const K=r(551).LinkedList;
        function O(){
          l.call(this);
          this.toBeTiled={};
          this.constraints={};
        }O.prototype=Object.create(l.prototype);for (const it in l) {
          O[it]=l[it];
        }

        O.prototype.newGraphManager=function(){
          const n=new i(this);
          this.graphManager=n;
          return n;
        };

        O.prototype.newGraph=function(n){return new g(null,this.graphManager,n)};
        O.prototype.newNode=function(n){return new t(this.graphManager,n)};
        O.prototype.newEdge=n => new o(null,null,n);

        O.prototype.initParameters=function(...args) {
          l.prototype.initParameters.call(this,args);

          if (!this.isSubLayout) {
            s.DEFAULT_EDGE_LENGTH<10?this.idealEdgeLength=10:this.idealEdgeLength=s.DEFAULT_EDGE_LENGTH;
            this.useSmartIdealEdgeLengthCalculation=s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
            this.gravityConstant=f.DEFAULT_GRAVITY_STRENGTH;
            this.compoundGravityConstant=f.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
            this.gravityRangeFactor=f.DEFAULT_GRAVITY_RANGE_FACTOR;
            this.compoundGravityRangeFactor=f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
            this.prunedNodesAll=[];
            this.growTreeIterations=0;
            this.afterGrowthIterations=0;
            this.isTreeGrowing=false;
            this.isGrowthFinished=false;
          }
        };

        O.prototype.initSpringEmbedder=function(){
          l.prototype.initSpringEmbedder.call(this);
          this.coolingCycle=0;
          this.maxCoolingCycle=this.maxIterations/f.CONVERGENCE_CHECK_PERIOD;
          this.finalTemperature=0.04/* .04 */;
          this.coolingAdjuster=1;
        };

        O.prototype.layout=function(){
          const n=T.DEFAULT_CREATE_BENDS_AS_NEEDED;

          if (n) {
            this.createBendpoints();
            this.graphManager.resetAllEdges();
          }

          this.level=0;
          return this.classicLayout();
        };

        O.prototype.classicLayout=function(){
          this.nodesWithGravity=this.calculateNodesToApplyGravitationTo();
          this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
          this.calcNoOfChildrenForAllNodes();
          this.graphManager.calcLowestCommonAncestors();
          this.graphManager.calcInclusionTreeDepths();
          this.graphManager.getRoot().calcEstimatedSize();
          this.calcIdealEdgeLengths();

          if (this.incremental) {if(s.TREE_REDUCTION_ON_INCREMENTAL){
            this.reduceTrees();
            this.graphManager.resetAllNodesToApplyGravitation();
            var m=new Set(this.getAllNodes());
            var p=this.nodesWithGravity.filter(R => m.has(R));
            this.graphManager.setAllNodesToApplyGravitation(p)
          }} else {const n=this.getFlatForest();if (n.length>0) {
            this.positionNodesRadially(n);
          } else {
            this.reduceTrees();
            this.graphManager.resetAllNodesToApplyGravitation();
            var m=new Set(this.getAllNodes());
            var p=this.nodesWithGravity.filter(E => m.has(E));
            this.graphManager.setAllNodesToApplyGravitation(p);
            this.positionNodesRandomly();
          }}

          if (Object.keys(this.constraints).length>0) {
            c.handleConstraints(this);
            this.initConstraintVariables();
          }

          this.initSpringEmbedder();

          if (s.APPLY_LAYOUT) {
            this.runSpringEmbedder();
          }

          return true;
        };

        O.prototype.tick=function(){
          this.totalIterations++;

          if (this.totalIterations===this.maxIterations&&!this.isTreeGrowing&&!this.isGrowthFinished) {
            if (this.prunedNodesAll.length>0) {
              this.isTreeGrowing=true;
            } else {
              return true;
            }
          }

          if(this.totalIterations%f.CONVERGENCE_CHECK_PERIOD==0&&!this.isTreeGrowing&&!this.isGrowthFinished){
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
              const n=new Set(this.getAllNodes());
              const m=this.nodesWithGravity.filter(y => n.has(y));
              this.graphManager.setAllNodesToApplyGravitation(m);
              this.graphManager.updateBounds();
              this.updateGrid();

              if (s.PURE_INCREMENTAL) {
                this.coolingFactor=f.DEFAULT_COOLING_FACTOR_INCREMENTAL/2;
              } else {
                this.coolingFactor=f.DEFAULT_COOLING_FACTOR_INCREMENTAL;
              }
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

          if (s.PURE_INCREMENTAL) {
            this.coolingFactor=f.DEFAULT_COOLING_FACTOR_INCREMENTAL/2*((100-this.afterGrowthIterations)/100);
          } else {
            this.coolingFactor=f.DEFAULT_COOLING_FACTOR_INCREMENTAL*((100-this.afterGrowthIterations)/100);
          }

          this.afterGrowthIterations++;
        }
          const p=!this.isTreeGrowing&&!this.isGrowthFinished;
          const E=this.growTreeIterations%10==1&&this.isTreeGrowing||this.afterGrowthIterations%10==1&&this.isGrowthFinished;
          this.totalDisplacement=0;
          this.graphManager.updateBounds();
          this.calcSpringForces();
          this.calcRepulsionForces(p,E);
          this.calcGravitationalForces();
          this.moveNodes();
          this.animate();
          return false;
        };

        O.prototype.getPositionsData=function(){
          const m={};
          for(let n=this.graphManager.getAllNodes(), p=0;p<n.length;p++){
            const E=n[p].rect;
            const y=n[p].id;
            m[y]={id:y,x:E.getCenterX(),y:E.getCenterY(),w:E.width,h:E.height}
          }return m
        };

        O.prototype.runSpringEmbedder=function(){
          this.initialAnimationPeriod=25;
          this.animationPeriod=this.initialAnimationPeriod;
          let n=false;if (f.ANIMATE==="during") {
            this.emit("layoutstarted");
          } else {
          while (!n) {
              n=this.tick();
            }

          this.graphManager.updateBounds()
        }
        };

        O.prototype.moveNodes=function(){
          let m;
          for (var n=this.getAllNodes(), p=0; p<n.length; p++) {
            m=n[p];
            m.calculateDisplacement();
          }

          if (Object.keys(this.constraints).length>0) {
            this.updateDisplacements();
          }

          for (var p=0; p<n.length; p++) {
              m=n[p];
              m.move();
            }
        };

        O.prototype.initConstraintVariables=function(){
          const n=this;
          this.idToNodeMap=new Map;
          this.fixedNodeSet=new Set;
          for(var m=this.graphManager.getAllNodes(),p=0;p<m.length;p++){var E=m[p];this.idToNodeMap.set(E.id,E)}const y=function w(H){
            let _;
            let ht=0;
            for (let B=H.getChild().getNodes(), Q=0; Q<B.length; Q++) {
              _=B[Q];

              if (_.getChild()==null) {
                if (n.fixedNodeSet.has(_.id)) {
                  (ht += 100);
                }
              } else {
                ht+=w(_);
              }
            }return ht
          };if(this.constraints.fixedNodeConstraint){
            this.constraints.fixedNodeConstraint.forEach(B => {n.fixedNodeSet.add(B.nodeId)});
            var E;
            for (var m=this.graphManager.getAllNodes(), p=0; p<m.length; p++) {
              E=m[p];

              if (E.getChild()!=null)
                {
                  const R=y(E);

                  if (R>0) {
                    (E.fixedNodeWeight = R);
                  }
                }
            }
          }if(this.constraints.relativePlacementConstraint){
            const M=new Map;
            const S=new Map;
            this.dummyToNodeForVerticalAlignment=new Map;
            this.dummyToNodeForHorizontalAlignment=new Map;
            this.fixedNodesOnHorizontal=new Set;
            this.fixedNodesOnVertical=new Set;

            this.fixedNodeSet.forEach(w => {
              n.fixedNodesOnHorizontal.add(w);
              n.fixedNodesOnVertical.add(w);
            });

            if (this.constraints.alignmentConstraint) {if (this.constraints.alignmentConstraint.vertical) {
              for (var W=this.constraints.alignmentConstraint.vertical,p=0; p<W.length; p++) {
                this.dummyToNodeForVerticalAlignment.set(`dummy${p}`,[]);

                W[p].forEach(H => {
                  M.set(H,`dummy${p}`);
                  n.dummyToNodeForVerticalAlignment.get(`dummy${p}`).push(H);

                  if (n.fixedNodeSet.has(H)) {
                    n.fixedNodesOnHorizontal.add(`dummy${p}`);
                  }
                });
              }
            }if (this.constraints.alignmentConstraint.horizontal) {
              for (var D=this.constraints.alignmentConstraint.horizontal,p=0; p<D.length; p++) {
                this.dummyToNodeForHorizontalAlignment.set(`dummy${p}`,[]);

                D[p].forEach(H => {
                  S.set(H,`dummy${p}`);
                  n.dummyToNodeForHorizontalAlignment.get(`dummy${p}`).push(H);

                  if (n.fixedNodeSet.has(H)) {
                    n.fixedNodesOnVertical.add(`dummy${p}`);
                  }
                });
              }
            }}

            if (s.RELAX_MOVEMENT_ON_CONSTRAINTS) {
              this.shuffle=w => {
                let H;
                let B;
                let _;
                for (_=w.length-1; _>=2*w.length/3; _--) {
                  H=Math.floor(Math.random()*(_+1));
                  B=w[_];
                  w[_]=w[H];
                  w[H]=B;
                }return w
              };

              this.nodesInRelativeHorizontal=[];
              this.nodesInRelativeVertical=[];
              this.nodeToRelativeConstraintMapHorizontal=new Map;
              this.nodeToRelativeConstraintMapVertical=new Map;
              this.nodeToTempPositionMapHorizontal=new Map;
              this.nodeToTempPositionMapVertical=new Map;

              this.constraints.relativePlacementConstraint.forEach(w => {if(w.left){
                const H=M.has(w.left)?M.get(w.left):w.left;
                const B=M.has(w.right)?M.get(w.right):w.right;

                if (!n.nodesInRelativeHorizontal.includes(H)) {
                  n.nodesInRelativeHorizontal.push(H);
                  n.nodeToRelativeConstraintMapHorizontal.set(H,[]);
                  n.dummyToNodeForVerticalAlignment.has(H)?n.nodeToTempPositionMapHorizontal.set(H,n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()):n.nodeToTempPositionMapHorizontal.set(H,n.idToNodeMap.get(H).getCenterX());
                }

                if (!n.nodesInRelativeHorizontal.includes(B)) {
                  n.nodesInRelativeHorizontal.push(B);
                  n.nodeToRelativeConstraintMapHorizontal.set(B,[]);
                  n.dummyToNodeForVerticalAlignment.has(B)?n.nodeToTempPositionMapHorizontal.set(B,n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(B)[0]).getCenterX()):n.nodeToTempPositionMapHorizontal.set(B,n.idToNodeMap.get(B).getCenterX());
                }

                n.nodeToRelativeConstraintMapHorizontal.get(H).push({right:B,gap:w.gap});
                n.nodeToRelativeConstraintMapHorizontal.get(B).push({left:H,gap:w.gap});
              }else{
                const _=S.has(w.top)?S.get(w.top):w.top;
                const ht=S.has(w.bottom)?S.get(w.bottom):w.bottom;

                if (!n.nodesInRelativeVertical.includes(_)) {
                  n.nodesInRelativeVertical.push(_);
                  n.nodeToRelativeConstraintMapVertical.set(_,[]);
                  n.dummyToNodeForHorizontalAlignment.has(_)?n.nodeToTempPositionMapVertical.set(_,n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(_)[0]).getCenterY()):n.nodeToTempPositionMapVertical.set(_,n.idToNodeMap.get(_).getCenterY());
                }

                if (!n.nodesInRelativeVertical.includes(ht)) {
                  n.nodesInRelativeVertical.push(ht);
                  n.nodeToRelativeConstraintMapVertical.set(ht,[]);
                  n.dummyToNodeForHorizontalAlignment.has(ht)?n.nodeToTempPositionMapVertical.set(ht,n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(ht)[0]).getCenterY()):n.nodeToTempPositionMapVertical.set(ht,n.idToNodeMap.get(ht).getCenterY());
                }

                n.nodeToRelativeConstraintMapVertical.get(_).push({bottom:ht,gap:w.gap});
                n.nodeToRelativeConstraintMapVertical.get(ht).push({top:_,gap:w.gap});
              }});
            } else {
              const q=new Map;
              const V=new Map;
              this.constraints.relativePlacementConstraint.forEach(w => {if(w.left){
                const H=M.has(w.left)?M.get(w.left):w.left;
                const B=M.has(w.right)?M.get(w.right):w.right;

                if (q.has(H)) {
                  q.get(H).push(B);
                } else {
                  q.set(H,[B]);
                }

                if (q.has(B)) {
                  q.get(B).push(H);
                } else {
                  q.set(B,[H]);
                }
              }else{
                const _=S.has(w.top)?S.get(w.top):w.top;
                const ht=S.has(w.bottom)?S.get(w.bottom):w.bottom;

                if (V.has(_)) {
                  V.get(_).push(ht);
                } else {
                  V.set(_,[ht]);
                }

                if (V.has(ht)) {
                  V.get(ht).push(_);
                } else {
                  V.set(ht,[_]);
                }
              }});

              const X=(H, B) => {
                const _=[];
                const ht=[];
                const Q=new K;
                const It=new Set;
                let Nt=0;

                H.forEach((vt, rt) => {if(!It.has(rt)){
                  _[Nt]=[];
                  ht[Nt]=false;
                  let gt=rt;
                  Q.push(gt);
                  It.add(gt);
                  _[Nt].push(gt);

                  while (Q.length!=0) {
                    gt=Q.shift();

                    if (B.has(gt)) {
                      (ht[Nt] = true);
                    }

                    const mt=H.get(gt);mt.forEach(At => {
                      if (!It.has(At)) {
                        Q.push(At);
                        It.add(At);
                        _[Nt].push(At);
                      }
                    })
                  }

                  Nt++
                }});

                return {components:_,isFixed:ht};
              };

              const et=X(q,n.fixedNodesOnHorizontal);
              this.componentsOnHorizontal=et.components;
              this.fixedComponentsOnHorizontal=et.isFixed;
              const z=X(V,n.fixedNodesOnVertical);
              this.componentsOnVertical=z.components;
              this.fixedComponentsOnVertical=z.isFixed;
            }
          }
        };

        O.prototype.updateDisplacements=function(){
          const n=this;

          if (this.constraints.fixedNodeConstraint) {
            this.constraints.fixedNodeConstraint.forEach(z => {
              const w=n.idToNodeMap.get(z.nodeId);
              w.displacementX=0;
              w.displacementY=0;
            });
          }

          if (this.constraints.alignmentConstraint) {if (this.constraints.alignmentConstraint.vertical) {
            for(var m=this.constraints.alignmentConstraint.vertical,p=0;p<m.length;p++){
              let E=0;
              for(var y=0;y<m[p].length;y++){if(this.fixedNodeSet.has(m[p][y])){E=0;break}E+=this.idToNodeMap.get(m[p][y]).displacementX}
              const R=E/m[p].length;
              for (var y=0; y<m[p].length; y++) {
                this.idToNodeMap.get(m[p][y]).displacementX=R
              }
            }
          }if (this.constraints.alignmentConstraint.horizontal) {
            for(var M=this.constraints.alignmentConstraint.horizontal,p=0;p<M.length;p++){
              let S=0;
              for(var y=0;y<M[p].length;y++){if(this.fixedNodeSet.has(M[p][y])){S=0;break}S+=this.idToNodeMap.get(M[p][y]).displacementY}
              const W=S/M[p].length;
              for (var y=0; y<M[p].length; y++) {
                this.idToNodeMap.get(M[p][y]).displacementY=W
              }
            }
          }}

          if (this.constraints.relativePlacementConstraint) {
            if (s.RELAX_MOVEMENT_ON_CONSTRAINTS) {
              if (this.totalIterations%10==0) {
                this.shuffle(this.nodesInRelativeHorizontal);
                this.shuffle(this.nodesInRelativeVertical);
              }

              this.nodesInRelativeHorizontal.forEach(z => {if(!n.fixedNodesOnHorizontal.has(z)){
                let w=0;

                if (n.dummyToNodeForVerticalAlignment.has(z)) {
                  w=n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(z)[0]).displacementX;
                } else {
                  w=n.idToNodeMap.get(z).displacementX;
                }

                n.nodeToRelativeConstraintMapHorizontal.get(z).forEach(H => {if(H.right){
                  var B=n.nodeToTempPositionMapHorizontal.get(H.right)-n.nodeToTempPositionMapHorizontal.get(z)-w;

                  if (B<H.gap) {
                    (w -= H.gap-B);
                  }
                }else{
                  var B=n.nodeToTempPositionMapHorizontal.get(z)-n.nodeToTempPositionMapHorizontal.get(H.left)+w;

                  if (B<H.gap) {
                    (w += H.gap-B);
                  }
                }});
                n.nodeToTempPositionMapHorizontal.set(z,n.nodeToTempPositionMapHorizontal.get(z)+w);

                if (n.dummyToNodeForVerticalAlignment.has(z)) {
                  n.dummyToNodeForVerticalAlignment.get(z).forEach(H => {n.idToNodeMap.get(H).displacementX=w});
                } else {
                  n.idToNodeMap.get(z).displacementX=w;
                }
              }});

              this.nodesInRelativeVertical.forEach(z => {if(!n.fixedNodesOnHorizontal.has(z)){
                let w=0;

                if (n.dummyToNodeForHorizontalAlignment.has(z)) {
                  w=n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(z)[0]).displacementY;
                } else {
                  w=n.idToNodeMap.get(z).displacementY;
                }

                n.nodeToRelativeConstraintMapVertical.get(z).forEach(H => {if(H.bottom){
                  var B=n.nodeToTempPositionMapVertical.get(H.bottom)-n.nodeToTempPositionMapVertical.get(z)-w;

                  if (B<H.gap) {
                    (w -= H.gap-B);
                  }
                }else{
                  var B=n.nodeToTempPositionMapVertical.get(z)-n.nodeToTempPositionMapVertical.get(H.top)+w;

                  if (B<H.gap) {
                    (w += H.gap-B);
                  }
                }});
                n.nodeToTempPositionMapVertical.set(z,n.nodeToTempPositionMapVertical.get(z)+w);

                if (n.dummyToNodeForHorizontalAlignment.has(z)) {
                  n.dummyToNodeForHorizontalAlignment.get(z).forEach(H => {n.idToNodeMap.get(H).displacementY=w});
                } else {
                  n.idToNodeMap.get(z).displacementY=w;
                }
              }});
            } else {for(var p=0;p<this.componentsOnHorizontal.length;p++){var D=this.componentsOnHorizontal[p];if (this.fixedComponentsOnHorizontal[p]) {
              for (var y=0; y<D.length; y++) {
                if (this.dummyToNodeForVerticalAlignment.has(D[y])) {
                  this.dummyToNodeForVerticalAlignment.get(D[y]).forEach(H => {n.idToNodeMap.get(H).displacementX=0});
                } else {
                  this.idToNodeMap.get(D[y]).displacementX=0;
                }
              }
            } else {
              var q=0;
              var V=0;
              for (var y=0; y<D.length; y++) {
                if (this.dummyToNodeForVerticalAlignment.has(D[y])) {
                  var X=this.dummyToNodeForVerticalAlignment.get(D[y]);
                  q+=X.length*this.idToNodeMap.get(X[0]).displacementX;
                  V+=X.length;
                } else {
                  q+=this.idToNodeMap.get(D[y]).displacementX;
                  V++;
                }
              }
              var et=q/V;
              for (var y=0; y<D.length; y++) {
                if (this.dummyToNodeForVerticalAlignment.has(D[y])) {
                  this.dummyToNodeForVerticalAlignment.get(D[y]).forEach(H => {n.idToNodeMap.get(H).displacementX=et});
                } else {
                  this.idToNodeMap.get(D[y]).displacementX=et;
                }
              }
            }}for(var p=0;p<this.componentsOnVertical.length;p++){var D=this.componentsOnVertical[p];if (this.fixedComponentsOnVertical[p]) {
              for (var y=0; y<D.length; y++) {
                if (this.dummyToNodeForHorizontalAlignment.has(D[y])) {
                  this.dummyToNodeForHorizontalAlignment.get(D[y]).forEach(B => {n.idToNodeMap.get(B).displacementY=0});
                } else {
                  this.idToNodeMap.get(D[y]).displacementY=0;
                }
              }
            } else {
              var q=0;
              var V=0;
              for (var y=0; y<D.length; y++) {
                if (this.dummyToNodeForHorizontalAlignment.has(D[y])) {
                  var X=this.dummyToNodeForHorizontalAlignment.get(D[y]);
                  q+=X.length*this.idToNodeMap.get(X[0]).displacementY;
                  V+=X.length;
                } else {
                  q+=this.idToNodeMap.get(D[y]).displacementY;
                  V++;
                }
              }
              var et=q/V;
              for (var y=0; y<D.length; y++) {
                if (this.dummyToNodeForHorizontalAlignment.has(D[y])) {
                  this.dummyToNodeForHorizontalAlignment.get(D[y]).forEach(Q => {n.idToNodeMap.get(Q).displacementY=et});
                } else {
                  this.idToNodeMap.get(D[y]).displacementY=et;
                }
              }
            }}}
          }
        };

        O.prototype.calculateNodesToApplyGravitationTo=function(){
          let n=[];
          let m;
          const p=this.graphManager.getGraphs();
          const E=p.length;
          let y;
          for (y=0; y<E; y++) {
            m=p[y];
            m.updateConnected();

            if (!m.isConnected) {
              (n = n.concat(m.getNodes()));
            }
          }return n
        };

        O.prototype.createBendpoints=function(){
          let n=[];n=n.concat(this.graphManager.getAllEdges());
          const m=new Set;
          let p;
          for(p=0;p<n.length;p++){const E=n[p];if(!m.has(E)){
            const y=E.getSource();
            const R=E.getTarget();
            if (y==R) {
              E.getBendpoints().push(new v);
              E.getBendpoints().push(new v);
              this.createDummyNodesForBendpoints(E);
              m.add(E);
            } else {
              let M=[];
              M=M.concat(y.getEdgeListToNode(R));
              M=M.concat(R.getEdgeListToNode(y));

              if (!m.has(M[0])) {if(M.length>1){let S;for(S=0;S<M.length;S++){
                const W=M[S];
                W.getBendpoints().push(new v);
                this.createDummyNodesForBendpoints(W);
              }}M.forEach(D => {m.add(D)})}
            }
          }if (m.size==n.length) {
            break
          }}
        };

        O.prototype.positionNodesRadially=function(n){
          const m=new d(0,0);
          const p=Math.ceil(Math.sqrt(n.length));
          let E=0;
          let y=0;
          let R=0;
          let M=new v(0,0);
          for(let S=0;S<n.length;S++){
            if (S%p==0) {
              R=0;
              y=E;
              S!=0&&(y+=s.DEFAULT_COMPONENT_SEPERATION);
              E=0;
            }

            const W=n[S];
            const D=b.findCenterOfTree(W);
            m.x=R;
            m.y=y;
            M=O.radialLayout(W,D,m);

            if (M.y>E) {
              (E = Math.floor(M.y));
            }

            R=Math.floor(M.x+s.DEFAULT_COMPONENT_SEPERATION);
          }this.transform(new v(T.WORLD_CENTER_X-M.x/2,T.WORLD_CENTER_Y-M.y/2))
        };

        O.radialLayout=function(n,m,p){
          const E=Math.max(this.maxDiagonalInTree(n),s.DEFAULT_RADIAL_SEPARATION);O.branchRadialLayout(m,null,0,359,0,E);
          const y=k.calculateBounds(n);
          const R=new Y;
          R.setDeviceOrgX(y.getMinX());
          R.setDeviceOrgY(y.getMinY());
          R.setWorldOrgX(p.x);
          R.setWorldOrgY(p.y);

          for (const S of n) {
            S.transform(R)
          }

          const W=new v(y.getMaxX(),y.getMaxY());return R.inverseTransformPoint(W)
        };

        O.branchRadialLayout=(n, m, p, E, y, R) => {
          let M=(E-p+1)/2;

          if (M<0) {
            (M += 180);
          }

          const S=(M+p)%360;
          const W=S*G.TWO_PI/360;
          const D=y*Math.cos(W);
          const q=y*Math.sin(W);
          n.setCenter(D,q);let V=[];V=V.concat(n.getEdges());let X=V.length;

          if (m!=null) {
            X--;
          }

          let et=0;
          let z=V.length;
          let w;
          for(var H=n.getEdgesBetween(m);H.length>1;){
            const B=H[0];H.splice(0,1);const _=V.indexOf(B);

            if (_>=0) {
              V.splice(_,1);
            }

            z--;
            X--;
          }

          if (m!=null) {
            w=(V.indexOf(H[0])+1)%z;
          } else {
            w=0;
          }

          const ht=Math.abs(E-p)/X;
          for(let Q=w;et!=X;Q=++Q%z){const It=V[Q].getOtherEnd(n);if(It!=m){
            const Nt=(p+et*ht)%360;
            const vt=(Nt+ht)%360;
            O.branchRadialLayout(It,n,Nt,vt,y+R,R);
            et++;
          }}
        };

        O.maxDiagonalInTree=n => {
          let m=C.MIN_VALUE;

          for (const E of n) {
            const y=E.getDiagonal();

            if (y>m) {
              (m = y);
            }
          }

          return m
        };

        O.prototype.calcRepulsionRange=function(){return 2*(this.level+1)*this.idealEdgeLength};

        O.prototype.groupZeroDegreeMembers=function(){
          const n=this;
          const m={};
          this.memberGroups={};
          this.idToDummyNode={};
          const p=[];
          for(var E=this.graphManager.getAllNodes(), y=0;y<E.length;y++){
            var R=E[y];
            const M=R.getParent();

            if (this.getNodeDegreeWithChildren(R)===0&&(M.id==null||!this.getToBeTiled(M))) {
              p.push(R);
            }
          }for(var y=0;y<p.length;y++){
          var R=p[y];
          const S=R.getParent().id;

          if (typeof m[S] === "undefined") {
            (m[S] = []);
          }

          m[S]=m[S].concat(R);
        }Object.keys(m).forEach(W => {if(m[W].length>1){
          const D=`DummyCompound_${W}`;n.memberGroups[D]=m[W];
          const q=m[W][0].getParent();
          const V=new t(n.graphManager);
          V.id=D;
          V.paddingLeft=q.paddingLeft||0;
          V.paddingRight=q.paddingRight||0;
          V.paddingBottom=q.paddingBottom||0;
          V.paddingTop=q.paddingTop||0;
          n.idToDummyNode[D]=V;
          const X=n.getGraphManager().add(n.newGraph(),V);
          const et=q.getChild();
          et.add(V);

          for (const w of m[W]) {
            et.remove(w);
            X.add(w);
          }
        }})
        };

        O.prototype.clearCompounds=function(){
          const n={};
          const m={};
          this.performDFSOnCompounds();for (let p=0; p<this.compoundOrder.length; p++) {
            m[this.compoundOrder[p].id]=this.compoundOrder[p];
            n[this.compoundOrder[p].id]=[].concat(this.compoundOrder[p].getChild().getNodes());
            this.graphManager.remove(this.compoundOrder[p].getChild());
            this.compoundOrder[p].child=null;
          }
          this.graphManager.resetAllNodes();
          this.tileCompoundMembers(n,m);
        };

        O.prototype.clearZeroDegreeMembers=function(){
          const n=this;
          const m=this.tiledZeroDegreePack=[];
          Object.keys(this.memberGroups).forEach(p => {
            const E=n.idToDummyNode[p];
            m[p]=n.tileNodes(n.memberGroups[p],E.paddingLeft+E.paddingRight);
            E.rect.width=m[p].width;
            E.rect.height=m[p].height;
            E.setCenter(m[p].centerX,m[p].centerY);
            E.labelMarginLeft=0;
            E.labelMarginTop=0;

            if (s.NODE_DIMENSIONS_INCLUDE_LABELS) {
              const y=E.rect.width;
              const R=E.rect.height;

              if (E.labelWidth) {
                if (E.labelPosHorizontal=="left") {
                  E.rect.x-=E.labelWidth;
                  E.setWidth(y+E.labelWidth);
                  E.labelMarginLeft=E.labelWidth;
                } else if (E.labelPosHorizontal=="center"&&E.labelWidth>y) {
                  E.rect.x-=(E.labelWidth-y)/2;
                  E.setWidth(E.labelWidth);
                  E.labelMarginLeft=(E.labelWidth-y)/2;
                } else if (E.labelPosHorizontal=="right") {
                  E.setWidth(y+E.labelWidth);
                }
              }

              if (E.labelHeight) {
                if (E.labelPosVertical=="top") {
                  E.rect.y-=E.labelHeight;
                  E.setHeight(R+E.labelHeight);
                  E.labelMarginTop=E.labelHeight;
                } else if (E.labelPosVertical=="center"&&E.labelHeight>R) {
                  E.rect.y-=(E.labelHeight-R)/2;
                  E.setHeight(E.labelHeight);
                  E.labelMarginTop=(E.labelHeight-R)/2;
                } else if (E.labelPosVertical=="bottom") {
                  E.setHeight(R+E.labelHeight);
                }
              }
            }
          })
        };

        O.prototype.repopulateCompounds=function(){for(let n=this.compoundOrder.length-1;n>=0;n--){
          const m=this.compoundOrder[n];
          const p=m.id;
          const E=m.paddingLeft;
          const y=m.paddingTop;
          const R=m.labelMarginLeft;
          const M=m.labelMarginTop;
          this.adjustLocations(this.tiledMemberPack[p],m.rect.x,m.rect.y,E,y,R,M)
        }};

        O.prototype.repopulateZeroDegreeMembers=function(){
          const n=this;
          const m=this.tiledZeroDegreePack;
          Object.keys(m).forEach(p => {
            const E=n.idToDummyNode[p];
            const y=E.paddingLeft;
            const R=E.paddingTop;
            const M=E.labelMarginLeft;
            const S=E.labelMarginTop;
            n.adjustLocations(m[p],E.rect.x,E.rect.y,y,R,M,S)
          })
        };

        O.prototype.getToBeTiled=function(n){
          const m=n.id;if (this.toBeTiled[m]!=null) {
            return this.toBeTiled[m];
          }const p=n.getChild();if (p==null) {
            this.toBeTiled[m]=false;
            return false;
          }for(let E=p.getNodes(), y=0;y<E.length;y++){const R=E[y];if (this.getNodeDegree(R)>0) {
            this.toBeTiled[m]=false;
            return false;
          }if(R.getChild()==null){this.toBeTiled[R.id]=false;continue}if (!this.getToBeTiled(R)) {
            this.toBeTiled[m]=false;
            return false;
          }}
          this.toBeTiled[m]=true;
          return true;
        };

        O.prototype.getNodeDegree=n => {
          n.id;
          let p=0;
          for(let m=n.getEdges(), E=0;E<m.length;E++){
            const y=m[E];

            if (y.getSource().id!==y.getTarget().id) {
              (p = p+1);
            }
          }return p
        };

        O.prototype.getNodeDegreeWithChildren=function(n){let m=this.getNodeDegree(n);if (n.getChild()==null) {
          return m;
        }for(let p=n.getChild().getNodes(), E=0;E<p.length;E++){const y=p[E];m+=this.getNodeDegreeWithChildren(y)}return m};

        O.prototype.performDFSOnCompounds=function(){
          this.compoundOrder=[];
          this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
        };

        O.prototype.fillCompexOrderByDFS=function(n){
          for (const p of n) {
            if (p.getChild()!=null) {
              this.fillCompexOrderByDFS(p.getChild().getNodes());
            }

            if (this.getToBeTiled(p)) {
              this.compoundOrder.push(p);
            }
          }
        };

        O.prototype.adjustLocations=(n, m, p, E, y, R, M) => {
          m+=E+R;
          p+=y+M;
          const S=m;

          for (const D of n.rows) {
            m=S;
            let q=0;

            for (const X of D) {
              X.rect.x=m;
              X.rect.y=p;
              m+=X.rect.width+n.horizontalPadding;

              if (X.rect.height>q) {
                (q = X.rect.height);
              }
            }

            p+=q+n.verticalPadding
          }
        };

        O.prototype.tileCompoundMembers=function(n,m){
          const p=this;
          this.tiledMemberPack=[];

          Object.keys(n).forEach(E => {
            const y=m[E];
            p.tiledMemberPack[E]=p.tileNodes(n[E],y.paddingLeft+y.paddingRight);
            y.rect.width=p.tiledMemberPack[E].width;
            y.rect.height=p.tiledMemberPack[E].height;
            y.setCenter(p.tiledMemberPack[E].centerX,p.tiledMemberPack[E].centerY);
            y.labelMarginLeft=0;
            y.labelMarginTop=0;

            if (s.NODE_DIMENSIONS_INCLUDE_LABELS) {
              const R=y.rect.width;
              const M=y.rect.height;

              if (y.labelWidth) {
                if (y.labelPosHorizontal=="left") {
                  y.rect.x-=y.labelWidth;
                  y.setWidth(R+y.labelWidth);
                  y.labelMarginLeft=y.labelWidth;
                } else if (y.labelPosHorizontal=="center"&&y.labelWidth>R) {
                  y.rect.x-=(y.labelWidth-R)/2;
                  y.setWidth(y.labelWidth);
                  y.labelMarginLeft=(y.labelWidth-R)/2;
                } else if (y.labelPosHorizontal=="right") {
                  y.setWidth(R+y.labelWidth);
                }
              }

              if (y.labelHeight) {
                if (y.labelPosVertical=="top") {
                  y.rect.y-=y.labelHeight;
                  y.setHeight(M+y.labelHeight);
                  y.labelMarginTop=y.labelHeight;
                } else if (y.labelPosVertical=="center"&&y.labelHeight>M) {
                  y.rect.y-=(y.labelHeight-M)/2;
                  y.setHeight(y.labelHeight);
                  y.labelMarginTop=(y.labelHeight-M)/2;
                } else if (y.labelPosVertical=="bottom") {
                  y.setHeight(M+y.labelHeight);
                }
              }
            }
          });
        };

        O.prototype.tileNodes=function(n,m){
          const p=this.tileNodesByFavoringDim(n,m,true);
          const E=this.tileNodesByFavoringDim(n,m,false);
          const y=this.getOrgRatio(p);
          const R=this.getOrgRatio(E);
          let M;

          if (R<y) {
            M=E;
          } else {
            M=p;
          }

          return M;
        };

        O.prototype.getOrgRatio=n => {
          const m=n.width;
          const p=n.height;
          let E=m/p;

          if (E<1) {
            (E = 1/E);
          }

          return E;
        };

        O.prototype.calcIdealRowWidth=(n, m) => {
          const p=s.TILING_PADDING_VERTICAL;
          const E=s.TILING_PADDING_HORIZONTAL;
          const y=n.length;
          let R=0;
          let M=0;
          let S=0;
          n.forEach(z => {
            R+=z.getWidth();
            M+=z.getHeight();

            if (z.getWidth()>S) {
              (S = z.getWidth());
            }
          });
          const W=R/y;
          const D=M/y;
          const q=(p - E) ** 2+4*(W+E)*(D+p)*y;
          const V=(E-p+Math.sqrt(q))/(2*(W+E));
          let X;

          if (m) {
            X=Math.ceil(V);
            X==V&&X++;
          } else {
            X=Math.floor(V);
          }

          let et=X*(W+E)-E;

          if (S>et) {
            (et = S);
          }

          et+=E*2;
          return et;
        };

        O.prototype.tileNodesByFavoringDim=function(n,m,p){
          const E=s.TILING_PADDING_VERTICAL;
          const y=s.TILING_PADDING_HORIZONTAL;
          const R=s.TILING_COMPARE_BY;
          const M={rows:[],rowWidth:[],rowHeight:[],width:0,height:m,verticalPadding:E,horizontalPadding:y,centerX:0,centerY:0};

          if (R) {
            (M.idealRowWidth = this.calcIdealRowWidth(n,p));
          }

          const S=w => w.rect.width*w.rect.height;
          const W=(w, H) => S(H)-S(w);
          n.sort((z, w) => {let H=W;return M.idealRowWidth?(H=R,H(z.id,w.id)):H(z,w)});
          let D=0;
          let q=0;
          for(var V=0;V<n.length;V++){
            var X=n[V];
            D+=X.getCenterX();
            q+=X.getCenterY();
          }
          M.centerX=D/n.length;
          M.centerY=q/n.length;
          for(var V=0;V<n.length;V++){var X=n[V];if (M.rows.length==0) {
            this.insertNodeToRow(M,X,0,m);
          } else if (this.canAddHorizontal(M,X.rect.width,X.rect.height)) {
            let et=M.rows.length-1;

            if (!M.idealRowWidth) {
              (et = this.getShortestRowIndex(M));
            }

            this.insertNodeToRow(M,X,et,m);
          } else {
            this.insertNodeToRow(M,X,M.rows.length,m);
          }this.shiftToLastRow(M)}return M
        };

        O.prototype.insertNodeToRow=(n, m, p, E) => {
          const y=E;if(p==n.rows.length){
              const R=[];
              n.rows.push(R);
              n.rowWidth.push(y);
              n.rowHeight.push(0);
            }let M=n.rowWidth[p]+m.rect.width;

          if (n.rows[p].length>0) {
            (M += n.horizontalPadding);
          }

          n.rowWidth[p]=M;

          if (n.width<M) {
            (n.width = M);
          }

          let S=m.rect.height;

          if (p>0) {
            (S += n.verticalPadding);
          }

          let W=0;

          if (S>n.rowHeight[p]) {
            W=n.rowHeight[p];
            n.rowHeight[p]=S;
            W=n.rowHeight[p]-W;
          }

          n.height+=W;
          n.rows[p].push(m);
        };

        O.prototype.getShortestRowIndex=n => {
          let m=-1;
          let p=Number.MAX_VALUE;
          for (let E=0; E<n.rows.length; E++) {
            if (n.rowWidth[E]<p) {
              m=E;
              p=n.rowWidth[E];
            }
          }return m
        };

        O.prototype.getLongestRowIndex=n => {
          let m=-1;
          let p=Number.MIN_VALUE;
          for (let E=0; E<n.rows.length; E++) {
            if (n.rowWidth[E]>p) {
              m=E;
              p=n.rowWidth[E];
            }
          }return m
        };

        O.prototype.canAddHorizontal=function(n,m,p){
          if(n.idealRowWidth){
            const E=n.rows.length-1;
            const y=n.rowWidth[E];
            return y+m+n.horizontalPadding<=n.idealRowWidth
          }const R=this.getShortestRowIndex(n);if (R<0) {
              return true;
            }const M=n.rowWidth[R];if (M+n.horizontalPadding+m<=n.width) {
              return true;
            }let S=0;

          if (n.rowHeight[R]<p&&R>0) {
            (S = p+n.verticalPadding-n.rowHeight[R]);
          }

          let W;

          if (n.width-M>=m+n.horizontalPadding) {
            W=(n.height+S)/(M+m+n.horizontalPadding);
          } else {
            W=(n.height+S)/n.width;
          }

          S=p+n.verticalPadding;
          let D;

          if (n.width<m) {
            D=(n.height+S)/m;
          } else {
            D=(n.height+S)/n.width;
          }

          if (D<1) {
            (D = 1/D);
          }

          if (W<1) {
            (W = 1/W);
          }

          return W<D;
        };

        O.prototype.shiftToLastRow=function(n){
          const m=this.getLongestRowIndex(n);
          const p=n.rowWidth.length-1;
          const E=n.rows[m];
          const y=E[E.length-1];
          const R=y.width+n.horizontalPadding;
          if(n.width-n.rowWidth[p]>R&&m!=p){
            E.splice(-1,1);
            n.rows[p].push(y);
            n.rowWidth[m]=n.rowWidth[m]-R;
            n.rowWidth[p]=n.rowWidth[p]+R;
            n.width=n.rowWidth[instance.getLongestRowIndex(n)];
            let M=Number.MIN_VALUE;
            for (let S=0; S<E.length; S++) {
              if (E[S].height>M) {
                (M = E[S].height);
              }
            }

            if (m>0) {
              (M += n.verticalPadding);
            }

            const W=n.rowHeight[m]+n.rowHeight[p];
            n.rowHeight[m]=M;

            if (n.rowHeight[p]<y.height+n.verticalPadding) {
              (n.rowHeight[p] = y.height+n.verticalPadding);
            }

            const D=n.rowHeight[m]+n.rowHeight[p];
            n.height+=D-W;
            this.shiftToLastRow(n);
          }
        };

        O.prototype.tilingPreLayout=function(){
          if (s.TILE) {
            this.groupZeroDegreeMembers();
            this.clearCompounds();
            this.clearZeroDegreeMembers();
          }
        };
        O.prototype.tilingPostLayout=function(){
          if (s.TILE) {
            this.repopulateZeroDegreeMembers();
            this.repopulateCompounds();
          }
        };

        O.prototype.reduceTrees=function(){
          const n=[];
          let m=true;
          let p;

          while (m) {
            const E=this.graphManager.getAllNodes();
            const y=[];
            m=false;for (let R=0; R<E.length; R++) {
              p=E[R];

              if (p.getEdges().length==1&&!p.getEdges()[0].isInterGraph&&p.getChild()==null) {if (s.PURE_INCREMENTAL) {
                const M=p.getEdges()[0].getOtherEnd(p);
                const S=new L(p.getCenterX()-M.getCenterX(),p.getCenterY()-M.getCenterY());
                y.push([p,p.getEdges()[0],p.getOwner(),S])
              } else {
                y.push([p,p.getEdges()[0],p.getOwner()]);
              }m=true}
            }if(m==true){
              const W=[];
              for (let D=0; D<y.length; D++) {
                if (y[D][0].getEdges().length==1) {
                  W.push(y[D]);
                  y[D][0].getOwner().remove(y[D][0]);
                }
              }
              n.push(W);
              this.graphManager.resetAllNodes();
              this.graphManager.resetAllEdges();
            }
          }

          this.prunedNodesAll=n
        };

        O.prototype.growTree=function(n){
          const m=n.length;
          let E;
          for (let p=n[m-1], y=0; y<p.length; y++) {
            E=p[y];
            this.findPlaceforPrunedNode(E);
            E[2].add(E[0]);
            E[2].add(E[1],E[1].source,E[1].target);
          }
          n.splice(n.length-1,1);
          this.graphManager.resetAllNodes();
          this.graphManager.resetAllEdges();
        };

        O.prototype.findPlaceforPrunedNode=function(n){
          let m;
          let p;
          const E=n[0];

          if (E==n[1].source) {
            p=n[1].target;
          } else {
            p=n[1].source;
          }

          if (s.PURE_INCREMENTAL) {
            E.setCenter(p.getCenterX()+n[3].getWidth(),p.getCenterY()+n[3].getHeight());
          } else {
            const y=p.startX;
            const R=p.finishX;
            const M=p.startY;
            const S=p.finishY;
            const W=0;
            const D=0;
            const q=0;
            const V=0;
            const X=[W,q,D,V];
            if (M>0) {
              for (var et=y; et<=R; et++) {
                X[0]+=this.grid[et][M-1].length+this.grid[et][M].length-1;
              }
            }if (R<this.grid.length-1) {
                for (var et=M; et<=S; et++) {
                  X[1]+=this.grid[R+1][et].length+this.grid[R][et].length-1;
                }
              }if (S<this.grid[0].length-1) {
                for (var et=y; et<=R; et++) {
                  X[2]+=this.grid[et][S+1].length+this.grid[et][S].length-1;
                }
              }if (y>0) {
                for (var et=M; et<=S; et++) {
                  X[3]+=this.grid[y-1][et].length+this.grid[y][et].length-1;
                }
              }
            let z=C.MAX_VALUE;
            let w;
            let H;
            for (let B=0; B<X.length; B++) {
              if (X[B]<z) {
                z=X[B];
                w=1;
                H=B;
              } else if (X[B]==z) {
                w++;
              }
            }if (w==3&&z==0) {
              if (X[0]==0&&X[1]==0&&X[2]==0) {
                m=1;
              } else if (X[0]==0&&X[1]==0&&X[3]==0) {
                m=0;
              } else if (X[0]==0&&X[2]==0&&X[3]==0) {
                m=3;
              } else if (X[1]==0&&X[2]==0&&X[3]==0) {
                (m = 2);
              }
            } else if(w==2&&z==0){
              var _=Math.floor(Math.random()*2);

              if (X[0]==0&&X[1]==0) {
                if (_==0) {
                  m=0;
                } else {
                  m=1;
                }
              } else if (X[0]==0&&X[2]==0) {
                if (_==0) {
                  m=0;
                } else {
                  m=2;
                }
              } else if (X[0]==0&&X[3]==0) {
                if (_==0) {
                  m=0;
                } else {
                  m=3;
                }
              } else if (X[1]==0&&X[2]==0) {
                if (_==0) {
                  m=1;
                } else {
                  m=2;
                }
              } else if (X[1]==0&&X[3]==0) {
                if (_==0) {
                  m=1;
                } else {
                  m=3;
                }
              } else if (_==0) {
                m=2;
              } else {
                m=3;
              }
            }else if (w==4&&z==0)
                {var _=Math.floor(Math.random()*4);m=_} else {
                m=H;
              }

            switch (m) {
            case 0:
              E.setCenter(p.getCenterX(),p.getCenterY()-p.getHeight()/2-f.DEFAULT_EDGE_LENGTH-E.getHeight()/2);
              break;
            case 1:
              E.setCenter(p.getCenterX()+p.getWidth()/2+f.DEFAULT_EDGE_LENGTH+E.getWidth()/2,p.getCenterY());
              break;
            case 2:
              E.setCenter(p.getCenterX(),p.getCenterY()+p.getHeight()/2+f.DEFAULT_EDGE_LENGTH+E.getHeight()/2);
              break;
            default:
              E.setCenter(p.getCenterX()-p.getWidth()/2-f.DEFAULT_EDGE_LENGTH-E.getWidth()/2,p.getCenterY());
              break;
            }
          }
        };

        a.exports=O;
      }),991:((a,e,r)=>{
        const l=r(551).FDLayoutNode;
        const i=r(551).IMath;

        class g extends l {
          constructor(o, s, c, f) {super(o, s, c, f)}

          calculateDisplacement() {
            const o=this.graphManager.getLayout();

            if (this.getChild()!=null&&this.fixedNodeWeight) {
              this.displacementX+=o.coolingFactor*(this.springForceX+this.repulsionForceX+this.gravitationForceX)/this.fixedNodeWeight;
              this.displacementY+=o.coolingFactor*(this.springForceY+this.repulsionForceY+this.gravitationForceY)/this.fixedNodeWeight;
            } else {
              this.displacementX+=o.coolingFactor*(this.springForceX+this.repulsionForceX+this.gravitationForceX)/this.noOfChildren;
              this.displacementY+=o.coolingFactor*(this.springForceY+this.repulsionForceY+this.gravitationForceY)/this.noOfChildren;
            }

            if (Math.abs(this.displacementX)>o.coolingFactor*o.maxNodeDisplacement) {
              (this.displacementX = o.coolingFactor*o.maxNodeDisplacement*i.sign(this.displacementX));
            }

            if (Math.abs(this.displacementY)>o.coolingFactor*o.maxNodeDisplacement) {
              (this.displacementY = o.coolingFactor*o.maxNodeDisplacement*i.sign(this.displacementY));
            }

            if (this.child&&this.child.getNodes().length>0) {
              this.propogateDisplacementToChildren(this.displacementX,this.displacementY);
            }
          }

          propogateDisplacementToChildren(o, s) {
            let f;
            for (let c=this.getChild().getNodes(), T=0; T<c.length; T++) {
              f=c[T];

              if (f.getChild()==null) {
                f.displacementX+=o;
                f.displacementY+=s;
              } else {
                f.propogateDisplacementToChildren(o,s);
              }
            }
          }

          move() {
            const o=this.graphManager.getLayout();

            if ((this.child==null || this.child.getNodes().length==0)) {
              this.moveBy(this.displacementX,this.displacementY);
              o.totalDisplacement+=Math.abs(this.displacementX)+Math.abs(this.displacementY);
            }

            this.springForceX=0;
            this.springForceY=0;
            this.repulsionForceX=0;
            this.repulsionForceY=0;
            this.gravitationForceX=0;
            this.gravitationForceY=0;
            this.displacementX=0;
            this.displacementY=0;
          }

          setPred1(o) {this.pred1=o}
          getPred1() {return pred1}
          getPred2() {return pred2}
          setNext(o) {this.next=o}
          getNext() {return next}
          setProcessed(o) {this.processed=o}
          isProcessed() {return processed}

          static getTopMostNodes(t) {
            const o={};
            for (let s=0; s<t.length; s++) {
              o[t[s].id()]=true;
            }const c=t.filter((f, T) => {
            if (typeof f=="number") {
              (f = T);
            }

            for(let d=f.parent()[0];d!=null;){if (o[d.id()]) {
                return false;
              }d=d.parent()[0]}return true;
          });return c
          }

          static connectComponents(t, o, s, c) {
            const f=new i;
            const T=new Set;
            let d=[];
            let v=void 0;
            let L=void 0;
            let b=void 0;
            let C=false;
            let G=1;
            const k=[];
            const Y=[];

            const K=() => {
              const it=t.collection();Y.push(it);
              let n=s[0];
              const m=t.collection();
              m.merge(n).merge(n.descendants().intersection(o));
              d.push(n);

              m.forEach(y => {
                f.push(y);
                T.add(y);
                it.merge(y);
              });

              const p=() => {
                n=f.shift();const R=t.collection();n.neighborhood().nodes().forEach(D => {
                if (o.intersection(n.edgesWith(D)).length>0) {
                  R.merge(D);
                }
              });

                for (const S of R) {
                  v=s.intersection(S.union(S.ancestors()));

                  if (v!=null&&!T.has(v[0])) {const W=v.union(v.descendants());W.forEach(D => {
                    f.push(D);
                    T.add(D);
                    it.merge(D);

                    if (s.has(D)) {
                      d.push(D);
                    }
                  })}
                }
              };

              while (f.length!=0) {
                p();
              }

              it.forEach(y => {o.intersection(y.connectedEdges()).forEach(R => {
                if (it.has(R.source())&&it.has(R.target())) {
                  it.merge(R);
                }
              })});

              if (d.length==s.length) {
                (C = true);
              }

              if (!C||C&&G>1) {
                L=d[0];
                b=L.connectedEdges().length;
                d.forEach(y => {
                  if (y.connectedEdges().length<b) {
                    b=y.connectedEdges().length;
                    L=y;
                  }
                });
                k.push(L.id());
                const E=t.collection();
                E.merge(d[0]);
                d.forEach(y => {E.merge(y)});
                d=[];
                s=s.difference(E);
                G++;
              }
            };

            do {
              K();
            } while (!C);

            if (c&&k.length>0) {
              c.set(`dummy${c.size+1}`,k);
            }

            return Y;
          }

          static relocateComponent(t, o, s) {if(!s.fixedNodeConstraint){
            let c=Number.POSITIVE_INFINITY;
            let f=Number.NEGATIVE_INFINITY;
            let T=Number.POSITIVE_INFINITY;
            let d=Number.NEGATIVE_INFINITY;
            if(s.quality=="draft"){
              let v=true;
              let L=false;
              let b=void 0;
              try{for(var C=o.nodeIndexes[Symbol.iterator](),G;!(v=(G=C.next()).done);v=true){
                const k=G.value;
                const Y=l(k,2);
                const K=Y[0];
                const O=Y[1];
                const it=s.cy.getElementById(K);
                if(it){
                  const n=it.boundingBox();
                  const m=o.xCoords[O]-n.w/2;
                  const p=o.xCoords[O]+n.w/2;
                  const E=o.yCoords[O]-n.h/2;
                  const y=o.yCoords[O]+n.h/2;

                  if (m<c) {
                    (c = m);
                  }

                  if (p>f) {
                    (f = p);
                  }

                  if (E<T) {
                    (T = E);
                  }

                  if (y>d) {
                    (d = y);
                  }
                }
              }}catch(D){
                L=true;
                b=D;
              }finally{try{
                if (!v&&C.return) {
                  C.return();
                }
              }finally{if (L) {
                throw b
              }}}
              const R=t.x-(f+c)/2;
              const M=t.y-(d+T)/2;
              o.xCoords=o.xCoords.map(D => D+R);
              o.yCoords=o.yCoords.map(D => D+M);
            }else{
              Object.keys(o).forEach(D => {
                const q=o[D];
                const V=q.getRect().x;
                const X=q.getRect().x+q.getRect().width;
                const et=q.getRect().y;
                const z=q.getRect().y+q.getRect().height;

                if (V<c) {
                  (c = V);
                }

                if (X>f) {
                  (f = X);
                }

                if (et<T) {
                  (T = et);
                }

                if (z>d) {
                  (d = z);
                }
              });
              const S=t.x-(f+c)/2;
              const W=t.y-(d+T)/2;
              Object.keys(o).forEach(D => {const q=o[D];q.setCenter(q.getCenterX()+S,q.getCenterY()+W)})
            }
          }}

          static calcBoundingBox(t, o, s, c) {
            let f=Number.MAX_SAFE_INTEGER;
            let T=Number.MIN_SAFE_INTEGER;
            let d=Number.MAX_SAFE_INTEGER;
            let v=Number.MIN_SAFE_INTEGER;
            let L=void 0;
            let b=void 0;
            let C=void 0;
            let G=void 0;
            const k=t.descendants().not(":parent");
            for(let Y=k.length, K=0;K<Y;K++){
              const O=k[K];
              L=o[c.get(O.id())]-O.width()/2;
              b=o[c.get(O.id())]+O.width()/2;
              C=s[c.get(O.id())]-O.height()/2;
              G=s[c.get(O.id())]+O.height()/2;

              if (f>L) {
                (f = L);
              }

              if (T<b) {
                (T = b);
              }

              if (d>C) {
                (d = C);
              }

              if (v<G) {
                (v = G);
              }
            }const it={};
            it.topLeftX=f;
            it.topLeftY=d;
            it.width=T-f;
            it.height=v-d;
            return it;
          }

          static calcParentsWithoutChildren(t, o) {
            const s=t.collection();

            o.nodes(":parent").forEach(c => {
              let f=false;
              c.children().forEach(T => {
                if (T.css("display")!="none") {
                  (f = true);
                }
              });

              if (!f) {
                s.merge(c);
              }
            });

            return s;
          }
        }

        for (const t in l) {
            g[t]=l[t];
          }

        a.exports=g;
      }),902:((a,e,r)=>{
        function l(c){if (Array.isArray(c)) {
          const T=Array(c.length);
          for (let f=0; f<c.length; f++) {
            T[f]=c[f];
          }return T
        } else {
          return Array.from(c)
        }}
        const i=r(806);
        const g=r(551).LinkedList;
        const t=r(551).Matrix;
        const o=r(551).SVD;

        class s {
          static handleConstraints(c) {
            const f={};
            f.fixedNodeConstraint=c.constraints.fixedNodeConstraint;
            f.alignmentConstraint=c.constraints.alignmentConstraint;
            f.relativePlacementConstraint=c.constraints.relativePlacementConstraint;
            const T=new Map;
            const d=new Map;
            const v=[];
            const L=[];
            let C=0;
            for(var b=c.getAllNodes(), G=0;G<b.length;G++){
              const k=b[G];

              if (k.getChild()==null) {
                d.set(k.id,C++);
                v.push(k.getCenterX());
                L.push(k.getCenterY());
                T.set(k.id,k);
              }
            }

            if (f.relativePlacementConstraint) {
              f.relativePlacementConstraint.forEach(F => {
                if (!F.gap&&F.gap!=0) {
                  if (F.left) {
                    F.gap=i.DEFAULT_EDGE_LENGTH+T.get(F.left).getWidth()/2+T.get(F.right).getWidth()/2;
                  } else {
                    F.gap=i.DEFAULT_EDGE_LENGTH+T.get(F.top).getHeight()/2+T.get(F.bottom).getHeight()/2;
                  }
                }
              });
            }

            const Y=(U, $) => ({
              x:U.x-$.x,
              y:U.y-$.y
            });

            const K=U => {
              let $=0;
              let J=0;

              U.forEach(Z => {
                $+=v[d.get(Z)];
                J+=L[d.get(Z)];
              });

              return {x:$/U.size,y:J/U.size};
            };

            const O=(U, $, J, Z, at) => {
              function ct(lt,ot){
                const Lt=new Set(lt);
                let ft=true;
                let st=false;
                let Xt=void 0;
                try{for(var Tt=ot[Symbol.iterator](),Ct;!(ft=(Ct=Tt.next()).done);ft=true){const Bt=Ct.value;Lt.add(Bt)}}catch(bt){
                  st=true;
                  Xt=bt;
                }finally{try{
                  if (!ft&&Tt.return) {
                    Tt.return();
                  }
                }finally{if (st) {
                  throw Xt
                }}}return Lt
              }const nt=new Map;
              U.forEach((lt, ot) => {nt.set(ot,0)});
              U.forEach((lt, ot) => {lt.forEach(Lt => {nt.set(Lt.id,nt.get(Lt.id)+1)})});
              const tt=new Map;
              const j=new Map;
              const ut=new g;

              nt.forEach((lt, ot) => {
                if (lt==0) {
                  ut.push(ot);
                  J||($=="horizontal"?tt.set(ot,d.has(ot)?v[d.get(ot)]:Z.get(ot)):tt.set(ot,d.has(ot)?L[d.get(ot)]:Z.get(ot)));
                } else {
                  tt.set(ot,Number.NEGATIVE_INFINITY);
                }

                if (J) {
                  j.set(ot,new Set([ot]));
                }
              });

              if (J) {
                at.forEach(lt => {
                  const ot=[];
                  lt.forEach(st => {
                    if (J.has(st)) {
                      ot.push(st);
                    }
                  });

                  if (ot.length>0) {
                    let Lt=0;
                    ot.forEach(st => {
                      if ($=="horizontal") {
                        tt.set(st,d.has(st)?v[d.get(st)]:Z.get(st));
                        Lt+=tt.get(st);
                      } else {
                        tt.set(st,d.has(st)?L[d.get(st)]:Z.get(st));
                        Lt+=tt.get(st);
                      }
                    });
                    Lt=Lt/ot.length;
                    lt.forEach(st => {
                      if (!J.has(st)) {
                        tt.set(st,Lt);
                      }
                    });
                  } else {
                    let ft=0;
                    lt.forEach(st => {
                      if ($=="horizontal") {
                        ft+=d.has(st)?v[d.get(st)]:Z.get(st);
                      } else {
                        ft+=d.has(st)?L[d.get(st)]:Z.get(st);
                      }
                    });
                    ft=ft/lt.length;
                    lt.forEach(st => {tt.set(st,ft)});
                  }
                });
              }

              const Mt=() => {
                const ot=ut.shift();
                const Lt=U.get(ot);
                Lt.forEach(ft => {
                  if (tt.get(ft.id)<tt.get(ot)+ft.gap) {
                    if (J&&J.has(ft.id)) {
                      let st=void 0;

                      if ($=="horizontal") {
                        st=d.has(ft.id)?v[d.get(ft.id)]:Z.get(ft.id);
                      } else {
                        st=d.has(ft.id)?L[d.get(ft.id)]:Z.get(ft.id);
                      }

                      tt.set(ft.id,st);

                      if (st<tt.get(ot)+ft.gap)
                        {const Xt=tt.get(ot)+ft.gap-st;j.get(ot).forEach(Tt => {tt.set(Tt,tt.get(Tt)-Xt)})}
                    } else {
                      tt.set(ft.id,tt.get(ot)+ft.gap);
                    }
                  }
                  nt.set(ft.id,nt.get(ft.id)-1);

                  if (nt.get(ft.id)==0) {
                    ut.push(ft.id);
                  }

                  if (J) {
                    j.set(ft.id,ct(j.get(ot),j.get(ft.id)));
                  }
                })
              };

              while (ut.length!=0) {
                Mt();
              }

              if(J){
                  const pt=new Set;U.forEach((lt, ot) => {
                if (lt.length==0) {
                  pt.add(ot);
                }
              });const xt=[];

                  j.forEach((lt, ot) => {if(pt.has(ot)){
                    let Lt=false;
                    let ft=true;
                    let st=false;
                    let Xt=void 0;
                    try{for(var Tt=lt[Symbol.iterator](),Ct;!(ft=(Ct=Tt.next()).done);ft=true){
                      const Bt=Ct.value;

                      if (J.has(Bt)) {
                        (Lt = true);
                      }
                    }}catch(St){
                      st=true;
                      Xt=St;
                    }finally{try{
                      if (!ft&&Tt.return) {
                        Tt.return();
                      }
                    }finally{if (st) {
                      throw Xt
                    }}}if(!Lt){
                    let bt=false;
                    let zt=void 0;
                    xt.forEach((St, Zt) => {
                      if (St.has([].concat(l(lt))[0])) {
                        bt=true;
                        zt=Zt;
                      }
                    });

                    if (bt) {
                      lt.forEach(St => {xt[zt].add(St)});
                    } else {
                      xt.push(new Set(lt));
                    }
                  }
                  }});

                  xt.forEach((lt, ot) => {
                    let Lt=Number.POSITIVE_INFINITY;
                    let ft=Number.POSITIVE_INFINITY;
                    let st=Number.NEGATIVE_INFINITY;
                    let Xt=Number.NEGATIVE_INFINITY;
                    let Tt=true;
                    let Ct=false;
                    let Bt=void 0;
                    try{for(var bt=lt[Symbol.iterator](),zt;!(Tt=(zt=bt.next()).done);Tt=true){
                      const St=zt.value;
                      let Zt=void 0;

                      if ($=="horizontal") {
                        Zt=d.has(St)?v[d.get(St)]:Z.get(St);
                      } else {
                        Zt=d.has(St)?L[d.get(St)]:Z.get(St);
                      }

                      const Kt=tt.get(St);

                      if (Zt<Lt) {
                        (Lt = Zt);
                      }

                      if (Zt>st) {
                        (st = Zt);
                      }

                      if (Kt<ft) {
                        (ft = Kt);
                      }

                      if (Kt>Xt) {
                        (Xt = Kt);
                      }
                    }}catch(ee){
                      Ct=true;
                      Bt=ee;
                    }finally{try{
                      if (!Tt&&bt.return) {
                        bt.return();
                      }
                    }finally{if (Ct) {
                      throw Bt
                    }}}
                    const ce=(Lt+st)/2-(ft+Xt)/2;
                    let Qt=true;
                    let jt=false;
                    let _t=void 0;
                    try{for(var Jt=lt[Symbol.iterator](),oe;!(Qt=(oe=Jt.next()).done);Qt=true){const te=oe.value;tt.set(te,tt.get(te)+ce)}}catch(ee){
                      jt=true;
                      _t=ee;
                    }finally{try{
                      if (!Qt&&Jt.return) {
                        Jt.return();
                      }
                    }finally{if (jt) {
                      throw _t
                    }}}
                  });
                }return tt
            };

            const it=U => {
              let $=0;
              let J=0;
              let Z=0;
              let at=0;
              U.forEach(j => {
                if (j.left) {
                  if (v[d.get(j.left)]-v[d.get(j.right)]>=0) {
                    $++;
                  } else {
                    J++;
                  }
                } else if (L[d.get(j.top)]-L[d.get(j.bottom)]>=0) {
                  Z++;
                } else {
                  at++;
                }
              });

              if ($>J&&Z>at) {
                for (let ct=0; ct<d.size; ct++) {
                  v[ct]=-1*v[ct];
                  L[ct]=-1*L[ct];
                }
              } else if ($>J) {
                for (let nt=0; nt<d.size; nt++) {
                  v[nt]=-1*v[nt];
                }
              } else if (Z>at) {
                for (let tt=0; tt<d.size; tt++) {
                  L[tt]=-1*L[tt]
                }
              }
            };

            const n=U => {
              const $=[];
              const J=new g;
              const Z=new Set;
              let at=0;

              U.forEach((ct, nt) => {if(!Z.has(nt)){
                $[at]=[];let tt=nt;
                J.push(tt);
                Z.add(tt);
                $[at].push(tt);

                while (J.length!=0) {tt=J.shift();const j=U.get(tt);j.forEach(ut => {
                  if (!Z.has(ut.id)) {
                    J.push(ut.id);
                    Z.add(ut.id);
                    $[at].push(ut.id);
                  }
                })}

                at++
              }});

              return $;
            };

            const m=U => {
              const $=new Map;
              U.forEach((J, Z) => {$.set(Z,[])});

              U.forEach((J, Z) => {J.forEach(at => {
                $.get(Z).push(at);
                $.get(at.id).push({id:Z,gap:at.gap,direction:at.direction});
              })});

              return $;
            };

            const p=U => {
              const $=new Map;
              U.forEach((J, Z) => {$.set(Z,[])});
              U.forEach((J, Z) => {J.forEach(at => {$.get(at.id).push({id:Z,gap:at.gap,direction:at.direction})})});
              return $;
            };

            const E=[];
            const y=[];
            let R=false;
            let M=false;
            const S=new Set;
            const W=new Map;
            let D=new Map;
            let q=[];

            if (f.fixedNodeConstraint) {
              f.fixedNodeConstraint.forEach(F => {S.add(F.nodeId)});
            }

            if (f.relativePlacementConstraint) {
              f.relativePlacementConstraint.forEach(F => {
                if (F.left) {
                  W.has(F.left)?W.get(F.left).push({id:F.right,gap:F.gap,direction:"horizontal"}):W.set(F.left,[{id:F.right,gap:F.gap,direction:"horizontal"}]);
                  W.has(F.right)||W.set(F.right,[]);
                } else {
                  W.has(F.top)?W.get(F.top).push({id:F.bottom,gap:F.gap,direction:"vertical"}):W.set(F.top,[{id:F.bottom,gap:F.gap,direction:"vertical"}]);
                  W.has(F.bottom)||W.set(F.bottom,[]);
                }
              });

              D=m(W);
              q=n(D);
            }

            if (i.TRANSFORM_ON_CONSTRAINT_HANDLING) {if (f.fixedNodeConstraint&&f.fixedNodeConstraint.length>1) {
              f.fixedNodeConstraint.forEach((F, U) => {
                E[U]=[F.position.x,F.position.y];
                y[U]=[v[d.get(F.nodeId)],L[d.get(F.nodeId)]];
              });

              R=true;
            } else if (f.alignmentConstraint) {
              (() => {
                let F=0;if(f.alignmentConstraint.vertical){
                  const $=tt => {
                    const j=new Set;U[tt].forEach(pt => {j.add(pt)});
                    const ut=new Set([].concat(l(j)).filter(pt => S.has(pt)));
                    let Mt=void 0;

                    if (ut.size>0) {
                      Mt=v[d.get(ut.values().next().value)];
                    } else {
                      Mt=K(j).x;
                    }

                    U[tt].forEach(pt => {
                      E[F]=[Mt,L[d.get(pt)]];
                      y[F]=[v[d.get(pt)],L[d.get(pt)]];
                      F++;
                    });
                  };

                  for (var U=f.alignmentConstraint.vertical, J=0; J<U.length; J++) {
                    $(J);
                  }R=true
                }if(f.alignmentConstraint.horizontal){
                  const at=tt => {
                    const j=new Set;Z[tt].forEach(pt => {j.add(pt)});
                    const ut=new Set([].concat(l(j)).filter(pt => S.has(pt)));
                    let Mt=void 0;

                    if (ut.size>0) {
                      Mt=v[d.get(ut.values().next().value)];
                    } else {
                      Mt=K(j).y;
                    }

                    Z[tt].forEach(pt => {
                      E[F]=[v[d.get(pt)],Mt];
                      y[F]=[v[d.get(pt)],L[d.get(pt)]];
                      F++;
                    });
                  };

                  for (var Z=f.alignmentConstraint.horizontal, ct=0; ct<Z.length; ct++) {
                    at(ct);
                  }R=true
                }

                if (f.relativePlacementConstraint) {
                  (M = true);
                }
              })();
            } else if(f.relativePlacementConstraint){
              let V=0;
              let X=0;
              for (let et=0; et<q.length; et++) {
                if (q[et].length>V) {
                  V=q[et].length;
                  X=et;
                }
              }if (V<D.size/2) {
                it(f.relativePlacementConstraint);
                R=false;
                M=false;
              } else {
                const z=new Map;
                const w=new Map;
                const H=[];
                q[X].forEach(F => {W.get(F).forEach(U => {
                  if (U.direction=="horizontal") {
                    z.has(F)?z.get(F).push(U):z.set(F,[U]);
                    z.has(U.id)||z.set(U.id,[]);
                    H.push({left:F,right:U.id});
                  } else {
                    w.has(F)?w.get(F).push(U):w.set(F,[U]);
                    w.has(U.id)||w.set(U.id,[]);
                    H.push({top:F,bottom:U.id});
                  }
                })});
                it(H);
                M=false;
                const B=O(z,"horizontal");
                const _=O(w,"vertical");

                q[X].forEach((F, U) => {
                  y[U]=[v[d.get(F)],L[d.get(F)]];
                  E[U]=[];

                  if (B.has(F)) {
                    E[U][0]=B.get(F);
                  } else {
                    E[U][0]=v[d.get(F)];
                  }

                  if (_.has(F)) {
                    E[U][1]=_.get(F);
                  } else {
                    E[U][1]=L[d.get(F)];
                  }
                });

                R=true;
              }
            }if(R){
              let ht=void 0;
              const It=t.transpose(y);
              for (var Q=t.transpose(E), Nt=0; Nt<Q.length; Nt++) {
                Q[Nt]=t.multGamma(Q[Nt]);
                It[Nt]=t.multGamma(It[Nt]);
              }
              const vt=t.multMat(Q,t.transpose(It));
              const rt=o.svd(vt);
              ht=t.multMat(rt.V,t.transpose(rt.U));for(let gt=0;gt<d.size;gt++){
                  const mt=[v[gt],L[gt]];
                  const At=[ht[0][0],ht[1][0]];
                  const Ot=[ht[0][1],ht[1][1]];
                  v[gt]=t.dotProduct(mt,At);
                  L[gt]=t.dotProduct(mt,Ot);
                }

              if (M) {
                it(f.relativePlacementConstraint);
              }
            }}

            if(i.ENFORCE_CONSTRAINTS){
              if(f.fixedNodeConstraint&&f.fixedNodeConstraint.length>0){
                const Et={x:0,y:0};

                f.fixedNodeConstraint.forEach((F, U) => {
                  const $={x:v[d.get(F.nodeId)],y:L[d.get(F.nodeId)]};
                  const J=F.position;
                  const Z=Y(J,$);
                  Et.x+=Z.x;
                  Et.y+=Z.y;
                });

                Et.x/=f.fixedNodeConstraint.length;
                Et.y/=f.fixedNodeConstraint.length;
                v.forEach((F, U) => {v[U]+=Et.x});
                L.forEach((F, U) => {L[U]+=Et.y});

                f.fixedNodeConstraint.forEach(F => {
                  v[d.get(F.nodeId)]=F.position.x;
                  L[d.get(F.nodeId)]=F.position.y;
                });
              }if(f.alignmentConstraint){if (f.alignmentConstraint.vertical) {
                const Rt=U => {
                  const $=new Set;Dt[U].forEach(at => {$.add(at)});
                  const J=new Set([].concat(l($)).filter(at => S.has(at)));
                  let Z=void 0;

                  if (J.size>0) {
                    Z=v[d.get(J.values().next().value)];
                  } else {
                    Z=K($).x;
                  }

                  $.forEach(at => {
                    if (!S.has(at)) {
                      (v[d.get(at)] = Z);
                    }
                  });
                };

                for (var Dt=f.alignmentConstraint.vertical, Ht=0; Ht<Dt.length; Ht++) {
                  Rt(Ht);
                }
              }if (f.alignmentConstraint.horizontal) {
                const Pt=U => {
                  const $=new Set;Ut[U].forEach(at => {$.add(at)});
                  const J=new Set([].concat(l($)).filter(at => S.has(at)));
                  let Z=void 0;

                  if (J.size>0) {
                    Z=L[d.get(J.values().next().value)];
                  } else {
                    Z=K($).y;
                  }

                  $.forEach(at => {
                    if (!S.has(at)) {
                      (L[d.get(at)] = Z);
                    }
                  });
                };

                for (var Ut=f.alignmentConstraint.horizontal, Ft=0; Ft<Ut.length; Ft++) {
                  Pt(Ft)
                }
              }}

              if (f.relativePlacementConstraint) {
                (() => {
                  const F=new Map;
                  const U=new Map;
                  const $=new Map;
                  const J=new Map;
                  const Z=new Map;
                  const at=new Map;
                  const ct=new Set;
                  const nt=new Set;

                  S.forEach(Gt => {
                    ct.add(Gt);
                    nt.add(Gt);
                  });

                  if (f.alignmentConstraint) {if (f.alignmentConstraint.vertical) {
                    const j=yt => {
                      $.set(`dummy${yt}`,[]);

                      tt[yt].forEach(wt => {
                        F.set(wt,`dummy${yt}`);
                        $.get(`dummy${yt}`).push(wt);

                        if (S.has(wt)) {
                          ct.add(`dummy${yt}`);
                        }
                      });

                      Z.set(`dummy${yt}`,v[d.get(tt[yt][0])]);
                    };

                    for (var tt=f.alignmentConstraint.vertical, ut=0; ut<tt.length; ut++) {
                      j(ut);
                    }
                  }if (f.alignmentConstraint.horizontal) {
                    const pt=yt => {
                      J.set(`dummy${yt}`,[]);

                      Mt[yt].forEach(wt => {
                        U.set(wt,`dummy${yt}`);
                        J.get(`dummy${yt}`).push(wt);

                        if (S.has(wt)) {
                          nt.add(`dummy${yt}`);
                        }
                      });

                      at.set(`dummy${yt}`,L[d.get(Mt[yt][0])]);
                    };

                    for (var Mt=f.alignmentConstraint.horizontal, xt=0; xt<Mt.length; xt++) {
                      pt(xt)
                    }
                  }}

                  const lt=new Map;
                  const ot=new Map;

                  const Lt=yt => {W.get(yt).forEach(wt => {
                    let kt=void 0;
                    let $t=void 0;

                    if (wt.direction=="horizontal") {
                      kt=F.get(yt)?F.get(yt):yt;
                      F.get(wt.id)?$t={id:F.get(wt.id),gap:wt.gap,direction:wt.direction}:$t=wt;
                      lt.has(kt)?lt.get(kt).push($t):lt.set(kt,[$t]);
                      lt.has($t.id)||lt.set($t.id,[]);
                    } else {
                      kt=U.get(yt)?U.get(yt):yt;
                      U.get(wt.id)?$t={id:U.get(wt.id),gap:wt.gap,direction:wt.direction}:$t=wt;
                      ot.has(kt)?ot.get(kt).push($t):ot.set(kt,[$t]);
                      ot.has($t.id)||ot.set($t.id,[]);
                    }
                  })};

                  let ft=true;
                  let st=false;
                  let Xt=void 0;
                  try{for(var Tt=W.keys()[Symbol.iterator](),Ct;!(ft=(Ct=Tt.next()).done);ft=true){const Bt=Ct.value;Lt(Bt)}}catch(Gt){
                    st=true;
                    Xt=Gt;
                  }finally{try{
                    if (!ft&&Tt.return) {
                      Tt.return();
                    }
                  }finally{if (st) {
                    throw Xt
                  }}}
                  const bt=m(lt);
                  const zt=m(ot);
                  const St=n(bt);
                  const Zt=n(zt);
                  const Kt=p(lt);
                  const ce=p(ot);
                  const Qt=[];
                  const jt=[];

                  St.forEach((Gt, yt) => {
                    Qt[yt]=[];
                    Gt.forEach(wt => {
                      if (Kt.get(wt).length==0) {
                        Qt[yt].push(wt);
                      }
                    });
                  });

                  Zt.forEach((Gt, yt) => {
                    jt[yt]=[];
                    Gt.forEach(wt => {
                      if (ce.get(wt).length==0) {
                        jt[yt].push(wt);
                      }
                    });
                  });

                  const _t=O(lt,"horizontal",ct,Z,Qt);
                  const Jt=O(ot,"vertical",nt,at,jt);
                  const oe=yt => {
                    if ($.get(yt)) {
                      $.get(yt).forEach(wt => {v[d.get(wt)]=_t.get(yt)});
                    } else {
                      v[d.get(yt)]=_t.get(yt);
                    }
                  };
                  let te=true;
                  let ee=false;
                  let Ne=void 0;
                  try{for(var ge=_t.keys()[Symbol.iterator](),Le;!(te=(Le=ge.next()).done);te=true){var ue=Le.value;oe(ue)}}catch(Gt){
                    ee=true;
                    Ne=Gt;
                  }finally{try{
                    if (!te&&ge.return) {
                      ge.return();
                    }
                  }finally{if (ee) {
                    throw Ne
                  }}}
                  const $e=yt => {
                    if (J.get(yt)) {
                      J.get(yt).forEach(wt => {L[d.get(wt)]=Jt.get(yt)});
                    } else {
                      L[d.get(yt)]=Jt.get(yt);
                    }
                  };
                  let de=true;
                  let Ce=false;
                  let Ae=void 0;
                  try{for(var ve=Jt.keys()[Symbol.iterator](),Me;!(de=(Me=ve.next()).done);de=true){var ue=Me.value;$e(ue)}}catch(Gt){
                    Ce=true;
                    Ae=Gt;
                  }finally{try{
                    if (!de&&ve.return) {
                      ve.return();
                    }
                  }finally{if (Ce) {
                    throw Ae
                  }}}
                })();
              }
            }

            for (const Vt of b) {
              if (Vt.getChild()==null) {
                Vt.setCenter(v[d.get(Vt.id)],L[d.get(Vt.id)]);
              }
            }
          }
        }

        a.exports=s;
      }),551:(a=>{a.exports=A})};

      const N={};
      function u(a){
        const e=N[a];if (e!==void 0) {
          return e.exports;
        }const r=N[a]={exports:{}};
        P[a](r,r.exports,u);
        return r.exports;
      }const h=u(45);return h
    })());})(le);
  }

  return le.exports;
}
const pr=he.exports;
let De;
function yr(...args) {
  if (!De) {
    De=1;

    ((I, x) => {((P, N) => {I.exports=N(vr())})(pr, A => (()=>{
      const P={658:(a=>{a.exports=Object.assign!=null?Object.assign.bind(Object):function(e){
        const l=Array(r>1?r-1:0);
        for (var r=args.length, i=1; i<r; i++) {
          l[i-1]=args[i];
        }
        l.forEach(g => {Object.keys(g).forEach(t => e[t]=g[t])});
        return e;
      }}),548:((a,e,r)=>{
        const l = (() => {function t(o,s){
          const c=[];
          let f=true;
          let T=false;
          let d=void 0;
          try{for (var v=o[Symbol.iterator](),L; !(f=(L=v.next()).done)&&(c.push(L.value),!(s&&c.length===s)); f=true)
            {}}catch(b){
            T=true;
            d=b;
          }finally{try{
            if (!f&&v.return) {
              v.return();
            }
          }finally{if (T) {
            throw d
          }}}return c
        }return (o, s) => {if (Array.isArray(o)) {
          return o;
        }if (Symbol.iterator in Object(o)) {
          return t(o,s);
        }throw new TypeError("Invalid attempt to destructure non-iterable instance")};})();

        const i=r(140).layoutBase.LinkedList;
        const g={};

        a.exports=g;
      }),816:((a,e,r)=>{
        const l=r(548);
        const i=r(140).CoSELayout;
        const g=r(140).CoSENode;
        const t=r(140).layoutBase.PointD;
        const o=r(140).layoutBase.DimensionD;
        const s=r(140).layoutBase.LayoutConstants;
        const c=r(140).layoutBase.FDLayoutConstants;
        const f=r(140).CoSEConstants;

        const T=(v, L) => {
          const b=v.cy;
          const C=v.eles;
          const G=C.nodes();
          const k=C.edges();
          let Y=void 0;
          let K=void 0;
          let O=void 0;
          const it={};

          if (v.randomize) {
            Y=L.nodeIndexes;
            K=L.xCoords;
            O=L.yCoords;
          }

          const n=D => typeof D=="function";
          const m=(D, q) => n(D)?D(q):D;
          const p=l.calcParentsWithoutChildren(b,C);

          const E=function W(D,q,V,X){for(let et=q.length, z=0;z<et;z++){
            const w=q[z];
            let H=null;

            if (w.intersection(p).length==0) {
              (H = w.children());
            }

            let B=void 0;
            const _=w.layoutDimensions({nodeDimensionsIncludeLabels:X.nodeDimensionsIncludeLabels});
            if (w.outerWidth()!=null&&w.outerHeight()!=null) {
              if (X.randomize) {
                if (!w.isParent()) {
                  B=D.add(new g(V.graphManager,new t(K[Y.get(w.id())]-_.w/2,O[Y.get(w.id())]-_.h/2),new o(parseFloat(_.w),parseFloat(_.h))));
                } else
                  {
                    const ht=l.calcBoundingBox(w,K,O,Y);

                    if (w.intersection(p).length==0) {
                      B=D.add(new g(V.graphManager,new t(ht.topLeftX,ht.topLeftY),new o(ht.width,ht.height)));
                    } else {
                      B=D.add(new g(V.graphManager,new t(ht.topLeftX,ht.topLeftY),new o(parseFloat(_.w),parseFloat(_.h))));
                    }
                  }
              } else {
                B=D.add(new g(V.graphManager,new t(w.position("x")-_.w/2,w.position("y")-_.h/2),new o(parseFloat(_.w),parseFloat(_.h))));
              }
            } else {
              B=D.add(new g(this.graphManager));
            }
            B.id=w.data("id");
            B.nodeRepulsion=m(X.nodeRepulsion,w);
            B.paddingLeft=parseInt(w.css("padding"));
            B.paddingTop=parseInt(w.css("padding"));
            B.paddingRight=parseInt(w.css("padding"));
            B.paddingBottom=parseInt(w.css("padding"));

            if (X.nodeDimensionsIncludeLabels) {
              B.labelWidth=w.boundingBox({includeLabels:true,includeNodes:false,includeOverlays:false}).w;
              B.labelHeight=w.boundingBox({includeLabels:true,includeNodes:false,includeOverlays:false}).h;
              B.labelPosVertical=w.css("text-valign");
              B.labelPosHorizontal=w.css("text-halign");
            }

            it[w.data("id")]=B;

            if (isNaN(B.rect.x)) {
              (B.rect.x = 0);
            }

            if (isNaN(B.rect.y)) {
              (B.rect.y = 0);
            }

            if (H!=null&&H.length>0) {
              let Q=void 0;
              Q=V.getGraphManager().add(V.newGraph(),B);
              W(Q,H,V,X);
            }
          }};

          const y=(D, q, V) => {
            let X=0;
            let et=0;

            for (const w of V) {
              const H=it[w.data("source")];
              const B=it[w.data("target")];
              if(H&&B&&H!==B&&H.getEdgesBetween(B).length==0){
                const _=q.add(D.newEdge(),H,B);
                _.id=w.id();
                _.idealLength=m(v.idealEdgeLength,w);
                _.edgeElasticity=m(v.edgeElasticity,w);
                X+=_.idealLength;
                et++;
              }
            }

            if (v.idealEdgeLength!=null) {
              et>0?f.DEFAULT_EDGE_LENGTH=c.DEFAULT_EDGE_LENGTH=X/et:n(v.idealEdgeLength)?f.DEFAULT_EDGE_LENGTH=c.DEFAULT_EDGE_LENGTH=50:f.DEFAULT_EDGE_LENGTH=c.DEFAULT_EDGE_LENGTH=v.idealEdgeLength;
              f.MIN_REPULSION_DIST=c.MIN_REPULSION_DIST=c.DEFAULT_EDGE_LENGTH/10;
              f.DEFAULT_RADIAL_SEPARATION=c.DEFAULT_EDGE_LENGTH;
            }
          };

          const R=(D, q) => {
            if (q.fixedNodeConstraint) {
              (D.constraints.fixedNodeConstraint = q.fixedNodeConstraint);
            }

            if (q.alignmentConstraint) {
              (D.constraints.alignmentConstraint = q.alignmentConstraint);
            }

            if (q.relativePlacementConstraint) {
              (D.constraints.relativePlacementConstraint = q.relativePlacementConstraint);
            }
          };

          if (v.nestingFactor!=null) {
            (f.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = c.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=v.nestingFactor);
          }

          if (v.gravity!=null) {
            (f.DEFAULT_GRAVITY_STRENGTH = c.DEFAULT_GRAVITY_STRENGTH=v.gravity);
          }

          if (v.numIter!=null) {
            (f.MAX_ITERATIONS = c.MAX_ITERATIONS=v.numIter);
          }

          if (v.gravityRange!=null) {
            (f.DEFAULT_GRAVITY_RANGE_FACTOR = c.DEFAULT_GRAVITY_RANGE_FACTOR=v.gravityRange);
          }

          if (v.gravityCompound!=null) {
            (f.DEFAULT_COMPOUND_GRAVITY_STRENGTH = c.DEFAULT_COMPOUND_GRAVITY_STRENGTH=v.gravityCompound);
          }

          if (v.gravityRangeCompound!=null) {
            (f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = c.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=v.gravityRangeCompound);
          }

          if (v.initialEnergyOnIncremental!=null) {
            (f.DEFAULT_COOLING_FACTOR_INCREMENTAL = c.DEFAULT_COOLING_FACTOR_INCREMENTAL=v.initialEnergyOnIncremental);
          }

          if (v.tilingCompareBy!=null) {
            (f.TILING_COMPARE_BY = v.tilingCompareBy);
          }

          if (v.quality=="proof") {
            s.QUALITY=2;
          } else {
            s.QUALITY=0;
          }

          f.NODE_DIMENSIONS_INCLUDE_LABELS=c.NODE_DIMENSIONS_INCLUDE_LABELS=s.NODE_DIMENSIONS_INCLUDE_LABELS=v.nodeDimensionsIncludeLabels;
          f.DEFAULT_INCREMENTAL = !v.randomize;
          c.DEFAULT_INCREMENTAL = !v.randomize;
          s.DEFAULT_INCREMENTAL = !v.randomize;
          f.ANIMATE=c.ANIMATE=s.ANIMATE=v.animate;
          f.TILE=v.tile;
          f.TILING_PADDING_VERTICAL=typeof v.tilingPaddingVertical=="function"?v.tilingPaddingVertical.call():v.tilingPaddingVertical;
          f.TILING_PADDING_HORIZONTAL=typeof v.tilingPaddingHorizontal=="function"?v.tilingPaddingHorizontal.call():v.tilingPaddingHorizontal;
          f.DEFAULT_INCREMENTAL = true;
          c.DEFAULT_INCREMENTAL = true;
          s.DEFAULT_INCREMENTAL = true;
          f.PURE_INCREMENTAL=!v.randomize;
          s.DEFAULT_UNIFORM_LEAF_NODE_SIZES=v.uniformNodeDimensions;

          if (v.step=="transformed") {
            f.TRANSFORM_ON_CONSTRAINT_HANDLING=true;
            f.ENFORCE_CONSTRAINTS=false;
            f.APPLY_LAYOUT=false;
          }

          if (v.step=="enforced") {
            f.TRANSFORM_ON_CONSTRAINT_HANDLING=false;
            f.ENFORCE_CONSTRAINTS=true;
            f.APPLY_LAYOUT=false;
          }

          if (v.step=="cose") {
            f.TRANSFORM_ON_CONSTRAINT_HANDLING=false;
            f.ENFORCE_CONSTRAINTS=false;
            f.APPLY_LAYOUT=true;
          }

          if (v.step=="all") {
            v.randomize?f.TRANSFORM_ON_CONSTRAINT_HANDLING=true:f.TRANSFORM_ON_CONSTRAINT_HANDLING=false;
            f.ENFORCE_CONSTRAINTS=true;
            f.APPLY_LAYOUT=true;
          }

          if (v.fixedNodeConstraint||v.alignmentConstraint||v.relativePlacementConstraint) {
            f.TREE_REDUCTION_ON_INCREMENTAL=false;
          } else {
            f.TREE_REDUCTION_ON_INCREMENTAL=true;
          }

          const M=new i;
          const S=M.newGraphManager();
          E(S.addRoot(),l.getTopMostNodes(G),M,v);
          y(M,S,k);
          R(M,v);
          M.runLayout();
          return it;
        };

        a.exports={coseLayout:T}
      }),212:((a,e,r)=>{
        const l = (() => {function v(L,b){
          for (const G of b) {
            G.enumerable=G.enumerable||false;
            G.configurable=true;

            if ("value"in G) {
              (G.writable = true);
            }

            Object.defineProperty(L,G.key,G);
          }
        }return (L, b, C) => {
          if (b) {
            v(L.prototype,b);
          }

          if (C) {
            v(L,C);
          }

          return L;
        };})();function i(v,L){if (!(v instanceof L)) {
          throw new TypeError("Cannot call a class as a function")
        }}
        const g=r(658);
        const t=r(548);
        const o=r(657);
        const s=o.spectralLayout;
        const c=r(816);
        const f=c.coseLayout;
        const T=Object.freeze({quality:"default",randomize:true,animate:true,animationDuration:1000/* 1e3 */,animationEasing:void 0,fit:true,padding:30,nodeDimensionsIncludeLabels:false,uniformNodeDimensions:false,packComponents:true,step:"all",samplingType:true,sampleSize:25,nodeSeparation:75,piTol:1e-7,nodeRepulsion(L) {return 4500},idealEdgeLength(L) {return 50},edgeElasticity(L) {return 0.45/* .45 */;},nestingFactor:0.1/* .1 */,gravity:0.25/* .25 */,numIter:2500,tile:true,tilingCompareBy:void 0,tilingPaddingVertical:10,tilingPaddingHorizontal:10,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:0.3/* .3 */,fixedNodeConstraint:void 0,alignmentConstraint:void 0,relativePlacementConstraint:void 0,ready() {},stop() {}});

        const d = (() => {
          function v(L){
            i(this,v);
            this.options=g({},T,L);
          }

          l(v,[{key:"run",value() {
            const b=this;
            const C=this.options;
            const G=C.cy;
            const k=C.eles;
            const Y=[];
            const K=[];
            let O=void 0;
            const it=[];

            if (C.fixedNodeConstraint&&(!Array.isArray(C.fixedNodeConstraint)||C.fixedNodeConstraint.length==0)) {
              (C.fixedNodeConstraint = void 0);
            }

            if (C.alignmentConstraint) {
              C.alignmentConstraint.vertical&&(!Array.isArray(C.alignmentConstraint.vertical)||C.alignmentConstraint.vertical.length==0)&&(C.alignmentConstraint.vertical=void 0);
              C.alignmentConstraint.horizontal&&(!Array.isArray(C.alignmentConstraint.horizontal)||C.alignmentConstraint.horizontal.length==0)&&(C.alignmentConstraint.horizontal=void 0);
            }

            if (C.relativePlacementConstraint&&(!Array.isArray(C.relativePlacementConstraint)||C.relativePlacementConstraint.length==0)) {
              (C.relativePlacementConstraint = void 0);
            }

            const n=C.fixedNodeConstraint||C.alignmentConstraint||C.relativePlacementConstraint;

            if (n) {
              C.tile=false;
              C.packComponents=false;
            }

            let m=void 0;
            let p=false;

            if (G.layoutUtilities&&C.packComponents) {
              m=G.layoutUtilities("get");
              m||(m=G.layoutUtilities());
              p=true;
            }

            if (k.nodes().length>0) {
              if(p){
                const R=t.getTopMostNodes(C.eles.nodes());
                O=t.connectComponents(G,C.eles,R);
                O.forEach(vt => {const rt=vt.boundingBox();it.push({x:rt.x1+rt.w/2,y:rt.y1+rt.h/2})});

                if (C.randomize) {
                  O.forEach(vt => {
                    C.eles=vt;
                    Y.push(s(C));
                  });
                }

                if (C.quality=="default"||C.quality=="proof") {const M=G.collection();if(C.tile){
                  const S=new Map;
                  const W=[];
                  const D=[];
                  let q=0;
                  const V={nodeIndexes:S,xCoords:W,yCoords:D};
                  const X=[];

                  O.forEach((vt, rt) => {
                    if (vt.edges().length==0) {
                      vt.nodes().forEach((gt, mt) => {
                        M.merge(vt.nodes()[mt]);

                        if (!gt.isParent()) {
                          V.nodeIndexes.set(vt.nodes()[mt].id(),q++);
                          V.xCoords.push(vt.nodes()[0].position().x);
                          V.yCoords.push(vt.nodes()[0].position().y);
                        }
                      });

                      X.push(rt);
                    }
                  });

                  if (M.length>1) {
                    const et=M.boundingBox();
                    it.push({x:et.x1+et.w/2,y:et.y1+et.h/2});
                    O.push(M);
                    Y.push(V);
                    for (let z=X.length-1; z>=0; z--) {
                      O.splice(X[z],1);
                      Y.splice(X[z],1);
                      it.splice(X[z],1);
                    }
                  }
                }O.forEach((vt, rt) => {
                  C.eles=vt;
                  K.push(f(C,Y[rt]));
                  t.relocateComponent(it[rt],K[rt],C);
                })} else {
                  O.forEach((vt, rt) => {t.relocateComponent(it[rt],Y[rt],C)});
                }

                const w=new Set;if(O.length>1){
                    const H=[];
                    const B=k.filter(vt => vt.css("display")=="none");
                    O.forEach((vt, rt) => {
                      let gt=void 0;

                      if (C.quality=="draft") {
                        (gt = Y[rt].nodeIndexes);
                      }

                      if (vt.nodes().not(B).length>0) {
                        const mt={};
                        mt.edges=[];
                        mt.nodes=[];
                        let At=void 0;

                        vt.nodes().not(B).forEach(Ot => {if (C.quality=="draft") {
                          if (!Ot.isParent()) {
                            At=gt.get(Ot.id());
                            mt.nodes.push({x:Y[rt].xCoords[At]-Ot.boundingbox().w/2,y:Y[rt].yCoords[At]-Ot.boundingbox().h/2,width:Ot.boundingbox().w,height:Ot.boundingbox().h});
                          } else
                            {const Et=t.calcBoundingBox(Ot,Y[rt].xCoords,Y[rt].yCoords,gt);mt.nodes.push({x:Et.topLeftX,y:Et.topLeftY,width:Et.width,height:Et.height})}
                        } else {
                          if (K[rt][Ot.id()]) {
                            mt.nodes.push({x:K[rt][Ot.id()].getLeft(),y:K[rt][Ot.id()].getTop(),width:K[rt][Ot.id()].getWidth(),height:K[rt][Ot.id()].getHeight()});
                          }
                        }});

                        vt.edges().forEach(Ot => {
                          const Et=Ot.source();
                          const Dt=Ot.target();
                          if (Et.css("display")!="none"&&Dt.css("display")!="none") {
                            if (C.quality=="draft") {
                              const Rt=gt.get(Et.id());
                              const Ht=gt.get(Dt.id());
                              const Ut=[];
                              const Pt=[];
                              if (Et.isParent()) {
                                const Ft=t.calcBoundingBox(Et,Y[rt].xCoords,Y[rt].yCoords,gt);
                                Ut.push(Ft.topLeftX+Ft.width/2);
                                Ut.push(Ft.topLeftY+Ft.height/2);
                              } else {
                                Ut.push(Y[rt].xCoords[Rt]);
                                Ut.push(Y[rt].yCoords[Rt]);
                              }if (Dt.isParent()) {
                                const Yt=t.calcBoundingBox(Dt,Y[rt].xCoords,Y[rt].yCoords,gt);
                                Pt.push(Yt.topLeftX+Yt.width/2);
                                Pt.push(Yt.topLeftY+Yt.height/2);
                              } else {
                                Pt.push(Y[rt].xCoords[Ht]);
                                Pt.push(Y[rt].yCoords[Ht]);
                              }mt.edges.push({startX:Ut[0],startY:Ut[1],endX:Pt[0],endY:Pt[1]})
                            } else {
                              if (K[rt][Et.id()]&&K[rt][Dt.id()]) {
                                mt.edges.push({startX:K[rt][Et.id()].getCenterX(),startY:K[rt][Et.id()].getCenterY(),endX:K[rt][Dt.id()].getCenterX(),endY:K[rt][Dt.id()].getCenterY()});
                              }
                            }
                          }
                        });

                        if (mt.nodes.length>0) {
                          H.push(mt);
                          w.add(rt);
                        }
                      }
                    });const _=m.packComponents(H,C.randomize).shifts;if (C.quality=="draft") {
                      Y.forEach((vt, rt) => {
                        const gt=vt.xCoords.map(At => At+_[rt].dx);
                        const mt=vt.yCoords.map(At => At+_[rt].dy);
                        vt.xCoords=gt;
                        vt.yCoords=mt;
                      });
                    } else {let ht=0;w.forEach(vt => {
                      Object.keys(K[vt]).forEach(rt => {const gt=K[vt][rt];gt.setCenter(gt.getCenterX()+_[ht].dx,gt.getCenterY()+_[ht].dy)});
                      ht++;
                    })}
                  }
              }else{
                const E=C.eles.boundingBox();
                it.push({x:E.x1+E.w/2,y:E.y1+E.h/2});

                if (C.randomize)
                  {const y=s(C);Y.push(y)}

                if (C.quality=="default"||C.quality=="proof") {
                  K.push(f(C,Y[0]));
                  t.relocateComponent(it[0],K[0],C);
                } else {
                  t.relocateComponent(it[0],Y[0],C);
                }
              }
            }

            const Q=(rt, gt) => {if(C.quality=="default"||C.quality=="proof"){
              if (typeof rt=="number") {
                (rt = gt);
              }

              let mt=void 0;
              let At=void 0;
              const Ot=rt.data("id");
              K.forEach(Dt => {
                if (Ot in Dt) {
                  mt={x:Dt[Ot].getRect().getCenterX(),y:Dt[Ot].getRect().getCenterY()};
                  At=Dt[Ot];
                }
              });

              if (C.nodeDimensionsIncludeLabels) {
                At.labelWidth&&(At.labelPosHorizontal=="left"?mt.x+=At.labelWidth/2:At.labelPosHorizontal=="right"&&(mt.x-=At.labelWidth/2));
                At.labelHeight&&(At.labelPosVertical=="top"?mt.y+=At.labelHeight/2:At.labelPosVertical=="bottom"&&(mt.y-=At.labelHeight/2));
              }

              if (mt==null) {
                (mt = {x:rt.position("x"),y:rt.position("y")});
              }

              return {x:mt.x,y:mt.y};
            }else{
              let Et=void 0;
              Y.forEach(Dt => {
                const Rt=Dt.nodeIndexes.get(rt.id());

                if (Rt!=null) {
                  (Et = {x:Dt.xCoords[Rt],y:Dt.yCoords[Rt]});
                }
              });

              if (Et==null) {
                (Et = {x:rt.position("x"),y:rt.position("y")});
              }

              return {x:Et.x,y:Et.y};
            }};if (C.quality=="default"||C.quality=="proof"||C.randomize) {
              const It=t.calcParentsWithoutChildren(G,k);
              const Nt=k.filter(vt => vt.css("display")=="none");
              C.eles=k.not(Nt);
              k.nodes().not(":parent").not(Nt).layoutPositions(b,C,Q);

              if (It.length>0) {
                It.forEach(vt => {vt.position(Q(vt))});
              }
            } else {
                console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.")
              }
          }}]);

          return v;
        })();

        a.exports=d
      }),657:((a,e,r)=>{
        const l=r(548);
        const i=r(140).layoutBase.Matrix;
        const g=r(140).layoutBase.SVD;

        const t=s => {
          const c=s.cy;
          const f=s.eles;
          const T=f.nodes();
          const d=f.nodes(":parent");
          const v=new Map;
          const L=new Map;
          const b=new Map;
          const C=[];
          let G=[];
          let k=[];
          const Y=[];
          const K=[];
          const O=[];
          const it=[];
          let n=[];
          let m=void 0;
          const p=100000000/* 1e8 */;
          const E=1e-9;
          const y=s.piTol;
          const R=s.samplingType;
          const M=s.nodeSeparation;
          let S=void 0;

          const W=() => {
            let U=0;
            let J=false;
            for(let $=0;$<S;){
              U=Math.floor(Math.random()*m);
              J=false;
              for (let Z=0; Z<$; Z++) {
                if(Y[Z]==U){J=true;break}
              }if (!J) {
                Y[$]=U;
                $++;
              } else {
                continue
              }
            }
          };

          const D=(U, $, J) => {
            const Z=[];
            let at=0;
            let ct=0;
            let nt=0;
            let tt=void 0;
            const j=[];
            let ut=0;
            let Mt=1;
            for (let pt=0; pt<m; pt++) {
              j[pt]=p;
            }
            Z[ct]=U;

            for (j[U]=0; ct>=at; ) {nt=Z[at++];for (let xt=C[nt], lt=0; lt<xt.length; lt++) {
              tt=L.get(xt[lt]);

              if (j[tt]==p) {
                j[tt]=j[nt]+1;
                Z[++ct]=tt;
              }
            }O[nt][$]=j[nt]*M}

            if(J){for (let ot=0; ot<m; ot++) {
              if (O[ot][$]<K[ot]) {
                (K[ot] = O[ot][$]);
              }
            }for (let Lt=0; Lt<m; Lt++) {
              if (K[Lt]>ut) {
                ut=K[Lt];
                Mt=Lt;
              }
            }}return Mt
          };

          const q=U => {let $=void 0;if(U){$=Math.floor(Math.random()*m);for (let Z=0; Z<m; Z++) {
            K[Z]=p;
          }for (let at=0; at<S; at++) {
            Y[at]=$;
            $=D($,at,U);
          }}else{W();for (let J=0; J<S; J++) {
            D(Y[J],J,U)
          }}for (let ct=0; ct<m; ct++) {
            for (let nt=0; nt<S; nt++) {
              O[ct][nt]*=O[ct][nt];
            }
          }for (let tt=0; tt<S; tt++) {
            it[tt]=[];
          }for (let j=0; j<S; j++) {
            for (let ut=0; ut<S; ut++) {
              it[j][ut]=O[Y[ut]][j]
            }
          }};

          const V=() => {
            const U=g.svd(it);
            const $=U.S;
            const J=U.U;
            const Z=U.V;
            const at=$[0]*$[0]*$[0];
            const ct=[];
            for(let nt=0;nt<S;nt++){ct[nt]=[];for (let tt=0; tt<S; tt++) {
              ct[nt][tt]=0;

              if (nt==tt) {
                (ct[nt][tt] = $[nt]/($[nt]*$[nt]+at/($[nt]*$[nt])));
              }
            }}n=i.multMat(i.multMat(Z,ct),i.transpose(J))
          };

          const X=() => {
            let U=void 0;
            let $=void 0;
            let J=[];
            let Z=[];
            const at=[];
            let ct=[];
            for (let nt=0; nt<m; nt++) {
              J[nt]=Math.random();
              Z[nt]=Math.random();
            }
            J=i.normalize(J);
            Z=i.normalize(Z);
            let tt=E;
            let j=E;
            let ut=void 0;

            while (true) {
              for (let Mt=0; Mt<m; Mt++) {
                at[Mt]=J[Mt];
              }
              J=i.multGamma(i.multL(i.multGamma(at),O,n));
              U=i.dotProduct(at,J);
              J=i.normalize(J);
              tt=i.dotProduct(at,J);
              ut=Math.abs(tt/j);

              if (ut<=1+y&&ut>=1) {
                break;
              }

              j=tt
            }

            for (let pt=0; pt<m; pt++) {
                at[pt]=J[pt];
              }for(j=E;;){
                for (let xt=0; xt<m; xt++) {
                  ct[xt]=Z[xt];
                }
                ct=i.minusOp(ct,i.multCons(at,i.dotProduct(at,ct)));
                Z=i.multGamma(i.multL(i.multGamma(ct),O,n));
                $=i.dotProduct(ct,Z);
                Z=i.normalize(Z);
                tt=i.dotProduct(ct,Z);
                ut=Math.abs(tt/j);

                if (ut<=1+y&&ut>=1) {
                  break;
                }

                j=tt
              }for (let lt=0; lt<m; lt++) {
                ct[lt]=Z[lt];
              }
            G=i.multCons(at,Math.sqrt(Math.abs(U)));
            k=i.multCons(ct,Math.sqrt(Math.abs($)));
          };

          l.connectComponents(c,f,l.getTopMostNodes(T),v);
          d.forEach(F => {l.connectComponents(c,f,l.getTopMostNodes(F.descendants().intersection(f)),v)});
          let et=0;
          for (let z=0; z<T.length; z++) {
            if (!T[z].isParent()) {
              L.set(T[z].id(),et++);
            }
          }
          let w=true;
          let H=false;
          let B=void 0;
          try{for(var _=v.keys()[Symbol.iterator](),ht;!(w=(ht=_.next()).done);w=true){const Q=ht.value;L.set(Q,et++)}}catch(F){
            H=true;
            B=F;
          }finally{try{
            if (!w&&_.return) {
              _.return();
            }
          }finally{if (H) {
            throw B
          }}}for (let It=0; It<L.size; It++) {
            C[It]=[];
          }

          d.forEach(F => {
            for (var U=F.children().intersection(f); U.nodes(":childless").length==0; ) {
              U=U.nodes()[0].children().intersection(f);
            }
            let $=0;
            let J=U.nodes(":childless")[0].connectedEdges().length;
            U.nodes(":childless").forEach((Z, at) => {
              if (Z.connectedEdges().length<J) {
                J=Z.connectedEdges().length;
                $=at;
              }
            });
            b.set(F.id(),U.nodes(":childless")[$].id());
          });

          T.forEach(F => {
            let U=void 0;

            if (F.isParent()) {
              U=L.get(b.get(F.id()));
            } else {
              U=L.get(F.id());
            }

            F.neighborhood().nodes().forEach($ => {
              if (f.intersection(F.edgesWith($)).length>0) {
                if ($.isParent()) {
                  C[U].push(b.get($.id()));
                } else {
                  C[U].push($.id());
                }
              }
            });
          });

          const Nt=U => {
            const $=L.get(U);
            let J=void 0;
            v.get(U).forEach(Z => {
              if (c.getElementById(Z).isParent()) {
                J=b.get(Z);
              } else {
                J=Z;
              }

              C[$].push(J);
              C[L.get(J)].push(U);
            })
          };

          let vt=true;
          let rt=false;
          let gt=void 0;
          try{for(var mt=v.keys()[Symbol.iterator](),At;!(vt=(At=mt.next()).done);vt=true){const Ot=At.value;Nt(Ot)}}catch(F){
            rt=true;
            gt=F;
          }finally{try{
            if (!vt&&mt.return) {
              mt.return();
            }
          }finally{if (rt) {
            throw gt
          }}}m=L.size;let Et=void 0;if(m>2){
          S=m<s.sampleSize?m:s.sampleSize;for (let Dt=0; Dt<m; Dt++) {
                O[Dt]=[];
              }for (let Rt=0; Rt<S; Rt++) {
                n[Rt]=[];
              }

          if (s.quality=="draft"||s.step=="all") {
            q(R);
            V();
            X();
            Et={nodeIndexes:L,xCoords:G,yCoords:k};
          } else {
            L.forEach((F, U) => {
              G.push(c.getElementById(U).position("x"));
              k.push(c.getElementById(U).position("y"));
            });

            Et={nodeIndexes:L,xCoords:G,yCoords:k};
          }

          return Et;
        }else{
            const Ht=L.keys();
            const Ut=c.getElementById(Ht.next().value);
            const Pt=Ut.position();
            const Ft=Ut.outerWidth();
            G.push(Pt.x);
            k.push(Pt.y);

            if (m==2) {
              const Yt=c.getElementById(Ht.next().value);
              const Vt=Yt.outerWidth();
              G.push(Pt.x+Ft/2+Vt/2+s.idealEdgeLength);
              k.push(Pt.y);
            }

            Et={nodeIndexes:L,xCoords:G,yCoords:k};
            return Et;
          }
        };

        a.exports={spectralLayout:t}
      }),579:((a,e,r)=>{
        const l=r(212);
        const i=t => {
          if (t) {
            t("layout","fcose",l);
          }
        };

        if (typeof cytoscape !== "undefined") {
          i(cytoscape);
        }

        a.exports=i;
      }),140:(a=>{a.exports=A})};

      const N={};
      function u(a){
        const e=N[a];if (e!==void 0) {
          return e.exports;
        }const r=N[a]={exports:{}};
        P[a](r,r.exports,u);
        return r.exports;
      }const h=u(579);return h
    })());})(he);
  }

  return he.exports;
}const Er=yr();const mr=bB(Er);
const xe={L:"left",R:"right",T:"top",B:"bottom"};

const Ie={L:a2(I => `${I},${I/2} 0,${I} 0,0`,"L"),R:a2(I => `0,${I/2} ${I},0 ${I},${I}`,"R"),T:a2(I => `0,0 ${I},0 ${I/2},${I}`,"T"),B:a2(I => `${I/2},0 ${I},${I} 0,${I}`,"B")};

const se={L:a2((I, x) => I-x+2,"L"),R:a2((I, x) => I-2,"R"),T:a2((I, x) => I-x+2,"T"),B:a2((I, x) => I-2,"B")};

const Tr=a2(I => Wt(I)?I==="L"?"R":"L":I==="T"?"B":"T","getOppositeArchitectureDirection");
const Re=a2(I => {const x=I;return x==="L"||x==="R"||x==="T"||x==="B"},"isArchitectureDirection");
var Wt=a2(I => {const x=I;return x==="L"||x==="R"},"isArchitectureDirectionX");
const qt=a2(I => {const x=I;return x==="T"||x==="B"},"isArchitectureDirectionY");

const Te=a2((I, x) => {
  const A=Wt(I)&&qt(x);
  const P=qt(I)&&Wt(x);
  return A||P
},"isArchitectureDirectionXY");

const Nr=a2(I => {
  const x=I[0];
  const A=I[1];
  const P=Wt(x)&&qt(A);
  const N=qt(x)&&Wt(A);
  return P||N
},"isArchitecturePairXY");

const Lr=a2(I => I!=="LL"&&I!=="RR"&&I!=="TT"&&I!=="BB","isValidArchitectureDirectionPair");
const ye=a2((I, x) => {const A=`${I}${x}`;return Lr(A)?A:void 0},"getArchitectureDirectionPair");

const Cr=a2(([I,x], A) => {
  const P=A[0];
  const N=A[1];

  if (Wt(P)) {
    if (qt(N)) {
      return [I+(P==="L"?-1:1),x+(N==="T"?1:-1)];
    }

    return [I+(P==="L"?-1:1),x];
  }

  if (Wt(N)) {
    return [I+(N==="L"?1:-1),x+(P==="T"?1:-1)];
  }

  return [I,x+(P==="T"?1:-1)];
},"shiftPositionByArchitectureDirectionPair");

const Ar=a2(I => I==="LT"||I==="TL"?[1,1]:I==="BL"||I==="LB"?[1,-1]:I==="BR"||I==="RB"?[-1,-1]:[-1,1],"getArchitectureDirectionXYFactors");
const Mr=a2((I, x) => Te(I,x)?"bend":Wt(I)?"horizontal":"vertical","getArchitectureDirectionAlignment");
const wr=a2(I => I.type==="service","isArchitectureService");
const Or=a2(I => I.type==="junction","isArchitectureJunction");

const be=a2(I => I.data(),"edgeData");

const ie=a2(I => I.data(),"nodeData");

const Dr=aC.architecture;
let ae;

ae=class{constructor(){
  this.nodes={};
  this.groups={};
  this.edges=[];
  this.registeredIds={};
  this.elements={};
  this.setAccTitle=a6;
  this.getAccTitle=a5;
  this.setDiagramTitle=an;
  this.getDiagramTitle=ao;
  this.getAccDescription=a4;
  this.setAccDescription=a3;
  this.clear();
}clear(){
  this.nodes={};
  this.groups={};
  this.edges=[];
  this.registeredIds={};
  this.dataStructures=void 0;
  this.elements={};
  at();
}addService({id,icon,in: _in,title,iconText}){
  if (this.registeredIds[x]!==void 0) {
    throw new Error(`The service id [${id}] is already in use by another ${this.registeredIds[x]}`);
  }if(_in!==void 0){if (id===_in) {
    throw new Error(`The service [${id}] cannot be placed within itself`);
  }if (this.registeredIds[P]===void 0) {
    throw new Error(`The service [${id}]'s parent does not exist. Please make sure the parent is created before this service`);
  }if (this.registeredIds[P]==="node") {
    throw new Error(`The service [${id}]'s parent is not a group`)
  }}
  this.registeredIds[x]="node";
  this.nodes[x]={id:id,type:"service",icon:icon,iconText:iconText,title:title,edges:[],in:_in};
}getServices(){return Object.values(this.nodes).filter(wr)}addJunction({id,in: _in}){
  this.registeredIds[x]="node";
  this.nodes[x]={id:id,type:"junction",edges:[],in:_in};
}getJunctions(){return Object.values(this.nodes).filter(Or)}getNodes(){return Object.values(this.nodes)}getNode(x){return this.nodes[x]??null}addGroup({id,icon,in: _in,title}){
  if (this.registeredIds?.[x]!==void 0) {
    throw new Error(`The group id [${id}] is already in use by another ${this.registeredIds[x]}`);
  }if(_in!==void 0){if (id===_in) {
    throw new Error(`The group [${id}] cannot be placed within itself`);
  }if (this.registeredIds?.[P]===void 0) {
    throw new Error(`The group [${id}]'s parent does not exist. Please make sure the parent is created before this group`);
  }if (this.registeredIds?.[P]==="node") {
    throw new Error(`The group [${id}]'s parent is not a group`)
  }}
  this.registeredIds[x]="group";
  this.groups[x]={id:id,icon:icon,title:title,in:_in};
}getGroups(){return Object.values(this.groups)}addEdge({lhsId,rhsId,lhsDir,rhsDir,lhsInto,rhsInto,lhsGroup,rhsGroup,title}){
  if (!Re(lhsDir)) {
    throw new Error(`Invalid direction given for left hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(lhsDir)}`);
  }if (!Re(rhsDir)) {
      throw new Error(`Invalid direction given for right hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(rhsDir)}`);
    }if (this.nodes[x]===void 0&&this.groups[x]===void 0) {
      throw new Error(`The left-hand id [${lhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`);
    }if (this.nodes[A]===void 0&&this.groups[A]===void 0) {
      throw new Error(`The right-hand id [${rhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`);
    }
  const l=this.nodes[x].in;
  const i=this.nodes[A].in;
  if (lhsGroup&&l&&i&&l==i) {
    throw new Error(`The left-hand id [${lhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
  }if (rhsGroup&&l&&i&&l==i) {
      throw new Error(`The right-hand id [${rhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    }const g={lhsId:lhsId,lhsDir:lhsDir,lhsInto:lhsInto,lhsGroup:lhsGroup,rhsId:rhsId,rhsDir:rhsDir,rhsInto:rhsInto,rhsGroup:rhsGroup,title:title};
  this.edges.push(g);

  if (this.nodes[x]&&this.nodes[A]) {
    this.nodes[x].edges.push(this.edges[this.edges.length-1]);
    this.nodes[A].edges.push(this.edges[this.edges.length-1]);
  }
}getEdges(){return this.edges}getDataStructures(){if(this.dataStructures===void 0){
  const x={};

  const A=Object.entries(this.nodes).reduce((e, [r,l]) => {
    e[r]=l.edges.reduce((i,g)=>{
      const t=this.getNode(g.lhsId)?.in;
      const o=this.getNode(g.rhsId)?.in;
      if(t&&o&&t!==o){
        const s=Mr(g.lhsDir,g.rhsDir);

        if (s!=="bend") {
          x[t]??={};
          x[t][o]=s;
          x[o]??={};
          x[o][t]=s;
        }
      }if(g.lhsId===r){
      const s=ye(g.lhsDir,g.rhsDir);

      if (s) {
        (i[s] = g.rhsId);
      }
    }else{
      const s=ye(g.rhsDir,g.lhsDir);

      if (s) {
        (i[s] = g.lhsId);
      }
    }return i
    },{});

    return e;
  },{});

  const P=Object.keys(A)[0];
  const N={[P]:1};

  const u=Object.keys(A).reduce((e, r) => r===P?e:{...e,[r]:1},{});

  const h=a2(e=>{
    const r={[e]:[0,0]};
    const l=[e];

    while (l.length>0) {const i=l.shift();if(i){
      N[i]=1;
      delete u[i];
      const g=A[i];
      const [t,o]=r[i];
      Object.entries(g).forEach(([s,c])=>{
        if (!N[c]) {
          r[c]=Cr([t,o],s);
          l.push(c);
        }
      })
    }}

    return r
  },"BFS");

  const a=[h(P)];

  while (Object.keys(u).length>0) {
    a.push(h(Object.keys(u)[0]));
  }

  this.dataStructures={adjList:A,spatialMaps:a,groupAlignments:x}
}return this.dataStructures}setElementForId(x,A){this.elements[x]=A}getElementById(x){return this.elements[x]}getConfig(){return aA({...Dr,...aB().architecture});}getConfigField(x){return this.getConfig()[x]}};

a2(ae,"ArchitectureDB");
const Pe = ae;

const xr=a2((I,x)=>{
  p(I,x);

  I.groups.map(A => x.addGroup(A));

  I.services.map(A => x.addService({...A,type:"service"}));

  I.junctions.map(A => x.addJunction({...A,type:"junction"}));

  I.edges.map(A => x.addEdge(A));
},"populateDb");

const Ge={parser:{yy:void 0},parse:a2(async I=>{const x=await p_1("architecture",I);a9.debug(x);const A=Ge.parser?.yy;if (!(A instanceof Pe)) {
  throw new Error("parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
}xr(x,A)},"parse")};

const Ir=a2(I => `
  .edge {
    stroke-width: ${I.archEdgeWidth};
    stroke: ${I.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${I.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${I.archGroupBorderColor};
    stroke-width: ${I.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`,"getStyles");

const Rr=Ir;

const re=a2(I => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${I}</g>`,"wrapIcon");

const ne={prefix:"mermaid-architecture",height:80,width:80,icons:{database:{body:re('<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')},server:{body:re('<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>')},disk:{body:re('<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>')},internet:{body:re('<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')},cloud:{body:re('<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>')},unknown:bE,blank:{body:re("")}}};

const Sr=a2(async (I, x, A) => {
  const P=A.getConfigField("padding");
  const N=A.getConfigField("iconSize");
  const u=N/2;
  const h=N/6;
  const a=h/2;
  await Promise.all(x.edges().map(async e=>{
    const{source,sourceDir,sourceArrow,sourceGroup,target,targetDir,targetArrow,targetGroup,label}=be(e);let{x: x_1,y}=e[0].sourceEndpoint();const{x: x_2,y: y_1}=e[0].midpoint();let{x: x_3,y: y_2}=e[0].targetEndpoint();const G=P+4;

    if (sourceGroup) {
      if (Wt(sourceDir)) {
        x_1+=sourceDir==="L"?-G:G;
      } else {
        y+=sourceDir==="T"?-G:G+18;
      }
    }

    if (targetGroup) {
      if (Wt(targetDir)) {
        x_3+=targetDir==="L"?-G:G;
      } else {
        y_2+=targetDir==="T"?-G:G+18;
      }
    }

    if (!sourceGroup&&A.getNode(source)?.type==="junction") {
      if (Wt(sourceDir)) {
        x_1+=sourceDir==="L"?u:-u;
      } else {
        y+=sourceDir==="T"?u:-u;
      }
    }

    if (!targetGroup&&A.getNode(target)?.type==="junction") {
      if (Wt(targetDir)) {
        x_3+=targetDir==="L"?u:-u;
      } else {
        y_2+=targetDir==="T"?u:-u;
      }
    }

    if (e[0]._private.rscratch) {
      const k=I.insert("g");
      k.insert("path").attr("d",`M ${x_1},${y} L ${x_2},${y_1} L${x_3},${y_2} `).attr("class","edge").attr("id",as(source,target,{prefix:"L"}));

      if (sourceArrow) {
        const Y=Wt(sourceDir)?se[l](x_1,h):x_1-a;
        const K=qt(sourceDir)?se[l](y,h):y-a;
        k.insert("polygon").attr("points",Ie[l](h)).attr("transform",`translate(${Y},${K})`).attr("class","arrow")
      }

      if(targetArrow){
        const Y=Wt(targetDir)?se[o](x_3,h):x_3-a;
        const K=qt(targetDir)?se[o](y_2,h):y_2-a;
        k.insert("polygon").attr("points",Ie[o](h)).attr("transform",`translate(${Y},${K})`).attr("class","arrow")
      }if(label){
      const Y=Te(sourceDir,targetDir)?"XY":Wt(sourceDir)?"X":"Y";let K=0;

      if (Y==="X") {
        K=Math.abs(x_1-x_3);
      } else if (Y==="Y") {
        K=Math.abs(y-y_2)/1.5;
      } else {
        K=Math.abs(x_1-x_3)/2;
      }

      const O=k.append("g");
      await bg(O,label,{useHtmlLabels:false,width:K,classes:"architecture-service-label"},a7());
      O.attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle");

      if (Y==="X") {
        O.attr("transform",`translate(${x_2}, ${y_1})`);
      } else if (Y==="Y") {
        O.attr("transform",`translate(${x_2}, ${y_1}) rotate(-90)`);
      } else if(Y==="XY"){const it=ye(sourceDir,targetDir);if(it&&Nr(it)){
        const n=O.node().getBoundingClientRect();
        const [m,p]=Ar(it);
        O.attr("dominant-baseline","auto").attr("transform",`rotate(${-1*m*p*45})`);const E=O.node().getBoundingClientRect();O.attr("transform",`
                        translate(${x_2}, ${y_1-n.height/2})
                        translate(${m*E.width/2}, ${p*E.height/2})
                        rotate(${-1*m*p*45}, 0, ${n.height/2})
                      `)
      }}
    }
    }
  }))
},"drawEdges");

const Fr=a2(async (I, x, A) => {
  const N=A.getConfigField("padding")*0.75/* .75 */;
  const u=A.getConfigField("fontSize");
  const a=A.getConfigField("iconSize")/2;
  await Promise.all(x.nodes().map(async e=>{const r=ie(e);if(r.type==="group"){
    const {h,w,x1,y1}=e.boundingBox();
    const o=I.append("rect");
    o.attr("id",`group-${r.id}`).attr("x",x1+a).attr("y",y1+a).attr("width",w).attr("height",h).attr("class","node-bkg");const s=I.append("g");
    let c=x1;
    let f=y1;
    if(r.icon){
      const T=s.append("g");
      T.html(`<g>${await bC(r.icon,{height:N,width:N,fallbackPrefix:ne.prefix})}</g>`);
      T.attr("transform",`translate(${c+a+1}, ${f+a+1})`);
      c+=N;
      f+=u/2-1-2;
    }if(r.label){
      const T=s.append("g");
      await bg(T,r.label,{useHtmlLabels:false,width:w,classes:"architecture-service-label"},a7());
      T.attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","start").attr("text-anchor","start");
      T.attr("transform",`translate(${c+a+4}, ${f+a+2})`);
    }A.setElementForId(r.id,o)
  }}))
},"drawGroups");

const br=a2(async (I, x, A) => {const P=a7();for(const N of A){
  const u=x.append("g");
  const h=I.getConfigField("iconSize");
  if(N.title){
    const l=u.append("g");
    await bg(l,N.title,{useHtmlLabels:false,width:h*1.5,classes:"architecture-service-label"},P);
    l.attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle");
    l.attr("transform",`translate(${h/2}, ${h})`);
  }const a=u.append("g");if (N.icon) {
    a.html(`<g>${await bC(N.icon,{height:h,width:h,fallbackPrefix:ne.prefix})}</g>`);
  } else if (N.iconText) {
    a.html(`<g>${await bC("blank",{height:h,width:h,fallbackPrefix:ne.prefix})}</g>`);
    const g=a.append("g").append("foreignObject").attr("width",h).attr("height",h).append("div").attr("class","node-icon-text").attr("style",`height: ${h}px;`).append("div").html(ad(N.iconText,P));
    const t=parseInt(window.getComputedStyle(g.node(),null).getPropertyValue("font-size").replace(/\D/g,""))??16;
    g.attr("style",`-webkit-line-clamp: ${Math.floor((h-2)/t)};`)
  } else {
    a.append("path").attr("class","node-bkg").attr("id",`node-${N.id}`).attr("d",`M0 ${h} v${-h} q0,-5 5,-5 h${h} q5,0 5,5 v${h} H0 Z`);
  }u.attr("id",`service-${N.id}`).attr("class","architecture-service");const{width,height}=u.node().getBBox();
  N.width=width;
  N.height=height;
  I.setElementForId(N.id,u);
}return 0},"drawServices");

const Pr=a2((I, x, A) => {A.forEach(P=>{
  const N=x.append("g");
  const u=I.getConfigField("iconSize");
  N.append("g").append("rect").attr("id",`node-${P.id}`).attr("fill-opacity","0").attr("width",u).attr("height",u);
  N.attr("class","architecture-junction");
  const{width,height}=N._groups[0][0].getBBox();
  N.width=width;
  N.height=height;
  I.setElementForId(P.id,N);
})},"drawJunctions");

bD([{name:ne.prefix,icons:ne}]);c.use(mr);function Ue(I,x,A){I.forEach(P=>{x.add({group:"nodes",data:{type:"service",id:P.id,icon:P.icon,label:P.title,parent:P.in,width:A.getConfigField("iconSize"),height:A.getConfigField("iconSize")},classes:"node-service"})})}a2(Ue,"addServices");function Ye(I,x,A){I.forEach(P=>{x.add({group:"nodes",data:{type:"junction",id:P.id,parent:P.in,width:A.getConfigField("iconSize"),height:A.getConfigField("iconSize")},classes:"node-junction"})})}a2(Ye,"addJunctions");function Xe(I,x){x.nodes().map(A=>{
  const P=ie(A);if (P.type==="group") {
    return;
  }
  P.x=A.position().x;
  P.y=A.position().y;
  I.getElementById(P.id).attr("transform",`translate(${P.x||0},${P.y||0})`);
})}a2(Xe,"positionNodes");function He(I,x){I.forEach(A=>{x.add({group:"nodes",data:{type:"group",id:A.id,icon:A.icon,label:A.title,parent:A.in},classes:"node-group"})})}a2(He,"addGroups");function We(I,x){I.forEach(A=>{
  const {lhsId,rhsId,lhsInto,lhsGroup,rhsInto,lhsDir,rhsDir,rhsGroup,title}=A;
  const g=Te(A.lhsDir,A.rhsDir)?"segments":"straight";
  const t={id:`${lhsId}-${rhsId}`,label:title,source:lhsId,sourceDir:lhsDir,sourceArrow:lhsInto,sourceGroup:lhsGroup,sourceEndpoint:lhsDir==="L"?"0 50%":lhsDir==="R"?"100% 50%":lhsDir==="T"?"50% 0":"50% 100%",target:rhsId,targetDir:rhsDir,targetArrow:rhsInto,targetGroup:rhsGroup,targetEndpoint:rhsDir==="L"?"0 50%":rhsDir==="R"?"100% 50%":rhsDir==="T"?"50% 0":"50% 100%"};
  x.add({group:"edges",data:t,classes:g})
})}a2(We,"addEdges");function Ve(I,x,A){
  const P=a2((a, e) => Object.entries(a).reduce((r,[l,i])=>{let g=0;const t=Object.entries(i);if (t.length===1) {
    r[l]=t[0][1];
    return r;
  }for (let o=0; o<t.length-1; o++) {
    for(let s=o+1;s<t.length;s++){
      const [c,f]=t[o];
      const [T,d]=t[s];
      if (A[c]?.[T]===e) {
        r[l]??=[];
        r[l]=[...r[l],...f,...d];
      } else if (c==="default"||T==="default") {
        r[l]??=[];
        r[l]=[...r[l],...f,...d];
      } else
        {const L=`${l}-${g++}`;r[L]=f;const b=`${l}-${g++}`;r[b]=d}
    }
  }return r},{}),"flattenAlignments");

  const N=x.map(a=>{
    const e={};
    const r={};

    Object.entries(a).forEach(([l,[i,g]])=>{
      const t=I.getNode(l)?.in??"default";
      e[g]??={};
      e[g][t]??=[];
      e[g][t].push(l);
      r[i]??={};
      r[i][t]??=[];
      r[i][t].push(l);
    });

    return {horiz:Object.values(P(e,"horizontal")).filter(l => l.length>1),vert:Object.values(P(r,"vertical")).filter(l => l.length>1)};
  });

  const [u,h]=N.reduce(([a,e], {horiz,vert}) => [[...a,...horiz],[...e,...vert]],[[],[]]);

  return{horizontal:u,vertical:h}
}a2(Ve,"getAlignments");function ze(I,x){
  const A=[];

  const P=a2(u => `${u[0]},${u[1]}`,"posToStr");

  const N=a2(u => u.split(",").map(h => parseInt(h)),"strToPos");

  I.forEach(u=>{
    const h=Object.fromEntries(Object.entries(u).map(([l,i]) => [P(i),l]));

    const a=[P([0,0])];
    const e={};
    const r={L:[-1,0],R:[1,0],T:[0,1],B:[0,-1]};

    while (a.length>0) {const l=a.shift();if(l){e[l]=1;const i=h[l];if(i){const g=N(l);Object.entries(r).forEach(([t,o])=>{
      const s=P([g[0]+o[0],g[1]+o[1]]);
      const c=h[s];

      if (c&&!e[s]) {
        a.push(s);
        A.push({[xe[t]]:c,[xe[Tr(t)]]:i,gap:1.5*x.getConfigField("iconSize")});
      }
    })}}}
  });

  return A;
}a2(ze,"getRelativeConstraints");function Be(I,x,A,P,N,{spatialMaps,groupAlignments}){return new Promise(a=>{
  const e=a8("body").append("div").attr("id","cy").attr("style","display:none");
  const r=c({container:document.getElementById("cy"),style:[{selector:"edge",style:{"curve-style":"straight",label:"data(label)","source-endpoint":"data(sourceEndpoint)","target-endpoint":"data(targetEndpoint)"}},{selector:"edge.segments",style:{"curve-style":"segments","segment-weights":"0","segment-distances":[0.5/* .5 */],"edge-distances":"endpoints","source-endpoint":"data(sourceEndpoint)","target-endpoint":"data(targetEndpoint)"}},{selector:"node",style:{"compound-sizing-wrt-labels":"include"}},{selector:"node[label]",style:{"text-valign":"bottom","text-halign":"center","font-size":`${N.getConfigField("fontSize")}px`}},{selector:".node-service",style:{label:"data(label)",width:"data(width)",height:"data(height)"}},{selector:".node-junction",style:{width:"data(width)",height:"data(height)"}},{selector:".node-group",style:{padding:`${N.getConfigField("padding")}px`}}],layout:{name:"grid",boundingBox:{x1:0,x2:100,y1:0,y2:100}}});
  e.remove();
  He(A,r);
  Ue(I,r,N);
  Ye(x,r,N);
  We(P,r);
  const l=Ve(N,spatialMaps,groupAlignments);
  const i=ze(spatialMaps,N);

  const g=r.layout({name:"fcose",quality:"proof",styleEnabled:false,animate:false,nodeDimensionsIncludeLabels:false,idealEdgeLength(t){
    const [o,s]=t.connectedNodes();
    const {parent}=ie(o);
    const {parent: parent_1}=ie(s);
    return parent===parent_1?1.5*N.getConfigField("iconSize"):0.5/* .5 */*N.getConfigField("iconSize");
  },edgeElasticity(t){
    const [o,s]=t.connectedNodes();
    const {parent}=ie(o);
    const {parent: parent_1}=ie(s);
    return parent===parent_1?0.45/* .45 */:0.001/* .001 */;
  },alignmentConstraint:l,relativePlacementConstraint:i});

  g.one("layoutstop",()=>{
    function t(o,s,c,f){
      let T;
      let d;
      const {x: x_1,y}=o;
      const {x: x_2,y: y_1}=s;
      d=(f-y+(x_1-c)*(y-y_1)/(x_1-x_2))/Math.sqrt(1+((y - y_1) / (x_1 - x_2)) ** 2);
      T=Math.sqrt((f - y) ** 2+(c - x_1) ** 2-d ** 2);
      const G=Math.sqrt((x_2 - x_1) ** 2+(y_1 - y) ** 2);T=T/G;let k=(x_2-x_1)*(f-y)-(y_1-y)*(c-x_1);switch(true){case k>=0:
        {
          k=1;break;
        }case k<0:
        {
          k=-1;break
        }}let Y=(x_2-x_1)*(c-x_1)+(y_1-y)*(f-y);switch(true){case Y>=0:
        {
          Y=1;break;
        }case Y<0:
        {
          Y=-1;break
        }}
      d=Math.abs(d)*k;
      T=T*Y;
      return {distances:d,weights:T};
    }
    a2(t,"getSegmentWeights");
    r.startBatch();
    for (const o of Object.values(r.edges())) {
      if(o.data?.()){
        const {x: x_1,y}=o.source().position();
        const {x: x_2,y: y_1}=o.target().position();
        if(x_1!==x_2&&y!==y_1){
          const d=o.sourceEndpoint();
          const v=o.targetEndpoint();
          const {sourceDir}=be(o);
          const [b,C]=qt(sourceDir)?[d.x,v.y]:[v.x,d.y];
          const {weights,distances}=t(d,v,b,C);
          o.style("segment-distances",distances);
          o.style("segment-weights",weights);
        }
      }
    }
    r.endBatch();
    g.run();
  });

  g.run();

  r.ready(t=>{
    a9.info("Ready",t);
    a(r);
  });
});}a2(Be,"layoutArchitecture");

const Gr=a2(async(I,x,A,P)=>{
  const N=P.db;
  const u=N.getServices();
  const h=N.getJunctions();
  const a=N.getGroups();
  const e=N.getEdges();
  const r=N.getDataStructures();
  const l=aE(x);
  const i=l.append("g");
  i.attr("class","architecture-edges");const g=l.append("g");g.attr("class","architecture-services");const t=l.append("g");
  t.attr("class","architecture-groups");
  await br(N,g,u);
  Pr(N,g,h);
  const o=await Be(u,h,a,e,N,r);
  await Sr(i,o,N);
  await Fr(t,o,N);
  Xe(N,o);
  b4(void 0,l,N.getConfigField("padding"),N.getConfigField("useMaxWidth"));
},"draw");

const Ur={draw:Gr};

export const diagram = {parser:Ge,get db() {return new Pe},renderer:Ur,styles:Rr};
//# sourceMappingURL=architectureDiagram-VXUJARFQ-Bf9AGjdF.js.map

export{diagram as diagram};
//# sourceMappingURL=architectureDiagram-VXUJARFQ-Bf9AGjdF.js.map

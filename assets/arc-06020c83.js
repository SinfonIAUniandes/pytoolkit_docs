import{w as ln,c as U}from"./path-53f90ab3.js";import{aP as an,aQ as Y,aR as S,aS as rn,aT as y,aK as on,aU as z,aV as _,aW as un,aX as t,aY as sn,aZ as tn,a_ as fn}from"./mermaid.core-6344c5fc.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,E,q,v,R,V,a){var I=E-l,i=q-h,n=V-v,m=a-R,r=m*I-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*I,h+r*i]}function J(l,h,E,q,v,R,V){var a=l-E,I=h-q,i=(V?R:-R)/z(a*a+I*I),n=i*I,m=-i*a,r=l+n,s=h+m,f=E+n,c=q+m,W=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,T=v-R,P=r*c-f*s,K=(g<0?-1:1)*z(fn(0,T*T*A-P*P)),O=(P*g-p*K)/A,Q=(-P*p-g*K)/A,w=(P*g+p*K)/A,d=(-P*p+g*K)/A,x=O-W,e=Q-o,u=w-W,X=d-o;return x*x+e*e>u*u+X*X&&(O=w,Q=d),{cx:O,cy:Q,x01:-n,y01:-m,x11:O*(v/T-1),y11:Q*(v/T-1)}}function vn(){var l=cn,h=yn,E=U(0),q=null,v=gn,R=mn,V=pn,a=null,I=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,W=un(c-f),o=c>f;if(a||(a=n=I()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(W>on-y)a.moveTo(s*Y(f),s*S(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*Y(c),r*S(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,T=c,P=W,K=W,O=V.apply(this,arguments)/2,Q=O>y&&(q?+q.apply(this,arguments):z(r*r+s*s)),w=_(un(s-r)/2,+E.apply(this,arguments)),d=w,x=w,e,u;if(Q>y){var X=sn(Q/r*S(O)),B=sn(Q/s*S(O));(P-=X*2)>y?(X*=o?1:-1,A+=X,T-=X):(P=0,A=T=(f+c)/2),(K-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(K=0,p=g=(f+c)/2)}var Z=s*Y(p),j=s*S(p),C=r*Y(T),F=r*S(T);if(w>y){var G=s*Y(g),H=s*S(g),L=r*Y(A),M=r*S(A),D;if(W<an)if(D=dn(Z,j,L,M,G,H,C,F)){var N=Z-D[0],$=j-D[1],k=G-D[0],b=H-D[1],nn=1/S(tn((N*k+$*b)/(z(N*N+$*$)*z(k*k+b*b)))/2),en=z(D[0]*D[0]+D[1]*D[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}K>y?x>y?(e=J(L,M,Z,j,s,x,o),u=J(G,H,C,F,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(Z,j),a.arc(0,0,s,p,g,!o)):a.moveTo(Z,j),!(r>y)||!(P>y)?a.lineTo(C,F):d>y?(e=J(C,F,G,H,r,-d,o),u=J(Z,j,L,M,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[Y(m)*n,S(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:U(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:U(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:U(+n),i):E},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:U(+n),i):q},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:U(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:U(+n),i):R},i.padAngle=function(n){return arguments.length?(V=typeof n=="function"?n:U(+n),i):V},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};

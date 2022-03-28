(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),u=(n(9),n(2)),i=n(0),o=function(e){var t=e.text,n=e.min,c=e.max,s=e.onResize,a=Object(r.useState)(100),o=Object(u.a)(a,2),l=o[0],h=o[1],d=function(e){h(e.target.value),s(e)};return Object(i.jsxs)("div",{className:"slidecontainer",children:[Object(i.jsxs)("div",{className:"slide-value",children:[t,l]}),Object(i.jsx)("input",{type:"range",min:n,max:c,value:l,step:"5",className:"slider",onChange:d,onMouseUp:d})]})};o.defaultProps={min:10,max:100};var l=o,h=function(e){var t=e.text,n=e.onClick;return Object(i.jsx)("div",{className:"sort-button",children:Object(i.jsx)("button",{className:"sort-button-text",onClick:n,children:t})})};function d(e){var t=[],n=e.slice();return j(e,0,e.length-1,n,t),t}function j(e,t,n,r,c){if(t!==n){var s=Math.floor((t+n)/2);j(r,t,s,e,c),j(r,s+1,n,e,c),function(e,t,n,r,c,s){var a=t,u=t,i=n+1;for(;u<=n&&i<=r;)s.push(["current",u,i,0,0,"red"]),c[u]<=c[i]?(s.push(["changeOne",a,u,c[u],0,"red"]),s.push(["current",u,i,0,0,"steelblue"]),e[a++]=c[u++]):(s.push(["changeOne",a,i,c[i],0,"red"]),s.push(["current",u,i,0,0,"steelblue"]),e[a++]=c[i++]);for(;u<=n;)s.push(["current",u,u,0,0,"red"]),s.push(["changeOne",a,u,c[u],0,"red"]),s.push(["current",u,u,0,0,"steelblue"]),e[a++]=c[u++];for(;i<=r;)s.push(["current",i,i,0,0,"red"]),s.push(["changeOne",a,i,c[i],0,"red"]),s.push(["current",i,i,0,0,"steelblue"]),e[a++]=c[i++]}(e,t,s,n,r,c)}}var p=function(e){var t=[];return function(e,t){var n=[];n.push(0),n.push(e.length-1);for(;n[n.length-1]>=0;){var r=n.pop(),c=n.pop(),s=b(e,c,r,t);s-1>c&&(n.push(c),n.push(s-1)),s+1<r&&(n.push(s+1),n.push(r))}}(e.slice(),t),t};function b(e,t,n,r){for(var c=e[n],s=t,a=t;a<n;a++){if(r.push(["current",a,s,0,0,"red"]),e[a]<c){r.push(["swap",a,s,e[a],e[s],"red"]);var u=e[a];e[a]=e[s],e[s]=u,r.push(["current",a,s,0,0,"steelblue"]),s++}r.push(["current",a,s,0,0,"steelblue"])}r.push(["swap",n,s,e[n],e[s],"red"]);var i=e[n];return e[n]=e[s],e[s]=i,s}function f(e,t,n,r){var c=2*n,s=2*n+1,a=n;c<t&&s<t?r.push(["current",c,s,0,0,"red"]):c<t?r.push(["current",c,c,0,0,"red"]):s<t&&r.push(["current",s,s,0,0,"red"]),c<t&&e[c]>e[a]&&(a=c),s<t&&e[s]>e[a]&&(a=s),c<t&&s<t?r.push(["current",c,s,0,0,"steelblue"]):c<t?r.push(["current",c,c,0,0,"steelblue"]):s<t&&r.push(["current",s,s,0,0,"steelblue"]),a!==n&&(m(e,n,a,r),f(e,t,a,r))}function m(e,t,n,r){r.push(["current",t,n,0,0,"red"]),r.push(["swap",t,n,e[t],e[n],"red"]);var c=e[t];e[t]=e[n],e[n]=c,r.push(["current",t,n,0,0,"steelblue"])}var v=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(100),a=Object(u.a)(s,2),o=a[0],j=a[1],b=function(){for(var e=[],t=0;t<o;t++)e.push(v(10,600));c(e),console.log("Create Array"+e.length+" "+o)},v=function(e,t){return Math.floor(Math.random()*(t-e)+e)};function x(e){for(var t=function(t){var n=document.getElementsByClassName("array-item"),r=Object(u.a)(e[t],6),c=r[0],s=r[1],a=r[2],i=r[3],o=r[4],l=r[5],h=n[s].style,d=n[a].style;"current"===c?setTimeout((function(){h.backgroundColor=l,d.backgroundColor=l}),10*t):"swap"===c?setTimeout((function(){h.height="".concat(o,"px"),d.height="".concat(i,"px")}),10*t):"changeOne"===c&&setTimeout((function(){h.height="".concat(i,"px")}),10*t)},n=0;n<e.length;n++)t(n)}return 0===n.length&&b(),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"array-buttons",children:[Object(i.jsx)("div",{className:"button-container",children:Object(i.jsx)("button",{className:"button",onClick:b,children:"Create New Array"})}),Object(i.jsx)(l,{text:"Array Size: ",min:10,max:200,onResize:function(e){var t=e.target.value;j(t),b(),console.log("ChnageNum of Items"+n.length+" "+o)}})]}),Object(i.jsx)("div",{className:"array-container",children:Object(i.jsx)("div",{className:"array-items",children:n.map((function(e,t){return Object(i.jsx)("div",{className:"array-item",style:{height:"".concat(e,"px"),width:"".concat(80/o,"%"),margin:"1px ".concat(10/o,"% 0 ").concat(10/o,"%")}},t)}))})}),Object(i.jsxs)("div",{className:"sort-buttons",children:[Object(i.jsx)(h,{text:"Insertion Sort",onClick:function(){x(function(e){for(var t=[],n=e.slice(),r=e.length,c=1;c<r;c++){var s=n[c],a=c-1;for(t.push(["current",c,c,0,0,"green"]);a>=0&&n[a]>s;)t.push(["current",a,a+1,0,0,"red"]),t.push(["swap",a+1,a,n[a+1],n[a],"red"]),t.push(["current",a,a+1,0,0,"steelblue"]),t.push(["current",c,c,0,0,"green"]),n[a+1]=n[a],a--;t.push(["current",a+1,a+1,0,0,"steelblue"]),t.push(["swap",c,a+1,s,n[a+1],"red"]),n[a+1]=s}return t.pop(),t.push(["current",r-1,r-1,0,0,"steelblue"]),t}(n))}}),Object(i.jsx)(h,{text:"Bubble Sort",onClick:function(){x(function(e){for(var t=[],n=e.slice(),r=0;r<e.length;r++)for(var c=0;c<e.length-r-1;c++){if(t.push(["current",c,c+1,0,0,"red"]),n[c]>n[c+1]){var s=n[c];t.push(["swap",c,c+1,n[c],n[c+1],"red"]),n[c]=n[c+1],n[c+1]=s}t.push(["current",c,c+1,0,0,"steelblue"])}return t}(n))}}),Object(i.jsx)(h,{text:"Merge Sort",onClick:function(){x(d(n))}}),Object(i.jsx)(h,{text:"Quick Sort",onClick:function(){x(p(n))}}),Object(i.jsx)(h,{text:"Heap Sort",onClick:function(){x(function(e){for(var t=[],n=e.slice(),r=Math.floor(e.length/2)-1;r>=0;r--)f(n,e.length,r,t);for(var c=e.length-1;c>=0;c--)m(n,0,c,t),f(n,c,0,t);return t}(n))}})]})]})},x=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"title",children:"Sorting Algorithms Visualizer"}),Object(i.jsx)("div",{className:"myname",children:"Made by : Ian Wilkinson"})]})},g=function(){return Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("div",{className:"contact-header",children:"Contact Me"}),Object(i.jsx)("a",{href:"mailto:ianw6043@gmail.com",className:"social-link",children:"ianw6043@gmail.com  "}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/ian-wilkinson-258499208",className:"social-link",children:"Linkedin"}),Object(i.jsx)("a",{href:"https://github.com/ian6043",className:"social-link",children:"Github"})]})};var O=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x,{}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(v,{})}),Object(i.jsx)(g,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),N()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.77ca8e8e.chunk.js.map
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{647:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(649);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,i=!1,o=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==l.return||l.return()}finally{if(i)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},648:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},649:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(648);function i(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},696:function(e,t,n){"use strict";n.r(t);var a=n(647),i=n(1),o=n.n(i),r=n(646);t.default=function(){var e=Object(i.useState)(!0),t=Object(a.a)(e,2),n=t[0],l=t[1],c=Object(i.useState)(!1),u=Object(a.a)(c,2),m=u[0],s=u[1],d=Object(i.useState)(!1),f=Object(a.a)(d,2),p=f[0],b=f[1],E=Object(i.useState)(!1),g=Object(a.a)(E,2),h=g[0],q=g[1],C=Object(i.useState)(!1),v=Object(a.a)(C,2),y=v[0],k=v[1],j=Object(i.useState)(!1),x=Object(a.a)(j,2),S=x[0],O=x[1],w=Object(i.useState)(!1),D=Object(a.a)(w,2),L=D[0],M=D[1],B=Object(i.useState)(!1),U=Object(a.a)(B,2),N=U[0],A=U[1];return o.a.createElement(r.wb,null,o.a.createElement(r.u,null,o.a.createElement(r.j,null,o.a.createElement(r.n,null,"Bootstrap Modals"),o.a.createElement(r.k,null,o.a.createElement(r.f,{onClick:function(){return l(!n)},className:"mr-1",color:"secondary"},"Launch demo modal"),o.a.createElement(r.f,{onClick:function(){return s(!m)},className:"mr-1",color:"secondary"},"Launch large modal"),o.a.createElement(r.f,{onClick:function(){return b(!m)},className:"mr-1",color:"secondary"},"Launch small modal"),o.a.createElement(r.gb,{show:n,onClose:l},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"primary"},"Do Something")," ",o.a.createElement(r.f,{color:"secondary",onClick:function(){return l(!1)}},"Cancel"))),o.a.createElement(r.gb,{show:m,onClose:function(){return s(!m)},size:"lg"},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"primary",onClick:function(){return s(!m)}},"Do Something")," ",o.a.createElement(r.f,{color:"secondary",onClick:function(){return s(!m)}},"Cancel"))),o.a.createElement(r.gb,{show:p,onClose:function(){return b(!p)},size:"sm"},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"primary",onClick:function(){return b(!p)}},"Do Something")," ",o.a.createElement(r.f,{color:"secondary",onClick:function(){return b(!p)}},"Cancel"))),o.a.createElement("hr",null),o.a.createElement(r.f,{color:"primary",onClick:function(){return q(!h)},className:"mr-1"},"Primary modal"),o.a.createElement(r.f,{color:"success",onClick:function(){return k(!y)},className:"mr-1"},"Success modal"),o.a.createElement(r.f,{color:"warning",onClick:function(){return O(!S)},className:"mr-1"},"Warning modal"),o.a.createElement(r.f,{color:"danger",onClick:function(){return M(!L)},className:"mr-1"},"Danger modal"),o.a.createElement(r.f,{color:"info",onClick:function(){return A(!N)},className:"mr-1"},"Info modal"),o.a.createElement(r.gb,{show:h,onClose:function(){return q(!h)},color:"primary"},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"primary",onClick:function(){return q(!h)}},"Do Something")," ",o.a.createElement(r.f,{color:"secondary",onClick:function(){return q(!h)}},"Cancel"))),o.a.createElement(r.gb,{show:y,onClose:function(){return k(!y)},color:"success"},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"success",onClick:function(){return k(!y)}},"Do Something")," ",o.a.createElement(r.f,{color:"secondary",onClick:function(){return k(!y)}},"Cancel"))),o.a.createElement(r.gb,{show:S,onClose:function(){return O(!S)},color:"warning"},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"warning",onClick:function(){return O(!S)}},"Do Something")," ",o.a.createElement(r.f,{color:"secondary",onClick:function(){return O(!S)}},"Cancel"))),o.a.createElement(r.gb,{show:L,onClose:function(){return M(!L)},color:"danger"},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"danger",onClick:function(){return M(!L)}},"Do Something")," ",o.a.createElement(r.f,{color:"secondary",onClick:function(){return M(!L)}},"Cancel"))),o.a.createElement(r.gb,{show:N,onClose:function(){return A(!N)},color:"info"},o.a.createElement(r.jb,{closeButton:!0},o.a.createElement(r.kb,null,"Modal title")),o.a.createElement(r.hb,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement(r.ib,null,o.a.createElement(r.f,{color:"secondary",onClick:function(){return A(!N)}},"Cancel"),o.a.createElement(r.f,{color:"info",onClick:function(){return A(!N)}},"Do Something")," "))))))}}}]);
//# sourceMappingURL=18.3aa14c80.chunk.js.map
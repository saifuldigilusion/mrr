(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{647:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(649);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(l){r=!0,c=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},648:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},649:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(648);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},701:function(e,t,a){"use strict";a.r(t);var n=a(647),r=a(1),c=a.n(r),o=a(522),i=a(646),l=a(650),u=a(35),s=a(38);t.default=function(){var e=Object(r.useState)(void 0),t=Object(n.a)(e,2),a=t[0],m=t[1],b=Object(r.useState)(void 0),d=Object(n.a)(b,2),f=(d[0],d[1]),p=Object(r.useState)(void 0),h=Object(n.a)(p,2),j=h[0],E=h[1],O=Object(r.useState)(!1),v=Object(n.a)(O,2),y=v[0],g=v[1],S=Object(r.useState)(0),w=Object(n.a)(S,2),C=w[0],F=w[1],x=Object(r.useState)(""),A=Object(n.a)(x,2),k=(A[0],A[1]),U=Object(r.useState)([]),z=Object(n.a)(U,2),I=(z[0],z[1]),J=Object(r.useState)(!1),K=Object(n.a)(J,2),N=K[0],M=K[1],T=Object(r.useState)(!0),R=Object(n.a)(T,2),$=R[0],q=R[1],B=Object(r.useState)([]),D=Object(n.a)(B,2),G=D[0],H=D[1];Object(r.useEffect)((function(){if(a&&u.b.getFiles().then((function(e){I(e.data)})),$){s.d.get("/be/api/upload/clientcode").then((function(e){H(e.data)})).catch((function(e){console.error("Error",e)})),q(!1)}}),[$,y]);return c.a.createElement(c.a.Fragment,null,function(){if(console.log("redirect "+N),N)return c.a.createElement(o.a,{to:"/"})}(),c.a.createElement(i.wb,null,c.a.createElement(i.u,{xs:"12",sm:"6"},c.a.createElement(i.j,null,c.a.createElement(i.n,null,"Upload Claim Receipt"),c.a.createElement(i.k,null,c.a.createElement(i.J,{action:"/be/api/fileupload",method:"post",encType:"multipart/form-data",className:"form-horizontal"},c.a.createElement(i.K,{row:!0},c.a.createElement(i.cb,{col:!0,md:"3",htmlFor:"select"},"Client Code"),c.a.createElement(i.u,{xs:"12",md:"9"},c.a.createElement(i.xb,{custom:!0,name:"clientcode",id:"clientcode",onChange:function(e){return E(e.target.value)}},G.map((function(e,t){return c.a.createElement("option",{value:e.code,key:e.code},e.code," ",e.name)}))))),c.a.createElement(i.K,{row:!0},c.a.createElement(i.cb,{col:!0,md:"3",htmlFor:"file-input"},"File input"),c.a.createElement(i.u,{xs:"12",md:"9"},c.a.createElement(i.U,{id:"file-input",name:"file-input",onChange:function(e){m(e.target.files)}}))),c.a.createElement(i.K,{row:!0},c.a.createElement(i.cb,{col:!0,md:"3",htmlFor:"file-input"}),c.a.createElement(i.u,{xs:"12",md:"9"},c.a.createElement(i.ub,{size:"sm",color:"success",value:C,className:y?"mb-1 bg-gray visible":"mb-1 bg-gray invisible"}))),c.a.createElement("div",{className:"form-actions"},c.a.createElement(i.f,{type:"submit",size:"sm",color:"primary",disabled:y,onClick:function(){var e=a[0];F(0),g(!0),f(e),u.b.upload(e,j,(function(e){F(Math.round(100*e.loaded/e.total))})).then((function(e){return console.log("upload then response"),k(e.data.message),m(void 0),g(!1),u.b.getFiles()})).then((function(e){console.log("upload then files"),I(e.data),M(!0)})).catch((function(){F(0),k("Could not upload the file!"),g(!1)})),m(void 0),F(0)}},c.a.createElement(l.a,{name:"cil-scrubber"})," ",y?"Uploading..":"Submit"))))))))}}}]);
//# sourceMappingURL=23.930578de.chunk.js.map
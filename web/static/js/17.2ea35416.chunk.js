(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{647:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var l=t(649);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],l=!0,r=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(l=(i=c.next()).done)&&(t.push(i.value),!a||t.length!==a);l=!0);}catch(o){r=!0,n=o}finally{try{l||null==c.return||c.return()}finally{if(r)throw n}}return t}}(e,a)||Object(l.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},648:function(e,a,t){"use strict";function l(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}t.d(a,"a",(function(){return l}))},649:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var l=t(648);function r(e,a){if(e){if("string"===typeof e)return Object(l.a)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(l.a)(e,a):void 0}}},694:function(e,a,t){"use strict";t.r(a);var l=t(647),r=t(1),n=t.n(r),i=t(646);a.default=function(){var e=n.a.useState(10),a=Object(l.a)(e,2),t=a[0],r=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.wb,null,n.a.createElement(i.u,{xs:"12",md:"6"},n.a.createElement(i.j,null,n.a.createElement(i.n,null,"Alerts",n.a.createElement("div",{className:"card-header-actions"},n.a.createElement("a",{href:"https://coreui.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},n.a.createElement("small",{className:"text-muted"},"docs")))),n.a.createElement(i.k,null,n.a.createElement(i.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),n.a.createElement(i.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),n.a.createElement(i.a,{color:"success"},"This is a success alert \u2014 check it out!"),n.a.createElement(i.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),n.a.createElement(i.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),n.a.createElement(i.a,{color:"info"},"This is a info alert \u2014 check it out!"),n.a.createElement(i.a,{color:"light"},"This is a light alert \u2014 check it out!"),n.a.createElement(i.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),n.a.createElement(i.u,{xs:"12",md:"6"},n.a.createElement(i.j,null,n.a.createElement(i.n,null,"Alerts",n.a.createElement("small",null," use ",n.a.createElement("code",null,".alert-link")," to provide links")),n.a.createElement(i.k,null,n.a.createElement(i.a,{color:"primary"},"This is a primary alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."),n.a.createElement(i.a,{color:"secondary"},"This is a secondary alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."),n.a.createElement(i.a,{color:"success"},"This is a success alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."),n.a.createElement(i.a,{color:"danger"},"This is a danger alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."),n.a.createElement(i.a,{color:"warning"},"This is a warning alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."),n.a.createElement(i.a,{color:"info"},"This is a info alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."),n.a.createElement(i.a,{color:"light"},"This is a light alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."),n.a.createElement(i.a,{color:"dark"},"This is a dark alert with\xa0",n.a.createElement(i.db,{className:"alert-link"},"an example link"),". Give it a click if you like."))))),n.a.createElement(i.wb,null,n.a.createElement(i.u,{xs:"12",md:"6"},n.a.createElement(i.j,null,n.a.createElement(i.n,null,"Alerts",n.a.createElement("small",null," additional content")),n.a.createElement(i.k,null,n.a.createElement(i.a,{color:"success"},n.a.createElement("h4",{className:"alert-heading"},"Well done!"),n.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),n.a.createElement("hr",null),n.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),n.a.createElement(i.u,{xs:"12",md:"6"},n.a.createElement(i.j,null,n.a.createElement(i.n,null,"Alerts",n.a.createElement("small",null," dismissing")),n.a.createElement(i.k,null,n.a.createElement(i.a,{color:"info",closeButton:!0},"I am an dismissible alert!"),n.a.createElement(i.a,{color:"warning",show:t,closeButton:!0,onShowChange:r},"I will be closed in ",t," seconds!",n.a.createElement(i.ub,{striped:!0,color:"warning",value:10*Number(t),size:"xs",className:"mb-3"})),n.a.createElement(i.f,{onClick:function(){return r(10)}},"Reset timer"))))))}}}]);
//# sourceMappingURL=17.2ea35416.chunk.js.map
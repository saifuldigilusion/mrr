(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[43],{710:function(e,a,t){"use strict";t.r(a);var n=t(385),r=t(374),l=t(375),s=t(376),c=t(387),m=t(386),o=t(1),i=t.n(o),u=t(390),h=t(646),p=t(650),d=t(35),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={username:"",password:"",isSubmitting:!1,errorMessage:""},d.a.currentUserValue&&n.props.history.push("/"),d.a.logout(),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(l.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,r=a.value;this.setState(Object(n.a)({},t,r))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.setState({isSubmitting:!0});var t=this.state,n=t.username,r=t.password;d.a.login(n,r).then((function(e){var t=(a.props.location.state||{from:{pathname:"/"}}).from;a.props.history.push(t)}),(function(e){a.setState({isSubmitting:!1,errorMessage:e})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},i.a.createElement(h.w,null,i.a.createElement(h.wb,{className:"justify-content-center"},i.a.createElement(h.u,{md:"8"},i.a.createElement(h.m,null,i.a.createElement(h.j,{className:"p-4"},i.a.createElement(h.k,null,i.a.createElement(h.J,{name:"loginForm",onSubmit:this.handleSubmit},i.a.createElement("h1",null,"Login"),i.a.createElement("p",{className:"text-muted"},"Sign In to your account"),i.a.createElement(h.V,{className:"mb-3"},i.a.createElement(h.X,null,i.a.createElement(h.Y,null,i.a.createElement(p.a,{name:"cil-user"}))),i.a.createElement(h.S,{type:"text",placeholder:"Username",autoComplete:"username",name:"username",onChange:this.handleChange})),i.a.createElement(h.V,{className:"mb-4"},i.a.createElement(h.X,null,i.a.createElement(h.Y,null,i.a.createElement(p.a,{name:"cil-lock-locked"}))),i.a.createElement(h.S,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",onChange:this.handleChange})),this.state.errorMessage&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.errorMessage," "),i.a.createElement(h.wb,null,i.a.createElement(h.u,{xs:"6"},i.a.createElement(h.f,{color:"primary",className:"px-4",type:"submit"},"Login")),i.a.createElement(h.u,{xs:"6",className:"text-right"},i.a.createElement(u.a,{to:"/forgetpassword"},i.a.createElement(h.f,{color:"link",className:"px-0"},"Forgot password?"))))))),i.a.createElement(h.j,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},i.a.createElement(h.k,{className:"text-center"},i.a.createElement("div",null,i.a.createElement("h2",null,"Medical Claim Document Extraction"),i.a.createElement("p",null,"(POC)")))))))))}}]),t}(i.a.Component);a.default=E}}]);
//# sourceMappingURL=43.3555022b.chunk.js.map
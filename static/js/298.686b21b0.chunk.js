"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{298:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(434),a=t(724),l=t(413),i=t(898),u=t(905),s=t(158),o={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},c={name:"",email:"",password:""},d="registerForm_form__9N95P",m=t(184),h=function(e){var n=e.onSubmit,t=(0,s.Z)({initialState:c,onSubmit:n}),r=t.state,a=t.handleChange,h=t.handleSubmit,f=r.name,p=r.email,b=r.password;return(0,m.jsxs)("form",{onSubmit:h,className:d,children:[(0,m.jsx)(i.Z,(0,l.Z)({value:f,handleChange:a},o.name)),(0,m.jsx)(i.Z,(0,l.Z)({value:p,handleChange:a},o.email)),(0,m.jsx)(i.Z,(0,l.Z)({value:b,handleChange:a},o.password)),(0,m.jsx)(u.Z,{children:"Register"})]})},f={},p=function(){var e=(0,r.I0)();return(0,m.jsxs)("div",{className:f.container,children:[(0,m.jsx)("h1",{children:"RegisterPage"}),(0,m.jsx)(h,{onSubmit:function(n){e((0,a.IU)(n))}})]})}},905:function(e,n,t){t.d(n,{Z:function(){return l}});var r="button_btn__uXPTj",a=t(184),l=function(e){var n=e.children,t=e.type,l=void 0===t?"submit":t;return(0,a.jsx)("button",{type:l,className:r,children:n})}},898:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=t(791),i="textField_wrapper__W42iq",u="textField_field__KMwGv",s=t(184),o=["label","handleChange"],c=function(e){var n=e.label,t=e.handleChange,c=a(e,o),d=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("label",{htmlFor:d,children:n}),(0,s.jsx)("input",(0,r.Z)({className:u,id:d,onChange:t},c))]})}},158:function(e,n,t){var r=t(942),a=t(413),l=t(439),i=t(791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,i.useState)((0,a.Z)({},n)),s=(0,l.Z)(u,2),o=s[0],c=s[1],d=(0,i.useCallback)((function(e){var n=e.target,t=n.name,l=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,l))}))}),[]);return{state:o,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},o)),c((0,a.Z)({},n))}}}}}]);
//# sourceMappingURL=298.686b21b0.chunk.js.map
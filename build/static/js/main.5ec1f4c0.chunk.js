(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(19),i=a.n(s),r=(a(26),a(15)),o=a(11),l=a(21),d=(a(27),a(8)),b=a(0);function j(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]}):""]})]})})}j.defaultProps={title:"your Title is here",searchBar:!0};var u=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(b.jsx)("p",{className:"text-center",children:"copyright \xa9 Mytodolist.com"})})},m=function(e){var t=e.doit,a=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn-sm btn-danger",onClick:function(){a(t)},children:"Delete"})]}),Object(b.jsx)("hr",{})]})},h=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{className:"my-3",children:"Doit list"}),0===e.doit.length?"no doit item to display":e.doit.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{doit:t,onDelete:e.onDelete},t.sno),Object(b.jsx)("hr",{})]})}))]})},x=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),l=r[0],d=r[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add a Todo"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&l?(e.addTodo(c,l),s(""),d("")):alert("Title or Description cannot be blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)},className:"form-control",id:"title"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",children:"Todo description"}),Object(b.jsx)("input",{type:"text",value:l,onChange:function(e){return d(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Add Todo"})]})]})},O=function(){return Object(b.jsxs)("div",{children:["This is an about component",Object(b.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum vero ipsum optio minima saepe. Necessitatibus, atque. Tempora odio possimus voluptatem at velit, maxime rerum, earum similique culpa consequatur nihil? Est, assumenda in enim vel architecto error quis delectus laborum cum quo culpa blanditiis excepturi perferendis a inventore voluptatibus? Iste, dicta!"})]})},p=a(2);var g=function(){var e,t;t=null===localStorage.getItem("doit")?[]:JSON.parse(localStorage.getItem("doit"));var a=function(e){console.log("I am ondelete od doit",e),g(e.filter((function(t){return t!==e}))),localStorage.getItem("doit",JSON.stringify(e))},c=function(e,t){console.log("I am adding this todo",e,t);var a={sno:0===m.length?0:m[m.length-1].sno+1,title:e,desc:t};g([].concat(Object(l.a)(m),[a])),console.log(a)},s=Object(n.useState)([t]),i=Object(o.a)(s,2),m=i[0],g=i[1];return Object(n.useEffect)((function(){localStorage.setItem("doit",JSON.stringify(m))}),[m]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(j,{title:"The Todo list",searchBar:!1}),Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,(e={exact:!0,path:"/"},Object(r.a)(e,"exact",!0),Object(r.a)(e,"render",(function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{addTodo:c}),Object(b.jsx)(h,{doit:m,onDelete:a})]})})),e)),Object(b.jsx)(p.a,{exact:!0,path:"/about",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(u,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.5ec1f4c0.chunk.js.map
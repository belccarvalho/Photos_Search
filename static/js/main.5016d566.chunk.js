(this.webpackJsonpphotos=this.webpackJsonpphotos||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(17),o=c.n(a),i=(c(23),c(24),c(3)),u=(c(25),c(6)),j=c.n(u);function b(e){return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("input",{placeholder:"Search for a pic here..",value:e.query,onInput:function(t){e.setQuery(t.target.value)}}),Object(n.jsx)("button",{onClick:function(){e.setSearchOn((function(e){return!e}))},children:"SEARCH"})]})}function h(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{className:"card-img-top",src:e.photo.cover_photo.urls.full,alt:"Card pic"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h5",{className:"card-title",children:e.photo.cover_photo.alt_description||e.photo.title})})]})})}function l(e){var t=e.photos,c=e.hasMore,s=e.setPageNumber,a=Object(r.useRef)(),o=Object(r.useCallback)((function(e){a.current&&a.current.disconnect(),a.current=new IntersectionObserver((function(e){e[0].isIntersecting&&c&&s((function(e){return e+1}))})),e&&a.current.observe(e)}),[c]),i=t.filter((function(e){return e.cover_photo}));return Object(n.jsx)("div",{className:"card-columns",children:i.map((function(e,t){return e.cover_photo?t===i.length-1?Object(n.jsx)("div",{ref:o,children:Object(n.jsx)(h,{photo:e})},t):Object(n.jsx)("div",{children:Object(n.jsx)(h,{photo:e})},t):null}))})}var d=c(8);var O=c.p+"static/media/camera.6cb70562.png";var p=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(1),o=Object(i.a)(a,2),u=o[0],h=o[1],p=Object(r.useState)(!1),f=Object(i.a)(p,2),v=f[0],x=f[1],m=function(e,t,c){var n=Object(r.useState)([]),s=Object(i.a)(n,2),a=s[0],o=s[1],u=Object(r.useState)(!1),b=Object(i.a)(u,2),h=b[0],l=b[1];return Object(r.useEffect)((function(){o([])}),[e]),Object(r.useEffect)((function(){j.a.get("https://api.unsplash.com/search/collections/?client_id=j9bQjfT_YyUFBte48Ewb8Q58-tYlHNiThtbzHJ8Y6oE&query=".concat(e,"&page=").concat(t)).then((function(e){o([].concat(Object(d.a)(a),Object(d.a)(e.data.results))),l(e.data.total_pages>t)})).catch((function(e){console.log(e)}))}),[t,c]),[a,h]}(c,u,v),g=Object(i.a)(m,2),S=g[0],N=g[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("img",{src:O,alt:"draw of camera",width:"304",height:"240"}),Object(n.jsx)(b,{query:c,setQuery:s,setSearchOn:x})]}),Object(n.jsx)("main",{children:Object(n.jsx)(l,{photos:S,hasMore:N,setPageNumber:h})})]})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5016d566.chunk.js.map
(this.webpackJsonpagendapp=this.webpackJsonpagendapp||[]).push([[9],{150:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),i=n(8),a=n(12),s=n(0),o=n(94),u=n(142),b=(n(116),n(106)),j=n.n(b),d="desktop",l="mobile",f=n(20),p=n(18),O=n(1),x=Object(u.b)(j.a),h=[{title:"Tarea 1",start:new Date,end:new Date}],v="day",w="week";t.default=function(e){var t=e.title,n=Object(s.useState)(w),r=Object(a.a)(n,2),b=r[0],j=r[1],k=Object(s.useState)(!0),m=Object(a.a)(k,2),g=m[0],y=m[1],z=function(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){var e=function(){var e=window.innerWidth>768;r(e?d:l)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{screenViewPort:n}}().screenViewPort;return Object(s.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(!0);case 2:if(!z){e.next=7;break}return e.next=5,j(z===d?w:v);case 5:return e.next=7,y(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[z]),Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(o.a,{isBackVisible:!1,title:t}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{type:"text",icon:p.h,placeholder:"search...."}),Object(O.jsx)("br",{})]}),!g&&Object(O.jsx)(u.a,{localizer:x,events:h,startAccessor:"start",endAccessor:"end",style:{height:"70vh"},defaultView:b,views:["month","week","day"]})]})}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r,c,i,a=n(4),s=n(5),o=n(39),u=s.b.div(r||(r=Object(a.a)(["\n    //border: 1px solid black;\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n"]))),b=s.b.div(c||(c=Object(a.a)(["\n    flex: 1;\n    text-align: center;\n    h4{\n        font-size: 1.3em;\n    }\n"]))),j=s.b.div(i||(i=Object(a.a)(["\n    svg{\n        font-size: 1.5em;\n        color: #888;\n        cursor: pointer;\n        &:hover{\n            color: ",";\n        }\n    }\n\n"])),o.a.primary),d=n(18),l=n(1),f=function(e){var t=e.isBackVisible,n=void 0===t||t,r=e.title,c=e.onPress;return Object(l.jsxs)(u,{children:[n&&Object(l.jsx)(j,{onClick:c,children:Object(l.jsx)(d.a,{})}),Object(l.jsx)(b,{children:Object(l.jsx)("h4",{children:r})})]})}}}]);
//# sourceMappingURL=9.d2dd7e61.chunk.js.map
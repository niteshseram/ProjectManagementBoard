(this["webpackJsonpproject-management-board"]=this["webpackJsonpproject-management-board"]||[]).push([[0],{24:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,a,i,o,c,s,d,l,u,b,g,f,j=t(0),h=t.n(j),p=t(10),v=t.n(p),O=t(2),m=t(3),x=t(4),w=t(1),k=m.b.div(r||(r=Object(O.a)(["\n  background: darkGray;\n  padding: 20px;\n  border-radius: 20px;\n  &:not(:last-child) {\n    margin-bottom: 5%;\n  }\n"]))),y=m.b.h3(a||(a=Object(O.a)(["\n  width: 100%;\n  margin: 0px;\n"]))),S=m.b.p(i||(i=Object(O.a)(["\n  width: 100%;\n"]))),D=function(n){var e=n.marginRight,t=n.onDragStart,r=n.ticket;return Object(w.jsxs)(k,{draggable:!0,onDragStart:function(n){return t&&t(n,r.id)},marginRight:e,children:[Object(w.jsx)(y,{children:r.title}),Object(w.jsx)(S,{children:r.body})]})},P=m.b.div(o||(o=Object(O.a)(["\n  list-style: none;\n  text-align: left;\n  padding: 0;\n  background: lightGray;\n  border-radius: 20px;\n  min-height: 50vh;\n  width: 20vw;\n  @media (max-width: 768px) {\n    margin-bottom: 5%;\n  }\n"]))),W=m.b.h2(c||(c=Object(O.a)(["\n  width: 100%;\n  padding-bottom: 10px;\n  text-align: center;\n  border-bottom: 1px solid darkGray;\n"]))),B=m.b.div(s||(s=Object(O.a)(["\n  padding: 5%;\n"]))),F=m.b.div(d||(d=Object(O.a)(["\n  text-align: center;\n"]))),I=function(n){var e=n.laneId,t=n.tickets,r=n.loading,a=n.error,i=n.onDragStart,o=n.onDragOver,c=n.onDrop,s=n.title;return Object(w.jsxs)(P,{onDragOver:o,onDrop:function(n){return c(n,e)},children:[Object(w.jsx)(W,{children:s}),(r||a)&&Object(w.jsx)(F,{children:r?"Loading...":a}),Object(w.jsx)(B,{children:t.map((function(n){return Object(w.jsx)(D,{onDragStart:i,ticket:n},n.id)}))})]})},T=t(15),M=t(8),C=t.n(M),E=t(14),L=function(n){var e=function(e){var t=Object(j.useState)([]),r=Object(x.a)(t,2),a=r[0],i=r[1],o=Object(j.useState)(!0),c=Object(x.a)(o,2),s=c[0],d=c[1],l=Object(j.useState)(""),u=Object(x.a)(l,2),b=u[0],g=u[1];return Object(j.useEffect)((function(){(function(){var n=Object(E.a)(C.a.mark((function n(){var t,r;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e.dataSource);case 3:return t=n.sent,n.next=6,t.json();case 6:r=n.sent,i(r),d(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),d(!1),g(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}})()()}),[e.dataSource]),Object(w.jsx)(n,Object(T.a)({data:a,loading:s,error:b},e))};return e.displayName="WithDataFetching(".concat(n.name,")"),e},R=m.b.div(l||(l=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  margin: 5%;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),U=L((function(n){var e=n.lanes,t=n.loading,r=n.error,a=n.data,i=Object(j.useState)([]),o=Object(x.a)(i,2),c=o[0],s=o[1];Object(j.useEffect)((function(){s(a)}),[a]);var d=function(n,e){n.dataTransfer.setData("id",e)},l=function(n){n.preventDefault()},u=function(n,e){var t=n.dataTransfer.getData("id"),r=c.filter((function(n){return n.id===parseInt(t)&&(n.lane=e),n}));s(r)};return Object(w.jsx)(R,{children:e.map((function(n){return Object(w.jsx)(I,{laneId:n.id,title:n.title,loading:t,error:r,onDragStart:d,onDragOver:l,onDrop:u,tickets:c.filter((function(e){return e.lane===n.id}))},n.id)}))})})),N=m.b.div(u||(u=Object(O.a)(["\n  background-color: blue;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]))),A=m.b.h1(b||(b=Object(O.a)(["\n  height: 64px;\n  pointer-events: none;\n"]))),G=function(){return Object(w.jsx)(N,{children:Object(w.jsx)(A,{children:"Project Management Board"})})},z=Object(m.a)(g||(g=Object(O.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n']))),J=m.b.div(f||(f=Object(O.a)(["\n  text-align: center;\n"]))),H=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(z,{}),Object(w.jsxs)(J,{children:[Object(w.jsx)(G,{}),Object(w.jsx)(U,{lanes:[{id:1,title:"To Do"},{id:2,title:"In Progress"},{id:3,title:"Review"},{id:4,title:"Done"}],dataSource:"../../ProjectManagementBoard/assets/data.json"})]})]})},$=(t(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function q(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))};v.a.render(Object(w.jsx)(h.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/ProjectManagementBoard",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ProjectManagementBoard","/service-worker.js");$?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):q(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(e,n)}))}}(),K()}},[[25,1,2]]]);
//# sourceMappingURL=main.73084eac.chunk.js.map
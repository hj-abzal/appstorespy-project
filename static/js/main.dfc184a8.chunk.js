(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),r=n(9),a=n.n(r),o=(n(67),n(110)),s=n(111),l=n(106),d=n(113),u=n(114),j=n(115),O=n(76),b=n(112),f=n(16),h=n(27),T=n(116),v=n(107),p=n(5),x=c.a.memo((function(t){var e=Object(i.useState)(""),n=Object(h.a)(e,2),c=n[0],r=n[1],a=Object(i.useState)(null),o=Object(h.a)(a,2),s=o[0],d=o[1],u=function(){""!==c.trim()?(t.addItem(c),r("")):d("Title is required")};return Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{variant:"outlined",error:!!s,value:c,onChange:function(t){r(t.currentTarget.value)},onKeyPress:function(t){null!==s&&d(null),13===t.charCode&&u()},label:"Title",helperText:s}),Object(p.jsx)(l.a,{color:"primary",onClick:u,children:Object(p.jsx)(v.a,{})})]})})),I=n(109),S=n(108),k=c.a.memo((function(t){var e=Object(i.useState)(!1),n=Object(h.a)(e,2),c=n[0],r=n[1],a=Object(i.useState)(t.value),o=Object(h.a)(a,2),s=o[0],l=o[1];return c?Object(p.jsx)(T.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.onChange(s)}}):Object(p.jsx)("span",{onDoubleClick:function(){r(!0),l(t.value)},children:t.value})})),g=n(118),D=n(39),m=n(28),A=n(21),C=n(117),y={},E=function(t){var e=Object(f.b)();console.log(t.task);return Object(p.jsxs)("div",{className:t.task.isDone?"is-done":"",children:[Object(p.jsx)(g.a,{checked:t.task.isDone,color:"primary",onChange:function(n){var i,c,r;e((i=t.task.id,c=n.currentTarget.checked,r=t.todolistId,{type:"CHANGE-TASK-STATUS",isDone:c,todolistId:r,taskId:i}))}}),Object(p.jsx)(k,{value:t.task.title,onChange:function(n){e(function(t,e,n){return{type:"CHANGE-TASK-TITLE",title:e,todolistId:n,taskId:t}}(t.task.id,n,t.todolistId))}}),Object(p.jsx)(l.a,{onClick:function(){var n,i;e((n=t.task.id,i=t.todolistId,{type:"REMOVE-TASK",taskId:n,todolistId:i}))},children:Object(p.jsx)(S.a,{})})]})},L=[],N=function(t,e){return{type:"CHANGE-TODOLIST-FILTER",id:t,filter:e}};function K(t){var e=Object(f.b)();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h3",{children:[Object(p.jsx)(k,{value:t.title,onChange:function(n){e(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t.id,n))}}),Object(p.jsx)(l.a,{onClick:function(){e({type:"REMOVE-TODOLIST",id:t.id})},children:Object(p.jsx)(S.a,{})})]}),Object(p.jsx)(x,{addItem:function(n){e(function(t,e){return{type:"ADD-TASK",title:t,todolistId:e}}(n,t.id))}}),Object(p.jsx)("div",{children:t.tasks.map((function(e){return Object(p.jsx)(E,{task:e,todolistId:t.id},e.id)}))}),Object(p.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(p.jsx)(I.a,{variant:"all"===t.filter?"outlined":"text",onClick:function(){e(N(t.id,"all"))},color:"default",children:"All"}),Object(p.jsx)(I.a,{variant:"active"===t.filter?"outlined":"text",onClick:function(){e(N(t.id,"active"))},color:"primary",children:"Active"}),Object(p.jsx)(I.a,{variant:"completed"===t.filter?"outlined":"text",onClick:function(){e(N(t.id,"completed"))},color:"secondary",children:"Completed"})]})]})}n(74);var G=function(){var t=Object(f.b)(),e=Object(f.c)((function(t){return t.todolists})),n=Object(f.c)((function(t){return t.tasks})),c=Object(i.useCallback)((function(e){t(function(t){return{type:"ADD-TODOLIST",title:t,todolistId:Object(C.a)()}}(e))}),[t]);return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(o.a,{position:"static",children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(l.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(p.jsx)(b.a,{})}),Object(p.jsx)(d.a,{variant:"h6",children:"AppStoreSpy"})]})}),Object(p.jsxs)(u.a,{fixed:!0,children:[Object(p.jsx)(j.a,{container:!0,style:{padding:"20px"},children:Object(p.jsx)(x,{addItem:c})}),Object(p.jsx)(j.a,{container:!0,spacing:3,children:e.map((function(t){var e=n[t.id],i=e;return"active"===t.filter&&(i=e.filter((function(t){return!1===t.isDone}))),"completed"===t.filter&&(i=e.filter((function(t){return!0===t.isDone}))),Object(p.jsx)(j.a,{item:!0,children:Object(p.jsx)(O.a,{style:{padding:"15px"},children:Object(p.jsx)(K,{id:t.id,title:t.title,tasks:i,filter:t.filter})})},t.id)}))})]})]})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))},F=n(46),R=Object(F.a)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var n=Object(A.a)({},t),i=n[e.todolistId],c=i.filter((function(t){return t.id!==e.taskId}));return n[e.todolistId]=c,n;case"ADD-TASK":var r=Object(A.a)({},t),a={id:Object(C.a)(),title:e.title,isDone:!1},o=r[e.todolistId],s=[a].concat(Object(m.a)(o));return r[e.todolistId]=s,r;case"CHANGE-TASK-STATUS":var l=t[e.todolistId],d=l.find((function(t){return t.id===e.taskId}));return d&&(d.isDone=e.isDone),Object(A.a)({},t);case"CHANGE-TASK-TITLE":var u=t[e.todolistId],j=u.find((function(t){return t.id===e.taskId}));return j&&(j.title=e.title),Object(A.a)({},t);case"ADD-TODOLIST":return Object(A.a)(Object(A.a)({},t),{},Object(D.a)({},e.todolistId,[]));case"REMOVE-TODOLIST":var O=Object(A.a)({},t);return delete O[e.id],O;default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[{id:e.todolistId,title:e.title,filter:"all"}].concat(Object(m.a)(t));case"CHANGE-TODOLIST-TITLE":var n=t.find((function(t){return t.id===e.id}));return n&&(n.title=e.title),Object(m.a)(t);case"CHANGE-TODOLIST-FILTER":var i=t.find((function(t){return t.id===e.id}));return i&&(i.filter=e.filter),Object(m.a)(t);default:return t}}}),M=Object(F.b)(R,function(){try{var t=localStorage.getItem("app-state");if(null===t)return;return JSON.parse(t)}catch(e){return}}());M.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("app-state",e)}catch(n){}}({tasks:M.getState().tasks,todolists:M.getState().todolists})})),a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f.a,{store:M,children:Object(p.jsx)(G,{})})}),document.getElementById("root")),H()}},[[75,1,2]]]);
//# sourceMappingURL=main.dfc184a8.chunk.js.map
(window["webpackJsonpreact-tutorial2"]=window["webpackJsonpreact-tutorial2"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=a(9),i=a(2),s=a(4),u=a(7);var m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2);return a[0],a[1],c.a.createElement("div",{className:"Header"},c.a.createElement(s.b,{to:"/"},c.a.createElement("h1",null,e.title)))};var d=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),u=Object(i.a)(l,2);return u[0],u[1],c.a.createElement("div",{className:"HomeContent"},(e.SetTitle("Ty\xf6ntekij\xe4t"),e.workers.map(function(e){return c.a.createElement("div",{key:e.id,className:"Links"},c.a.createElement("button",{className:"HomeDeleteButton"},"X"),c.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(e.id),worker:e}},e.name))})),c.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6ntekij\xe4",onChange:function(e){o(e.target.value)},type:"text"}),c.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddWorkerCallback(r)}},"+"))};var f=function(e){function t(t){"back"===t.target.name?e.history.goBack():(localStorage.clear(),window.location.reload())}return c.a.createElement("div",{className:"Footer"},"/"!==e.location.pathname?c.a.createElement("button",{className:"BackButton",name:"back",onClick:t},"Back"):c.a.createElement("button",{className:"ResetButton",name:"reset",onClick:t},"Reset"))};var p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),u=Object(i.a)(l,2),m=u[0],d=u[1];return Object(n.useEffect)(function(){var t=e.GetWorkerById(e.match.params.id);"undefined"!==typeof t&&(d(t),e.SetTitle(t.name+" --\x3e "))}),c.a.createElement("div",{className:"HomeContent"},"undefined"!==typeof m.name?m.places.map(function(e){return c.a.createElement("div",{key:m.id+e.name,className:"Links"},c.a.createElement("button",{className:"HomeDeleteButton"},"X"),c.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(m.id,"/").concat(e.name),worker:m,place:e}},e.name))}):null,c.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6kohde",onChange:function(e){var t=e.target.value;o(t)},type:"text"}),c.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddPlaceCallback(r,m)}},"+"))};var b=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)({}),u=Object(i.a)(l,2),m=u[0],d=u[1],f=Object(n.useState)({}),p=Object(i.a)(f,2),b=p[0],k=p[1];return Object(n.useEffect)(function(){var t=e.GetWorkerById(e.match.params.id);"undefined"!==typeof t&&d(t)}),Object(n.useEffect)(function(){if("undefined"!==typeof m){var t=e.GetWorkplaceFrom(e.match.params.workplace,m);"undefined"!==typeof t&&(k(t),e.SetTitle(m.name+" -> "+t.name))}},[m]),c.a.createElement("div",{className:"HomeContent"},"undefined"!==typeof m&&"undefined"!==typeof b.weeks?b.weeks.map(function(e){return c.a.createElement("div",{key:m.id+b.name+e.name,className:"Links"},c.a.createElement("button",{className:"HomeDeleteButton"},"X"),c.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(b.name,"/").concat(e.name),worker:m,place:b,week:e}},e.name))}):null,c.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 viikko",onChange:function(e){o(e.target.value)},type:"text"}),c.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddWeekCallback(r,b,m)}},"+"))},k=a(14);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var E=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],o=a[1];function l(t){var a=t.target,n=a.name,c=a.value;t.target.value<0?t.target.value=0:t.target.value>24&&(t.target.value=24),o({name:e.location.week.name,days:O({},r.days,Object(k.a)({},n,c))})}return Object(n.useEffect)(function(){o(e.location.week)},[]),Object(n.useEffect)(function(){e.SetWeek(e.location.worker,e.location.place,e.location.week,r)},[r]),c.a.createElement("div",{className:"HomeContent"},(e.SetTitle(e.location.worker.name+" -> "+e.location.place.name+" -> "+e.location.week.name),"undefined"!==typeof r.days?Object.keys(r.days).map(function(e){return c.a.createElement("div",null,c.a.createElement("label",{key:e,className:"Key"},e),c.a.createElement("input",{onChange:l,key:e+r.days[e],name:e,className:"HourInput",type:"number",value:r.days[e],max:"24",min:"0",step:"0.01"}))}):console.log("test")),c.a.createElement("div",null,c.a.createElement("label",{className:"Total"},"Yhteens\xe4"),c.a.createElement("label",{className:"TotalValue"},function(){var e=0;for(var t in r.days)r.days.hasOwnProperty(t)&&(e+=parseInt(r.days[t]));return e}())))};var j=function(){var e="WorkTimeAppData",t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],k=Object(n.useState)([]),v=Object(i.a)(k,2),O=v[0],j=v[1];function y(e){if(e){for(var t in r)if(r[t].name===e)return;var a=B(e),n="_"+Math.random().toString(36).substr(2,9);o([{id:n,name:a,places:[]}].concat(Object(l.a)(r)))}}function g(e,t){var a={name:B(e),weeks:[]};r.splice(r.indexOf(t),1),t.places=[a].concat(Object(l.a)(t.places)),o([t].concat(Object(l.a)(r)))}function w(e,t,a){var n={name:B(e),days:{Maanantai:0,Tiistai:0,Keskiviikko:0,Torstai:0,Perjantai:0,Lauantai:0,Sunnuntai:0}};t.weeks.unshift(n),r.splice(r.indexOf(a),1),o([].concat(Object(l.a)(r),[a]))}function h(e,t,a,n){t.weeks.splice(t.weeks.indexOf(a),1),r.splice(r.indexOf(e),1),t.weeks.unshift(n),o([].concat(Object(l.a)(r),[e]))}function S(e){for(var t in r)if(r[t].id===e)return r[t]}function N(e,t){for(var a in t.places)if(t.places[a].name===e)return t.places[a]}function C(e){j(e)}return Object(n.useEffect)(function(){r.length>0&&function(){var t=JSON.stringify(r);window.localStorage.setItem(e,t),console.log("Saving... "+t)}()},[r]),Object(n.useEffect)(function(){!function(){var t=window.localStorage.getItem(e),a=JSON.parse(t);a&&(o(a),console.log("Loading users..."))}()},[]),c.a.createElement(s.a,{basename:"/Worktime-App"},c.a.createElement("div",{className:"App"},c.a.createElement(m,{title:O}),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,render:function(e){return c.a.createElement(d,Object.assign({},e,{workers:r,AddWorkerCallback:y,SetTitle:C,GetWorkerById:S}))}}),c.a.createElement(u.a,{path:"/:id",exact:!0,render:function(e){return c.a.createElement(p,Object.assign({},e,{AddPlaceCallback:g,SetTitle:C,GetWorkerById:S}))}}),c.a.createElement(u.a,{path:"/:id/:workplace",exact:!0,render:function(e){return c.a.createElement(b,Object.assign({},e,{AddWeekCallback:w,SetTitle:C,GetWorkerById:S,GetWorkplaceFrom:N}))}}),"/>",c.a.createElement(u.a,{path:"/:id/:workplace/:week",exact:!0,render:function(e){return c.a.createElement(E,Object.assign({},e,{SetTitle:C,SetWeek:h}))}})),c.a.createElement(u.a,{render:function(e){return c.a.createElement(f,e)}})));function B(e){for(var t,a=e.split(" "),n=[],c=0;c<a.length;c++){for(var r=a[c],o="",l=0;l<r.length;l++)0===l&&1===(t=r[l]).length&&t.match(/[a-z]/i)?o+=r[l].toUpperCase():o+=r[l];n.push(o)}return n.join(" ")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30),a(31);o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.127ef5a9.chunk.js.map
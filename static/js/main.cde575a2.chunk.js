(window["webpackJsonpreact-tutorial2"]=window["webpackJsonpreact-tutorial2"]||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},42:function(e){e.exports=JSON.parse("{}")},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=a(14),i=a(17),u=a(3),s=a(6),m=a(10),p=a(11),f=a.n(p),d={apiKey:"AIzaSyCFcLwUq2XOtq6kk07XtjlRDovaO_T5jgM",authDomain:"worktime-app-a7b0e.firebaseapp.com",databaseURL:"https://worktime-app-a7b0e.firebaseio.com",projectId:"worktime-app-a7b0e",storageBucket:"worktime-app-a7b0e.appspot.com",messagingSenderId:"726563867988",appId:"1:726563867988:web:ef8a653a124bdc76f6ccc1"};a(42);var b=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2);return a[0],a[1],r.a.createElement("div",{className:"Header"},r.a.createElement(s.b,{to:"/"},r.a.createElement("h1",null,e.title)))};var k=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),i=Object(u.a)(l,2);return i[0],i[1],r.a.createElement("div",{className:"HomeContent"},r.a.createElement("div",{className:"Input"},r.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6ntekij\xe4",onChange:function(e){o(e.target.value)},type:"text"}),r.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddWorkerCallback(c)}},"+")),(e.SetTitle("Ty\xf6ntekij\xe4t"),e.workers.map(function(e){return r.a.createElement("div",{key:e.id,className:"Links"},r.a.createElement("button",{className:"HomeDeleteButton"},"X"),r.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(e.id),worker:e}},e.name))})))};var v=function(e){function t(t){"back"===t.target.name?e.history.goBack():(localStorage.clear(),f.a.database().ref("/").remove(),window.location.reload())}return r.a.createElement("div",{className:"Footer"},"/"!==e.location.pathname?r.a.createElement("button",{className:"BackButton",name:"back",onClick:t},"Back"):r.a.createElement("button",{className:"ResetButton",name:"reset",onClick:t},"Reset"))};var O=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),m=i[0],p=i[1];return Object(n.useEffect)(function(){var t=e.GetWorkerById(e.match.params.id);"undefined"!==typeof t&&(p(t),e.SetTitle(t.name+" --\x3e "))}),r.a.createElement("div",{className:"HomeContent"},r.a.createElement("div",{className:"Input"},r.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6kohde",onChange:function(e){var t=e.target.value;o(t)},type:"text"}),r.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddPlaceCallback(c,m)}},"+")),"undefined"!==typeof m.name?m.places.map(function(e,t){return r.a.createElement("div",{key:m.id+e.name,className:"Links"},r.a.createElement("button",{className:"HomeDeleteButton"},"X"),r.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(m.id,"/").concat(e.name),worker:m,place:e,index:t}},e.name))}):null)};var j=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)({}),i=Object(u.a)(l,2),m=i[0],p=i[1],f=Object(n.useState)({}),d=Object(u.a)(f,2),b=d[0],k=d[1],v=Object(n.useState)(0),O=Object(u.a)(v,2),j=O[0],y=O[1];function E(e){var t=0;for(var a in e.days)e.days.hasOwnProperty(a)&&(t+=parseFloat(e.days[a]));return t}return Object(n.useEffect)(function(){var t=e.GetWorkerById(e.match.params.id);"undefined"!==typeof t&&p(t)}),Object(n.useEffect)(function(){"undefined"!==b.weeks&&function(){var e=0;for(var t in b.weeks)e+=E(b.weeks[t]);y(e)}()},[b]),Object(n.useEffect)(function(){if("undefined"!==typeof m){var t=e.GetWorkplaceFrom(e.match.params.workplace,m);"undefined"!==typeof t&&(k(t),e.SetTitle(m.name+" -> "+t.name))}},[m]),r.a.createElement("div",{className:"HomeContent"},r.a.createElement("div",{className:"Input"},r.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 viikko",onChange:function(e){o(e.target.value)},type:"text"}),r.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddWeekCallback(c,b,m)}},"+")),"undefined"!==typeof m&&"undefined"!==typeof b.weeks?b.weeks.map(function(e){return r.a.createElement("div",{key:m.id+b.name+e.name,className:"Links"},r.a.createElement("button",{className:"HomeDeleteButton"},"X"),r.a.createElement(s.b,{className:"LinkButtonShort",to:{pathname:"".concat(b.name,"/").concat(e.name),worker:m,place:b,week:e}},e.name),r.a.createElement("label",{className:"WeekTotalValue"},E(e)))}):null,r.a.createElement("div",null,r.a.createElement("label",{className:"Total"},"Yhteens\xe4"),r.a.createElement("label",{className:"TotalValue"},j)))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),c=a[0],o=a[1];function i(t){t.target.value<0?t.target.value=0:t.target.value>24&&(t.target.value=24);var a=t.target,n=a.name,r=a.value;o({name:e.location.week.name,days:E({},c.days,Object(l.a)({},n,r))})}function s(e){e.target.value=""}function m(e){}function p(e){""===e.target.value&&(e.target.value=0)}return Object(n.useEffect)(function(){o(e.location.week)},[]),Object(n.useEffect)(function(){e.SetWeek(e.location.worker,e.location.place,e.location.week,c)},[c]),r.a.createElement("div",{className:"HomeContent"},(e.SetTitle(e.location.worker.name+" -> "+e.location.place.name+" -> "+e.location.week.name),"undefined"!==typeof c.days?Object.keys(c.days).map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("label",{className:"Key"},e),r.a.createElement("input",{onChange:i,name:e,className:"HourInput",type:"number",max:"24",min:"0",step:"0.01",value:c.days[e],onClick:s,onFocus:m,onBlur:p}))}):null),r.a.createElement("div",null,r.a.createElement("label",{className:"Total"},"Yhteens\xe4"),r.a.createElement("label",{className:"TotalValue"},function(){var e=0;for(var t in c.days)c.days.hasOwnProperty(t)&&(e+=parseFloat(c.days[t]));return e.toFixed(1)}())))};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),p=Object(u.a)(o,2),y=p[0],E=p[1];function h(e){if(e){for(var t in a)if(a[t].name===e)return;var n=T(e),r="_"+Math.random().toString(36).substr(2,9);c([{id:r,name:n,places:[]}].concat(Object(i.a)(a)))}}function S(e,t){var n={name:T(e),weeks:[]},r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,{places:[].concat(Object(i.a)(t.places),[n])});c(a.map(function(e){return e.name===r.name?r:e}))}function N(e,t,n){var r={name:T(e),days:{Maanantai:0,Tiistai:0,Keskiviikko:0,Torstai:0,Perjantai:0,Lauantai:0,Sunnuntai:0}},o={id:n.id,name:n.name,places:n.places.map(function(e){return e.name===t.name?{name:e.name,weeks:[r].concat(Object(i.a)(e.weeks))}:e})};c(a.map(function(e){return e.name===o.name?o:e}))}function C(e,t,n,r){var o={id:e.id,name:e.name,places:e.places.map(function(e){return e.name===t.name?{name:e.name,weeks:e.weeks.map(function(e){return e.name===r.name?r:e})}:e})};c(a.map(function(e){return e.name===o.name?o:e}))}function P(e){for(var t in a)if(a[t].id===e)return a[t]}function B(e,t){for(var a in t.places)if(t.places[a].name===e)return t.places[a]}function I(e){E(e)}return Object(n.useEffect)(function(){a.length>0&&(f.a.database().ref("/workers").set(a).then(function(e){return console.log("Success")}).catch(function(e){return console.error(e)}),console.log("Saving to firebase!"))},[a]),Object(n.useEffect)(function(){f.a.initializeApp(d),f.a.database().ref("workers/").once("value",function(e){null!==e.val()?c(e.val()):console.log("Data is null")})},[]),r.a.createElement(s.a,{basename:"/Worktime-App"},r.a.createElement("div",{className:"App"},r.a.createElement(b,{title:y}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(k,Object.assign({},e,{workers:a,AddWorkerCallback:h,SetTitle:I,GetWorkerById:P}))}}),r.a.createElement(m.a,{path:"/:id",exact:!0,render:function(e){return r.a.createElement(O,Object.assign({},e,{AddPlaceCallback:S,SetTitle:I,GetWorkerById:P}))}}),r.a.createElement(m.a,{path:"/:id/:workplace",exact:!0,render:function(e){return r.a.createElement(j,Object.assign({},e,{AddWeekCallback:N,SetTitle:I,GetWorkerById:P,GetWorkplaceFrom:B}))}}),"/>",r.a.createElement(m.a,{path:"/:id/:workplace/:week",exact:!0,render:function(e){return r.a.createElement(w,Object.assign({},e,{SetTitle:I,SetWeek:C}))}})),r.a.createElement(m.a,{render:function(e){return r.a.createElement(v,e)}})));function T(e){for(var t,a=e.split(" "),n=[],r=0;r<a.length;r++){for(var c=a[r],o="",l=0;l<c.length;l++)0===l&&1===(t=c[l]).length&&t.match(/[a-z]/i)?o+=c[l].toUpperCase():o+=c[l];n.push(o)}return n.join(" ")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47),a(48);o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.cde575a2.chunk.js.map
(window["webpackJsonpreact-tutorial2"]=window["webpackJsonpreact-tutorial2"]||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),r=a.n(o),l=a(10),i=a(2),s=a(4),m=a(7);var u=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2);return a[0],a[1],c.a.createElement("div",{className:"Header"},c.a.createElement(s.b,{to:"/"},c.a.createElement("h1",null,e.title)))};var d=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2);return m[0],m[1],c.a.createElement("div",{className:"HomeContent"},(e.SetTitle("Ty\xf6ntekij\xe4t"),e.workers.map(function(e){return c.a.createElement("div",{key:e.id,className:"Links"},c.a.createElement("button",{className:"HomeDeleteButton"},"X"),c.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(e.id),worker:e}},e.name))})),c.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6ntekij\xe4",onChange:function(e){r(e.target.value)},type:"text"}),c.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){e.AddWorkerCallback(o)}},"+"))};var k=function(e){return c.a.createElement("div",{className:"Footer"},"/"!==e.location.pathname?c.a.createElement("button",{className:"BackButton",onClick:function(){e.history.goBack()}},"Back"):c.a.createElement("p",{className:"FooterHomePageText"}))};var p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),u=m[0],d=m[1];return Object(n.useEffect)(function(){var t=e.GetWorkerById(e.match.params.id);d(t),e.SetTitle(t.name+" --\x3e "),console.log("Setting worker to "+t.name)},[]),c.a.createElement("div",{className:"HomeContent"},"undefined"!==typeof u.name?u.places.map(function(e){return c.a.createElement("div",{key:u.id+e.name,className:"Links"},c.a.createElement("button",{className:"HomeDeleteButton"},"X"),c.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(u.id,"/").concat(e.name),worker:u,place:e}},e.name))}):console.log("False"),c.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6kohde",onChange:function(e){var t=e.target.value;r(t)},type:"text"}),c.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){e.AddPlaceCallback(o,u)}},"+"))};var f=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)(function(){}),c.a.createElement("div",{className:"HomeContent"},(e.SetTitle(e.location.worker.name+" -> "+e.location.place.name+" -> "),e.location.place.weeks.map(function(t){return c.a.createElement("div",{key:e.location.worker.id+e.location.place.name+t.name,className:"Links"},c.a.createElement("button",{className:"HomeDeleteButton"},"X"),c.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(e.location.place.name,"/").concat(t.name),worker:e.location.worker,place:e.location.place,week:t}},t.name))})),c.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 viikko",onChange:function(e){r(e.target.value)},type:"text"}),c.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){e.AddWeekCallback(o,e.location.place,e.location.worker)}},"+"))};var b=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2);return a[0],a[1],c.a.createElement("div",{className:"HomeContent"},(e.SetTitle(e.location.worker.name+" -> "+e.location.place.name+" -> "+e.location.week.name),Object.keys(e.location.week.days).map(function(t){return c.a.createElement("div",null,c.a.createElement("label",{className:"Key"},t),c.a.createElement("label",{className:"Value"},e.location.week.days[t]))})),c.a.createElement("div",null,c.a.createElement("label",{className:"Key"},"Yhteens\xe4"),c.a.createElement("label",{className:"Value"},"0")))};var E=function(){var e="WorkTimeAppData",t=Object(n.useState)([]),a=Object(i.a)(t,2),o=a[0],r=a[1],E=Object(n.useState)([]),v=Object(i.a)(E,2),w=v[0],j=v[1];function O(e){if(e){for(var t in o)if(o[t].name===e)return;var a=y(e),n={id:"_"+Math.random().toString(36).substr(2,9),name:a,places:[]};r([].concat(Object(l.a)(o),[n]))}}function h(e,t){var a={name:y(e),weeks:[]};o.splice(o.indexOf(t),1),t.places=[].concat(Object(l.a)(t.places),[a]),r([].concat(Object(l.a)(o),[t]))}function g(e,t,a){var n={name:y(e),days:{Maanantai:0,Tiistai:0,Keskiviikko:0,Torstai:0,Perjantai:0,Lauantai:0,Sunnuntai:0}};t.weeks.push(n),o.splice(o.indexOf(a),1),r([].concat(Object(l.a)(o),[a]))}function N(e){for(var t in o)if(o[t].id===e)return o[t]}function S(e){j(e)}return Object(n.useEffect)(function(){o.length>0&&function(){var t=JSON.stringify(o);window.localStorage.setItem(e,t),console.log("Saving... "+t)}()},[o]),Object(n.useEffect)(function(){!function(){var t=window.localStorage.getItem(e),a=JSON.parse(t);r(a),console.log("Loading... "+a),console.log(a)}()},[]),c.a.createElement(s.a,{basename:"/Worktime-App"},c.a.createElement("div",{className:"App"},c.a.createElement(u,{title:w}),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,render:function(e){return c.a.createElement(d,Object.assign({},e,{workers:o,AddWorkerCallback:O,SetTitle:S,GetWorkerById:N}))}}),c.a.createElement(m.a,{path:"/:id",exact:!0,render:function(e){return c.a.createElement(p,Object.assign({},e,{AddPlaceCallback:h,SetTitle:S,GetWorkerById:N}))}}),c.a.createElement(m.a,{path:"/:id/:workplace",exact:!0,render:function(e){return c.a.createElement(f,Object.assign({},e,{AddWeekCallback:g,SetTitle:S}))}}),"/>",c.a.createElement(m.a,{path:"/:id/:workplace/:week",exact:!0,render:function(e){return c.a.createElement(b,Object.assign({},e,{SetTitle:S}))}})),c.a.createElement(m.a,{render:function(e){return c.a.createElement(k,e)}})));function y(e){for(var t,a=e.split(" "),n=[],c=0;c<a.length;c++){for(var o=a[c],r="",l=0;l<o.length;l++)0===l&&1===(t=o[l]).length&&t.match(/[a-z]/i)?r+=o[l].toUpperCase():r+=o[l];n.push(r)}return n.join(" ")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29),a(30);r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.044e3d8f.chunk.js.map
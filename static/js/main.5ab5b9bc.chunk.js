(window["webpackJsonpreact-tutorial2"]=window["webpackJsonpreact-tutorial2"]||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},42:function(e){e.exports=JSON.parse("{}")},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(23),r=a.n(c),l=a(16),i=a(17),u=a(3),s=a(5),m=a(10),p=a(11),f=a.n(p),d={apiKey:"AIzaSyCFcLwUq2XOtq6kk07XtjlRDovaO_T5jgM",authDomain:"worktime-app-a7b0e.firebaseapp.com",databaseURL:"https://worktime-app-a7b0e.firebaseio.com",projectId:"worktime-app-a7b0e",storageBucket:"worktime-app-a7b0e.appspot.com",messagingSenderId:"726563867988",appId:"1:726563867988:web:ef8a653a124bdc76f6ccc1"};a(42);var k=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2);return a[0],a[1],o.a.createElement("div",{className:"Header"},o.a.createElement(s.b,{to:"/"},o.a.createElement("h1",null,e.title)))};var b=function(e){function t(t){"no"===t.target.name&&e.SetShowPopUp(!1),"yes"===t.target.name&&e.Delete(e.toDelete)}return o.a.createElement("div",{className:"DeleteConfirmation"},o.a.createElement("p",{className:"DeleteConfirmationText"},"Poistetaan ",e.toDelete.toDelete.name,"?"),o.a.createElement("div",{className:"DeleteConfirmationButtons"},o.a.createElement("button",{className:"DeleteConfirmationYes",name:"yes",onClick:t},"Kyll\xe4"),o.a.createElement("button",{className:"DeleteConfirmationNo",name:"no",onClick:t},"Peruuta")))};var w=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)([]),i=Object(u.a)(l,2);return i[0],i[1],o.a.createElement("div",{className:"HomeContent"},o.a.createElement("div",{className:"Input"},o.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6ntekij\xe4",onChange:function(e){r(e.target.value)},type:"text"}),c.length>0?o.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddWorkerCallback(c),r("")}},"+"):""),(e.SetTitle("Ty\xf6ntekij\xe4t"),e.workers.map(function(t){return o.a.createElement("div",{key:t.id,className:"Links"},o.a.createElement("button",{onClick:function(){return function(t){e.SetShowPopUp(!0),e.SetToDelete({user:t,toDelete:t})}(t)},className:"HomeDeleteButton",worker:t,id:t.id},"X"),o.a.createElement(s.b,{className:"LinkButton",to:{pathname:"".concat(t.id),worker:t}},t.name))})),!0===e.showPopUp?o.a.createElement("div",{className:"DeleteConfirmationContainer"},o.a.createElement(b,{showPopUp:e.showPopUp,SetShowPopUp:e.SetShowPopUp,toDelete:e.toDelete,Delete:e.DeleteWorker})):null)};var v=function(e){function t(e){var t=0;for(var a in e.days)t+=parseFloat(Object.values(e.days[a])[0]);return t}function a(e){var a=0;return"undefined"!==typeof e.places&&e.places.forEach(function(e){a+=function(e){if("undefined"!==typeof e.weeks){var a=0;return e.weeks.forEach(function(e){a+=t(e)}),a}return 0}(e)}),a}return o.a.createElement("div",{className:"Footer"},"/"!==e.location.pathname?o.a.createElement("button",{className:"BackButton",name:"back",onClick:function(t){"back"===t.target.name?e.history.goBack():(e.CreateBackup(),f.a.database().ref(e.currentBuild).remove(),window.location.reload())}},"Back"):"",o.a.createElement("button",{className:"MailButton",onClick:function(n){console.log("Opening mail...");var o=function(){var n="";return e.workers.forEach(function(e){var o="--- ".concat(e.name," --\x3e%0D%0A");e.places.forEach(function(e){var a=" ".concat(e.name,":%0D%0A");o=o.concat(a),e.weeks.forEach(function(e){var a="    ".concat(e.name,": ").concat(t(e)," tuntia%0D%0A %0D%0A");o=o.concat(a)})});var c="".concat(e.name," yhteens\xe4: ").concat(a(e)," tuntia%0D%0A %0D%0A");o=o.concat(c),n=n.concat("%0D%0A",o)}),n}(),c="mailto:Helin.pool@gmail.com?subject=Tunnit&body="+o;console.log(o),window.open(c)}},"Mail"))};var h=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),m=i[0],p=i[1];function f(e){if("undefined"!==typeof e.weeks){var t=0;return e.weeks.forEach(function(e){t+=function(e){var t=0;for(var a in e.days)t+=parseFloat(Object.values(e.days[a])[0]);return t}(e)}),t}return 0}return Object(n.useEffect)(function(){var t=e.GetWorkerById(e.match.params.id);"undefined"!==typeof t&&(p(t),e.SetTitle(t.name+" --\x3e "))}),o.a.createElement("div",{className:"HomeContent"},o.a.createElement("div",{className:"Input"},o.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 ty\xf6kohde",onChange:function(e){var t=e.target.value;r(t)},type:"text"}),c.length>0?o.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddPlaceCallback(c,m),r("")}},"+"):""),"undefined"!==typeof m.places?m.places.map(function(t,a){return o.a.createElement("div",{key:m.id+t.name,className:"Links"},o.a.createElement("button",{onClick:function(){return function(t,a){e.SetShowPopUp(!0),e.SetToDelete({user:a,toDelete:t})}(t,m)},className:"HomeDeleteButton"},"X"),o.a.createElement(s.b,{className:"LinkButtonShort",to:{pathname:"".concat(m.id,"/").concat(t.name),worker:m,place:t,index:a}},t.name),o.a.createElement("label",{className:"WeekTotalValue"},f(t)))}):null,o.a.createElement("div",null,o.a.createElement("label",{className:"TotalWeek"},"Aktiiviset Viikot Yhteens\xe4"),o.a.createElement("label",{className:"TotalValue"},function(){var e=0;return"undefined"!==typeof m.places&&m.places.forEach(function(t){e+=f(t)}),e}())),!0===e.showPopUp?o.a.createElement("div",{className:"DeleteConfirmationContainer"},o.a.createElement(b,{showPopUp:e.showPopUp,SetShowPopUp:e.SetShowPopUp,toDelete:e.toDelete,Delete:e.DeletePlace})):null)};var E=function(e){var t="LinkButtonShortest";return"oldweek"===e.week.type&&(t="LinkButtonShort"),o.a.createElement("div",{className:"Links"},o.a.createElement("button",{onClick:function(){return e.HandleDeleteClick(e.week)},className:"HomeDeleteButton"},"X"),"oldweek"!==e.week.type?o.a.createElement("button",{onClick:function(){return e.HandleArchiveClick(e.week)},className:"Archive"},"A"):null,o.a.createElement(s.b,{className:t,to:{pathname:"".concat(e.place.name,"/").concat(e.week.name),worker:e.worker,place:e.place,week:e.week}},e.week.name),o.a.createElement("label",{className:"WeekTotalValue"},e.CalcTotalWeek(e.week)))};var y=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)({}),i=Object(u.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)({}),f=Object(u.a)(p,2),d=f[0],k=f[1],w=Object(n.useState)(0),v=Object(u.a)(w,2),h=(v[0],v[1]);function y(e){var t=0;for(var a in e.days)t+=parseFloat(Object.values(e.days[a])[0]);return t}function O(t){e.SetShowPopUp(!0),e.SetToDelete({user:s,place:d,toDelete:t})}function S(t){e.ArchiveWeek(s,d,t)}return Object(n.useEffect)(function(){var t=e.GetWorkerById(e.match.params.id);"undefined"!==typeof t&&m(t)}),Object(n.useEffect)(function(){"undefined"!==d.weeks&&function(){var e=0;for(var t in d.weeks)e+=y(d.weeks[t]);h(e)}()},[d]),Object(n.useEffect)(function(){if("undefined"!==typeof s){var t=e.GetWorkplaceFrom(e.match.params.workplace,s);"undefined"!==typeof t&&(k(t),e.SetTitle(s.name+" -> "+t.name))}},[s]),o.a.createElement("div",{className:"HomeContent"},o.a.createElement("div",{className:"Input"},o.a.createElement("input",{className:"AddInput",placeholder:"Lis\xe4\xe4 viikko",onChange:function(e){r(e.target.value)},onClick:function(e){e.target.value="Viikko "},type:"text"}),c.length>0?o.a.createElement("button",{className:"AddInputSubmit",onClick:function(t){t.target.previousSibling.value="",e.AddWeekCallback(c,d,s),r("")}},"+"):""),o.a.createElement("label",{className:"WeeksLabelActive"},"Aktiiviset Viikot"),"undefined"!==typeof s&&"undefined"!==typeof d.weeks?d.weeks.map(function(e){return o.a.createElement(E,{worker:s,week:e,place:d,HandleDeleteClick:O,HandleArchiveClick:S,CalcTotalWeek:y})}):null,o.a.createElement("div",null,o.a.createElement("label",{className:"WeeksLabelOld"},"Arkistoidut Viikot")),"undefined"!==typeof s&&"undefined"!==typeof d.oldweeks?d.oldweeks.map(function(e){return o.a.createElement(E,{worker:s,place:d,week:e,HandleDeleteClick:O,HandleArchiveClick:S,CalcTotalWeek:y})}):console.log("test false"),!0===e.showPopUp?o.a.createElement("div",{className:"DeleteConfirmationContainer"},o.a.createElement(b,{showPopUp:e.showPopUp,SetShowPopUp:e.SetShowPopUp,toDelete:e.toDelete,Delete:e.DeleteWeek})):null)};var O=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],r=a[1];function i(t){if("oldweek"!==e.location.week.type){t.target.value<0?t.target.value=0:t.target.value>24&&(t.target.value=24);var a=t.target,n=a.name,o=a.value;console.log(n),r({name:e.location.week.name,type:c.type,days:c.days.map(function(e){return Object.keys(e)[0]!==n?e:Object(l.a)({},n,o)})})}}function s(t){"oldweek"!==e.location.week.type&&(t.target.value="")}function m(e){}function p(e){""===e.target.value&&(e.target.value=0)}return Object(n.useEffect)(function(){r(e.location.week)},[]),Object(n.useEffect)(function(){"oldweek"!==e.location.week.type&&e.SetWeek(e.location.worker,e.location.place,e.location.week,c)},[c]),o.a.createElement("div",{className:"HomeContent"},(e.SetTitle(e.location.worker.name+" -> "+e.location.place.name+" -> "+e.location.week.name),"undefined"!==typeof c.days?c.days.map(function(e){return o.a.createElement("div",{key:Object.keys(e)[0]},o.a.createElement("label",{className:"Key"},Object.keys(e)[0]),o.a.createElement("input",{onChange:i,name:Object.keys(e)[0],className:"HourInput",type:"number",max:"24",min:"0",step:"0.01",value:Object.values(e)[0],onClick:s,onFocus:m,onBlur:p}))}):null),o.a.createElement("div",null,o.a.createElement("label",{className:"TotalWeek"},"Yhteens\xe4"),o.a.createElement("label",{className:"TotalValue"},function(){var e=0;for(var t in c.days)console.log(Object.values(t)[0]),e+=parseFloat(Object.values(c.days[t])[0]);return e}())))};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),p=Object(u.a)(r,2),b=p[0],E=p[1],j=Object(n.useState)(!1),g=Object(u.a)(j,2),D=g[0],C=g[1],N=Object(n.useState)({}),P=Object(u.a)(N,2),A=P[0],W=P[1],T="/backup";function U(){f.a.database().ref(T).set(a).then(function(e){return console.log("Success")}).catch(function(e){return console.error(e)}),console.log("Saving backup to firebase!")}function B(e){if(e){for(var t in a)if(a[t].name===e)return;var n=z(e),o="_"+Math.random().toString(36).substr(2,9);c([{id:o,type:"worker",name:n,places:[]}].concat(Object(i.a)(a)))}}function I(e,t){var n={name:z(e),type:"place",weeks:[],oldweeks:[]},o=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,{places:"undefined"!==typeof t.places?t.places:[]});o.places.unshift(n),c(a.map(function(e){return e.name===o.name?o:e}))}function H(e,t,n){var o={name:z(e),type:"week",days:[{Maanantai:0},{Tiistai:0},{Keskiviikko:0},{Torstai:0},{Perjantai:0},{Lauantai:0},{Sunnuntai:0}]},r={id:n.id,name:n.name,places:n.places.map(function(e){return e.name===t.name?{name:e.name,weeks:"undefined"!==typeof e.weeks?[o].concat(Object(i.a)(e.weeks)):[o],oldweeks:"undefined"!==typeof e.oldweeks?e.oldweeks:[]}:e})};c(a.map(function(e){return e.name===r.name?r:e}))}function L(e,t,n,o){var r={id:e.id,name:e.name,places:e.places.map(function(e){return e.name===t.name?{name:e.name,weeks:e.weeks.map(function(e){return e.name===o.name?o:e}),oldweeks:"undefined"!==typeof e.oldweeks?e.oldweeks:[]}:e})};c(a.map(function(e){return e.name===r.name?r:e}))}function x(e,t,n){var o={id:e.id,name:e.name,places:e.places.map(function(e){return e.name===t.name?{name:e.name,weeks:e.weeks.filter(function(e){return e.name!==n.name}),oldweeks:[{name:n.name,type:"oldweek",days:n.days}].concat(Object(i.a)(e.oldweeks))}:e})};c(a.map(function(e){return e.name===o.name?o:e}))}function F(e){for(var t in a)if(a[t].id===e)return a[t]}function V(e,t){for(var a in t.places)if(t.places[a].name===e)return t.places[a]}function G(e){c(a.filter(function(t){return t.name!==e.toDelete.name})),C(!1)}function M(e){c(a.map(function(t){return t.name===e.user.name&&(t.places=t.places.filter(function(t){return t.name!==e.toDelete.name})),t})),C(!1)}function X(e){"week"===e.toDelete.type?c(a.map(function(t){return t.name===e.user.name&&t.places.map(function(t){t.name===e.place.name&&(t.weeks=t.weeks.filter(function(t){return t.name!==e.toDelete.name}))}),t})):c(a.map(function(t){return t.name===e.user.name&&t.places.map(function(t){t.name===e.place.name&&(t.oldweeks=t.oldweeks.filter(function(t){return t.name!==e.toDelete.name}))}),t})),C(!1)}function K(e){E(e)}return Object(n.useEffect)(function(){var e;a.length>0&&(e="/workers",f.a.database().ref(e).set(a).then(function(e){return console.log("Success")}).catch(function(e){return console.error(e)}),console.log("Saving to firebase!"))},[a]),Object(n.useEffect)(function(){var e;f.a.initializeApp(d),e="/workers",f.a.database().ref(e).once("value",function(e){null!==e.val()?(c(e.val()),console.log(e.val())):console.log("Data is null")})},[]),o.a.createElement(s.a,{basename:"/Worktime-App"},o.a.createElement("div",{className:"App"},o.a.createElement(k,{title:b}),o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(w,Object.assign({},e,{workers:a,AddWorkerCallback:B,SetTitle:K,GetWorkerById:F,showPopUp:D,SetShowPopUp:C,toDelete:A,SetToDelete:W,DeleteWorker:G}))}}),o.a.createElement(m.a,{path:"/:id",exact:!0,render:function(e){return o.a.createElement(h,Object.assign({},e,{AddPlaceCallback:I,SetTitle:K,GetWorkerById:F,showPopUp:D,SetShowPopUp:C,toDelete:A,SetToDelete:W,DeletePlace:M}))}}),o.a.createElement(m.a,{path:"/:id/:workplace",exact:!0,render:function(e){return o.a.createElement(y,Object.assign({},e,{AddWeekCallback:H,ArchiveWeek:x,SetTitle:K,GetWorkerById:F,GetWorkplaceFrom:V,showPopUp:D,SetShowPopUp:C,toDelete:A,SetToDelete:W,DeleteWorker:G,DeleteWeek:X}))}}),"/>",o.a.createElement(m.a,{path:"/:id/:workplace/:week",exact:!0,render:function(e){return o.a.createElement(O,Object.assign({},e,{SetTitle:K,SetWeek:L}))}})),o.a.createElement(m.a,{render:function(e){return o.a.createElement(v,Object.assign({},e,{CreateBackup:U,build:"/workers",workers:a}))}})));function z(e){for(var t,a=e.split(" "),n=[],o=0;o<a.length;o++){for(var c=a[o],r="",l=0;l<c.length;l++)0===l&&1===(t=c[l]).length&&t.match(/[a-z]/i)?r+=c[l].toUpperCase():r+=c[l];n.push(r)}return n.join(" ")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47),a(48);r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.5ab5b9bc.chunk.js.map
(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=a(6),m=a(17),s=r.a.createContext({people:[],setPeople:function(){}}),u=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(m.a)(a,2),c={people:l[0],setPeople:l[1]};return r.a.createElement(s.Provider,{value:c},t)},i=a(1),p=(a(23),function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"nav"},r.a.createElement(o.c,{to:"/",exact:!0,className:"nav-item",activeClassName:"active"},"Home"),r.a.createElement(o.c,{to:"/people",className:"nav-item",activeClassName:"active"},"People")))}),d=function(){return r.a.createElement("div",{className:"homepage"},"Homepage")},E=function(){return r.a.createElement("div",{className:"notFoundPage"},"Page not found")},h=function(){return e="",fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status));return e.json()}));var e,t},f=a(9),b=a.n(f),v=function(e){var t,a=e.person,l=e.name,c=e.paramsName,m=Object(i.h)().search,u=Object(n.useContext)(s).people,p=a.name.toLowerCase(),d=u.some((function(e){return l===e.name}));return r.a.createElement(o.b,{to:"/people/".concat((t=l,t?t.toLowerCase().split(" ").join("-")+"-".concat(a.born):"")).concat(m),className:b()("name-link",{blue:c===p&&"m"===a.sex},{red:c===p&&"f"===a.sex},{bold:l&&c===l.toLowerCase()&&!d})},l)},g=function(e){var t=e.person,a=Object(i.i)(),n=function(){if(a.person){var e=a.person.split("-");return e.slice(0,e.length-1).join(" ")}return""}();return r.a.createElement("tr",{className:b()({row:n===t.name.toLowerCase()})},r.a.createElement("td",{className:"person-name"},r.a.createElement(v,{person:t,name:t.name,paramsName:n})),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null,r.a.createElement(v,{person:t,name:t.mother,paramsName:n})),r.a.createElement("td",null,r.a.createElement(v,{person:t,name:t.father,paramsName:n})))},N=function(e){var t=e.people,a=Object(i.h)(),n=Object(i.g)(),l=new URLSearchParams(a.search),c=l.get("name"),o=l.get("sortBy"),m=function(e){var t,a=null===(t=e.currentTarget.attributes.getNamedItem("data-name"))||void 0===t?void 0:t.value;a&&(l.set("sortBy",a),n.push("?".concat(l.toString())))},s=c?t.filter((function(e){return e.name.toLowerCase().includes(c)||e.fatherName&&e.fatherName.toLowerCase().includes(c)||e.motherName&&e.motherName.toLowerCase().includes(c)})):t;return o&&["name","sex","born","died"].some((function(e){return e===o}))&&(s=s.sort((function(e,t){return"name"===o||"sex"===o?e[o].localeCompare(t[o]):"born"===o||"died"===o?e[o]-t[o]:0}))),r.a.createElement("div",null,r.a.createElement("table",{className:"peopleTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{"data-name":"name",onClick:m},"Name ","name"===o&&"*",r.a.createElement("img",{alt:"img",src:"../../../public/images/sort_both.png"})),r.a.createElement("td",{"data-name":"sex",onClick:m},"Sex ","sex"===o&&"*",r.a.createElement("img",{alt:"img"})),r.a.createElement("td",{"data-name":"born",onClick:m},"Born ","born"===o&&"*",r.a.createElement("img",{alt:"img"})),r.a.createElement("td",{"data-name":"died",onClick:m},"Died ","died"===o&&"*",r.a.createElement("img",{alt:"img"})),r.a.createElement("td",null,"Mother"),r.a.createElement("td",null,"Father"))),r.a.createElement("tbody",null,s.map((function(e){return r.a.createElement(g,{person:e,key:e.name})})))))},C=function(){var e=Object(i.h)(),t=new URLSearchParams(e.search),a=t.get("name"),n=Object(i.g)();return r.a.createElement("form",{className:"form"},r.a.createElement("input",{value:a||"",type:"text",placeholder:"filter",onChange:function(e){e.target.value?t.set("name",e.target.value):t.delete("name"),n.push("?".concat(t.toString()))}}))},j=function(){var e=Object(n.useContext)(s),t=e.people,a=e.setPeople;return Object(n.useEffect)((function(){h().then((function(e){var t=e.map((function(e){return e.mother=e.motherName,e.father=e.fatherName,e}));a(t)}))}),[a]),r.a.createElement("div",{className:"peoplePage"},r.a.createElement(C,null),r.a.createElement(N,{people:t}))},x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"People table"),r.a.createElement(p,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:d}),r.a.createElement(i.b,{path:"/people/:person?",component:j}),r.a.createElement(i.a,{path:"/home",to:"/"}),r.a.createElement(i.a,{path:"/react_people-table-basics",to:"/"}),r.a.createElement(E,null)))};c.a.render(r.a.createElement(o.a,null,r.a.createElement(u,null,r.a.createElement(x,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a880f3a4.chunk.js.map
(this.webpackJsonplist_counter=this.webpackJsonplist_counter||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),u=n(6),l=n.n(u),o=(n(13),n(2)),r=n(7);n(5);var i=function(t){var e=t.count,n=t.item,a=t.minus,u=t.plus,l=t.reset,o=t.deleteRow;return c.a.createElement("div",{className:"list-group-item"},c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return a(n)}},"-1"),c.a.createElement("span",null,e),c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return u(n)}},"+1"),c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return l(n)}},"Reset"),c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return o(n)}},"Delete"))};var s=function(){var t=Object(a.useState)([0]),e=Object(r.a)(t,2),n=e[0],u=e[1],l=function(t){var e=Object(o.a)(n);e[t]-=1,u(e)},s=function(t){var e=Object(o.a)(n);e[t]+=1,u(e)},m=function(t){var e=Object(o.a)(n);e[t]=0,u(e)},b=function(t){u(n.filter((function(e,n){return n!==t})))};return c.a.createElement("div",null,c.a.createElement("h3",null,"AddCounters"),c.a.createElement("h6",null,"You can add only 10 counters!"),n.map((function(t,e){return c.a.createElement(i,{count:t,key:e,item:e,minus:l,plus:s,reset:m,deleteRow:b})})),c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"btn",onClick:function(){u([].concat(Object(o.a)(n),[0]))},disabled:n.length>9},"Add Counter"),c.a.createElement("button",{type:"button",className:"btn",onClick:function(){u(n.map((function(t){return 0})))}},"Reset all"),c.a.createElement("button",{type:"button",className:"btn",onClick:function(){u([0])}},"Delete all")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))},5:function(t,e,n){},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.420f80a4.chunk.js.map
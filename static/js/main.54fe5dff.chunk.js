(this.webpackJsonpeltropy=this.webpackJsonpeltropy||[]).push([[0],{30:function(t,e,n){t.exports={Card:"Card_Card__1k9eP",outer:"Card_outer__3vyfb"}},45:function(t,e,n){t.exports={header:"header_header__2eggW"}},65:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(0),c=n.n(a),o=n(18),i=n.n(o),s=(n(65),n(43)),u=n(44),l=n(50),j=n(49),d=n(22),b=n(5),m=n(45),h=n.n(m),p=function(){return Object(r.jsxs)("div",{className:h.a.header,children:[Object(r.jsx)("img",{src:"https://png.pngtree.com/png-clipart/20190516/original/pngtree-palm-coconut-tree-logo-icon-png-image_4139415.jpg",alt:"logo"}),Object(r.jsx)("h1",{children:"TravClan React Test"})]})},O=n(20),g=n.n(O),x=n(25),f=n(17),v=n(110),k=n(111),C=n(26),y=n.n(C),B=n(30),E=n.n(B),P=function(t){for(var e=t.totalCustomers,n=t.customerPerPage,a=t.onPageClick,c=t.currentPage,o=Math.ceil(e/n),i=[],s=1;s<=o;s++)i.push(s);return Object(r.jsx)("div",{className:"paginationContainer",children:i.map((function(t,e){return Object(r.jsx)("p",{className:"pageNumber ".concat(t===c?"selected":""),onClick:function(){return a(t)},children:t},e)}))})},N=n(112),_=n(109),S=n(106),F=n(108),I=function(t){var e,n=t.customer,c=(t.index,Object(a.useState)(!1)),o=Object(f.a)(c,2),i=o[0],s=o[1],u=Object(S.a)({root:{maxWidth:400,margin:"auto",marginBottom:12,padding:8,borderRadius:16,paddingBottom:20,background:"#BE6E46",textDecoration:"none"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},outline:{border:"none",borderBottom:"1px solid rgba(0,0,0,.12)",marginBottom:20}})();return console.log(n),Object(r.jsxs)(N.a,{className:u.root,variant:"outlined",children:[Object(r.jsxs)(F.a,{component:d.b,to:"/customer/".concat(n.id),children:[Object(r.jsx)(_.a,{variant:"h4",children:" Customer Info "}),Object(r.jsx)("hr",{className:u.outline}),n.avatarUrl&&Object(r.jsx)("img",{src:n.avatarUrl,alt:"avatar"}),(n.firstname||n.lastname)&&Object(r.jsxs)("h2",{children:[n.firstname," ",n.lastname]}),n.email&&Object(r.jsxs)("p",{children:["Email: ",n.email]}),n.phone&&Object(r.jsxs)("p",{children:["Phone: ",n.phone]})]}),n.bids&&n.bids.length>0&&Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[" Highest bid: ",(e=n.bids,e.sort((function(t,e){return t.amount-e.amount})).reverse()[0].amount)," "]}),i&&Object(r.jsxs)("p",{children:[" Minimum bid: ",function(t){return t.sort((function(t,e){return t.amount-e.amount}))[0].amount}(n.bids)," "]}),Object(r.jsx)(v.a,{color:"primary",onClick:function(){return s(!i)},variant:"contained",children:" Toggle min bid "})]})]})},T=function(){var t=Object(a.useState)(!1),e=Object(f.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)([]),i=Object(f.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(1),j=Object(f.a)(l,2),d=j[0],b=j[1],m=Object(a.useState)(5),h=Object(f.a)(m,2),p=h[0],O=(h[1],function(){var t=Object(x.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.next=3,y.a.get("https://intense-tor-76305.herokuapp.com/merchants");case 3:e=t.sent,setTimeout((function(){u(e.data),c(!1)}),2e3);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),C=d*p,B=C-p,N=s.slice(B,C);return Object(r.jsxs)("div",{className:E.a.outer,children:[Object(r.jsx)("h1",{children:"Customer Information"}),Object(r.jsx)("h2",{children:"Fetch a list from an API and display it"}),Object(r.jsx)("div",{className:E.a.button,children:Object(r.jsx)(v.a,{style:{background:"#BE6E46"},onClick:O,variant:"contained",color:"primary",children:"Fetch Data"})}),n&&Object(r.jsx)("div",{style:{height:"400px",position:"relative"},children:Object(r.jsx)("div",{style:{margin:0,position:"absolute",top:"50%",left:"50%",transform:"translateY(-50%) translateX(-50%)"},children:Object(r.jsx)(k.a,{style:{color:"#BE6E46"}})})}),s.length>0&&Object(r.jsx)(P,{totalCustomers:s.length,customerPerPage:p,onPageClick:b,currentPage:d}),Object(r.jsx)("div",{className:E.a.inner,children:N&&N.map((function(t,e){return Object(r.jsx)(I,{customer:t,index:e})}))})]})},w=function(){var t=Object(b.f)().customerId,e=Object(a.useState)({}),n=Object(f.a)(e,2),o=n[0],i=n[1],s=function(){var t=Object(x.a)(g.a.mark((function t(e){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://intense-tor-76305.herokuapp.com/merchants/".concat(e));case 2:n=t.sent,i(n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=Object(S.a)({root:{maxWidth:400,margin:"auto",marginBottom:12,padding:8,borderRadius:16,paddingBottom:20,background:"#BE6E46"}})();return Object(a.useEffect)((function(){s(t)}),[]),Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(v.a,{variant:"contained",href:"/",style:{background:"#BE6E46",marginLeft:12,color:"#fff"},children:"Go Back"}),Object(r.jsx)(N.a,{variant:"outlined",className:u.root,children:o&&o.bids&&o.bids.map((function(t,e){return Object(r.jsx)("div",{children:t.carTitle},e)}))})]})},D=(n(90),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(p,{}),Object(r.jsx)("hr",{}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{path:"/customer/:customerId",children:Object(r.jsx)(w,{})}),Object(r.jsx)(b.a,{path:"/",children:Object(r.jsx)(T,{})})]})]})})}}]),n}(a.Component)),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root")),L()}},[[91,1,2]]]);
//# sourceMappingURL=main.54fe5dff.chunk.js.map
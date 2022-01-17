(this["webpackJsonpcrypto-mart"]=this["webpackJsonpcrypto-mart"]||[]).push([[0],{38:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var c,a,r,i,s,o,j,l,b,d,u,h,p,O=t(1),f=t.n(O),m=t(28),x=t.n(m),g=(t(38),t(33)),v=t(5),w=t.n(v),y=t(7),k=t(6),C=t(2),N=t(3),_=t(29),F=t.n(_),S={legend:{display:!1},gridLines:{display:!1},maintainAspectRatio:!1,responsive:!1,hover:!1,scales:{xAxes:[{type:"time",distribution:"linear",display:!1}],yAxes:[{display:!1}]}},B=t(0),D=function(e){var n=e.data,t=Object(O.useRef)(),c=n;return Object(O.useEffect)((function(){t&&t.current&&new F.a(t.current,{type:"line",data:{datasets:[{label:"# of Votes",data:c,borderWidth:2,borderColor:"rgba(128, 117, 64, 0.8)",pointRadius:0,hover:!1}]},options:S})}),[c]),Object(B.jsx)("div",{children:Object(B.jsx)("canvas",{ref:t,id:"myChart",width:125,height:30})})},z=t(8),R=t.n(z),E=function(e){var n=Object(O.useState)([]),t=Object(k.a)(n,2),c=t[0],a=t[1],r=Object(O.useState)(!0),i=Object(k.a)(r,2),s=i[0],o=i[1];Object(O.useEffect)((function(){var n=function(){var n=Object(y.a)(w.a.mark((function n(){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.a.get("https://api.coingecko.com/api/v3/coins/".concat(e.id,"/market_chart/"),{params:{vs_currency:"cad",days:"1"}});case 2:t=n.sent,a(t.data.prices.map((function(e){return{t:e[0],y:e[1]}}))),o(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e.id]);return s?Object(B.jsx)("div",{children:"Loading..."}):Object(B.jsx)("div",{className:"coinlist",children:Object(B.jsx)(D,{data:c})})},L=N.a.td(c||(c=Object(C.a)(["\n    width: 14vw;\n"]))),A=N.a.i(a||(a=Object(C.a)(["\n    color: #807540;\n"]))),I=Object(N.a)(L)(r||(r=Object(C.a)(["\n    width: 20vw;\n"]))),T=Object(N.a)(L)(i||(i=Object(C.a)(["\n    text-transform: uppercase;\n"]))),P=N.a.button(s||(s=Object(C.a)(["\n    font-size: 11px;\n    width: 55px;\n    margin: 3px 5px 0;\n"]))),W=N.a.img(o||(o=Object(C.a)(["\n    max-width: 33px;\n\n"])));function q(e){return Object(B.jsxs)("tr",{children:[Object(B.jsx)(L,{children:Object(B.jsx)(W,{src:e.image,alt:"#"})}),Object(B.jsx)(L,{children:e.name}),Object(B.jsx)(T,{children:e.ticker}),Object(B.jsxs)(L,{children:["$",e.price]}),Object(B.jsxs)(L,{className:e.priceChange24h<0?"text-danger mr-2":"text-success",children:[e.priceChange24h<0?Object(B.jsx)("i",{className:"fas fa-sort-down align-top mr-1"}):Object(B.jsx)("i",{className:"fas fa-sort-up align-bottom mr-1"}),e.priceChange24h,"%"]}),Object(B.jsx)(L,{children:Object(B.jsx)(E,{name:e.name,id:e.id,priceChange24h:e.priceChange24h},e.key)}),Object(B.jsx)(L,{children:e.showBalance?e.balance:Object(B.jsx)("div",{children:Object(B.jsx)(A,{className:"fas fa-eye-slash"})})}),Object(B.jsx)(I,{children:Object(B.jsxs)("form",{action:"#",method:"POST",children:[Object(B.jsx)(P,{className:"btn btn-secondary",onClick:function(n){n.preventDefault(),e.transaction(!0,e.tickerId)},children:"Buy"}),Object(B.jsx)(P,{className:"btn btn-secondary",onClick:function(n){e.balance>0&&!0===e.showBalance?(n.preventDefault(),e.transaction(!1,e.tickerId)):n.preventDefault()},children:"Sell"})]})})]})}var M,J,U,H,V,$,G,K,Q,X=N.a.table(j||(j=Object(C.a)(["\n    font-size: 1rem;\n    color: #E2DED7;\n"]))),Y=(N.a.button(l||(l=Object(C.a)(["\n  height: 30px;\n"]))),N.a.i(b||(b=Object(C.a)(["\n  font-size: 1.12rem;\n  color: #807540;\n"]))),N.a.tr(d||(d=Object(C.a)(["\n  font-size: 1rem; \n  font-family: 'Nunito', sans-serif;\n  color: #807540;\n  "])))),Z=N.a.form(u||(u=Object(C.a)(["\n"]))),ee=N.a.input(h||(h=Object(C.a)(["\n    padding-left: 10px;\n    width: 150px;\n    height: 30px;\n    border-radius: 4px;\n    border: none;\n    background-image: linear-gradient(\n    -225deg,\n    #78744C 0%,\n    #807540 40%,\n    #828152 100%\n\n    );\n "]))),ne=N.a.th(p||(p=Object(C.a)(["\n\n"])));function te(e){var n=Object(O.useState)(""),t=Object(k.a)(n,2),c=t[0],a=t[1],r=e.coinData.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"coin-search",children:Object(B.jsx)(Z,{children:Object(B.jsx)(ee,{className:"coin-input",type:"text",placeholder:"Search",onChange:function(e){a(e.target.value)}})})}),Object(B.jsxs)(X,{className:"table table-dark",children:[Object(B.jsx)("thead",{children:Object(B.jsxs)(Y,{children:[Object(B.jsx)(ne,{children:"Token"}),Object(B.jsx)(ne,{children:"Name"}),Object(B.jsx)(ne,{children:"Symbol"}),Object(B.jsx)(ne,{children:Object(B.jsx)("div",{children:"Price"})}),Object(B.jsx)(ne,{children:"24h"}),Object(B.jsx)(ne,{children:"History"}),Object(B.jsx)(ne,{children:"Balance"}),Object(B.jsx)(ne,{children:"Actions"})]})}),Object(B.jsx)("tbody",{children:r.map((function(n){var t=n.key,c=n.id,a=n.image,r=n.name,i=n.ticker,s=n.price,o=n.priceChange24h,j=n.balance,l=n.prices;return Object(B.jsx)(q,{id:c,handleRefresh:e.handleRefresh,transaction:e.transaction,image:a,name:r,ticker:i,showBalance:e.showBalance,balance:j,price:s,priceChange24h:o,tickerId:t,prices:l},t)}))})]})]})}var ce=N.a.tr(M||(M=Object(C.a)(["\n    justify-content: center;\n    flex-direction: row;\n"]))),ae=N.a.td(J||(J=Object(C.a)(["\n    width: 23vw;\n"]))),re=Object(N.a)(ae)(U||(U=Object(C.a)(["\n    width: 63vw;\n"]))),ie=N.a.i(H||(H=Object(C.a)(["\n    font-size: 3rem;\n    color: #807540;\n"]))),se=N.a.i(V||(V=Object(C.a)(["\n    font-size: 2.6rem;\n    color: #807540;\n"]))),oe=N.a.i($||($=Object(C.a)(["\n    margin-right: 20px;\n    color: #807540;\n"]))),je=N.a.div(G||(G=Object(C.a)(["\n    min-width: 250px;\n    font-size: 1.5rem;\n    verticle-align: middle;\n"]))),le=N.a.button(K||(K=Object(C.a)(["\n    margin: 0 8px;\n"]))),be=Object(N.a)(le)(Q||(Q=Object(C.a)(["\n    justify-content: center;\n"]))),de=Intl.NumberFormat("en-US",{style:"currency",currency:"CAD"});function ue(e){var n="\xa0";return n=e.showBalance?Object(B.jsx)(B.Fragment,{children:de.format(e.amount)}):Object(B.jsx)("div",{children:Object(B.jsx)(oe,{className:"fas fa-eye-slash"})}),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(je,{children:n}),Object(B.jsxs)(ce,{children:[Object(B.jsx)(ae,{}),Object(B.jsxs)(re,{children:[Object(B.jsx)(be,{onClick:e.setBalanceDisplay,className:"btn",children:Object(B.jsx)(se,{className:"fas fa-wallet"})}),Object(B.jsx)(le,{className:"btn",onClick:e.loadWallet,children:Object(B.jsx)(ie,{className:"fas fa-money-bill-alt"})})]}),Object(B.jsx)(ae,{})]})]})}var he,pe,Oe,fe,me=t(10),xe=t(11),ge=t(13),ve=t(12),we=t.p+"static/media/logo.428ec8e8.png",ye=function(e){Object(ge.a)(t,e);var n=Object(ve.a)(t);function t(e){var c;return Object(me.a)(this,t),(c=n.call(this,e)).componentDidMount=Object(y.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.createElement("script")).src="https://www.livecoinwatch.com/static/lcw-widget.js",n.async=!0,c._ref.current.appendChild(n),console.log("Ticker Widget header: "+c._ref+"and"+c._ref.current+"and"+n);case 5:case"end":return e.stop()}}),e)}))),c._ref=f.a.createRef(),c}return Object(xe.a)(t,[{key:"render",value:function(){return Object(B.jsx)("div",{className:"livecoinwatch-widget-5",ref:this._ref,"lcw-base":"USD","lcw-color-tx":"#ffffff","lcw-marquee-1":"coins","lcw-marquee-2":"movers","lcw-marquee-items":"10"})}}]),t}(O.Component),ke=N.a.img(he||(he=Object(C.a)(["\n    height: 8rem;\n    margin-left: 20px;\n    margin-top: 10px;\n    pointer-events: none;\n"]))),Ce=N.a.header(pe||(pe=Object(C.a)(["\n    background-color: #303030;\n    min-height: 10vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    color: #807540;\n"]))),Ne=N.a.h1(Oe||(Oe=Object(C.a)(["\n    font-family: 'Nunito', sans-serif;\n    font-size: 3.5rem;\n    fold-weight: bold;\n    min-width: 300px;\n"]))),_e=function(e){Object(ge.a)(t,e);var n=Object(ve.a)(t);function t(){return Object(me.a)(this,t),n.apply(this,arguments)}return Object(xe.a)(t,[{key:"render",value:function(){return Object(B.jsxs)(Ce,{children:[Object(B.jsx)(ke,{src:we,alt:"Rect Logo"}),Object(B.jsx)(Ne,{children:"CryptoMart"}),Object(B.jsx)("br",{}),Object(B.jsx)(ye,{})]})}}]),t}(O.Component),Fe=(t(62),t(63),N.a.div(fe||(fe=Object(C.a)(["\n    text-align: center;\n    background-color: #303030;\n    color: #cccccc;\n"])))),Se=function(e){return parseFloat(Number(e).toFixed(4))};var Be=function(e){var n=Object(O.useState)(1e4),t=Object(k.a)(n,2),c=t[0],a=t[1],r=Object(O.useState)(!1),i=Object(k.a)(r,2),s=i[0],o=i[1],j=Object(O.useState)([]),l=Object(k.a)(j,2),b=l[0],d=l[1],u=function(){var e=Object(y.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"cad",ids:""}});case 2:n=e.sent,t=n.data.slice(0,30).map((function(e){return{key:e.id,id:e.id,image:e.image,name:e.name,ticker:e.symbol,balance:0,price:Se(e.current_price),priceChange24h:parseFloat(Number(e.price_change_percentage_24h).toFixed(2))}})),d(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(O.useEffect)((function(){0===b.length&&u()}));var h=function(){var e=Object(y.a)(w.a.mark((function e(){var n,t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"cad",ids:""}});case 2:n=e.sent,t=0,c=n.data.slice(0,30).map((function(e){var n=t;return t++,{key:e.id,image:e.image,name:e.name,ticker:e.symbol,balance:b[n].balance,price:Se(e.current_price),priceChange24h:parseFloat(Number(e.price_change_percentage_24h).toFixed(2))}})),d(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(Fe,{className:"App",children:[Object(B.jsx)(_e,{}),Object(B.jsx)(ue,{amount:c,showBalance:s,loadWallet:function(){!0===s&&a((function(e){return e+1e3}))},setBalanceDisplay:function(){o((function(e){return!e}))}}),Object(B.jsx)(te,{coinData:b,showBalance:s,transaction:function(e,n){var t=e?1:-1,r=b.map((function(r){var i=Object(g.a)({},r);return n===r.key&&(c>i.price&&!0===s?(i.balance+=t,a((function(e){return e-t*i.price}))):e||(i.balance+=t,a((function(e){return e-t*i.price})))),i}));d(r)},handleRefresh:h})]})},De=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};x.a.render(Object(B.jsx)(f.a.StrictMode,{children:Object(B.jsx)(Be,{})}),document.getElementById("root")),De()}},[[66,1,2]]]);
//# sourceMappingURL=main.09f121f1.chunk.js.map
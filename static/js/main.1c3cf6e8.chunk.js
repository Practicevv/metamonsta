(this.webpackJsonpmetamonster=this.webpackJsonpmetamonster||[]).push([[0],{246:function(n,t){},255:function(n,t){},273:function(n,t){},275:function(n,t){},294:function(n,t){},295:function(n,t){},358:function(n,t){},360:function(n,t){},393:function(n,t){},395:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},409:function(n,t){},411:function(n,t){},424:function(n,t){},436:function(n,t){},439:function(n,t){},444:function(n,t){},452:function(n,t){},461:function(n,t){},463:function(n,t){},533:function(n,t,e){},534:function(n,t,e){"use strict";e.r(t);var c,r,a,o,i,s,l,u,d,p,j,b,x,f,h,O,g=e(1),m=e(85),y=e.n(m),C=e(16),v=e.n(C),w=e(43),A=e(69),E=e(14),S=e(58),N=e(68),T=e.n(N),_=e(220),k=e.n(_),D=e(70),M=e(221),I=e(19),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},n),{},{account:t.payload.account});default:return n}},L={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},F=Object(D.b)({blockchain:K,data:U}),P=[M.a],z=Object(D.c)(D.a.apply(void 0,P)),W=Object(D.d)(F,z),B=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},H=function(){return function(){var n=Object(w.a)(v.a.mark((function n(t){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,W.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(B("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},Y=function(n){return{type:"CONNECTION_FAILED",payload:n}},Q=function(n){return function(){var t=Object(w.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(H());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},q=e(15),G=q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),J=(q.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),q.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"])))),X=q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z=q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),$=q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nn=(q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),tn=(q.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3)),en=q.a.button(j||(j=Object(E.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--primary-text);\n  width: 100px;\n  cursor: pointer;\n\n  }\n"]))),cn=q.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=q.a.div(x||(x=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),an=q.a.img(f||(f=Object(E.a)(["\n  width: 800px;\n  @media (min-width: 767px) {\n    width: 500px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),on=q.a.img(h||(h=Object(E.a)(["\n\n  border-radius: 10%;\n  width: 150px;\n  @media (min-width: 600px) {\n    width: 350px;\n    height: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n    height: 400px\n  }\n  transition: width 0.5s;\n"]))),sn=q.a.a(O||(O=Object(E.a)(["\n  color: var(--primary);\n  text-decoration: none;\n"])));var ln=function(){var n,t,e=Object(S.b)(),c=Object(S.c)((function(n){return n.blockchain})),r=Object(S.c)((function(n){return n.data})),a=Object(g.useState)(!1),o=Object(A.a)(a,2),i=o[0],s=o[1],l=Object(g.useState)("Number to buy"),u=Object(A.a)(l,2),d=u[0],p=u[1],j=Object(g.useState)(1),b=Object(A.a)(j,2),x=b[0],f=b[1],h=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(A.a)(h,2),m=O[0],y=O[1],C=function(){""!==c.account&&null!==c.smartContract&&e(H(c.account))},E=function(){var n=Object(w.a)(v.a.mark((function n(){var t,e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,y(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(g.useEffect)((function(){E()}),[]),Object(g.useEffect)((function(){C()}),[c.account]),Object(tn.jsx)(G,{children:Object(tn.jsxs)(Z,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(tn.jsx)(an,{alt:"logo",src:"/config/images/logo512.png"}),Object(tn.jsx)(J,{}),Object(tn.jsxs)(rn,{flex:1,style:{padding:24},test:!0,children:[Object(tn.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(on,{alt:"example",src:"/config/images/example2.png"})}),Object(tn.jsx)(V,{}),Object(tn.jsxs)(Z,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--bg-background)",padding:24,borderRadius:24},children:[Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(tn.jsxs)(sn,{target:"_blank",href:m.SCAN_LINK,children:["CA : ",(n=m.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)]})}),Object(tn.jsx)(J,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(tn.jsx)(tn.Fragment,{children:Object(tn.jsx)($,{style:{textAlign:"center",color:"var(--primary)"},children:"The sale has ended."})}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)($,{style:{textAlign:"center",color:"var(--primary)",fontSize:50},children:"1 MonstaEgg costs .2 BNB Excluding gas fee"}),Object(tn.jsx)(J,{}),""===c.account||null===c.smartContract?Object(tn.jsxs)(Z,{ai:"center",jc:"center",children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:25},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(en,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(w.a)(v.a.mark((function n(t){var e,c,r,a,o,i,s,l,u;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return T.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(u=new T.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(Q(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(Y("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(Y("Something went wrong."));case 31:n.next=34;break;case 33:t(Y("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),C()},children:"CONNECT"}),""!==c.errorMsg?Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(J,{}),Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--primary)"},children:c.errorMsg})]}):null]}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--primary)",fontSize:25},children:d}),Object(tn.jsx)(X,{}),Object(tn.jsxs)(Z,{ai:"center",jc:"center",fd:"row",children:[Object(tn.jsx)(cn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=x-1;n<1&&(n=1),f(n)}()},children:"-"}),Object(tn.jsx)(X,{}),Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--primary)",fontSize:30},children:x}),Object(tn.jsx)(X,{}),Object(tn.jsx)(cn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=x+1;n>20&&(n=20),f(n)}()},children:"+"})]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(Z,{ai:"center",jc:"center",fd:"row",children:Object(tn.jsx)(en,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=m.WEI_COST,t=String(n*x);console.log("Cost: ",t),p("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(x).send({to:m.CONTRACT_ADDRESS,from:c.account,value:t}).once("error",(function(n){console.log(n),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),p("WOW, the ".concat(m.NFT_NAME," is yours! View on Metamask or TofuNFT! ").concat(m.MARKETPLACE_LINK)),s(!1),e(H(c.account))}))}(),C()},children:i?"BUSY":"Buy"})}),Object(tn.jsx)(J,{})]})]}),Object(tn.jsx)(X,{})]}),Object(tn.jsx)(V,{}),Object(tn.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(on,{alt:"example",src:"/config/images/example1.png"})})]}),Object(tn.jsx)(X,{}),Object(tn.jsxs)(Z,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:20},children:["Please make sure you are connected to the right network (",m.NETWORK.NAME," Mainnet) and the correct address."]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--primary)"}}),Object(tn.jsx)(J,{})]})]})})},un=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),a(n),o(n)}))};e(533);y.a.render(Object(tn.jsx)(S.a,{store:W,children:Object(tn.jsx)(ln,{})}),document.getElementById("root")),un()}},[[534,1,2]]]);
//# sourceMappingURL=main.1c3cf6e8.chunk.js.map
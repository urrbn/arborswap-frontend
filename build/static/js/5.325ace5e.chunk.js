(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[5],{845:function(e,t,n){"use strict";var i,a=n(6),c=n(41),r=n(4),o=Object(r.e)(c.a)(i||(i=Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o},930:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var i=n(32),a=n(5),c=n(15),r=n(21),o=n(10),l=n(6),s=n(0),d=n(4),u=n(7),b=n(9),j=n(3),O=n(60),v=n(19),x=n(37),m=n(192),p=n(216),h=n(390),C=n(234),f=n(29),y=n(162),R=n(99),I=n(62),E=n(39),T=n(25),g=n(63),U=n(51),w=n(279),Y=n(105),N=n(845),B=n(40),_=n(174);var S=n(61),k=n(67),P=n(233),A=n(36),D=n(116),L=n(241),q=n(118),Q=n(98),V=n(346);function z(){return Object(A.c)((function(e){return e.burn}))}var M,F=n(50),H=n(259),W=n(1),G=d.e.div(M||(M=Object(l.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function J(e){var t,n,l,d,M,J,K,X,Z,$,ee,te,ne,ie,ae,ce,re,oe,le,se=e.history,de=e.match.params,ue=de.currencyIdA,be=de.currencyIdB,je=null!==(t=Object(g.c)(ue))&&void 0!==t?t:void 0,Oe=null!==(n=Object(g.c)(be))&&void 0!==n?n:void 0,ve=Object(T.a)(),xe=ve.account,me=ve.chainId,pe=ve.library,he=Object(s.useMemo)((function(){return[Object(S.b)(je,me),Object(S.b)(Oe,me)]}),[je,Oe,me]),Ce=Object(o.a)(he,2),fe=Ce[0],ye=Ce[1],Re=Object(v.b)().t,Ie=Object(F.e)(),Ee=z(),Te=Ee.independentField,ge=Ee.typedValue,Ue=function(e,t){var n,i,a,c,l,s=Object(T.a)(),d=s.account,u=s.chainId,j=z(),O=j.independentField,v=j.typedValue,x=Object(D.b)(e,t),m=Object(o.a)(x,2)[1],p=Object(Q.e)(null!==d&&void 0!==d?d:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(n=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],C=[Object(S.b)(e,u),Object(S.b)(t,u)],f=C[0],y=C[1],R=(a={},Object(r.a)(a,V.a.CURRENCY_A,f),Object(r.a)(a,V.a.CURRENCY_B,y),Object(r.a)(a,V.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),a),I=Object(L.a)(null===m||void 0===m?void 0:m.liquidityToken),E=m&&I&&h&&f&&b.e.greaterThanOrEqual(I.raw,h.raw)?new b.l(f,m.getLiquidityValue(f,I,h,!1).raw):void 0,g=m&&I&&h&&y&&b.e.greaterThanOrEqual(I.raw,h.raw)?new b.l(y,m.getLiquidityValue(y,I,h,!1).raw):void 0,U=(c={},Object(r.a)(c,V.a.CURRENCY_A,E),Object(r.a)(c,V.a.CURRENCY_B,g),c),w=new b.h("0","100");if(O===V.a.LIQUIDITY_PERCENT)w=new b.h(v,"100");else if(O===V.a.LIQUIDITY){if(null!==m&&void 0!==m&&m.liquidityToken){var Y=Object(q.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(w=new b.h(Y.raw,h.raw))}}else if(R[O]){var N=Object(q.a)(v,R[O]),B=U[O];N&&B&&!N.greaterThan(B)&&(w=new b.h(N.raw,B.raw))}var _,k,P=(l={},Object(r.a)(l,V.a.LIQUIDITY_PERCENT,w),Object(r.a)(l,V.a.LIQUIDITY,h&&w&&w.greaterThan("0")?new b.l(h.token,w.multiply(h.raw).quotient):void 0),Object(r.a)(l,V.a.CURRENCY_A,f&&w&&w.greaterThan("0")&&E?new b.l(f,w.multiply(E.raw).quotient):void 0),Object(r.a)(l,V.a.CURRENCY_B,y&&w&&w.greaterThan("0")&&g?new b.l(y,w.multiply(g.raw).quotient):void 0),l);return d||(_="Connect Wallet"),P[V.a.LIQUIDITY]&&P[V.a.CURRENCY_A]&&P[V.a.CURRENCY_B]||(_=null!==(k=_)&&void 0!==k?k:"Enter an amount"),{pair:m,parsedAmounts:P,error:_}}(null!==je&&void 0!==je?je:void 0,null!==Oe&&void 0!==Oe?Oe:void 0),we=Ue.pair,Ye=Ue.parsedAmounts,Ne=Ue.error,Be=function(){var e=Object(A.b)();return{onUserInput:Object(s.useCallback)((function(t,n){e(Object(V.b)({field:t,typedValue:n}))}),[e])}}(),_e=Be.onUserInput,Se=!Ne,ke=Object(s.useState)(!1),Pe=Object(o.a)(ke,2),Ae=Pe[0],De=Pe[1],Le=Object(s.useState)(!1),qe=Object(o.a)(Le,2),Qe=qe[0],Ve=qe[1],ze=Object(s.useState)(""),Me=Object(o.a)(ze,2),Fe=Me[0],He=Me[1],We=Object(w.a)(),Ge=Object(F.n)(),Je=Object(o.a)(Ge,1)[0],Ke=(Z={},Object(r.a)(Z,V.a.LIQUIDITY_PERCENT,Ye[V.a.LIQUIDITY_PERCENT].equalTo("0")?"0":Ye[V.a.LIQUIDITY_PERCENT].lessThan(new b.h("1","100"))?"<1":Ye[V.a.LIQUIDITY_PERCENT].toFixed(0)),Object(r.a)(Z,V.a.LIQUIDITY,Te===V.a.LIQUIDITY?ge:null!==(l=null===(d=Ye[V.a.LIQUIDITY])||void 0===d?void 0:d.toSignificant(6))&&void 0!==l?l:""),Object(r.a)(Z,V.a.CURRENCY_A,Te===V.a.CURRENCY_A?ge:null!==(M=null===(J=Ye[V.a.CURRENCY_A])||void 0===J?void 0:J.toSignificant(6))&&void 0!==M?M:""),Object(r.a)(Z,V.a.CURRENCY_B,Te===V.a.CURRENCY_B?ge:null!==(K=null===(X=Ye[V.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Xe=null===($=Ye[V.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new b.h("1")),Ze=Object(U.k)(null===we||void 0===we||null===(ee=we.liquidityToken)||void 0===ee?void 0:ee.address),$e=Object(s.useState)(null),et=Object(o.a)($e,2),tt=et[0],nt=et[1],it=Object(k.b)(Ye[V.a.LIQUIDITY],E.t),at=Object(o.a)(it,2),ct=at[0],rt=at[1];function ot(){return(ot=Object(c.a)(Object(a.a)().mark((function e(){var t,n,i,c,r,o,l;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ze&&we&&pe&&We){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=Ye[V.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Ze.nonces(xe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"Arbor LPs",version:"1",chainId:me,verifyingContract:we.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:xe,spender:E.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:We.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),pe.send("eth_signTypedData_v4",[xe,l]).then(u.splitSignature).then((function(e){nt({v:e.v,r:e.r,s:e.s,deadline:We.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&rt()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var lt=Object(s.useCallback)((function(e,t){return nt(null),_e(e,t)}),[_e]),st=Object(s.useCallback)((function(e){return lt(V.a.LIQUIDITY,e)}),[lt]),dt=Object(s.useCallback)((function(e){return lt(V.a.CURRENCY_A,e)}),[lt]),ut=Object(s.useCallback)((function(e){return lt(V.a.CURRENCY_B,e)}),[lt]),bt=Object(Y.d)();function jt(){return Ot.apply(this,arguments)}function Ot(){return Ot=Object(c.a)(Object(a.a)().mark((function e(){var t,n,c,o,l,s,d,u,j,v,x,m,p,h;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me&&pe&&xe&&We){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=Ye[V.a.CURRENCY_A],c=Ye[V.a.CURRENCY_B],n&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(o=Object(B.h)(me,pe,xe),t={},Object(r.a)(t,V.a.CURRENCY_A,Object(B.c)(n,Je)[0]),Object(r.a)(t,V.a.CURRENCY_B,Object(B.c)(c,Je)[0]),l=t,je&&Oe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=Ye[V.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=Oe===b.d,u=je===b.d||d,fe&&ye){e.next=16;break}throw new Error("could not wrap");case 16:if(ct!==k.a.APPROVED){e.next=20;break}u?(j=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],v=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,We.toHexString()]):(j=["removeLiquidity"],v=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,We.toHexString()]),e.next=25;break;case 20:if(null===tt){e.next=24;break}u?(j=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],v=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,tt.deadline,!1,tt.v,tt.r,tt.s]):(j=["removeLiquidityWithPermit"],v=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,tt.deadline,!1,tt.v,tt.r,tt.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(j.map((function(e){var t;return(t=o.estimateGas)[e].apply(t,Object(i.a)(v)).then(B.b).catch((function(t){console.error("estimateGas failed",e,v,t)}))})));case 27:if(x=e.sent,m=x.findIndex((function(e){return O.a.isBigNumber(e)})),-1!==m){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=j[m],h=x[m],Ve(!0),e.next=38,o[p].apply(o,Object(i.a)(v).concat([{gasLimit:h,gasPrice:Ie}])).then((function(e){var t,n;Ve(!1),bt(e,{summary:"Remove ".concat(null===(t=Ye[V.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===(n=Ye[V.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol)}),He(e.hash)})).catch((function(e){Ve(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)}))),Ot.apply(this,arguments)}function vt(){var e,t;return Object(W.jsxs)(x.a,{gap:"md",children:[Object(W.jsxs)(f.b,{align:"flex-end",children:[Object(W.jsx)(j.Bb,{fontSize:"24px",children:null===(e=Ye[V.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(W.jsxs)(f.c,{gap:"4px",children:[Object(W.jsx)(I.a,{currency:je,size:"24px"}),Object(W.jsx)(j.Bb,{fontSize:"24px",ml:"10px",children:null===je||void 0===je?void 0:je.symbol})]})]}),Object(W.jsx)(f.c,{children:Object(W.jsx)(j.a,{width:"16px"})}),Object(W.jsxs)(f.b,{align:"flex-end",children:[Object(W.jsx)(j.Bb,{fontSize:"24px",children:null===(t=Ye[V.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(W.jsxs)(f.c,{gap:"4px",children:[Object(W.jsx)(I.a,{currency:Oe,size:"24px"}),Object(W.jsx)(j.Bb,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(W.jsx)(j.Bb,{small:!0,textAlign:"left",pt:"12px",children:Re("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Je/100})})]})}function xt(){var e,t,n;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(f.b,{children:[Object(W.jsx)(j.Bb,{children:Re("%assetA%/%assetB% Burned",{assetA:null!==(e=null===je||void 0===je?void 0:je.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==t?t:""})}),Object(W.jsxs)(f.c,{children:[Object(W.jsx)(I.b,{currency0:je,currency1:Oe,margin:!0}),Object(W.jsx)(j.Bb,{children:null===(n=Ye[V.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),we&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(f.b,{children:[Object(W.jsx)(j.Bb,{children:Re("Price")}),Object(W.jsxs)(j.Bb,{children:["1 ",null===je||void 0===je?void 0:je.symbol," = ",fe?we.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(W.jsxs)(f.b,{children:[Object(W.jsx)("div",{}),Object(W.jsxs)(j.Bb,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?we.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]}),Object(W.jsx)(j.o,{disabled:!(ct===k.a.APPROVED||null!==tt),onClick:jt,children:Re("Confirm")})]})}var mt=Re("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=Ye[V.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===je||void 0===je?void 0:je.symbol)&&void 0!==ie?ie:"",amountB:null!==(ae=null===(ce=Ye[V.a.CURRENCY_B])||void 0===ce?void 0:ce.toSignificant(6))&&void 0!==ae?ae:"",symbolB:null!==(re=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==re?re:""}),pt=Object(s.useCallback)((function(e){lt(V.a.LIQUIDITY_PERCENT,e.toString())}),[lt]),ht=je===b.d||Oe===b.d,Ct=Boolean(me&&(je&&Object(b.p)(b.o[me],je)||Oe&&Object(b.p)(b.o[me],Oe))),ft=Object(s.useCallback)((function(e){be&&Object(_.a)(e)===be?se.push("/remove/".concat(Object(_.a)(e),"/").concat(ue)):se.push("/remove/".concat(Object(_.a)(e),"/").concat(be))}),[ue,be,se]),yt=Object(s.useCallback)((function(e){ue&&Object(_.a)(e)===ue?se.push("/remove/".concat(be,"/").concat(Object(_.a)(e))):se.push("/remove/".concat(ue,"/").concat(Object(_.a)(e)))}),[ue,be,se]),Rt=Object(s.useCallback)((function(){nt(null),Fe&&lt(V.a.LIQUIDITY_PERCENT,"0"),He("")}),[lt,Fe]),It=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(s.useState)((function(){return e})),a=Object(o.a)(i,2),c=a[0],r=a[1],l=Object(s.useRef)(),d=Object(s.useCallback)((function(e){r(e),l.current&&clearTimeout(l.current),l.current=setTimeout((function(){t(e),l.current=void 0}),n)}),[n,t]);return Object(s.useEffect)((function(){l.current&&(clearTimeout(l.current),l.current=void 0),r(e)}),[e]),[c,d]}(Number.parseInt(Ye[V.a.LIQUIDITY_PERCENT].toFixed(0)),pt),Et=Object(o.a)(It,2),Tt=Et[0],gt=Et[1],Ut=Object(j.Sb)(Object(W.jsx)(m.c,{title:Re("You will receive"),customOnDismiss:Rt,attemptingTxn:Qe,hash:Fe||"",content:function(){return Object(W.jsx)(m.a,{topContent:vt,bottomContent:xt})},pendingText:mt}),!0,!0,"removeLiquidityModal"),wt=Object(o.a)(Ut,1)[0];return Object(W.jsxs)(H.a,{children:[Object(W.jsxs)(C.a,{children:[Object(W.jsx)(C.b,{backTo:"/pool",title:Re("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===je||void 0===je?void 0:je.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==le?le:""}),subtitle:"To receive ".concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol),noConfig:!0}),Object(W.jsxs)(j.v,{children:[Object(W.jsxs)(x.a,{gap:"20px",children:[Object(W.jsxs)(f.b,{children:[Object(W.jsx)(j.Bb,{children:Re("Amount")}),Object(W.jsx)(j.o,{variant:"text",scale:"sm",onClick:function(){return De(!Ae)},children:Re(Ae?"Simple":"Detailed")})]}),!Ae&&Object(W.jsxs)(G,{children:[Object(W.jsxs)(j.Bb,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Ke[V.a.LIQUIDITY_PERCENT],"%"]}),Object(W.jsx)(j.wb,{name:"lp-amount",min:0,max:100,value:Tt,onValueChanged:function(e){return gt(Math.ceil(e))},mb:"16px"}),Object(W.jsxs)(j.P,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(W.jsx)(j.o,{variant:"tertiary",scale:"sm",onClick:function(){return lt(V.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(W.jsx)(j.o,{variant:"tertiary",scale:"sm",onClick:function(){return lt(V.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(W.jsx)(j.o,{variant:"tertiary",scale:"sm",onClick:function(){return lt(V.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(W.jsx)(j.o,{variant:"tertiary",scale:"sm",onClick:function(){return lt(V.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Ae&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(x.b,{children:Object(W.jsx)(j.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(W.jsxs)(x.a,{gap:"10px",children:[Object(W.jsx)(j.Bb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("You will receive")}),Object(W.jsxs)(R.c,{children:[Object(W.jsxs)(j.P,{justifyContent:"space-between",mb:"8px",children:[Object(W.jsxs)(j.P,{children:[Object(W.jsx)(I.a,{currency:je}),Object(W.jsx)(j.Bb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===je||void 0===je?void 0:je.symbol})]}),Object(W.jsx)(j.Bb,{small:!0,children:Ke[V.a.CURRENCY_A]||"-"})]}),Object(W.jsxs)(j.P,{justifyContent:"space-between",children:[Object(W.jsxs)(j.P,{children:[Object(W.jsx)(I.a,{currency:Oe}),Object(W.jsx)(j.Bb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(W.jsx)(j.Bb,{small:!0,children:Ke[V.a.CURRENCY_B]||"-"})]}),me&&(Ct||ht)?Object(W.jsx)(f.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:ht?Object(W.jsx)(N.a,{to:"/remove/".concat(je===b.d?b.o[me].address:ue,"/").concat(Oe===b.d?b.o[me].address:be),children:Re("Receive WBNB")}):Ct?Object(W.jsx)(N.a,{to:"/remove/".concat(je&&Object(b.p)(je,b.o[me])?"BNB":ue,"/").concat(Oe&&Object(b.p)(Oe,b.o[me])?"BNB":be),children:Re("Receive BNB")}):null}):null]})]})]}),Ae&&Object(W.jsxs)(j.m,{my:"16px",children:[Object(W.jsx)(p.a,{value:Ke[V.a.LIQUIDITY],onUserInput:st,onMax:function(){lt(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Xe,disableCurrencySelect:!0,currency:null===we||void 0===we?void 0:we.liquidityToken,pair:we,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(W.jsx)(x.b,{children:Object(W.jsx)(j.d,{width:"24px",my:"16px"})}),Object(W.jsx)(p.a,{hideBalance:!0,value:Ke[V.a.CURRENCY_A],onUserInput:dt,onMax:function(){return lt(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Xe,currency:je,label:Re("Output"),onCurrencySelect:ft,id:"remove-liquidity-tokena"}),Object(W.jsx)(x.b,{children:Object(W.jsx)(j.a,{width:"24px",my:"16px"})}),Object(W.jsx)(p.a,{hideBalance:!0,value:Ke[V.a.CURRENCY_B],onUserInput:ut,onMax:function(){return lt(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Xe,currency:Oe,label:Re("Output"),onCurrencySelect:yt,id:"remove-liquidity-tokenb"})]}),we&&Object(W.jsxs)(x.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(W.jsx)(j.Bb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("Prices")}),Object(W.jsxs)(R.c,{children:[Object(W.jsxs)(j.P,{justifyContent:"space-between",children:[Object(W.jsxs)(j.Bb,{small:!0,color:"textSubtle",children:["1 ",null===je||void 0===je?void 0:je.symbol," ="]}),Object(W.jsxs)(j.Bb,{small:!0,children:[fe?we.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(W.jsxs)(j.P,{justifyContent:"space-between",children:[Object(W.jsxs)(j.Bb,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(W.jsxs)(j.Bb,{small:!0,children:[ye?we.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]})]}),Object(W.jsx)(j.m,{position:"relative",mt:"16px",children:xe?Object(W.jsxs)(f.b,{children:[Object(W.jsx)(j.o,{variant:ct===k.a.APPROVED||null!==tt?"success":"primary",onClick:function(){return ot.apply(this,arguments)},disabled:ct!==k.a.NOT_APPROVED||null!==tt,width:"100%",mr:"0.5rem",children:ct===k.a.PENDING?Object(W.jsx)(P.a,{children:Re("Enabling")}):ct===k.a.APPROVED||null!==tt?Re("Enabled"):Re("Enable")}),Object(W.jsx)(j.o,{variant:!Se&&Ye[V.a.CURRENCY_A]&&Ye[V.a.CURRENCY_B]?"danger":"primary",onClick:function(){wt()},width:"100%",disabled:!Se||null===tt&&ct!==k.a.APPROVED,children:Ne||Re("Remove")})]}):Object(W.jsx)(y.a,{})})]})]}),we?Object(W.jsx)(x.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(W.jsx)(h.a,{showUnwrapped:Ct,pair:we})}):null]})}}}]);
//# sourceMappingURL=5.325ace5e.chunk.js.map
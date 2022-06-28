"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[7484],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8768:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c=void 0,d={unversionedId:"architecture/components/contracts/contracts/conditions/Condition",id:"architecture/components/contracts/contracts/conditions/Condition",title:"Condition",description:"Implementation of the Condition",source:"@site/docs/architecture/components/contracts/contracts/conditions/Condition.md",sourceDirName:"architecture/components/contracts/contracts/conditions",slug:"/architecture/components/contracts/contracts/conditions/Condition",permalink:"/docs/architecture/components/contracts/contracts/conditions/Condition",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/contracts/contracts/conditions/Condition.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComputeExecutionCondition",permalink:"/docs/architecture/components/contracts/contracts/conditions/ComputeExecutionCondition"},next:{title:"ConditionStoreLibrary",permalink:"/docs/architecture/components/contracts/contracts/conditions/ConditionStoreLibrary"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"generateId",id:"generateid",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"fulfill",id:"fulfill",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"abortByTimeOut",id:"abortbytimeout",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-1",level:4}],s={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Implementation of the Condition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," Each condition has a validation function that returns either FULFILLED, \n ABORTED or UNFULFILLED. When a condition is successfully solved, we call \n it FULFILLED. If a condition cannot be FULFILLED anymore due to a timeout \n or other types of counter-proofs, the condition is ABORTED. UNFULFILLED \n values imply that a condition has not been provably FULFILLED or ABORTED. \n All initialized conditions start out as UNFULFILLED.\n")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"generateid"},"generateId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function generateId(\n    bytes32 _agreementId,\n    bytes32 _valueHash\n  ) public returns (bytes32)\n")),(0,i.kt)("p",null,"generateId condition Id from the following\nparameters"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_agreementId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"SEA agreement ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_valueHash")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"hash of all the condition input values")))),(0,i.kt)("h3",{id:"fulfill"},"fulfill"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function fulfill(\n    bytes32 _id,\n    enum ConditionStoreLibrary.ConditionState _newState\n  ) internal returns (enum ConditionStoreLibrary.ConditionState)\n")),(0,i.kt)("p",null,"fulfill set the condition state to Fulfill | Abort"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"condition identifier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_newState")),(0,i.kt)("td",{parentName:"tr",align:"left"},"enum ConditionStoreLibrary.ConditionState"),(0,i.kt)("td",{parentName:"tr",align:"left"},"new condition state (Fulfill/Abort)")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"the")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"updated condition state")))),(0,i.kt)("h3",{id:"abortbytimeout"},"abortByTimeOut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function abortByTimeOut(\n    bytes32 _id\n  ) external returns (enum ConditionStoreLibrary.ConditionState)\n")),(0,i.kt)("p",null,"abortByTimeOut set condition state to Aborted\nif the condition is timed out"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"condition identifier")))),(0,i.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"the")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"updated condition state")))))}m.isMDXComponent=!0}}]);
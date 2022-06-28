"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5132],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9495:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s=void 0,d={unversionedId:"architecture/components/contracts/contracts/conditions/TransferDIDOwnershipCondition",id:"architecture/components/contracts/contracts/conditions/TransferDIDOwnershipCondition",title:"TransferDIDOwnershipCondition",description:"Implementation of condition allowing to transfer the ownership",source:"@site/docs/architecture/components/contracts/contracts/conditions/TransferDIDOwnershipCondition.md",sourceDirName:"architecture/components/contracts/contracts/conditions",slug:"/architecture/components/contracts/contracts/conditions/TransferDIDOwnershipCondition",permalink:"/docs/architecture/components/contracts/contracts/conditions/TransferDIDOwnershipCondition",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/contracts/contracts/conditions/TransferDIDOwnershipCondition.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ThresholdCondition",permalink:"/docs/architecture/components/contracts/contracts/conditions/ThresholdCondition"},next:{title:"WhitelistingCondition",permalink:"/docs/architecture/components/contracts/contracts/conditions/WhitelistingCondition"}},c={},p=[{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"hashValues",id:"hashvalues",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"fulfill",id:"fulfill",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"Events",id:"events",level:2},{value:"Fulfilled",id:"fulfilled",level:3}],u={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Implementation of condition allowing to transfer the ownership\nbetween the original owner and a receiver"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n    address _owner,\n    address _conditionStoreManagerAddress,\n    address _didRegistryAddress\n  ) external\n")),(0,i.kt)("p",null,"initialize init the contract with the following parameters"),(0,i.kt)("p",null,"this function is called only once during the contract\ninitialization."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_owner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract's owner account address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_conditionStoreManagerAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"condition store manager address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_didRegistryAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"DID Registry address")))),(0,i.kt)("h3",{id:"hashvalues"},"hashValues"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hashValues(\n    bytes32 _did,\n    address _receiver\n  ) public returns (bytes32)\n")),(0,i.kt)("p",null,"hashValues generates the hash of condition inputs\nwith the following parameters"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_did")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"refers to the DID in which secret store will issue the decryption keys")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_receiver")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"is the address of the granted user or the DID provider")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"hash of all these values")))),(0,i.kt)("h3",{id:"fulfill"},"fulfill"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function fulfill(\n    bytes32 _agreementId,\n    bytes32 _did,\n    address _receiver\n  ) public returns (enum ConditionStoreLibrary.ConditionState)\n")),(0,i.kt)("p",null,"fulfill the transfer DID ownership condition"),(0,i.kt)("p",null,"only DID owner or DID provider can call this\nmethod. Fulfill method transfer full ownership permissions\nto to _receiver address.\nWhen true then fulfill the condition"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_agreementId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"agreement identifier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_did")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"refers to the DID in which secret store will issue the decryption keys")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_receiver")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"is the address of the granted user")))),(0,i.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"condition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"state (Fulfilled/Aborted)")))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"fulfilled"},"Fulfilled"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Fulfilled(\n  )\n")))}m.isMDXComponent=!0}}]);
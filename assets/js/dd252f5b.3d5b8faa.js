"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[6903],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(d,".").concat(u)]||m[u]||s[u]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8323:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={},d="@nevermined-io/catalog-core",p={unversionedId:"architecture/components/catalog/core/API/modules",id:"architecture/components/catalog/core/API/modules",title:"@nevermined-io/catalog-core",description:"Table of contents",source:"@site/docs/architecture/components/catalog/core/API/modules.md",sourceDirName:"architecture/components/catalog/core/API",slug:"/architecture/components/catalog/core/API/modules",permalink:"/docs/architecture/components/catalog/core/API/modules",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/core/API/modules.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Namespace: SubscribeService",permalink:"/docs/architecture/components/catalog/core/API/modules/SubscribeService"},next:{title:"RoyaltyKind",permalink:"/docs/architecture/components/catalog/core/enums/RoyaltyKind"}},c={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Namespaces",id:"namespaces",level:3},{value:"Enumerations",id:"enumerations",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"DID",id:"did",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"EventResult",id:"eventresult",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"NftTypes",id:"nfttypes",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Functions",id:"functions-1",level:2},{value:"conductOrder",id:"conductorder",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getAgreementId",id:"getagreementid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getCurrentAccount",id:"getcurrentaccount",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"handlePostRequest",id:"handlepostrequest",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isEmptyObject",id:"isemptyobject",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"loadFulfilledEvents",id:"loadfulfilledevents",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"zeroX",id:"zerox",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4}],m={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nevermined-iocatalog-core"},"@nevermined-io/catalog-core"),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"namespaces"},"Namespaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules/AccountService"},"AccountService")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules/AssetService"},"AssetService")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules/AuthToken"},"AuthToken")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules/Catalog"},"Catalog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules/EventService"},"EventService")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules/SubscribeService"},"SubscribeService"))),(0,l.kt)("h3",{id:"enumerations"},"Enumerations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/enums/RoyaltyKind"},"RoyaltyKind")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/enums/State"},"State")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/enums/TransferNFTConditionMethod"},"TransferNFTConditionMethod"))),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/AccountModule"},"AccountModule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/AssetFile"},"AssetFile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/AssetPublishParams"},"AssetPublishParams")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/AssetPublishProviderState"},"AssetPublishProviderState")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/AssetState"},"AssetState")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/AssetsModule"},"AssetsModule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/ContractEventSubscription"},"ContractEventSubscription")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/CustomErc20Token"},"CustomErc20Token")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/FileMetadata"},"FileMetadata")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/FulfilledOrders"},"FulfilledOrders")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/GenericOutput"},"GenericOutput")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/MarketplaceAPIToken"},"MarketplaceAPIToken")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/MintNFTInput"},"MintNFTInput")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/NFTDetails"},"NFTDetails")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/NeverminedProviderContext"},"NeverminedProviderContext")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/NeverminedProviderProps"},"NeverminedProviderProps")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/RegisterEvent"},"RegisterEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/SubscribeModule"},"SubscribeModule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/SubscriptionActions"},"SubscriptionActions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/Transfer"},"Transfer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/UserProfileParams"},"UserProfileParams"))),(0,l.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#did"},"DID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#eventresult"},"EventResult")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#nfttypes"},"NftTypes"))),(0,l.kt)("h3",{id:"functions"},"Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#conductorder"},"conductOrder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#getagreementid"},"getAgreementId")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#getcurrentaccount"},"getCurrentAccount")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#handlepostrequest"},"handlePostRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#isemptyobject"},"isEmptyObject")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#loadfulfilledevents"},"loadFulfilledEvents")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/modules#zerox"},"zeroX"))),(0,l.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,l.kt)("h3",{id:"did"},"DID"),(0,l.kt)("p",null,"\u01ac ",(0,l.kt)("strong",{parentName:"p"},"DID"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Id of the asset"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/602612e/lib/src/types/index.ts#L342"},"src/types/index.ts:342")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"eventresult"},"EventResult"),(0,l.kt)("p",null,"\u01ac ",(0,l.kt)("strong",{parentName:"p"},"EventResult"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,"node_modules/@nevermined-io/nevermined-sdk-js/dist/node/events/NeverminedEvent.d.ts:22"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nfttypes"},"NftTypes"),(0,l.kt)("p",null,"\u01ac ",(0,l.kt)("strong",{parentName:"p"},"NftTypes"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"721")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"1155")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,"node_modules/@nevermined-io/nevermined-sdk-js/dist/node/gateway/Gateway.d.ts:6"),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"conductorder"},"conductOrder"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"conductOrder"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"orderParams"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("p",null,"Order transfer asset to a new owner"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderParams")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderParams.ddo")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"DDO")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Asset object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderParams.gatewayAddress")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address of gateway to allow handle the asset transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderParams.newOwner")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address of the new owner who will be transferred the asset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderParams.sdk")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Nevermined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instance of SDK object")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,l.kt)("p",null,"Agreement id generated after order an asset"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/602612e/lib/src/utils/index.ts#L42"},"src/utils/index.ts:42")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getagreementid"},"getAgreementId"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getAgreementId"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"sdk"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"template"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,l.kt)("p",null,"Get agreement id of the asset based in the account that request it"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sdk")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Nevermined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instance of SDK object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"template")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Template")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The template to use according of type of asset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"did")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The id of the asset")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,l.kt)("p",null,"Agreement id generated after order an asset"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/602612e/lib/src/utils/index.ts#L110"},"src/utils/index.ts:110")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getcurrentaccount"},"getCurrentAccount"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getCurrentAccount"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"sdk"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"default"),">"),(0,l.kt)("p",null,"Returns current account registered in SDK"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sdk")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Nevermined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instance of SDK object")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"default"),">"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/602612e/lib/src/utils/index.ts#L17"},"src/utils/index.ts:17")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handlepostrequest"},"handlePostRequest"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"handlePostRequest"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"formData"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"retries?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,l.kt)("p",null,"Handle a post request with retries if it fail"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Url to request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"formData")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"FormData")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The form data to request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"retries")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number of requests to try")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,l.kt)("p",null,"Return the result data of the request"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/602612e/lib/src/utils/index.ts#L139"},"src/utils/index.ts:139")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isemptyobject"},"isEmptyObject"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"isEmptyObject"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"i"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Checks if object is empty"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"i")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object to check")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," if object is empty or undefined"),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/602612e/lib/src/utils/index.ts#L10"},"src/utils/index.ts:10")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadfulfilledevents"},"loadFulfilledEvents"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"loadFulfilledEvents"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"sdk"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"condition"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,l.kt)("inlineCode",{parentName:"p"},"documentId"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"  }[]",">"),(0,l.kt)("p",null,"Load all the past events from an account that match with the method ",(0,l.kt)("inlineCode",{parentName:"p"},"getFulfilleds")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sdk")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Nevermined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instance of SDK object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"account")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Account user connected currently")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"condition")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Condition")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,l.kt)("inlineCode",{parentName:"p"},"documentId"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"  }[]",">"),(0,l.kt)("p",null,"Array of object with the document id of each fullfilled events"),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/602612e/lib/src/utils/index.ts#L81"},"src/utils/index.ts:81")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"zerox"},"zeroX"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"zeroX"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"input")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,"node_modules/@nevermined-io/nevermined-sdk-js/dist/node/utils/ConversionTypeHelpers.d.ts:1"))}u.isMDXComponent=!0}}]);
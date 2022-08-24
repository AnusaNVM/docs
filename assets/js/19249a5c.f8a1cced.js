"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[2771],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return a?n.createElement(d,l(l({ref:t},k),{},{components:a})):n.createElement(d,l({ref:t},k))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9297:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=["components"],i={},c=void 0,p={unversionedId:"architecture/components/catalog/core/modules/AuthToken",id:"architecture/components/catalog/core/modules/AuthToken",title:"AuthToken",description:"@nevermined-io/catalog-core / Exports / AuthToken",source:"@site/docs/architecture/components/catalog/core/modules/AuthToken.md",sourceDirName:"architecture/components/catalog/core/modules",slug:"/architecture/components/catalog/core/modules/AuthToken",permalink:"/docs/architecture/components/catalog/core/modules/AuthToken",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/core/modules/AuthToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AssetService",permalink:"/docs/architecture/components/catalog/core/modules/AssetService"},next:{title:"Catalog",permalink:"/docs/architecture/components/catalog/core/modules/Catalog"}},k={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"MARKETPLACE_API_TOKEN",id:"marketplace_api_token",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"fetchMarketplaceApiTokenFromLocalStorage",id:"fetchmarketplaceapitokenfromlocalstorage",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isTokenValid",id:"istokenvalid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"newMarketplaceApiToken",id:"newmarketplaceapitoken",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"saveMarketplaceApiTokenToLocalStorage",id:"savemarketplaceapitokentolocalstorage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4}],u={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/"},"@nevermined-io/catalog-core")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules"},"Exports")," / AuthToken"),(0,o.kt)("h1",{id:"namespace-authtoken"},"Namespace: AuthToken"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/AuthToken#marketplace_api_token"},"MARKETPLACE","_","API","_","TOKEN"))),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/AuthToken#fetchmarketplaceapitokenfromlocalstorage"},"fetchMarketplaceApiTokenFromLocalStorage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/AuthToken#istokenvalid"},"isTokenValid")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/AuthToken#newmarketplaceapitoken"},"newMarketplaceApiToken")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/AuthToken#savemarketplaceapitokentolocalstorage"},"saveMarketplaceApiTokenToLocalStorage"))),(0,o.kt)("h2",{id:"variables-1"},"Variables"),(0,o.kt)("h3",{id:"marketplace_api_token"},"MARKETPLACE","_","API","_","TOKEN"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"MARKETPLACE","_","API","_","TOKEN"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"marketplaceApiToken"')),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/utils/marketplace_token.ts#L5"},"src/utils/marketplace_token.ts:5")),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"fetchmarketplaceapitokenfromlocalstorage"},"fetchMarketplaceApiTokenFromLocalStorage"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"fetchMarketplaceApiTokenFromLocalStorage"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/MarketplaceAPIToken"},(0,o.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,o.kt)("p",null,"Get Marketplace API token to local storage"),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/MarketplaceAPIToken"},(0,o.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,o.kt)("p",null,"Auth token object which generated from Marketplace API"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/utils/marketplace_token.ts#L20"},"src/utils/marketplace_token.ts:20")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"istokenvalid"},"isTokenValid"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isTokenValid"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Check if Marketplace API Token is valid"),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if token is valid"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/utils/marketplace_token.ts#L54"},"src/utils/marketplace_token.ts:54")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"newmarketplaceapitoken"},"newMarketplaceApiToken"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"newMarketplaceApiToken"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"sdk"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/MarketplaceAPIToken"},(0,o.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,o.kt)("p",null,"Generate new Marketplace API API token"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"sdk")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Nevermined")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Instance of SDK object")))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/MarketplaceAPIToken"},(0,o.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,o.kt)("p",null,"Auth token object which generated from Marketplace API"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/utils/marketplace_token.ts#L36"},"src/utils/marketplace_token.ts:36")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"savemarketplaceapitokentolocalstorage"},"saveMarketplaceApiTokenToLocalStorage"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"saveMarketplaceApiTokenToLocalStorage"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Save Marketplace API token to local storage"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"i")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/MarketplaceAPIToken"},(0,o.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Auth token object which is generated from Marketplace API")))),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/utils/marketplace_token.ts#L11"},"src/utils/marketplace_token.ts:11")))}m.isMDXComponent=!0}}]);
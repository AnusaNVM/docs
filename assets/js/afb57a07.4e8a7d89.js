"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[2975],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):m(m({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(N,m(m({ref:e},u),{},{components:n})):a.createElement(N,m({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,m=new Array(l);m[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,m[1]=i;for(var o=2;o<l;o++)m[o]=n[o];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3049:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),m=["components"],i={sidebar_position:3,description:"Nevermined Testnet Environments"},p="Testnet environments",o={unversionedId:"environments/nvm-dev-envs",id:"environments/nvm-dev-envs",title:"Testnet environments",description:"Nevermined Testnet Environments",source:"@site/docs/environments/nvm-dev-envs.md",sourceDirName:"environments",slug:"/environments/nvm-dev-envs",permalink:"/docs/environments/nvm-dev-envs",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/environments/nvm-dev-envs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Nevermined Testnet Environments"},sidebar:"tutorialSidebar",previous:{title:"Production environments",permalink:"/docs/environments/nvm-prod-envs"}},u={},d=[{value:"Public Mumbai (Shared enviromnet)",id:"public-mumbai-shared-enviromnet",level:2},{value:"DefiMarketplace Mumbai (Application environment)",id:"defimarketplace-mumbai-application-environment",level:2},{value:"Autonomies testing Mumbai (Application environment)",id:"autonomies-testing-mumbai-application-environment",level:2},{value:"Autonomies Pre Mumbai (Application environment)",id:"autonomies-pre-mumbai-application-environment",level:2}],k={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"testnet-environments"},"Testnet environments"),(0,l.kt)("p",null,"Testnet environments are public nevermined environments deployed in public EVM-compatible testnet networks. Typically we use Polygon Mumbai.\nUse ",(0,l.kt)("a",{parentName:"p",href:"https://mumbaifaucet.com/"},"Alchemy's Mumbai Faucet")," or ",(0,l.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"Polygon's Mumbai faucet")," for requesting MATIC."),(0,l.kt)("h2",{id:"public-mumbai-shared-enviromnet"},"Public Mumbai (Shared enviromnet)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"public-nvm-v2-mumbai")),": Public environment in Mumbai. Using ",(0,l.kt)("inlineCode",{parentName:"li"},"public")," contract tag. Use this if you want to integrate with Nevermined in Mumbai/Testnet.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment"),(0,l.kt)("th",{parentName:"tr",align:null},"Network"),(0,l.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"public"),(0,l.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gateway.mumbai.public.nevermined.rocks"},"https://gateway.mumbai.public.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"public"),(0,l.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://marketplace-api.mumbai.public.nevermined.rocks"},"https://marketplace-api.mumbai.public.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"public"),(0,l.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://faucet.mumbai.public.nevermined.rocks"},"https://faucet.mumbai.public.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"public"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")),(0,l.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))),(0,l.kt)("h2",{id:"defimarketplace-mumbai-application-environment"},"DefiMarketplace Mumbai (Application environment)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"defi-marketplace-v2-mumbai")),": DefiMarketplace developlment environment for Autonomies. Using ",(0,l.kt)("inlineCode",{parentName:"li"},"common")," contract tag.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment"),(0,l.kt)("th",{parentName:"tr",align:null},"Network"),(0,l.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://defi.v2.gateway.mumbai.nevermined.rocks"},"https://defi.v2.gateway.mumbai.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://defi.v2.marketplace-api.mumbai.nevermined.rocks"},"https://defi.v2.marketplace-api.mumbai.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Marketplace frontend"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://defi.v2.portal.mumbai.nevermined.rocks"},"https://defi.v2.portal.mumbai.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Marketplace bundler"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://defi.v2.bundler.mumbai.nevermined.rocks"},"https://defi.v2.bundler.mumbai.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/common"},"https://api.thegraph.com/subgraphs/name/nevermined-io/common")),(0,l.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))),(0,l.kt)("h2",{id:"autonomies-testing-mumbai-application-environment"},"Autonomies testing Mumbai (Application environment)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"autonomies-v2-mumbai")),": Test(dev) environment for Autonomies. Using ",(0,l.kt)("inlineCode",{parentName:"li"},"common")," contract tag.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment"),(0,l.kt)("th",{parentName:"tr",align:null},"Network"),(0,l.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gateway.autonomies.test.nevermined.rocks"},"https://gateway.autonomies.test.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://marketplace-api.autonomies.test.nevermined.rocks"},"https://marketplace-api.autonomies.test.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Autonomies frontend"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://portal.autonomies.test.nevermined.rocks"},"https://portal.autonomies.test.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Autonomies backend"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://backend.autonomies.test.nevermined.rocks"},"https://backend.autonomies.test.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Autonomies profile service"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://auto-profile-service.autonomies.test.nevermined.rocks"},"https://auto-profile-service.autonomies.test.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/common"},"https://api.thegraph.com/subgraphs/name/nevermined-io/common")),(0,l.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))),(0,l.kt)("h2",{id:"autonomies-pre-mumbai-application-environment"},"Autonomies Pre Mumbai (Application environment)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"autonomies-v2-mumbai-pre")),": Preproduction(QA) environment for Autonomies. Using ",(0,l.kt)("inlineCode",{parentName:"li"},"common")," contract tag.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment"),(0,l.kt)("th",{parentName:"tr",align:null},"Network"),(0,l.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai-pre"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gateway.autonomies.pre.nevermined.rocks"},"https://gateway.autonomies.pre.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai-pre"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://marketplace-api.autonomies.pre.nevermined.rocks"},"https://marketplace-api.autonomies.pre.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai-pre"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Autonomies frontend"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://portal.autonomies.pre.nevermined.rocks"},"https://portal.autonomies.pre.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai-pre"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Autonomies backend"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://backend.autonomies.pre.nevermined.rocks"},"https://backend.autonomies.pre.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai-pre"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Autonomies profile service"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://auto-profile-service.autonomies.pre.nevermined.rocks"},"https://auto-profile-service.autonomies.pre.nevermined.rocks")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autonomies-v2-mumbai-pre"),(0,l.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/common"},"https://api.thegraph.com/subgraphs/name/nevermined-io/common")),(0,l.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))))}s.isMDXComponent=!0}}]);
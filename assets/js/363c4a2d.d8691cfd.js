"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[249],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5229:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4,description:"Tokeninization of digital assets via NFTs"},c="Assets tokenization via NFTs",l={unversionedId:"overview/assets-tokenization",id:"overview/assets-tokenization",title:"Assets tokenization via NFTs",description:"Tokeninization of digital assets via NFTs",source:"@site/docs/overview/assets-tokenization.md",sourceDirName:"overview",slug:"/overview/assets-tokenization",permalink:"/docs/overview/assets-tokenization",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/overview/assets-tokenization.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Tokeninization of digital assets via NFTs"},sidebar:"tutorialSidebar",previous:{title:"For what is useful?",permalink:"/docs/overview/for-what-is-useful"},next:{title:"Data Sharing",permalink:"/docs/overview/data-sharing"}},u={},d=[{value:"New scenarios around digital assets",id:"new-scenarios-around-digital-assets",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assets-tokenization-via-nfts"},"Assets tokenization via NFTs"),(0,i.kt)("p",null,"Nevermined is a platform where digital and physical assets can be represented\nand traded between users openly, but keeping security, integrity, provenance\nand content creators attribution."),(0,i.kt)("p",null,"Via the NFTs engine, content creators can register digital assets in a\nNevermined ecosystem and define how this assets can be splitted in multiple\nNFTs representing the digital owerniship of the content. In addition to this\nthe NFTs engine allows content creators to define:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If each of these NFTs can be traded in a marketplace and what are the conditions\nto get access to them (price, token to make the payment, etc)."),(0,i.kt)("li",{parentName:"ul"},"Define exclusive contents that can be accessed by NFT holders"),(0,i.kt)("li",{parentName:"ul"},"Royalties to be received when NFTs are sold in the secondary market")),(0,i.kt)("h2",{id:"new-scenarios-around-digital-assets"},"New scenarios around digital assets"),(0,i.kt)("p",null,"The Nevermined NFTs or tokenization engine is built around the Nevermined\nService Execution Agreements. This is a core part of Nevermined that allows\nus to articulate scenarios via Smart Contracts where different parties can\ninteract with each other via the completion and validation of conditions."),(0,i.kt)("p",null,"For example, a typical Nevermined contract can be translated to: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"As an asset owner I let you purchase 1 NFT representing this asset if \nyou pay me 10 ETH.\n")),(0,i.kt)("p",null,"In the above example, Nevermined enforces that if the buyer pays ",(0,i.kt)("inlineCode",{parentName:"p"},"10 ETH"),"\nfor a NFT representing a specific asset, the buyer will receive this NFT and\nthe seller or asset owner will receive the payment."),(0,i.kt)("p",null,"This is a very simple scenario but the NFTs engine allows more complex scenarios\nwhere the content creators can offer access to exclusive contents to their\ncommunity of users. This allows things like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"If you own one of my NFTs I will give you exclusive access to this artwork\n")),(0,i.kt)("p",null,"This scenario makes the NFT more attractive because beyond the representation\nof owernership of a digital asset, converts this NFT in an access token\nthat allows the user to access something is unique and exclusive. This\nfacilitates a richer and more direct communication between content creators\nand their users.  "),(0,i.kt)("p",null,"When a user purchases a NFT, at some point could need to re-sell this NFT\nto someone else in a secondary market. Nevermined allows also this kind of\ntrading between users:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"I am not the creator but I own one NFT of this digital asset. I want to sell\nit for 20 ETH.\n")),(0,i.kt)("p",null,"The re-selling of this NFT transfer also the capabilities to access to any\nexclusive content attached to the NFT from the seller to the buyer. This\nmeans that as soon as the transaction is confirmed, the seller won't hold the\nNFT and by extension won't have access to the exclusive content. This will\nbe granted to the buyer as new NFT holder."),(0,i.kt)("p",null,"Nevermined NFTs engine enforces the payment of royalties to original creators.\nWhen a digital asset is register by the content creator into Nevermined, it is\nnecessary to define what are the royalties attached to the digital asset:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"As a creator of this asset, I want to receive 10% royalties over any future sale\nof the NFTs in the secondary market.\n")),(0,i.kt)("p",null,"Obviously, the lower that royalties are the more attractive that is the NFT for\nthe potential buyers."),(0,i.kt)("p",null,"The amount of royalties and the original creator of the asset are recorded in\nthe Nevermined Smart Contracts and can not be changed afterwards. This protection\navoids that a content creator increases the royalties to receive for assets that\nwere already sold, reducing the intrinsic value afterwards."),(0,i.kt)("p",null,"In addition to this, Nevermined allows to content creator to setup the scarcity\nof the NFTs associated to a digital asset. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"As a content creator I'm gonna register an asset with a limited serie of 5 NFTs\n")),(0,i.kt)("p",null,"Or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"As a content creator I'm gonna register an asset without limit in the number of NFTs\nthat can be attached to it (uncapped).\n")),(0,i.kt)("p",null,"The more scarce that is the asset the more valuable this asset is. To avoid adulterate\nassets value afterwards, these parameters can not be modified once are defined."))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5741],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),d=i,v=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},263:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:1,description:"Nevermined Environments"},c="Nevermined Public Environments",p={unversionedId:"environments/nevermined-envs",id:"environments/nevermined-envs",title:"Nevermined Public Environments",description:"Nevermined Environments",source:"@site/docs/environments/nevermined-envs.md",sourceDirName:"environments",slug:"/environments/nevermined-envs",permalink:"/docs/environments/nevermined-envs",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/environments/nevermined-envs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Nevermined Environments"},sidebar:"tutorialSidebar",previous:{title:"License",permalink:"/docs/license"},next:{title:"Production environments",permalink:"/docs/environments/nvm-prod-envs"}},u={},m=[{value:"About the tags",id:"about-the-tags",level:2}],l={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nevermined-public-environments"},"Nevermined Public Environments"),(0,o.kt)("p",null,"This section provides links and information regarding the different public environments where Nevermined is deployed and can be used."),(0,o.kt)("h2",{id:"about-the-tags"},"About the tags"),(0,o.kt)("p",null,"Tags are different contract deployments for the same network&version. Each tag is independant from the others. Generically we use two different tags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"public"),": This tag/contracts instane is meant to be used for new integrations, public integrations, etc... It expected to have the latest versions and/or configurations. This is a ",(0,o.kt)("em",{parentName:"p"},"shared")," environment. ",(0,o.kt)("em",{parentName:"p"},"Probably you need to use these environments."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"common"),': This tag/contracts instane is used by more "stable" applications. Each application has its own nevermined stack (',(0,o.kt)("inlineCode",{parentName:"p"},"gateway")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"markeplace-api"),")."))))}d.isMDXComponent=!0}}]);
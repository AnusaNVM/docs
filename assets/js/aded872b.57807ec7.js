"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5152],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1575:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:2},s="Advanced Configuration",d={unversionedId:"tools/cli/advanced_configuration",id:"tools/cli/advanced_configuration",title:"Advanced Configuration",description:"The CLI is fully customizable via environment variables. By default the ncli has pre-configured different environments (testnet and production) where you can connect directly.",source:"@site/docs/tools/cli/advanced_configuration.md",sourceDirName:"tools/cli",slug:"/tools/cli/advanced_configuration",permalink:"/docs/tools/cli/advanced_configuration",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/tools/cli/advanced_configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/tools/cli/getting-started"},next:{title:"Using the CLI",permalink:"/docs/tools/cli/using-cli"}},p={},c=[{value:"CLI global parameters",id:"cli-global-parameters",level:2},{value:"Account Environment variables",id:"account-environment-variables",level:2},{value:"Connecting to different environments",id:"connecting-to-different-environments",level:2},{value:"Network Environment variables",id:"network-environment-variables",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-configuration"},"Advanced Configuration"),(0,o.kt)("p",null,"The CLI is fully customizable via environment variables. By default the ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli")," has pre-configured different environments (testnet and production) where you can connect directly. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to see the existing pre-configured environments you just need to run: ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli network list")))),(0,o.kt)("p",null,"But if you need to connect to a different environment, or modify some configuration being used, please feel free to export any of the following environment variables in your shell to modify how the ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli")," works."),(0,o.kt)("h2",{id:"cli-global-parameters"},"CLI global parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli")," allows to pass different parameters depending on the command you want to run. But there are some that available across the whole application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--help")," - If given the CLI will parse information about how to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli")," or a specific command"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--version")," - If given the CLI will print the application version and will finish"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--verbose")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"-v")," - It allows to run the ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli")," in debug mode printing more information about what is going on"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--network")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"-n")," - It allows to specify to what network you want to connect (",(0,o.kt)("inlineCode",{parentName:"li"},"spree"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"testnet"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"defiMumbai"),", etc). If you want to see the full list of pre-configured environments please run ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli network list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--acount")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"-a")," - If given, the ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli")," will try to use that specific ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," of the possible derived accounts from your ",(0,o.kt)("inlineCode",{parentName:"li"},"MNEMONIC"),". If not given the ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli")," will try to load the first account derived (derivation path 0)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--json")," - If this flag is provided the ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli")," will print all the output in JSON format. This facilitates integrating the ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli")," with another application.")),(0,o.kt)("h2",{id:"account-environment-variables"},"Account Environment variables"),(0,o.kt)("p",null,"The following list of variables are related to the account you use to connect to Nevermined"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli")," always try to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"MNEMONIC")," first and if this is not given will try to use a key file."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MNEMONIC")," - Your seed phrase representing your account. With this seed phrase can be derived your different wallets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KEYFILE_PATH")," - If the ",(0,o.kt)("inlineCode",{parentName:"li"},"MNEMONIC")," is not provided, the ",(0,o.kt)("inlineCode",{parentName:"li"},"ncli")," will try to use a local key file to load your account. This variable should include the path to that key file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KEYFILE_PASSWORD")," - If you are using a key file, this variable will be used to get the password of that key file")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to keep safe all your private information related to your account like seed phrases, private keys, key files and password. ",(0,o.kt)("strong",{parentName:"p"},"NEVER")," share this files with people you don't know and trust."))),(0,o.kt)("h2",{id:"connecting-to-different-environments"},"Connecting to different environments"),(0,o.kt)("p",null,"Nevermined is a framework for building digital ecosystems that can be deployed or configured in different ways. Because of that Nevermined is used to deliver multiple use cases installed in different networks. There are list of pre-defined networks/environments provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli"),". You can get the list of them running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ncli network list\n")),(0,o.kt)("p",null,"This will return a list of all the existing environments grouped by ",(0,o.kt)("strong",{parentName:"p"},"name"),".\nIf you want to connect to any of them, we just need to configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_URL"),' environmnet variable (using the "Node Uri" printed our using your own Infura or similar provider):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export NODE_URL=https://rpc-mumbai.matic.today\n")),(0,o.kt)("p",null," Now you can use the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--network")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli")," commands allow to connect and use any of these environments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ncli --network defiMumbai network status\n")),(0,o.kt)("h2",{id:"network-environment-variables"},"Network Environment variables"),(0,o.kt)("p",null,"The following list of variables are related to the configuration of the Nevermined environment and how you interact with them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NODE_URL")," - JSON-RPC server. It could be an Infura or Alchemy url too. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8545")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TOKEN_ADDRESS")," - The ERC20 token address to use for the transactions. If not given or if is ",(0,o.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000000000")," the payments will be made in the network native token (ETH, Matic, ..)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GATEWAY_URL")," - The url of the gateway to use. If not given the default url is: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8030")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MARKETPLACE_API_URL")," - The url of the marketplace api to use. If not given the default url is: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FAUCET_URL")," - The url of the faucet to use. If not given the default url is: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3001")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IPFS_GATEWAY")," - The url of the IPFS gateway used to upload/download contents. By default is ",(0,o.kt)("inlineCode",{parentName:"li"},"https://ipfs.infura.io:5001")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GATEWAY_ADDRESS")," - The public address of the gateway. If not given the default address is: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GAS_MULTIPLIER")," - For networks with some congestion, this parameter can help to increase the gas spent and speed up the transactions. If not given the default is ",(0,o.kt)("inlineCode",{parentName:"li"},"0"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Finding a decent ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_URL")," is some times difficult. We recommend to open an Infura or Alchemy account to have a better experience."))))}u.isMDXComponent=!0}}]);
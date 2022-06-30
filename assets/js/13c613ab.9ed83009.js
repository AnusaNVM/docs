"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[622],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||s;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9802:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var n=a(7462),o=a(3366),s=(a(7294),a(3905)),i=["components"],r={sidebar_position:3},l="Using the CLI",c={unversionedId:"tools/cli/using-cli",id:"tools/cli/using-cli",title:"Using the CLI",description:"Once you have created your account and have some funds, you are ready to start using the ncli to interact with different Nevermined networks.",source:"@site/docs/tools/cli/using-cli.md",sourceDirName:"tools/cli",slug:"/tools/cli/using-cli",permalink:"/docs/tools/cli/using-cli",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/tools/cli/using-cli.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Advanced Configuration",permalink:"/docs/tools/cli/advanced_configuration"},next:{title:"Commands  Reference",permalink:"/docs/tools/cli/cli_commands"}},d={},u=[{value:"What environments can I use?",id:"what-environments-can-i-use",level:2},{value:"Let&#39;s create a new account and check the balance",id:"lets-create-a-new-account-and-check-the-balance",level:2},{value:"Assets",id:"assets",level:2},{value:"Registering new assets",id:"registering-new-assets",level:3},{value:"Resolving an Asset",id:"resolving-an-asset",level:3},{value:"Searching for stuff",id:"searching-for-stuff",level:3},{value:"Purchasing and downloading assets",id:"purchasing-and-downloading-assets",level:3},{value:"NFTs",id:"nfts",level:2},{value:"Deploying a new NFT contract",id:"deploying-a-new-nft-contract",level:3},{value:"Registering an asset with a NFT attached",id:"registering-an-asset-with-a-nft-attached",level:3},{value:"Minting",id:"minting",level:3},{value:"Purchase and download",id:"purchase-and-download",level:3}],p={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-the-cli"},"Using the CLI"),(0,s.kt)("p",null,"Once you have created your account and have some funds, you are ready to start using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ncli")," to interact with different Nevermined networks."),(0,s.kt)("h2",{id:"what-environments-can-i-use"},"What environments can I use?"),(0,s.kt)("p",null,"You can get the list of all the pre-configured environmnets running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli network list\n")),(0,s.kt)("p",null,"And later see the status of any of them:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli --network testnet network status\n")),(0,s.kt)("h2",{id:"lets-create-a-new-account-and-check-the-balance"},"Let's create a new account and check the balance"),(0,s.kt)("p",null,"Create a new account using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ncli")," is easy. Just run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli accounts new\n")),(0,s.kt)("p",null,"This command will print all the relevant information like mnemonic, private key, public address of a derived account, etc. Make sure to save all this information if you want to use this account later."),(0,s.kt)("p",null,"To use the recently created account you just need to export the mnemonic in an environment variable:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'export MNEMONIC="curious harsh offer relax choose reveal series actress message suspect today vocal"\n')),(0,s.kt)("p",null,"In the testnets with a faucet available, you can get some funds running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli accounts fund 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260\n")),(0,s.kt)("p",null,"Getting the balance of an account is possible running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli accounts balance 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260\n")),(0,s.kt)("h2",{id:"assets"},"Assets"),(0,s.kt)("h3",{id:"registering-new-assets"},"Registering new assets"),(0,s.kt)("p",null,"Nevermined is all about registering digital assets and provide services on top of them. The most basic one is about ",(0,s.kt)("strong",{parentName:"p"},"data sharing"),". So here we are gonna register a new asset and will set a price of 1 ETH for getting access to the file attached to that asset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli assets register-asset --account 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260 --name 'A picture about myself' --author 'John Doe' --price 1 --urls https://www.kazoart.com/blog/wp-content/uploads/2018/03/23-magritte-uomo-con-mela-100x70-70x50_jpg.jpg --contentType image/jpeg\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"As a result of running this command, you will get a Decentralized Identifier (aka ",(0,s.kt)("strong",{parentName:"p"},"DID"),"). This refers to a unique asset registered in a Nevermined network. "))),(0,s.kt)("p",null,"In this example we are using a public url, but with Nevermined you also could do:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add multiple urls referring to multiple files"),(0,s.kt)("li",{parentName:"ul"},"Use a cid for referring a content is in IPFS or Filecoin"),(0,s.kt)("li",{parentName:"ul"},"Publish the url of a content that is not publicly available (for example on premise in your own server or in the cloud). You could protect that content running your own ",(0,s.kt)("a",{parentName:"li",href:"/docs/architecture/components/gateway"},"Nevermined Gateway"),".")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In Nevermined when you register an asset, the URL referring to the asset is ",(0,s.kt)("strong",{parentName:"p"},"encrypted"),"."))),(0,s.kt)("p",null,"The price you published is related to the default token price of the network you are connected. This can be a Native token (ETH, MATIC, etc) or a ERC20.\nYou can control this exporting the ",(0,s.kt)("strong",{parentName:"p"},"TOKEN_ADDRESS")," environment variable. "),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can find more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"TOKEN_ADDRESS")," variable in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/tools/cli/advanced_configuration"},"advanced configuration section"),"."))),(0,s.kt)("p",null,"You can register a new asset using the metadata from a JSON file (example of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/cli/blob/main/test/resources/example-1.json"},"metadata here"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ncli assets import  --metadata /tmp/my_asset_metadata.json\n")),(0,s.kt)("h3",{id:"resolving-an-asset"},"Resolving an Asset"),(0,s.kt)("p",null,"One registered asset in Nevermined is composed in 2 parts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("strong",{parentName:"li"},"metadata")," describing the file (tile, author, description, etc)"),(0,s.kt)("li",{parentName:"ul"},"Some ids stored in the Smart contracts. This includes the ",(0,s.kt)("strong",{parentName:"li"},"DID")," and the reference to the metadata")),(0,s.kt)("p",null,"Once an asset is registered and we have the reference to it via the ",(0,s.kt)("strong",{parentName:"p"},"DID"),", you can resolve the metadata using that DID. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," ncli assets resolve did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8\n")),(0,s.kt)("h3",{id:"searching-for-stuff"},"Searching for stuff"),(0,s.kt)("p",null,"With the CLI you can search across all the metadata of all the assets published for a Nevermined environment. You can do that running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'ncli assets search  "John Doe"\n')),(0,s.kt)("h3",{id:"purchasing-and-downloading-assets"},"Purchasing and downloading assets"),(0,s.kt)("p",null,"Now we know how to publish assets, we can see how to interact with them. For example running the ",(0,s.kt)("inlineCode",{parentName:"p"},"assets download")," option the publisher of the assets can download the files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli assets download  did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8  --path /tmp \n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Only the owner of the DID can use this command to download the assets. The rest of the world has to purchase them."))),(0,s.kt)("p",null,"So if you are not the owner, you can purchase the access to the asset running the order command. But first you need to make sure you are using a different account to the owner one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'export MNEMONIC="your awesome seed phrase that holds tokens on the network of choice"\nncli assets order did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8\n')),(0,s.kt)("p",null,"This command will return a unique service agreement id (or agreement id). This works as a receipt of your recent purchase. Using that now you can get access to the files attached to the asset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli assets get did:nv:e23aeb13dc398be20b6718237a60793d4491d7da8aef53182ad2f05d8666c8d8 --agreementId 0x13d435886660cd2c411fd758db09db04b48ca1f1901b0bb449812e6e2eb603f3 --path /tmp\n")),(0,s.kt)("h2",{id:"nfts"},"NFTs"),(0,s.kt)("p",null,"In Nevermined you can use NFTs (ERC-721 or ERC-1155) as a mechanism to tokenize digital assets and control the access to their digital files. Here we are show how to use them with the CLI."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In this page we are gonna use NFTs based in ERC-721, but most of this commands works very similar for ERC-1155 NFTs."))),(0,s.kt)("h3",{id:"deploying-a-new-nft-contract"},"Deploying a new NFT contract"),(0,s.kt)("p",null,"When you compile a Smart Contract you generate an ABI that includes the definiton of the public interface of the contract and the bytecode. Having an ABI you can deploy it in a network running the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli nfts721 deploy MyERC721.json\n")),(0,s.kt)("p",null,"If everything is okay, you have balance to pay the balance on the network you are deploying and all of this, as a result of this command you will get the address where this contract has been deployed. Copyu that address, we will use it in the next commands."),(0,s.kt)("h3",{id:"registering-an-asset-with-a-nft-attached"},"Registering an asset with a NFT attached"),(0,s.kt)("p",null,"Remember in a previous section we registered an asset that was allowing some downloading for people purchasing that asset right? Now we are gonna register a similar asset but with a ERC-721 NFT attached to it. The first parameter is the contract address of the NFT contract we got before:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli nfts721 create 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6 --name 'A picture about myself' --author 'John Doe' --price 1 --urls https://www.kazoart.com/blog/wp-content/uploads/2018/03/23-magritte-uomo-con-mela-100x70-70x50_jpg.jpg --contentType image/jpeg\n")),(0,s.kt)("p",null,"As you can see, this command is very similar to the previous one. The main difference is here we are saying for whoever paying 1 token will receive a ERC-721 NFT. And whoever who holds that NFT will be able to get access to the urls passed as parameter."),(0,s.kt)("p",null,"If the asset was registered properly, you got a DID as before and you can see more information about the asset running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'ncli nfts721 show  "did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c" --nftAddress 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6\n')),(0,s.kt)("h3",{id:"minting"},"Minting"),(0,s.kt)("p",null,"With this command the asset owner can mint a NFT associated to the asset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'ncli nfts721 mint "did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c" 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6 --uri http://nevermined.io/metadata.json\n')),(0,s.kt)("h3",{id:"purchase-and-download"},"Purchase and download"),(0,s.kt)("p",null,"So now using a different account you can purchase that asset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'export MNEMONIC="your awesome seed phrase that holds tokens on the network of choice"\n\nncli nfts721 order did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c\n')),(0,s.kt)("p",null,"If everything went okay, now you should be able to download the files attached to the asset and protected by the NFT as access control:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli nfts721 download did:nv:b7b7a12fa80477d2c75fb730ec4c378445519bba7c816f10740ca564acbea06c --destination /tmp --account 0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e\n")),(0,s.kt)("p",null,"You can check the account you used to purchase the asset is now holding the NFT:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ncli accounts balance 0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e --nftTokenAddress 0x726baA2f854A3BEC2378a707AeB38c9d933Ebad6\n")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={},o="Interface: NeverminedProviderContext",s={unversionedId:"catalog/core/API/interfaces/NeverminedProviderContext",id:"catalog/core/API/interfaces/NeverminedProviderContext",title:"Interface: NeverminedProviderContext",description:"Values returns from the main NVM context",source:"@site/docs/catalog/core/API/interfaces/NeverminedProviderContext.md",sourceDirName:"catalog/core/API/interfaces",slug:"/catalog/core/API/interfaces/NeverminedProviderContext",permalink:"/docs/catalog/core/API/interfaces/NeverminedProviderContext",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/catalog/core/API/interfaces/NeverminedProviderContext.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: NFTDetails",permalink:"/docs/catalog/core/API/interfaces/NFTDetails"},next:{title:"Interface: NeverminedProviderProps",permalink:"/docs/catalog/core/API/interfaces/NeverminedProviderProps"}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"account",id:"account",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"isLoadingSDK",id:"isloadingsdk",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"sdk",id:"sdk",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"sdkError",id:"sdkerror",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"subscribe",id:"subscribe",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"subscription",id:"subscription",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"updateSDK",id:"updatesdk",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-7",level:4}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-neverminedprovidercontext"},"Interface: NeverminedProviderContext"),(0,r.kt)("p",null,"Values returns from the main NVM context\nCan be consumed after wrapping your project with the catalog(see setup steps)"),(0,r.kt)("p",null,"example:"),(0,r.kt)("p",null,"option 1: const { sdk, sdkError, isLoadingSdk, ...others } = useContext(Catalog.NeverminedContext)\noption 2: const { sdk, sdkError, isLoadingSdk, ...others } = Catalog.useNevermined()"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#account"},"account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#assets"},"assets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#isloadingsdk"},"isLoadingSDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#sdk"},"sdk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#sdkerror"},"sdkError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#subscribe"},"subscribe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#subscription"},"subscription")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/NeverminedProviderContext#updatesdk"},"updateSDK"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"account"},"account"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"account"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AccountModule"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountModule"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account")," contains all the functionalities to handle authentications and\ncollections belonged to an account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Authorization example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { assets, account, isLoadingSDK } = Catalog.useNevermined();\n \n const buy = async () => {\n   if (!account.isTokenValid()) {\n     await account.generateToken();\n   }\n \n   (...)\n };\n}\n")),(0,r.kt)("p",null,"Check NFT1155 holder example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { account, isLoadingSDK } = Catalog.useNevermined();\n const [ownNFT1155, setOwnNFT1155] = useState(false);\n \n useEffect(() => {\n   (async () => {\n     const response = await account.isNFT1155Holder(ddo.id, walletAddress);\n     setOwnNFT1155(response);\n   })()\n }, [walletAddress])\n \n}\n")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L272"},"types/index.ts:272")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"assets"},"assets"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"assets"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetsModule"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetsModule"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assets")," contains all the functionalities to handle assets for example get,\nmint, transfer, order or download asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Publish an asset example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { isLoadingSDK, sdk, account, assets } = Catalog.useNevermined();\n const [ddo, setDDO] = useState<DDO>({} as DDO)\n \n const metadata: MetaData = {\n   main: {\n     name: '',\n     files: [{\n       index: 0,\n       contentType: 'application/json',\n       url: 'https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/examples/ddo-example.json'\n     }],\n     type: 'dataset',\n     author: '',\n     license: '',\n     dateCreated: new Date().toISOString(),\n     price: ''\n   }\n };\n \n const constructRewardMap = (\n   recipientsData: any[],\n   priceWithoutFee: number,\n   ownerWalletAddress: string\n ): Map<string, BigNumber> => {\n   const rewardMap: Map<string, BigNumber> = new Map();\n   let recipients: any = [];\n   if (recipientsData.length === 1 && recipientsData[0].split === 0) {\n     recipients = [\n       {\n         name: ownerWalletAddress,\n         split: 100,\n         walletAddress: ownerWalletAddress\n       }\n     ];\n   }\n   let totalWithoutUser = 0;\n \n   recipients.forEach((recipient: any) => {\n     if (recipient.split && recipient.split > 0) {\n       const ownSplit = ((priceWithoutFee * recipient.split) / 100).toFixed();\n       rewardMap.set(recipient.walletAddress, BigNumber.from(+ownSplit));\n       totalWithoutUser += recipient.split;\n     }\n   });\n \n   if (!rewardMap.has(ownerWalletAddress)) {\n     const ownSplitReinforced = +((priceWithoutFee * (100 - totalWithoutUser)) / 100).toFixed();\n     rewardMap.set(ownerWalletAddress, BigNumber.from(ownSplitReinforced));\n   }\n \n   return rewardMap;\n };\n \n const onPublish = async () => {\n  try {\n    const publisher = await getCurrentAccount(sdk);\n    const rewardsRecipients: any[] = [];\n    const assetRewardsMap = constructRewardMap(rewardsRecipients, 100, publisher.getId());\n    const assetRewards = new AssetRewards(assetRewardsMap);\n    const royaltyAttributes = {\n      royaltyKind: RoyaltyKind.Standard,\n      scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),\n      amount: 0,\n    };\n \n    if (!account.isTokenValid()) {\n      await account.generateToken();\n    }\n    const response = await publishNFT1155({\n      gatewayAddress: String(appConfig.gatewayAddress),\n      assetRewards,\n      metadata,\n      nftAmount: 1,\n      preMint: true,\n      cap: 100,\n      royaltyAttributes,\n      erc20TokenAddress,\n    });\n \n    setDDO(response as DDO);\n  } catch (error) {\n    console.log('error', error);\n  }\n };\n \n return (\n   <>\n     ...     \n   </>\n );\n};  \n")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L235"},"types/index.ts:235")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isloadingsdk"},"isLoadingSDK"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isLoadingSDK"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"True if sdk is loading"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L51"},"types/index.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdk"},"sdk"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sdk"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Nevermined")),(0,r.kt)("p",null,"Nevermined sdk instance which has all the core functionalities"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L47"},"types/index.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdkerror"},"sdkError"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sdkError"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",null,"Error message from sdk"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L49"},"types/index.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subscribe"},"subscribe"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"subscribe"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/SubscribeModule"},(0,r.kt)("inlineCode",{parentName:"a"},"SubscribeModule"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," contains all the functionalities to handle events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Subcribe payment event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { subscribe, subscription, account, isLoadingSDK} = Catalog.useNevermined();\n const { paymentEvent, setPaymentEvent } = useState<ContractEventSubscription>();\n\n const buy = async () => {\n  if (!account.isTokenValid()) {\n    await account.generateToken();\n  }\n\n  const currentAccount = await getCurrentAccount(sdk);\n  const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n };\n\n const stopLog = () => {\n   paymentEvent.unsuscribe();\n }\n\n useEffect(() => {\n   if(isLoadingSDK) {\n    return;\n   }\n   (async () => {\n     setPaymentEvent(subscribe.paymentEvents((events)=> {\n       Logger.log(events)\n     }))\n   })()\n }, [isLoadingSDK])\n \n return (\n   <div>\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       <button onClick={stopLog} disabled={isLoadingSDK}>\n         Stop the logs\n       </button>\n   </div>\n );\n}\n")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L131"},"types/index.ts:131")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subscription"},"subscription"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"subscription"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/SubscriptionActions"},(0,r.kt)("inlineCode",{parentName:"a"},"SubscriptionActions"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"subscription")," contains all the functionalities to handle asset subscritions by payment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Buy subscription example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const BuyAsset = ({ddo}: {ddo: DDO}) => {\n const { assets, account, isLoadingSDK, subscription, sdk } = Catalog.useNevermined();\n const { walletAddress } = MetaMask.useWallet();\n const [ownNFT1155, setOwnNFT1155] = useState(false);\n const [isBought, setIsBought] = useState(false);\n const [owner, setOwner] = useState('');\n \n useEffect(() => {\n   (async () => {\n     setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));\n     setOwner(await sdk.assets.owner(ddo.id))\n   })()\n }, [walletAddress, isBought])\n \n const buy = async () => {\n   if (!account.isTokenValid()) {\n     await account.generateToken();\n   }\n \n   const currentAccount = await getCurrentAccount(sdk);\n   const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n   setIsBought(response);\n };\n \n const download = async () => {\n   await assets.downloadNFT(ddo.id);\n };\n \n return (\n   <div>\n     {ownNFT1155 ? (\n       <button onClick={download} disabled={isLoadingSDK}>\n         Download NFT\n       </button>\n     ) : (\n       owner !== walletAddress ?\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n     )}\n   </div>\n );\n}\n")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L326"},"types/index.ts:326")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatesdk"},"updateSDK"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"updateSDK"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"newConfig"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Config"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"newConfig"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Rebuild Nevermined sdk with new config values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Update Nevermined sdk again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { updateSDK, isLoadingSDK } = Catalog.useNevermined();\n\n const reloadSdk = async() => {\n    const config = {\n        web3Provider: window.ethereum,\n        nodeUri: network,\n        marketplaceUri,\n        gatewayUri,\n        faucetUri,\n        gatewayAddress,\n        secretStoreUri,\n        verbose,\n        marketplaceAuthToken: Catalog.fetchMarketplaceApiTokenFromLocalStorage().token || '',\n        artifactsFolder,\n        graphHttpUri: graphUrl\n    }\n\n    updateSDK(config)\n  } \n} \n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newConfig")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Config")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Config object to rebuild Nevermined SDK")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L82"},"types/index.ts:82")))}p.isMDXComponent=!0}}]);
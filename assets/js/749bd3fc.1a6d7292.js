"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[1662],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1778:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={},c=void 0,l={unversionedId:"architecture/components/catalog/core/interfaces/NeverminedProviderContext",id:"architecture/components/catalog/core/interfaces/NeverminedProviderContext",title:"NeverminedProviderContext",description:"@nevermined-io/catalog-core / Exports / NeverminedProviderContext",source:"@site/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext.md",sourceDirName:"architecture/components/catalog/core/interfaces",slug:"/architecture/components/catalog/core/interfaces/NeverminedProviderContext",permalink:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NFTDetails",permalink:"/docs/architecture/components/catalog/core/interfaces/NFTDetails"},next:{title:"NeverminedProviderProps",permalink:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderProps"}},d={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"account",id:"account",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"isLoadingSDK",id:"isloadingsdk",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"sdk",id:"sdk",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"sdkError",id:"sdkerror",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"subscribe",id:"subscribe",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"subscription",id:"subscription",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"updateSDK",id:"updatesdk",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-7",level:4}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/"},"@nevermined-io/catalog-core")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules"},"Exports")," / NeverminedProviderContext"),(0,o.kt)("h1",{id:"interface-neverminedprovidercontext"},"Interface: NeverminedProviderContext"),(0,o.kt)("p",null,"Values returns from the main NVM context\nCan be consumed after wrapping your project with the catalog(see setup steps)"),(0,o.kt)("p",null,"example:"),(0,o.kt)("p",null,"option 1: const { sdk, sdkError, isLoadingSdk, ...others } = useContext(Catalog.NeverminedContext)\noption 2: const { sdk, sdkError, isLoadingSdk, ...others } = Catalog.useNevermined()"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#account"},"account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#assets"},"assets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#isloadingsdk"},"isLoadingSDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#sdk"},"sdk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#sdkerror"},"sdkError")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#subscribe"},"subscribe")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#subscription"},"subscription")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/NeverminedProviderContext#updatesdk"},"updateSDK"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"account"},"account"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"account"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/AccountModule"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountModule"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account")," contains all the functionalities to handle authentications and\ncollections belonged to an account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"Authorization example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { assets, account, isLoadingSDK } = Catalog.useNevermined();\n \n const buy = async () => {\n   if (!account.isTokenValid()) {\n     await account.generateToken();\n   }\n \n   (...)\n };\n}\n")),(0,o.kt)("p",null,"Check NFT1155 holder example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { account, isLoadingSDK } = Catalog.useNevermined();\n const [ownNFT1155, setOwnNFT1155] = useState(false);\n \n useEffect(() => {\n   (async () => {\n     const response = await account.isNFT1155Holder(ddo.id, walletAddress);\n     setOwnNFT1155(response);\n   })()\n }, [walletAddress])\n \n}\n")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L260"},"src/types/index.ts:260")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"assets"},"assets"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"assets"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/AssetsModule"},(0,o.kt)("inlineCode",{parentName:"a"},"AssetsModule"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"assets")," contains all the functionalities to handle assets for example get,\nmint, transfer, order or download asset asset"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"Mint an asset example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { isLoadingSDK, sdk, account, assets } = Catalog.useNevermined();\n const [ddo, setDDO] = useState<DDO>({} as DDO)\n \n const metadata: MetaData = {\n   main: {\n     name: '',\n     files: [{\n       index: 0,\n       contentType: 'application/json',\n       url: 'https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/examples/ddo-example.json'\n     }],\n     type: 'dataset',\n     author: '',\n     license: '',\n     dateCreated: new Date().toISOString(),\n     price: ''\n   }\n };\n \n const constructRewardMap = (\n   recipientsData: any[],\n   priceWithoutFee: number,\n   ownerWalletAddress: string\n ): Map<string, BigNumber> => {\n   const rewardMap: Map<string, BigNumber> = new Map();\n   let recipients: any = [];\n   if (recipientsData.length === 1 && recipientsData[0].split === 0) {\n     recipients = [\n       {\n         name: ownerWalletAddress,\n         split: 100,\n         walletAddress: ownerWalletAddress\n       }\n     ];\n   }\n   let totalWithoutUser = 0;\n \n   recipients.forEach((recipient: any) => {\n     if (recipient.split && recipient.split > 0) {\n       const ownSplit = ((priceWithoutFee * recipient.split) / 100).toFixed();\n       rewardMap.set(recipient.walletAddress, BigNumber.from(+ownSplit));\n       totalWithoutUser += recipient.split;\n     }\n   });\n \n   if (!rewardMap.has(ownerWalletAddress)) {\n     const ownSplitReinforced = +((priceWithoutFee * (100 - totalWithoutUser)) / 100).toFixed();\n     rewardMap.set(ownerWalletAddress, BigNumber.from(ownSplitReinforced));\n   }\n \n   return rewardMap;\n };\n \n const mint = async () => {\n   try {\n     const publisher = await getCurrentAccount(sdk);\n     const rewardsRecipients: any[] = [];\n     const assetRewardsMap = constructRewardMap(rewardsRecipients, 100, publisher.getId());\n     const assetRewards = new AssetRewards(assetRewardsMap);\n     const data: MintNFTInput = {\n       metadata,\n       publisher,\n       cap: 100,\n       royalties: 0,\n       nftAmount: 1,\n       preMint: true,\n       erc20TokenAddress: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e', //usdc token\n       //@ts-ignore\n       assetRewards\n     };\n     if (!account.isTokenValid()) {\n       await account.generateToken();\n     }\n     const response = await assets.mint(data);\n     setDDO(response);\n   } catch (error) {\n     console.log('error', error);\n   }\n };\n \n return (\n   <>\n     ...     \n   </>\n );\n};  \n")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L223"},"src/types/index.ts:223")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isloadingsdk"},"isLoadingSDK"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"isLoadingSDK"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"True if sdk is loading"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L44"},"src/types/index.ts:44")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sdk"},"sdk"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"sdk"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Nevermined")),(0,o.kt)("p",null,"Nevermined sdk instance which has all the core functionalities"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L40"},"src/types/index.ts:40")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sdkerror"},"sdkError"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"sdkError"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"any")),(0,o.kt)("p",null,"Error message from sdk"),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L42"},"src/types/index.ts:42")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"subscribe"},"subscribe"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"subscribe"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/SubscribeModule"},(0,o.kt)("inlineCode",{parentName:"a"},"SubscribeModule"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," contains all the functionalities to handle events"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"Subcribe payment event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { subscribe, subscription, account, isLoadingSDK} = Catalog.useNevermined();\n const { paymentEvent, setPaymentEvent } = useState<ContractEventSubscription>();\n\n const buy = async () => {\n  if (!account.isTokenValid()) {\n    await account.generateToken();\n  }\n\n  const currentAccount = await getCurrentAccount(sdk);\n  const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n };\n\n const stopLog = () => {\n   paymentEvent.unsuscribe();\n }\n\n useEffect(() => {\n   if(isLoadingSDK) {\n    return;\n   }\n   (async () => {\n     setPaymentEvent(subscribe.paymentEvents((events)=> {\n       Logger.log(events)\n     }))\n   })()\n }, [isLoadingSDK])\n \n return (\n   <div>\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       <button onClick={stopLog} disabled={isLoadingSDK}>\n         Stop the logs\n       </button>\n   </div>\n );\n}\n")),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L124"},"src/types/index.ts:124")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"subscription"},"subscription"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"subscription"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/SubscriptionActions"},(0,o.kt)("inlineCode",{parentName:"a"},"SubscriptionActions"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscription")," contains all the functionalities to handle asset subscritions by payment"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"Buy subscription example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const BuyAsset = ({ddo}: {ddo: DDO}) => {\n const { assets, account, isLoadingSDK, subscription, sdk } = Catalog.useNevermined();\n const { walletAddress } = MetaMask.useWallet();\n const [ownNFT1155, setOwnNFT1155] = useState(false);\n const [isBought, setIsBought] = useState(false);\n const [owner, setOwner] = useState('');\n \n useEffect(() => {\n   (async () => {\n     setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));\n     setOwner(await sdk.assets.owner(ddo.id))\n   })()\n }, [walletAddress, isBought])\n \n const buy = async () => {\n   if (!account.isTokenValid()) {\n     await account.generateToken();\n   }\n \n   const currentAccount = await getCurrentAccount(sdk);\n   const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n   setIsBought(response);\n };\n \n const download = async () => {\n   await assets.downloadNFT(ddo.id);\n };\n \n return (\n   <div>\n     {ownNFT1155 ? (\n       <button onClick={download} disabled={isLoadingSDK}>\n         Download NFT\n       </button>\n     ) : (\n       owner !== walletAddress ?\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n     )}\n   </div>\n );\n}\n")),(0,o.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L314"},"src/types/index.ts:314")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatesdk"},"updateSDK"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"updateSDK"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"newConfig"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Config"),") => ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"newConfig"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,o.kt)("p",null,"Rebuild Nevermined sdk with new config values"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"Update Nevermined sdk again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { updateSDK, isLoadingSDK } = Catalog.useNevermined();\n\n const reloadSdk = async() => {\n    const config = {\n        web3Provider: window.ethereum,\n        nodeUri: network,\n        marketplaceUri,\n        gatewayUri,\n        faucetUri,\n        gatewayAddress,\n        secretStoreUri,\n        verbose,\n        marketplaceAuthToken: Catalog.fetchMarketplaceApiTokenFromLocalStorage().token || '',\n        artifactsFolder,\n        graphHttpUri: graphUrl\n    }\n\n    updateSDK(config)\n  } \n} \n")),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"newConfig")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Config")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Config object to rebuild Nevermined SDK")))),(0,o.kt)("h5",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,o.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/e8c3c72/lib/src/types/index.ts#L75"},"src/types/index.ts:75")))}m.isMDXComponent=!0}}]);
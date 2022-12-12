"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8203],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(t),m=s,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(87462),s=(t(67294),t(3905));const o={sidebar_position:3},i="Example",r={unversionedId:"catalog/example",id:"catalog/example",title:"Example",description:"Requirements",source:"@site/docs/catalog/example.md",sourceDirName:"catalog",slug:"/catalog/example",permalink:"/docs/catalog/example",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/example.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What can I do with the catalog?",permalink:"/docs/catalog/functionalities"},next:{title:"Demo",permalink:"/docs/catalog/demo"}},l={},d=[{value:"Requirements",id:"requirements",level:2},{value:"How to get the source of this example?",id:"how-to-get-the-source-of-this-example",level:2},{value:"Let&#39;s start with the app config file",id:"lets-start-with-the-app-config-file",level:2},{value:"Setting the networks for web3 providers (optional)",id:"setting-the-networks-for-web3-providers-optional",level:2},{value:"The example file",id:"the-example-file",level:2},{value:"SDKInstance",id:"sdkinstance",level:3},{value:"SingleAsset",id:"singleasset",level:3},{value:"PublishAsset",id:"publishasset",level:3},{value:"BuyAsset",id:"buyasset",level:3},{value:"MMWallet",id:"mmwallet",level:3},{value:"App",id:"app",level:3},{value:"Complete example file",id:"complete-example-file",level:3},{value:"Styling",id:"styling",level:2},{value:"The index file",id:"the-index-file",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"example"},"Example"),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Before you start with this demo you require:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An extension of ",(0,s.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," installed in your browser"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"node")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," needs to be installed")),(0,s.kt)("h2",{id:"how-to-get-the-source-of-this-example"},"How to get the source of this example?"),(0,s.kt)("p",null,"You can install the example in your local machine and run it without installing anything. Information for how to do this can be found here ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/create-nevermined-react"},"here")),(0,s.kt)("h2",{id:"lets-start-with-the-app-config-file"},"Let's start with the app config file"),(0,s.kt)("p",null,"The first file that you need to create is the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.ts")," file which contains all the ",(0,s.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/Config"},"options needed")," to initialize the ",(0,s.kt)("a",{parentName:"p",href:"/docs/catalog/core/"},"Catalog core"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Config } from '@nevermined-io/nevermined-sdk-js'\nimport { AuthToken } from '@nevermined-io/catalog-core'\nimport { ethers } from 'ethers'\n\nexport const web3ProviderUri = process.env.REACT_APP_NODE_URI || 'https://matic-mumbai.chainstacklabs.com'\nexport const nodeAddress =\n  process.env.REACT_APP_GATEWAY_ADDRESS || '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc'\nexport const neverminedNodeUri =\n  process.env.REACT_APP_GATEWAY_URI || 'https://node.mumbai.public.nevermined.network'\nexport const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001' // for Mumbai\nexport const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445'\nexport const marketplaceUri = 'https://marketplace-api.mumbai.public.nevermined.network'\nconst graphHttpUri = process.env.GRAPH_HTTP_URI ||  'https://api.thegraph.com/subgraphs/name/nevermined-io/public'\n// represent USDC token in mumbai that can be claimed in the faucet https://calibration-faucet.filswan.com/#/dashboard\nexport const erc20TokenAddress = process.env.ERC20_TOKEN_ADDRESS || '0xe11a86849d99f524cac3e7a0ec1241828e332c62'\n\nexport const appConfig: Config = {\n  //@ts-ignore\n  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),\n  neverminedNodeUri,\n  nodeAddress,\n  graphHttpUri,\n  marketplaceAuthToken: AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,\n  marketplaceUri,\n  artifactsFolder: `${rootUri}/contracts`,\n  newGateway: true,\n}\n")),(0,s.kt)("h2",{id:"setting-the-networks-for-web3-providers-optional"},"Setting the networks for web3 providers (optional)"),(0,s.kt)("p",null,"The next step is setting differents networks for the dapp ",(0,s.kt)("a",{parentName:"p",href:"https://polygon.technology/"},"polygon")," which does not require this file. However, we have included it in the example as it contains the networks settings for web3 providers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { Wagmi } from \'@nevermined-io/catalog-providers\'\n\nconst ChainsConfig: Wagmi.Chain[] = [\n  Wagmi.chain.polygon,\n  Wagmi.chain.polygonMumbai,\n  {\n    id: 1337,\n    name: "Localhost development",\n    network: "spree",\n    nativeCurrency: {\n      name: "Ethereum",\n      symbol: "ETH",\n      decimals: 18,\n    },\n    rpcUrls: {\n      default: "http://localhost:8545"\n    },\n    testnet: true\n  },\n]\n\nexport default ChainConfig\n')),(0,s.kt)("h2",{id:"the-example-file"},"The example file"),(0,s.kt)("p",null,"The example file ",(0,s.kt)("inlineCode",{parentName:"p"},"src/example/index.tsx")," contains all the basic logic to handle a ",(0,s.kt)("a",{parentName:"p",href:"/docs/architecture/what-can-i-do#tokenization-of-assets-via-erc-1155-nfts-aka-nft-sales"},"NFT1155")," as a component. It outlines each functionality and component in detail."),(0,s.kt)("h3",{id:"sdkinstance"},"SDKInstance"),(0,s.kt)("p",null,"This component will check if ",(0,s.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/getting-started"},"sdk")," is loaded or not and display the status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const SDKInstance = () => {\n  const { sdk, isLoadingSDK } = Catalog.useNevermined()\n\n  return (\n    <>\n      <UiLayout>\n        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>\n        <UiText>{isLoadingSDK ? 'Yes' : 'No'}</UiText>\n      </UiLayout>\n\n      <UiLayout>\n        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>\n        <UiText>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>\n      </UiLayout>\n    </>\n  )\n}\n")),(0,s.kt)("h3",{id:"singleasset"},"SingleAsset"),(0,s.kt)("p",null,"It shows the content of the ddo object published"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const SingleAsset = ({ddo}: {ddo: DDO}) => {\n\n  return (\n    <>\n      <UiLayout>\n        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>\n      </UiLayout>\n      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>\n    </>\n  )\n}\n")),(0,s.kt)("h3",{id:"publishasset"},"PublishAsset"),(0,s.kt)("p",null,"It renders a button used to publish a new ",(0,s.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-NFT"},"NFT")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const PublishAsset = ({onPublish}: {onPublish: () => void}) => {\n  const { assets } = Catalog.useNevermined()\n\n  return (\n    <>\n      <UiButton onClick={onPublish} disabled={!Object.keys(assets).length}>\n        mint\n      </UiButton>\n    </>\n  )\n}\n")),(0,s.kt)("h3",{id:"buyasset"},"BuyAsset"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"BuyAsset")," component will display the button ",(0,s.kt)("inlineCode",{parentName:"p"},"buy")," in order to buy the asset if the wallet account is not a NFT1155 holder. Otherwise, the owner will display a download button to download the NFT asset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const BuyAsset = ({ddo}: {ddo: DDO}) => {\n  const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined()\n  const { walletAddress } = MetaMask.useWallet()\n  const [ownNFT1155, setOwnNFT1155] = useState(false)\n  const [isBought, setIsBought] = useState(false)\n  const [owner, setOwner] = useState('')\n  \n  useEffect(() => {\n    (async () => {\n      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress))\n      setOwner(await sdk.assets.owner(ddo.id))\n    })()\n  }, [walletAddress, isBought])\n\n  const buy = async () => {\n    const response = await nfts.access(ddo.id, owner, BigNumber.from(1), 1155)\n    setIsBought(Boolean(response))\n  }\n\n  const download = async () => {\n    await assets.downloadNFT(ddo.id)\n  }\n\n  return (\n    <UiLayout className={b('buy')}>\n      {ownNFT1155 ? (\n        <UiButton onClick={download} disabled={isLoadingSDK}>\n          Download NFT\n        </UiButton>\n      ) : (\n        owner !== walletAddress ?\n        <UiButton onClick={buy} disabled={isLoadingSDK}>\n          buy\n        </UiButton>\n        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n      )}\n    </UiLayout>\n  )\n}\n")),(0,s.kt)("h3",{id:"mmwallet"},"MMWallet"),(0,s.kt)("p",null,"An important component for connecting to the wallet. Upon connecting, the app will display the address account. Otherwise it will render a button to connect to it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const MMWallet = () => {\n  const { login, walletAddress, getConnectors } = useWallet()\n  return (\n    <UiLayout>\n      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>\n      <UiText>{walletAddress}</UiText>\n      {!walletAddress && <UiButton type='secondary' onClick={() => login(getConnectors()[0])}>Connect To MM</UiButton>}\n    </UiLayout>\n  )\n}\n")),(0,s.kt)("h3",{id:"app"},"App"),(0,s.kt)("p",null,"The main component of the example, it pulls the rest of the components and also includes the function ",(0,s.kt)("inlineCode",{parentName:"p"},"onPublish")," with the logic to publish a NFT1155 which is transferred as a parameter to the component ",(0,s.kt)("a",{parentName:"p",href:"#publishasset"},"PublisAsset")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const { isLoadingSDK, sdk } = Catalog.useNevermined()\n  const { publishNFT1155 } = AssetService.useAssetPublish()\n  const { walletAddress } = useWallet()\n  const [ddo, setDDO] = useState<DDO>({} as DDO)\n  const royaltyAttributes = {\n    royaltyKind: RoyaltyKind.Standard,\n    scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),\n    amount: 0,\n  }\n\n  const metadata: MetaData = {\n    main: {\n      name: '',\n      files: [{\n        index: 0,\n        contentType: 'application/json',\n        url: 'https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg'\n      }],\n      type: 'dataset',\n      author: '',\n      license: '',\n      dateCreated: new Date().toISOString(),\n    }\n  }\n\n  const onPublish = async () => {\n    try {\n      // Here we set the rewards that will receive the publisher\n      const assetRewardsMap = new Map([\n        [walletAddress, BigNumber.from(1)]\n      ])\n      const assetRewards = new AssetRewards(assetRewardsMap)\n\n      // We need to set network fees\n      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()\n      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()\n      assetRewards.addNetworkFees(feeReceiver, BigNumber.from(networkFee))\n\n      // This set the royalties that will receive for each sold\n      const royaltyAttributes = {\n        royaltyKind: RoyaltyKind.Standard,\n        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),\n        amount: 0,\n      }\n\n      const response = await publishNFT1155({\n        nodeAddress: String(appConfig.nodeAddress),\n        assetRewards,\n        metadata,\n        nftAmount: BigNumber.from(1),\n        preMint: true,\n        cap: BigNumber.from(100),\n        royaltyAttributes,\n        erc20TokenAddress,\n      })\n\n      setDDO(response as DDO)\n    } catch (error) {\n      console.log('error', error)\n    }\n  }\n\n  return (\n    <div className={b('container')}>\n      <SDKInstance />\n      <MMWallet />\n      {walletAddress && !ddo.id && (\n        <PublishAsset onPublish={onPublish} />\n      )}\n      {!isLoadingSDK && ddo?.id &&  (\n        <>\n          <SingleAsset ddo={ddo}/>\n          <BuyAsset ddo={ddo}/>\n        </>\n      )}\n      \n    </div>\n  )\n}\n\nexport default App\n")),(0,s.kt)("h3",{id:"complete-example-file"},"Complete example file"),(0,s.kt)("p",null,"Now let's put everything together."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards'\nimport React, { useEffect, useState } from 'react'\nimport { Catalog, AssetService, RoyaltyKind, BigNumber, getRoyaltyScheme, MetaData, DDO } from '@nevermined-io/catalog-core'\nimport { useWallet } from '@nevermined-io/catalog-providers'\nimport { UiText, UiLayout, BEM, UiButton } from '@nevermined-io/styles'\nimport styles from './example.module.scss'\nimport { appConfig } from './config'\n\nconst ERC_TOKEN = '0xe11a86849d99f524cac3e7a0ec1241828e332c62'\n\nconst b = BEM('example', styles)\n\nconst SDKInstance = () => {\n  const { sdk, isLoadingSDK } = Catalog.useNevermined()\n\n  return (\n    <>\n      <UiLayout>\n        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>\n        <UiText>{isLoadingSDK ? 'Yes' : 'No'}</UiText>\n      </UiLayout>\n\n      <UiLayout>\n        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>\n        <UiText>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>\n      </UiLayout>\n    </>\n  )\n}\n\nconst SingleAsset = ({ddo}: {ddo: DDO}) => {\n\n  return (\n    <>\n      <UiLayout>\n        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>\n      </UiLayout>\n      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>\n    </>\n  )\n}\n\nconst PublishAsset = ({onPublish}: {onPublish: () => void}) => {\n  const { assets } = Catalog.useNevermined()\n\n  return (\n    <>\n      <UiButton onClick={onPublish} disabled={!Object.keys(assets).length}>\n        mint\n      </UiButton>\n    </>\n  )\n}\n\nconst BuyAsset = ({ddo}: {ddo: DDO}) => {\n  const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined()\n  const { walletAddress } = MetaMask.useWallet()\n  const [ownNFT1155, setOwnNFT1155] = useState(false)\n  const [isBought, setIsBought] = useState(false)\n  const [owner, setOwner] = useState('')\n  \n  useEffect(() => {\n    (async () => {\n      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress))\n      setOwner(await sdk.assets.owner(ddo.id))\n    })()\n  }, [walletAddress, isBought])\n\n  const buy = async () => {\n\n    const response = await nfts.access(ddo.id, owner, BigNumber.from(1), 1155)\n    setIsBought(Boolean(response))\n  }\n\n  const download = async () => {\n    await assets.downloadNFT(ddo.id)\n  }\n\n  return (\n    <UiLayout className={b('buy')}>\n      {ownNFT1155 ? (\n        <UiButton onClick={download} disabled={isLoadingSDK}>\n          Download NFT\n        </UiButton>\n      ) : (\n        owner !== walletAddress ?\n        <UiButton onClick={buy} disabled={isLoadingSDK}>\n          buy\n        </UiButton>\n        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n      )}\n    </UiLayout>\n  )\n}\n\nconst MMWallet = () => {\n  const { login, walletAddress, getConnectors } = useWallet()\n  return (\n    <UiLayout>\n      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>\n      <UiText>{walletAddress}</UiText>\n      {!walletAddress && <UiButton type='secondary' onClick={() => login(getConnectors()[0])}>Connect To MM</UiButton>}\n    </UiLayout>\n  )\n}\n\nconst App = () => {\n  const { isLoadingSDK, sdk } = Catalog.useNevermined()\n  const { publishNFT1155 } = AssetService.useAssetPublish()\n  const { walletAddress } = useWallet()\n  const [ddo, setDDO] = useState<DDO>({} as DDO)\n\n  const metadata: MetaData = {\n    main: {\n      name: '',\n      files: [{\n        index: 0,\n        contentType: 'application/json',\n        url: 'https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg'\n      }],\n      type: 'dataset',\n      author: '',\n      license: '',\n      dateCreated: new Date().toISOString(),\n    }\n  }\n\n  const onPublish = async () => {\n    try {\n      const assetRewardsMap = new Map([\n        [walletAddress, BigNumber.from(1)]\n      ])\n      const assetRewards = new AssetRewards(assetRewardsMap)\n\n      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()\n      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()\n      assetRewards.addNetworkFees(feeReceiver, BigNumber.from(networkFee))\n\n      const royaltyAttributes = {\n        royaltyKind: RoyaltyKind.Standard,\n        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),\n        amount: 0,\n      }\n\n      const response = await publishNFT1155({\n        neverminedNodeAddress: String(appConfig.neverminedNodeAddress),\n        assetRewards,\n        metadata,\n        nftAmount: BigNumber.from(1),\n        preMint: true,\n        cap: BigNumber.from(100),\n        royaltyAttributes,\n        erc20TokenAddress,\n      })\n\n      setDDO(response as DDO)\n    } catch (error) {\n      console.log('error', error)\n    }\n  }\n\n  return (\n    <div className={b('container')}>\n      <SDKInstance />\n      <MMWallet />\n      {walletAddress && !ddo.id && (\n        <PublishAsset onPublish={onPublish} />\n      )}\n      {!isLoadingSDK && ddo?.id &&  (\n        <>\n          <SingleAsset ddo={ddo}/>\n          <BuyAsset ddo={ddo}/>\n        </>\n      )}\n      \n    </div>\n  )\n}\n\nexport default App\n")),(0,s.kt)("h2",{id:"styling"},"Styling"),(0,s.kt)("p",null,"In the path ",(0,s.kt)("inlineCode",{parentName:"p"},"src/examples/example.module.scss")," you will find some styles to improve the UI of the app."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@import '~@nevermined-io/styles/lib/cjs/styles/index.scss'\n\n.example {\n  @include component;\n\n  &__container {\n    padding: 25px 0 0 25px;\n  }\n\n  &__detail {\n    margin-right: 5px;\n  }\n\n  &__ddo {\n    line-height: 16px;\n  }\n\n  &__buy {\n    margin-top: 20px;\n  }\n}\n")),(0,s.kt)("h2",{id:"the-index-file"},"The index file"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"src/indes.tsx")," file call Catalog core, Catalog providers and the exemple component with the configurations set"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@nevermined-io/styles/lib/esm/styles/globals.scss'\nimport '@nevermined-io/styles/lib/esm/index.css'\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Catalog, AssetService } from '@nevermined-io/catalog-core'\nimport { appConfig } from './config'\nimport App from 'examples'\nimport { WalletProvider, getClient } from '@nevermined-io/catalog-providers'\nimport ChainConfig from './chain_config'\n\n\nReactDOM.render(\n  <div>\n    <Catalog.NeverminedProvider config={appConfig} verbose={true}>\n      <AssetService.AssetPublishProvider>\n        <WalletProvider\n          client={getClient('My Nevermined App', true, ChainConfig)}\n        >\n          <App/>\n        </WalletProvider>\n      </AssetService.AssetPublishProvider>\n    </Catalog.NeverminedProvider>\n  </div>,\n  document.getElementById('root') as HTMLElement\n)\n")))}p.isMDXComponent=!0}}]);
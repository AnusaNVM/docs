"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[3911],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3158:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],s={sidebar_position:6,description:"Nevermined enables the execution of computation remotely in a privacy preserving manner"},l="Remote Computation",c={unversionedId:"overview/remote-computation",id:"overview/remote-computation",title:"Remote Computation",description:"Nevermined enables the execution of computation remotely in a privacy preserving manner",source:"@site/docs/overview/remote-computation.md",sourceDirName:"overview",slug:"/overview/remote-computation",permalink:"/docs/overview/remote-computation",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/overview/remote-computation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Nevermined enables the execution of computation remotely in a privacy preserving manner"},sidebar:"tutorialSidebar",previous:{title:"Data Sharing",permalink:"/docs/overview/data-sharing"},next:{title:"Digital Assets Marketplaces",permalink:"/docs/overview/marketplace"}},d={},p=[{value:"Example in action: Credit Card fraud dectection",id:"example-in-action-credit-card-fraud-dectection",level:2},{value:"How Nevermined helps to resolve this",id:"how-nevermined-helps-to-resolve-this",level:3}],u={toc:p};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remote-computation"},"Remote Computation"),(0,r.kt)("p",null,"When sharing data is not an option because of privacy constraints, permitting an algorithm to compute on a data set you can\u2019t see is a rational alternative. There are many different possibilities and technical solutions for this depending on the computation being executed, like a simple aggregation or a fully-fledged analytics process using Spark or similar, as well as the privacy constraints of the data."),(0,r.kt)("p",null,"To deliver this type of sophisticated solution involves the orchestration of computation techniques, ",(0,r.kt)("strong",{parentName:"p"},"Federated Learning"),", and on-chain computation. What pattern is leveraged depends entirely on the use case."),(0,r.kt)("p",null,"What is important is to understand the use case, what limitations or requirements are implied, and how to enable computation in a frictionless manner."),(0,r.kt)("p",null,"The main intention here is to support use cases such as the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I work in the payments department of a bank. I have a model that can detect 50% of the frauds happening using the bank\u2019s credit card transactions. If I could train my model in a privacy-preserving manner on top of other banks\u2019 credit card transactions, I could improve the accuracy of my model, detect more fraudulent transactions and save a pile of money. I could also sell my model to the banks that share their data!"),(0,r.kt)("li",{parentName:"ul"},"I work in a distribution center where COVID vaccines are received before local distribution. I would like to run a query against the temperature sensors of the carrier to check that temperature was always within the appropriate temperature range, and flag for further analysis any shipment that fails acceptance criteria.")),(0,r.kt)("p",null,"For example, in the drug shipping use case, being able to orchestrate temperature threshold calculations across numerous providers\u2019 datasets could help flag a problem with the shipment before it becomes a problem. However, knowing which dataset provided the flagging information could be kept private through aggregation techniques, etc. This type of capability could limit the risk exposure of any given data provider within the supply chain."),(0,r.kt)("h2",{id:"example-in-action-credit-card-fraud-dectection"},"Example in action: Credit Card fraud dectection"),(0,r.kt)("p",null,"In this example we are going to allow the training of a Credit Card Fraud Detection model on top of private data of different banks without moving this data around. Nevermined allows to achieve that via ",(0,r.kt)("strong",{parentName:"p"},"Federated Learning")," orchestration."),(0,r.kt)("p",null,"One of the biggest traditional problems is when we try to train a model and we don't have enough amounts of data. In our example imagine we have two banks: Bank A and Bank B. Both of these banks have large amounts of credit card transactions that they aren\u2019t really leveraging for machine learning purposes because they either lack the data science expertise or they are afraid of the penalties that may arise from mishandling the data under data protection laws."),(0,r.kt)("p",null,"Now we introduce a third party: a Data Scientist. The Data Scientist wants to build a service that can automatically flag fraudulent credit card transactions with a high degree of accuracy. Knowing the typical features that should be present in every credit card transaction, he already built a model using scikit-learn."),(0,r.kt)("p",null,"Now the biggest challenge becomes getting access to real data so that he can use it to train the model to be able to make predictions with a high degree of accuracy. Banks won\u2019t and can\u2019t share this type of data with third parties, so the data scientist hits a roadblock."),(0,r.kt)("p",null,"Currently, there exists the capability to perform privacy-preserving machine learning through Federated Learning. Federated Learning can be seen as a form of privacy-preserving distributed machine learning. A machine learning model is trained in parallel over multiple data sets. The individual weights resulting from the training over each dataset are then aggregated in a privacy-preserving manner and this produces the final trained model."),(0,r.kt)("p",null,"However, orchestrating this type of analytical application is difficult. Orchestrating this type of analytical application across disparate datasets controlled by independent counterparties is virtually impossible."),(0,r.kt)("p",null,"To summarize our use-case:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have a ",(0,r.kt)("strong",{parentName:"li"},"data scientist that requires a large amount of private data")," to train a model"),(0,r.kt)("li",{parentName:"ul"},"We have ",(0,r.kt)("strong",{parentName:"li"},"two distinct banks"),", Bank A and Bank B, ",(0,r.kt)("strong",{parentName:"li"},"with their own distinct infrastructure and data assets"),", and they would like to monetize their data\n** We need a system that allows for: interoperable data sharing between multiple parties; data monetization; an interface to run code spanning multiple organizations")),(0,r.kt)("h3",{id:"how-nevermined-helps-to-resolve-this"},"How Nevermined helps to resolve this"),(0,r.kt)("p",null,"With Nevermined\u2019s Data Sharing capabilities, both Bank A and B can both advertise their assets and monetize their data without having to move or change their existing infrastructure, this turning them into data providers. And Nevermined\u2019s ",(0,r.kt)("strong",{parentName:"p"},"Data In Situ Computation (DISC)")," capability allows for consumers of the data, like the Data Scientist, to run generic computations (inside the scope allowed by the data providers) ",(0,r.kt)("strong",{parentName:"p"},"without ever having to access the data directly"),"."),(0,r.kt)("p",null,"This means that private data remains private as it does not need to move. Now the Data Scientist has a single interface that he can use to train his model over data from multiple, wholly distinct and independent organizations. All the heavy lifting of orchestrating a Federated Learning session spanning multiple organizations is handled by Nevermined. This means the Data Scientist only needs to reuse his existing machine learning code and tools with little to no modification."))}h.isMDXComponent=!0}}]);
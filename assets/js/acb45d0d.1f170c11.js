"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[776],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||r;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7374:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),o=["components"],d={sidebar_position:6,description:"Federated Learning Orchestration"},c="Federated Learning Orchestration",s={unversionedId:"architecture/specs/Spec-FL",id:"architecture/specs/Spec-FL",title:"Federated Learning Orchestration",description:"Federated Learning Orchestration",source:"@site/docs/architecture/specs/Spec-FL.md",sourceDirName:"architecture/specs",slug:"/architecture/specs/Spec-FL",permalink:"/docs/architecture/specs/Spec-FL",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/specs/Spec-FL.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Federated Learning Orchestration"},sidebar:"tutorialSidebar",previous:{title:"Data in situ Computation",permalink:"/docs/architecture/specs/Spec-COMPUTE"},next:{title:"Decentralized Data Provenance",permalink:"/docs/architecture/specs/Spec-PROVENANCE"}},l={},u=[{value:"Federated Learning integration in the Nevermined Data in Situ Computation",id:"federated-learning-integration-in-the-nevermined-data-in-situ-computation",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Actors",id:"actors",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Running the Coordinator",id:"running-the-coordinator",level:3},{value:"Flow",id:"flow",level:3},{value:"Running the Participants",id:"running-the-participants",level:3},{value:"Flow",id:"flow-1",level:3},{value:"Federated Learning Session Flow",id:"federated-learning-session-flow",level:2},{value:"Federated Learning DDOs",id:"federated-learning-ddos",level:2},{value:"Coordinator Consumer DDO",id:"coordinator-consumer-ddo",level:3},{value:"Coordinator Provider DDO",id:"coordinator-provider-ddo",level:3},{value:"Participant Consumer DDO",id:"participant-consumer-ddo",level:3},{value:"Participant Provider DDO",id:"participant-provider-ddo",level:3}],p={toc:u};function f(e){var n=e.components,d=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,d,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"federated-learning-orchestration"},"Federated Learning Orchestration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shortname:      FL\nname:           Nevermined Federated Learning Orchestration\ntype:           Draft\nstatus:         Valid\nversion:        0.1\neditor:         Rodolphe Marques <rodolphe@nevermined.io>\ncontributors:   Aitor Argomaniz <aitor@nevermined.io>,\n                Enrique Ruiz <kike@nevermined.io>\n")),(0,r.kt)("h2",{id:"federated-learning-integration-in-the-nevermined-data-in-situ-computation"},"Federated Learning integration in the Nevermined Data in Situ Computation"),(0,r.kt)("p",null,"This SPEC introduces the integration pattern for the usage a Federated Learning\nbackend in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-COMPUTE"},"Nevermined DISC architecture"),"."),(0,r.kt)("p",null,"The Nevermined Data in Situ Computation solution introduces a solution where\ndifferent compute backends can be plugged in order to support different remote\ncomputation use cases.   "),(0,r.kt)("p",null,"This spec details how Federated Learning sessions could be executed on\nNevermined."),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Coordinator"),": All the components required to perform the coordination of a\nFederated Learning session. The components provided by the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/keyko-io/xain-fl"},"xain-fl")," framework (coordinator +\naggregator)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Participant"),": Component responsible for interacting with the coordinator\nand executing the machine learning task over the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Federated Learning Session"),": The time from setup of the coordinator to the\nsuccessful execution of the machine learning plan. Typically this involves\ncoordinating the participants for a finite number or rounds and then storing\nthe resulting model")),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"The main motivations of this SPEC are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identify the actors involved in the execution of a Federated Learning session\non Nevermined"),(0,r.kt)("li",{parentName:"ul"},"Identify the integration points between the xain framework components and the\nNevermined components"),(0,r.kt)("li",{parentName:"ul"},"Detail the execution flow of a Federated Learning session on Nevermined")),(0,r.kt)("h2",{id:"actors"},"Actors"),(0,r.kt)("p",null,"The different actors interacting in this flow are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PROVIDERS: Give access to the Compute Services and to the data"),(0,r.kt)("li",{parentName:"ul"},"CONSUMERS: Want to make use of the Compute Services and access to data"),(0,r.kt)("li",{parentName:"ul"},"MARKETPLACE or DOMAINS: Store the DDO/Metadata related to the Assets/services"),(0,r.kt)("li",{parentName:"ul"},"INFRASTRUCTURE: Infrastructure required to run the Nevermined compute stack")),(0,r.kt)("p",null,"Here we may have two types of providers. A normal provider like the one\nspecified in Data in Situ Computation spec. And another type of provider that only\nprovides compute but now access to the data (to run the coordinator)."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("h3",{id:"running-the-coordinator"},"Running the Coordinator"),(0,r.kt)("p",null,"This section details how a Client/Data Scientist can setup and run a Coordinator\nusing Nevermined Compute."),(0,r.kt)("p",null,"The main requirements are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A COMPUTE PROVIDER or PROVIDER defines the conditions that a Compute service\nsupports. It includes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"What kind of image (Docker container) can be deployed in the infrastructure"),(0,r.kt)("li",{parentName:"ul"},"What are the infrastructure resources available (CPU, memory, storage)"),(0,r.kt)("li",{parentName:"ul"},"What is the price of using the infrastructure resources"),(0,r.kt)("li",{parentName:"ul"},"Allow incoming connections for the Participants"))),(0,r.kt)("li",{parentName:"ul"},"A COMSUMER defines the parameters of the coordinator and creates an execution\nworkflow using a predefined coordinator workflow template",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a different type of workflow with no inputs, outputs and access to\ndata"))),(0,r.kt)("li",{parentName:"ul"},"A CONSUMER purchasing a compute service defines which Workflow (DID) is going\nto execute")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting up the Coordinator",src:t(2285).Z,width:"960",height:"540"})),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The CONSUMER / Data Scientist locks the payment for the service"),(0,r.kt)("li",{parentName:"ol"},"The CONSUMER / Data scientist provides a DID for the workflow to execute",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The gateway could potentially provide specific endpoints for this since the\nworkflow is always the same. The only thing that changes is the parameters to\nconfigure the coordinator"))),(0,r.kt)("li",{parentName:"ol"},"The Gateway checks if the CONSUMER / Data scientist as the permissions to\nstart a new coordinator"),(0,r.kt)("li",{parentName:"ol"},"The Nevermined compute stack starts a new coordinator"),(0,r.kt)("li",{parentName:"ol"},"The url to connect to the coordinator is published (need to figure out how)"),(0,r.kt)("li",{parentName:"ol"},"In the meantime participants will connect to the coordinator and the coordinator will orchestrate the Federated Learning session"),(0,r.kt)("li",{parentName:"ol"},"After the Federated Learning session is finished the coordinator publishes the resulting trained model and shuts down.")),(0,r.kt)("h3",{id:"running-the-participants"},"Running the Participants"),(0,r.kt)("p",null,"This section details how a Client/Data Scientist can setup and run a set of\nParticipants using Nevermined Compute."),(0,r.kt)("p",null,"This should be simpler to integrate because it\u2019s very similar to the data in\nsitu computation use case. The main difference being that the algorithm is actually\nwrapped around the xain python sdk and it needs to be able to perform outgoing\nnetwork connection to connect to the coordinator."),(0,r.kt)("p",null,"The main requirements are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PROVIDER defines the conditions that a Compute service supports. It includes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"What kind of image (Docker container) can be deployed in the infrastructure"),(0,r.kt)("li",{parentName:"ul"},"What are the infrastructure resources available (CPU, memory, storage)"),(0,r.kt)("li",{parentName:"ul"},"What is the price of using the infrastructure resources"))),(0,r.kt)("li",{parentName:"ul"},"A COMPUTE PROVIDER defines a Compute Service in the scope of the Asset\n(DID/DDO) of the dataset that can be computed"),(0,r.kt)("li",{parentName:"ul"},"A CONSUMER defines the task to execute modeling it in a Workflow (including\nconfiguration, input, participant)"),(0,r.kt)("li",{parentName:"ul"},"In this case the transformation is just the participant code"),(0,r.kt)("li",{parentName:"ul"},"It does not need to produce any output since that is handled by the\ncoordinator"),(0,r.kt)("li",{parentName:"ul"},"A workflow is a new type of Asset. It can be resolvable and be used across\nmultiple independent compute services"),(0,r.kt)("li",{parentName:"ul"},"A CONSUMER purchasing a compute service defines which Workflow (DID) is going\nto execute")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Running the participants",src:t(3701).Z,width:"960",height:"540"})),(0,r.kt)("h3",{id:"flow-1"},"Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The CONSUMER / Data Scientist locks the payment"),(0,r.kt)("li",{parentName:"ol"},"The CONSUMER / Data Scientist requests the execution of the participant"),(0,r.kt)("li",{parentName:"ol"},"The Gateway checks if the CONSUMER / Data Scientist has the permissions to\nexecute the participant on the data"),(0,r.kt)("li",{parentName:"ol"},"The Nevermined compute sets up the environment"),(0,r.kt)("li",{parentName:"ol"},"The participants access the data and performs the machine learning task"),(0,r.kt)("li",{parentName:"ol"},"The participant needs to be able to communicate with the coordinator\nthroughout the entire Federated Learning session."),(0,r.kt)("li",{parentName:"ol"},"The coordinator will be external to the Infrastructure Provider"),(0,r.kt)("li",{parentName:"ol"},"The participant does not need to create a new asset since that is handled by\nthe coordinator")),(0,r.kt)("h2",{id:"federated-learning-session-flow"},"Federated Learning Session Flow"),(0,r.kt)("p",null,"This section details a high level overview of a Federated Learning Session using\ntwo different data providers."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"Federated Learning Session Flow",src:t(3683).Z,width:"960",height:"540"})),(0,r.kt)("p",null,"The Data Scientist starts by finding a provider to run the Coordinator compute\njob and the data that it requires (possibly using the marketplace)."),(0,r.kt)("p",null,"The flow is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Data Scientist starts by setting the execution parameters for the coordinator and publishes it as a workflow/ddo"),(0,r.kt)("li",{parentName:"ol"},"The Data Scientist purchases data in situ computation for both Data Provider X and Y and defines the workflow/ddo with the code that will run the participants"),(0,r.kt)("li",{parentName:"ol"},"The Data Scientist purchases the Coordinator compute service"),(0,r.kt)("li",{parentName:"ol"},"The Data Scientist starts the Coordinator"),(0,r.kt)("li",{parentName:"ol"},"The Data Scientist starts the participants"),(0,r.kt)("li",{parentName:"ol"},"The Participants work together with the coordinator over the course of multiple rounds as defined in point 1."),(0,r.kt)("li",{parentName:"ol"},"Once all rounds are finished the Coordinator publishes the final trained model"),(0,r.kt)("li",{parentName:"ol"},"The Data Scientist fetches the trained model.")),(0,r.kt)("h2",{id:"federated-learning-ddos"},"Federated Learning DDOs"),(0,r.kt)("p",null,"This section details the both the consumer and provider DDOs for coordinator\nand participant."),(0,r.kt)("h3",{id:"coordinator-consumer-ddo"},"Coordinator Consumer DDO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serviceAgreementId": "bb23s87856d59867503f80a690357406857698570b964ac8dcc9d86da4ada010",\n  "workflow": {\n    "@context": "https://w3id.org/future-method/v1",\n    "authentication": [],\n    "created": "2019-04-09T19:02:11Z",\n    "id": "did:nv:8d1b4d73e7af4634958f071ab8dfe7ab0df14019755e444090fd392c8ec9c3f4",\n    "proof": {\n      "created": "2019-04-09T19:02:11Z",\n      "creator": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",\n      "signatureValue": "1cd57300733bcbcda0beb59b3e076de6419c0d7674e7befb77820b53c79e3aa8f1776effc64cf088bad8cb694cc4d71ebd74a13b2f75893df5a53f3f318f6cf828",\n      "type": "DDOIntegritySignature"\n    },\n    "publicKey": [\n      {\n        "id": "did:nv:8d1b4d73e7af4634958f071ab8dfe7ab0df14019755e444090fd392c8ec9c3f4",\n        "owner": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",\n        "type": "EthereumECDSAKey"\n      }\n    ],\n    "service": [\n      {\n        "index": 0,\n        "serviceEndpoint": "http://172.15.0.15:5000/api/v1/metadata/assets/ddo/did:nv:8d1b4d73e7af4634958f071ab8dfe7ab0df14019755e444090fd392c8ec9c3f4",\n        "type": "metadata",\n        "attributes": {\n          "main": {\n            "dateCreated": "2012-10-10T17:00:00Z",\n            "type": "fl-coordinator",\n            "datePublished": "2019-04-09T19:02:11Z",\n            "parameters": {\n              "minParticipants": 1,\n              "participantsRatio": 1,\n              "rounds": 10,\n            }\n            "workflow": {\n              "stages": [\n                {\n                  "index": 0,\n                  "requirements": {\n                    "serverInstances": 1,\n                    "container": {\n                      "image": "keykoio/xain-fl",\n                      "tag": "latest",\n                      "checksum": "sha256:cb57ecfa6ebbefd8ffc7f75c0f00e57a7fa739578a429b6f72a0df19315deadc"\n                    }\n                  }\n                }\n              ]\n            }\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The main information that needs to be provided is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag"),": The version of the ",(0,r.kt)("inlineCode",{parentName:"li"},"xain-fl")," image to use"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minParticipants"),": The minimum number of participants required by the\ncoordinator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"participantsRation"),": The ratio of participants that will be selected in\nevery round"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rounds"),": The number of rounds the coordinator should do")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"service.main.type")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"fl-coordinator")," to indicate this is\nnot a normal workflow")),(0,r.kt)("h3",{id:"coordinator-provider-ddo"},"Coordinator Provider DDO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://w3id.org/future-method/v1",\n  "authentication": [],\n  "created": "2019-04-09T19:02:11Z",\n  "id": "did:op:8d1b4d73e7af4634958f071ab8dfe7ab0df14019755e444090fd392c8ec9c3f4",\n  "proof": {\n    "created": "2019-04-09T19:02:11Z",\n    "creator": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",\n    "signatureValue": "1cd57300733bcbcda0beb59b3e076de6419c0d7674e7befb77820b53c79e3aa8f1776effc64cf088bad8cb694cc4d71ebd74a13b2f75893df5a53f3f318f6cf828",\n    "type": "DDOIntegritySignature"\n  },\n  "publicKey": [\n    {\n      "id": "did:op:8d1b4d73e7af4634958f071ab8dfe7ab0df14019755e444090fd392c8ec9c3f4",\n      "owner": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",\n      "type": "EthereumECDSAKey"\n    }\n  ],\n  "service": [\n    {\n      "type": "metadata",\n      "index": 0,\n      "serviceEndpoint": "http://mymetadata-api.org/api/v1/metadata/assets/ddo/{did}",\n      "attributes": {\n        "main": {},\n        "additionalInformation": {}\n      }\n    },\n    {\n      "type": "fl-coordinator",\n      "index": 2,\n      "serviceEndpoint": "http://mygateway.org/api/v1/gateway/services/execute",\n      "templateId": "804932804923850985093485039850349850439583409583404534231321131a",\n      "attributes": {\n        "main": {\n          "creator": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",\n          "datePublished": "2019-04-09T19:02:11Z",\n          "price": "10",\n          "timeout": 86400,\n          "provider": {\n            "type": "Azure",\n            "description": "",\n            "environment": {\n              "cluster": {\n                "type": "Kubernetes",\n                "url": "http://10.0.0.17/xxx"\n              },\n              "supportedContainers": [\n                {\n                  "image": "keykoio/xain-fl",\n                  "tag": "latest",\n                  "checksum": "sha256:cb57ecfa6ebbefd8ffc7f75c0f00e57a7fa739578a429b6f72a0df19315deadc"\n                },\n                {\n                  "image": "keykoio/xain-fl",\n                  "tag": "v1",\n                  "checksum": "sha256:cb57ecfa6ebbefd8ffc7f75c0f00e57a7fa739578a429b6f72a0df19315deadc"\n                }\n              ],\n              "supportedServers": [\n                {\n                  "serverId": "1",\n                  "serverType": "xlsize",\n                  "price": "50",\n                  "cpu": "16",\n                  "gpu": "0",\n                  "memory": "128gb",\n                  "disk": "160gb",\n                  "maxExecutionTime": 86400\n                },\n                {\n                  "serverId": "2",\n                  "serverType": "medium",\n                  "price": "10",\n                  "cpu": "2",\n                  "gpu": "0",\n                  "memory": "8gb",\n                  "disk": "80gb",\n                  "maxExecutionTime": 86400\n                }\n              ]\n            }\n          }\n        },\n        "additionalInformation": {}\n      },\n      "serviceAgreementTemplate": {\n        "contractName": "ServiceExecutionTemplate",\n        "events": [\n          {\n            "name": "AgreementCreated",\n            "actorType": "consumer",\n            "handler": {\n              "moduleName": "serviceExecutionTemplate",\n              "functionName": "fulfillLockPaymentCondition",\n              "version": "0.1"\n            }\n          }\n        ],\n        "fulfillmentOrder": [\n          "lockPayment.fulfill",\n          "serviceExecution.fulfill",\n          "escrowPayment.fulfill"\n        ],\n        "conditionDependency": {\n          "lockPayment": [],\n          "serviceExecution": [],\n          "releaseReward": [\n            "lockPayment",\n            "serviceExecution"\n          ]\n        },\n        "conditions": [\n          {\n            "name": "lockPayment",\n            "timelock": 0,\n            "timeout": 0,\n            "contractName": "LockPaymentCondition",\n            "functionName": "fulfill",\n            "parameters": [\n              {\n                "name": "_did",\n                "type": "bytes32",\n                "value": ""\n              },              \n              {\n                "name": "_rewardAddress",\n                "type": "address",\n                "value": ""\n              },\n              {\n                "name": "_tokenAddress",\n                "type": "address",\n                "value": ""\n              },\n              {\n                "name": "_amounts",\n                "type": "uint256[]",\n                "value": []\n              },\n              {\n                "name": "_receivers",\n                "type": "address[]",\n                "value": []\n              }\n            ],\n            "events": [\n              {\n                "name": "Fulfilled",\n                "actorType": "publisher",\n                "handler": {\n                  "moduleName": "lockPaymentConditon",\n                  "functionName": "fulfillServiceExecutionCondition",\n                  "version": "0.1"\n                }\n              }\n            ]\n          },\n          {\n            "name": "execCompute",\n            "timelock": 0,\n            "timeout": 0,\n            "contractName": "ComputeExecutionCondition",\n            "functionName": "fulfill",\n            "parameters": [\n              {\n                "name": "_did",\n                "type": "bytes32",\n                "value": ""\n              },\n              {\n                "name": "_grantee",\n                "type": "address",\n                "value": ""\n              }\n            ],\n            "events": [\n              {\n                "name": "Fulfilled",\n                "actorType": "publisher",\n                "handler": {\n                  "moduleName": "execCompute",\n                  "functionName": "fulfillServiceExecutionCondition",\n                  "version": "0.1"\n                }\n              },\n              {\n                "name": "TimedOut",\n                "actorType": "consumer",\n                "handler": {\n                  "moduleName": "execCompute",\n                  "functionName": "fulfillServiceExecutionCondition",\n                  "version": "0.1"\n                }\n              }\n            ]\n          },\n          {\n            "name": "escrowPayment",\n            "timelock": 0,\n            "timeout": 0,\n            "contractName": "EscrowPaymentCondition",\n            "functionName": "fulfill",\n            "parameters": [\n              {\n                "name": "_did",\n                "type": "bytes32",\n                "value": ""\n              },              \n              {\n                    "name": "_amounts",\n                    "type": "uint256[]",\n                    "value": []\n                },\n                {\n                    "name": "_receivers",\n                    "type": "address[]",\n                    "value": []\n                },\n              {\n                "name": "_sender",\n                "type": "address",\n                "value": ""\n              },\n              {\n                "name": "_tokenAddress",\n                "type": "address",\n                "value": ""\n              },\n              {\n                "name": "_lockCondition",\n                "type": "bytes32",\n                "value": ""\n              },\n              {\n                "name": "_releaseCondition",\n                "type": "bytes32",\n                "value": ""\n              }\n            ],\n            "events": [\n              {\n                "name": "Fulfilled",\n                "actorType": "publisher",\n                "handler": {\n                  "moduleName": "escrowPaymentConditon",\n                  "functionName": "verifyRewardTokens",\n                  "version": "0.1"\n                }\n              }\n            ]\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"participant-consumer-ddo"},"Participant Consumer DDO"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serviceAgreementId": "bb23s87856d59867503f80a690357406857698570b964ac8dcc9d86da4ada010",\n  "workflow": {\n    "@context": "https://w3id.org/did/v1",\n    "authentication": [\n      {\n        "type": "RsaSignatureAuthentication2018",\n        "publicKey": "did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea"\n      }\n    ],\n    "created": "2019-02-08T08:13:49Z",\n    "updated": "2019-06-30T14:53:09Z",\n    "id": "did:nv:0bc278fee025464f8012b811d1bce8e22094d0984e4e49139df5d5ff7a028bdf",\n    "proof": {\n      "created": "2019-02-08T08:13:41Z",\n      "creator": "0x37BB53e3d293494DE59fBe1FF78500423dcFd43B",\n      "signatureValue": "did:nv:0bc278fee025464f8012b811d1bce8e22094d0984e4e49139df5d5ff7a028bdf",\n      "type": "DDOIntegritySignature",\n      "checksum": {\n        "0": "0x52b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3bbc3377",\n        "1": "0x999999952b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3"\n      }\n    },\n    "publicKey": [\n      {\n        "id": "did:nv:b6e2eb5eff1a093ced9826315d5a4ef6c5b5c8bd3c49890ee284231d7e1d0aaa#keys-1",\n        "type": "RsaVerificationKey2018",\n        "owner": "did:nv:6027c1e7cbae06a91fce0557ee53195284825f56a7100be0c53cbf4391aa26cc",\n        "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\\r\\n"\n      },\n      {\n        "id": "did:nv:b6e2eb5eff1a093ced9826315d5a4ef6c5b5c8bd3c49890ee284231d7e1d0aaa#keys-2",\n        "type": "Ed25519VerificationKey2018",\n        "owner": "did:nv:4c27a254e607cdf91a1206480e7eb8c74856102316c1a462277d4f21c02373b6",\n        "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"\n      },\n      {\n        "id": "did:nv:b6e2eb5eff1a093ced9826315d5a4ef6c5b5c8bd3c49890ee284231d7e1d0aaa#keys-3",\n        "type": "RsaPublicKeyExchangeKey2018",\n        "owner": "did:nv:5f6b885202ffb9643874be529302eb00d55e226959f1fbacaeda592c5b5c9484",\n        "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\\r\\n"\n      }\n    ],\n    "verifiableCredential": [\n      {\n        "@context": [\n          "https://www.w3.org/2018/credentials/v1",\n          "https://www.w3.org/2018/credentials/examples/v1"\n        ],\n        "id": "1872",\n        "type": [\n          "read",\n          "update",\n          "deactivate"\n        ],\n        "issuer": "0x610D9314EDF2ced7681BA1633C33fdb8cF365a12",\n        "issuanceDate": "2019-01-01T19:73:24Z",\n        "credentialSubject": {\n          "id": "0x89328493849328493284932"\n        },\n        "proof": {\n          "type": "RsaSignature2018",\n          "created": "2019-01-01T19:73:24Z",\n          "proofPurpose": "assertionMethod",\n          "signatureValue": "ABCJSDAO23...1tzjn4w=="\n        }\n      }\n    ],\n    "service": [\n      {\n        "index": 0,\n        "serviceEndpoint": "http://localhost:5000/api/v1/metadata/assets/ddo/{did}",\n        "type": "metadata",\n        "attributes": {\n          "main": {\n            "author": "John Doe",\n            "checksum": "0x52b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3bbc3377",\n            "dateCreated": "2019-02-08T08:13:49Z",\n            "datePublished": "2019-05-08T08:13:49Z",\n            "license": "CC-BY",\n            "name": "My workflow",\n            "price": "1",\n            "type": "workflow",\n            "workflow": {\n              "stages": [\n                {\n                  "index": 0,\n                  "stageType": "Participant",\n                  "requirements": {\n                    "container": {\n                      "image": "keykoio/xain-participant",\n                      "tag": "latest",\n                      "checksum": "sha256:cb57ecfa6ebbefd8ffc7f75c0f00e57a7fa739578a429b6f72a0df19315deadc"\n                    }\n                  },\n                  "input": [\n                    {\n                      "index": 0,\n                      "id": "did:nv:12345"\n                    }\n                  ],\n                  "transformation": {\n                    "id": "did:nv:abcde"\n                  },\n                  "output": {\n                  }\n                }\n              ]\n            }\n          },\n          "additionalInformation": {\n            "description": "Workflow to aggregate weather information",\n            "tags": [\n              "weather",\n              "uk",\n              "2011",\n              "workflow",\n              "aggregation"\n            ],\n            "copyrightHolder": "John Doe"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"This is a normal data in situ computation workflow with one stage, a set of inputs,\none transformation and no output since the participant shouldn't need to\ngenerate any data."),(0,r.kt)("h3",{id:"participant-provider-ddo"},"Participant Provider DDO"))}f.isMDXComponent=!0},3683:function(e,n,t){n.Z=t.p+"assets/images/fl-high-level-flow-de261abbcaca33fd68319b50a99fd6a8.png"},3701:function(e,n,t){n.Z=t.p+"assets/images/fl-running-participants-d2b318428bd4e9c0a929efecd5357587.png"},2285:function(e,n,t){n.Z=t.p+"assets/images/fl-setting-up-coordinator-c568f99da7a4d4e2eb9a55f3ae7de2fc.png"}}]);
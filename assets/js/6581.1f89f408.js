"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6581],{46581:e=>{e.exports=JSON.parse('{"name":"AaveRepayCondition","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_conditionId","type":"bytes32"}],"name":"Fulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CONDITION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x15c87f85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"abortByTimeOut","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x1ce19185"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_assetToRepay","type":"address"},{"internalType":"uint256","name":"_amountToRepay","type":"uint256"},{"internalType":"uint256","name":"_interestRateMode","type":"uint256"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x6460cf12"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_valueHash","type":"bytes32"}],"name":"generateId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xcb4e57e8"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_assetToRepay","type":"address"},{"internalType":"uint256","name":"_amountToRepay","type":"uint256"},{"internalType":"uint256","name":"_interestRateMode","type":"uint256"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x509acc87"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_conditionStoreManagerAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x485cc955"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[{"internalType":"address","name":"_agentId","type":"address"},{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"provenanceSignatureIsCorrect","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function","signature":"0xa190aff4"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611626806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806315c87f85146100ca57806316279055146100f25780631ce1918514610116578063485cc95514610136578063509acc871461014b5780635ced058e1461015e5780635ea3ab85146101875780636460cf121461019a5780636fd902e1146101ad578063715018a6146101b357806382c947b7146101bb5780638da5cb5b146101d5578063a190aff4146101dd578063cb4e57e8146101f0578063f2fde38b14610230575b600080fd5b6100df6000805160206115d183398151915281565b6040519081526020015b60405180910390f35b61010661010036600461112d565b3b151590565b60405190151581526020016100e9565b610129610124366004611148565b610243565b6040516100e99190611199565b6101496101443660046111a7565b61039c565b005b6100df6101593660046111da565b610522565b61016f61016c366004611148565b90565b6040516001600160a01b0390911681526020016100e9565b6100df61019536600461126e565b61058c565b6101296101a8366004611313565b6105e2565b436100df565b610149610884565b6100df6101c936600461112d565b6001600160a01b031690565b61016f610898565b6101066101eb36600461136b565b6108a7565b6100df6101fe366004611419565b604080516020808201949094523081830152606080820193909352815180820390930183526080019052805191012090565b61014961023e36600461112d565b6108d1565b606554604051636ed93cc560e01b8152600481018390526000916001600160a01b031690636ed93cc59060240160206040518083038186803b15801561028857600080fd5b505afa15801561029c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c0919061143b565b6103115760405162461bcd60e51b815260206004820152601f60248201527f436f6e646974696f6e206e6565647320746f2062652074696d6564206f75740060448201526064015b60405180910390fd5b60655460405163295e072360e11b81526001600160a01b03909116906352bc0e469061034490859060039060040161145d565b602060405180830381600087803b15801561035e57600080fd5b505af1158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190611471565b92915050565b600054610100900460ff16158080156103bc5750600054600160ff909116105b806103dd57506103cb3061094a565b1580156103dd575060005460ff166001145b6104405760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610308565b6000805460ff191660011790558015610463576000805461ff0019166101001790555b6001600160a01b0382166104ab5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610308565b6104b3610959565b6104bc836108d1565b606580546001600160a01b0319166001600160a01b038416179055801561051d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b604080516000805160206115d183398151915260208201529081018690526001600160a01b0380861660608301528416608082015260a0810183905260c0810182905260009060e00160405160208183030381529060405280519060200120905095945050505050565b60008060005b83518110156105db576105c78482815181106105b0576105b0611492565b60200260200101518361098890919063ffffffff16565b9150806105d3816114be565b915050610592565b5092915050565b60008084905060008690506000816001600160a01b031663d0396bec6040518163ffffffff1660e01b815260040160206040518083038186803b15801561062857600080fd5b505afa15801561063c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066091906114d9565b90506000826001600160a01b031663d6dc867a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561069d57600080fd5b505afa1580156106b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d591906114d9565b905086811461073e5760405162461bcd60e51b815260206004820152602f60248201527f416d6f756e7420746f207265706179206973206e6f74207468652073616d652060448201526e189bdc9c9bddd95908185b5bdd5b9d608a1b6064820152608401610308565b60006107518c6101fe8d8d8d8d8d610522565b90506000610760826002610994565b9050600281600381111561077657610776611161565b14156107ff576107916001600160a01b038716338d87610a19565b60405163c183495b60e01b81526001600160a01b038b81166004830152602482018a90526044820184905286169063c183495b90606401600060405180830381600087803b1580156107e257600080fd5b505af11580156107f6573d6000803e3d6000fd5b50505050610874565b600381600381111561081357610813611161565b1415610874576040516323ef1e7960e01b8152600481018390526001600160a01b038616906323ef1e7990602401600060405180830381600087803b15801561085b57600080fd5b505af115801561086f573d6000803e3d6000fd5b505050505b9c9b505050505050505050505050565b61088c610a79565b6108966000610ad8565b565b6033546001600160a01b031690565b6000836001600160a01b03166108bd8484610b2a565b6001600160a01b03161490505b9392505050565b6108d9610a79565b6001600160a01b03811661093e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610308565b61094781610ad8565b50565b6001600160a01b03163b151590565b600054610100900460ff166109805760405162461bcd60e51b8152600401610308906114f2565b610896610b4e565b60006108ca828461153d565b60655460405163295e072360e11b81526000916001600160a01b0316906352bc0e46906109c7908690869060040161145d565b602060405180830381600087803b1580156109e157600080fd5b505af11580156109f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ca9190611471565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610a73908590610b7e565b50505050565b33610a82610898565b6001600160a01b0316146108965760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610308565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000806000610b398585610c50565b91509150610b4681610cc0565b509392505050565b600054610100900460ff16610b755760405162461bcd60e51b8152600401610308906114f2565b61089633610ad8565b6000610bd3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e769092919063ffffffff16565b80519091501561051d5780806020019051810190610bf1919061143b565b61051d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610308565b600080825160411415610c875760208301516040840151606085015160001a610c7b87828585610e8d565b94509450505050610cb9565b825160401415610cb15760208301516040840151610ca6868383610f70565b935093505050610cb9565b506000905060025b9250929050565b6000816004811115610cd457610cd4611161565b1415610cdd5750565b6001816004811115610cf157610cf1611161565b1415610d3a5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610308565b6002816004811115610d4e57610d4e611161565b1415610d9c5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610308565b6003816004811115610db057610db0611161565b1415610e095760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610308565b6004816004811115610e1d57610e1d611161565b14156109475760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610308565b6060610e858484600085610fa9565b949350505050565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610eba5750600090506003610f67565b8460ff16601b14158015610ed257508460ff16601c14155b15610ee35750600090506004610f67565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610f37573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610f6057600060019250925050610f67565b9150600090505b94509492505050565b6000806001600160ff1b03831681610f8d60ff86901c601b61153d565b9050610f9b87828885610e8d565b935093505050935093915050565b60608247101561100a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610308565b6110138561094a565b61105f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610308565b600080866001600160a01b0316858760405161107b9190611581565b60006040518083038185875af1925050503d80600081146110b8576040519150601f19603f3d011682016040523d82523d6000602084013e6110bd565b606091505b50915091506110cd8282866110d8565b979650505050505050565b606083156110e75750816108ca565b8251156110f75782518084602001fd5b8160405162461bcd60e51b8152600401610308919061159d565b80356001600160a01b038116811461112857600080fd5b919050565b60006020828403121561113f57600080fd5b6108ca82611111565b60006020828403121561115a57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6004811061119557634e487b7160e01b600052602160045260246000fd5b9052565b602081016103968284611177565b600080604083850312156111ba57600080fd5b6111c383611111565b91506111d160208401611111565b90509250929050565b600080600080600060a086880312156111f257600080fd5b8535945061120260208701611111565b935061121060408701611111565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561126657611266611228565b604052919050565b6000602080838503121561128157600080fd5b82356001600160401b038082111561129857600080fd5b818501915085601f8301126112ac57600080fd5b8135818111156112be576112be611228565b8060051b91506112cf84830161123e565b81815291830184019184810190888411156112e957600080fd5b938501935b83851015611307578435825293850193908501906112ee565b98975050505050505050565b60008060008060008060c0878903121561132c57600080fd5b863595506020870135945061134360408801611111565b935061135160608801611111565b92506080870135915060a087013590509295509295509295565b60008060006060848603121561138057600080fd5b61138984611111565b9250602084810135925060408501356001600160401b03808211156113ad57600080fd5b818701915087601f8301126113c157600080fd5b8135818111156113d3576113d3611228565b6113e5601f8201601f1916850161123e565b915080825288848285010111156113fb57600080fd5b80848401858401376000848284010152508093505050509250925092565b6000806040838503121561142c57600080fd5b50508035926020909101359150565b60006020828403121561144d57600080fd5b815180151581146108ca57600080fd5b828152604081016108ca6020830184611177565b60006020828403121561148357600080fd5b8151600481106108ca57600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156114d2576114d26114a8565b5060010190565b6000602082840312156114eb57600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008219821115611550576115506114a8565b500190565b60005b83811015611570578181015183820152602001611558565b83811115610a735750506000910152565b60008251611593818460208701611555565b9190910192915050565b60208152600082518060208401526115bc816040850160208701611555565b601f01601f1916919091016040019291505056feaad256844531c0ad7e2e67df9f2564063cdb71a984c73eb8e64e446cd0205f0da2646970667358221220e5247e99e588462d6cafef660826333fed15d38eeba52bca7bf1d8a39a351bce64736f6c63430008090033","address":"0xc536c263712C313730D1f67bcf061a5d266410dD","implementation":"0x5E2e29FA5F8dC65e0c9C0E8B8EDAe3a524d74FA6","version":"v2.0.5","libraries":{}}')}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3721],{73721:e=>{e.exports=JSON.parse('{"name":"SignCondition","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CONDITION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x15c87f85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"abortByTimeOut","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x1ce19185"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"address","name":"_publicKey","type":"address"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0xcf897d3d"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_valueHash","type":"bytes32"}],"name":"generateId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xcb4e57e8"},{"inputs":[{"internalType":"bytes32","name":"_message","type":"bytes32"},{"internalType":"address","name":"_publicKey","type":"address"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0xeea0a725"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_conditionStoreManagerAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x485cc955"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50610dc8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806315c87f85146100885780631ce19185146100c2578063485cc955146100e2578063715018a6146100f75780638da5cb5b146100ff578063cb4e57e81461011f578063cf897d3d14610132578063eea0a72514610145578063f2fde38b14610158575b600080fd5b6100af7fc1bd76842d9e49b11a92f6e07c28fdd925693ec19a6ea7ee29f756dfa8d6e7b681565b6040519081526020015b60405180910390f35b6100d56100d0366004610ad2565b61016b565b6040516100b99190610b23565b6100f56100f0366004610b4d565b6102c4565b005b6100f5610443565b610107610457565b6040516001600160a01b0390911681526020016100b9565b6100af61012d366004610b80565b610466565b6100d5610140366004610bb8565b6104a5565b6100af610153366004610c8c565b610530565b6100f5610166366004610caf565b610557565b606554604051636ed93cc560e01b8152600481018390526000916001600160a01b031690636ed93cc59060240160206040518083038186803b1580156101b057600080fd5b505afa1580156101c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e89190610cca565b6102395760405162461bcd60e51b815260206004820152601f60248201527f436f6e646974696f6e206e6565647320746f2062652074696d6564206f75740060448201526064015b60405180910390fd5b60655460405163295e072360e11b81526001600160a01b03909116906352bc0e469061026c908590600390600401610cec565b602060405180830381600087803b15801561028657600080fd5b505af115801561029a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102be9190610d00565b92915050565b600054610100900460ff16158080156102e45750600054600160ff909116105b806102fe5750303b1580156102fe575060005460ff166001145b6103615760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610230565b6000805460ff191660011790558015610384576000805461ff0019166101001790555b6001600160a01b0382166103cc5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610230565b6103d46105d0565b6103dd83610557565b606580546001600160a01b0319166001600160a01b038416179055801561043e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b61044b6105ff565b610455600061065e565b565b6033546001600160a01b031690565b60408051602081018490523091810191909152606081018290526000906080015b60405160208183030381529060405280519060200120905092915050565b6000826001600160a01b03166104bb85846106b0565b6001600160a01b03161461050f5760405162461bcd60e51b815260206004820152601b60248201527a436f756c64206e6f74207265636f766572207369676e617475726560281b6044820152606401610230565b6105276105208661012d8787610530565b60026106d4565b95945050505050565b600082826040516020016104879291909182526001600160a01b0316602082015260400190565b61055f6105ff565b6001600160a01b0381166105c45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610230565b6105cd8161065e565b50565b600054610100900460ff166105f75760405162461bcd60e51b815260040161023090610d21565b610455610760565b33610608610457565b6001600160a01b0316146104555760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610230565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008060006106bf8585610790565b915091506106cc81610800565b509392505050565b60655460405163295e072360e11b81526000916001600160a01b0316906352bc0e46906107079086908690600401610cec565b602060405180830381600087803b15801561072157600080fd5b505af1158015610735573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107599190610d00565b9392505050565b600054610100900460ff166107875760405162461bcd60e51b815260040161023090610d21565b6104553361065e565b6000808251604114156107c75760208301516040840151606085015160001a6107bb878285856109b6565b945094505050506107f9565b8251604014156107f157602083015160408401516107e6868383610a99565b9350935050506107f9565b506000905060025b9250929050565b600081600481111561081457610814610aeb565b141561081d5750565b600181600481111561083157610831610aeb565b141561087a5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610230565b600281600481111561088e5761088e610aeb565b14156108dc5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610230565b60038160048111156108f0576108f0610aeb565b14156109495760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610230565b600481600481111561095d5761095d610aeb565b14156105cd5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610230565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156109e35750600090506003610a90565b8460ff16601b141580156109fb57508460ff16601c14155b15610a0c5750600090506004610a90565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610a60573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610a8957600060019250925050610a90565b9150600090505b94509492505050565b6000806001600160ff1b03831681610ab660ff86901c601b610d6c565b9050610ac4878288856109b6565b935093505050935093915050565b600060208284031215610ae457600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60048110610b1f57634e487b7160e01b600052602160045260246000fd5b9052565b602081016102be8284610b01565b80356001600160a01b0381168114610b4857600080fd5b919050565b60008060408385031215610b6057600080fd5b610b6983610b31565b9150610b7760208401610b31565b90509250929050565b60008060408385031215610b9357600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610bce57600080fd5b8435935060208501359250610be560408601610b31565b915060608501356001600160401b0380821115610c0157600080fd5b818701915087601f830112610c1557600080fd5b813581811115610c2757610c27610ba2565b604051601f8201601f19908116603f01168101908382118183101715610c4f57610c4f610ba2565b816040528281528a6020848701011115610c6857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610c9f57600080fd5b82359150610b7760208401610b31565b600060208284031215610cc157600080fd5b61075982610b31565b600060208284031215610cdc57600080fd5b8151801515811461075957600080fd5b828152604081016107596020830184610b01565b600060208284031215610d1257600080fd5b81516004811061075957600080fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008219821115610d8d57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220d292c8f2c93b48128e0aecbd5b3f086f772a67eaa27c2b4e80d63c06d3a82a1864736f6c63430008090033","address":"0x8b608CAEc2895C94CB20475714E96E5935574De6","implementation":"0x69be0B3377Ebd4b7D16FEe415ddD557BCB4F459e","version":"v2.0.5","libraries":{}}')}}]);
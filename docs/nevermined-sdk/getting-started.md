---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started

### Installation

<Tabs>
  <TabItem label="yarn" value="yarn" default>

  ```bash
  yarn add @nevermined-io/nevermined-sdk-js
  ```

  </TabItem>
  <TabItem label="npm" value="npm">

  ```bash
  npm install --save @nevermined-io/nevermined-sdk-js
  ```

  </TabItem>
</Tabs>

### Connecting to Nevermined

Under the hood Nevermined has a set of Smart Contracts that allows Asset Providers to tokenize their assets and specify different conditions. This creates Service Execution Agreements. Assets could be anything from a JPEG to a music track, from a voting right to a data set.
To connect to nevermined first we need to download the artifacts that contain the abis of the nevermined contracts from the artifacts repo.

:::caution
Add here a link to some documentation about _artifacts repo_
:::

This will download the artifacts for the latest contracts in _mumbai_ and store them in a folder called `./artifacts`:

```bash
 wget -c https://artifacts-nevermined-rocks.s3.amazonaws.com/80001/public/contracts_v2.0.5.tar.gz -O -| tar -xz --one-top-level=./artifacts
 ```

 Next we need to chose the nevermined environment we want to connect to.

:::caution
 Link to environment docs
::::

<Tabs>
  <TabItem label="mumbai" value="mumbai" default>

  ```typescript
  import { Config } from '@nevermined-io/nevermined-sdk-js'

  const config: Config = {
      nodeUri: 'https://rpc-mumbai.maticvigil.com',
      marketplaceUri: 'https://marketplace-api.mumbai.public.nevermined.rocks',
      neverminedNodeUri: 'https://node.mumbai.public.nevermined.rocks',
      marketplaceAuthToken: '',
      artifactsFolder: './artifacts',
  }
  ```

  </TabItem>
  <TabItem label="matic" value="matic">

  ```typescript
  import { Config } from '@nevermined-io/nevermined-sdk-js'

  const config: Config = {
      nodeUri: 'https://rpc-mainnet.maticvigil.com',
      marketplaceUri: 'https://marketplace-api.public.nevermined.rocks',
      neverminedNodeUri: 'https://node.public.nevermined.rocks',
      marketplaceAuthToken: '',
      artifactsFolder: './artifacts',
  }
  ```

  </TabItem>
</Tabs>

:::note
_nodeUri_ is an rpc endpoint to connect to the blockchain. You can find public links at [chainlist](https://chainlist.org/)

_artifactsFolder_ is the location of the artifacts that we downloaded in the previous section.

The other environment config parameteres will be discussed in further sections
:::

:::caution
Link to the config documentation
:::

With this in place we have everything we need to connect to nevermined:

```typescript
import { Nevermined } from '@nevermined-io/nevermined-sdk-js'

const nevermined = await Nevermined.getInstance(config)

console.log(await nevermined.versions.get())
// {
//   sdk: {
//     name: 'Sdk-js',
//     version: '0.23.2',
//     commit: '9d31ebc27fe6c7c8a573abd283c632e5c70e687c',
//     status: 'Working',
//     network: 'mumbai',
//     keeperVersion: '2.0.5',
```

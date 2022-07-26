# Playfab Promise

Simple and small wrapper for promise [PlayFabSDK](https://www.npmjs.com/package/playfab-sdk)

## Behind Project
help intergrate playfab with clean structure with await promise

## Installation

`yarn install playfab-promise`

## Usage

```
import { PlayFabAdmin } from 'playfab-sdk';
const PlayFabPromise = require("playfab-promise")


const catalogItems = await PlayFabPromise(PlayFabAdmin.GetCatalogItems, { CatalogVersion: 'v1' });

console.log(catalogItems)


```

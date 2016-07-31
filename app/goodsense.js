/*eslint-disable */
import configureReduxBase from 'gsredux/base';
import configureReduxApplication from 'gsredux/application';
import configureReduxEntity from 'gsredux/entity';
import configureReduxAuth from 'gsredux/auth';
import configureReduxEmail from 'gsredux/email';
import configureReduxStore from 'gsredux/store';
import * as helpers from 'gsredux/base/utils/helpers';
/*eslint-enable */

import { Goodsense } from 'goodsense-sdk';

// Configure SDK modules
// @todo one day we will move all utils from SDK to redux-modules so we will remove this dependency
export const getEntity = (entityName, entityId) => window.REDUX_STORE.getState().entities[entityName][entityId];

export const goodsense = new Goodsense({
  publicKey: process.env.GOODSENSE_PUBLIC_KEY,
  debug: false,
  endpoint: process.env.GOODSENSE_ENDPOINT,
}, getEntity);

// Configure all redux modules we need in marketplace
export const baseModule = configureReduxBase(helpers);
export const entityModule = configureReduxEntity(helpers);
export const authModule = configureReduxAuth(helpers, goodsense, baseModule, entityModule);
export const applicationModule = configureReduxApplication(helpers, goodsense, authModule, entityModule);
export const emailModule = configureReduxEmail(helpers, goodsense, entityModule);
export const storeModule = configureReduxStore(helpers, goodsense, entityModule);

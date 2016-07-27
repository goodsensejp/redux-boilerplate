import goodsenseReduxModules from 'gsredux';
import * as reduxHelpers from 'gsredux/utils/helpers';
import {createStripeToken} from 'gsredux/utils/payment';
import {Goodsense} from 'goodsense-sdk';

export const getEntity = (entityName, entityId) => window.REDUX_STORE.getState().entities[entityName][entityId];

// Configure goodsense api
export const goodsense = new Goodsense({
  publicKey: process.env.CYTIX_PUBLIC_KEY,
  debug: false,
  endpoint: process.env.CYTIX_ENDPOINT
}, getEntity);

export const reduxModules = goodsenseReduxModules(goodsense, reduxHelpers, createStripeToken);

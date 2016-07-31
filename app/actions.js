import {
  baseModule,
  entityModule,
  authModule,
  applicationModule,
  emailModule,
  storeModule,
} from './goodsense';

export default {
  ...baseModule.actions,
  ...entityModule.actions,
  ...authModule.actions,
  ...applicationModule.actions,
  ...emailModule.actions,
  ...storeModule.actions,
};

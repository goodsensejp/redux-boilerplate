import { fork } from 'redux-saga/effects';
import {
  baseModule,
  entityModule,
  authModule,
  applicationModule,
  emailModule,
  storeModule,
} from './goodsense';

export default function* () {
  const sagas = {
    ...baseModule.sagas,
    ...entityModule.sagas,
    ...authModule.sagas,
    ...applicationModule.sagas,
    ...emailModule.sagas,
    ...storeModule.sagas,
  };

  for (const key of Object.keys(sagas)) {
    yield fork(sagas[key]);
  }
}

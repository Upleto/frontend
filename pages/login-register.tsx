import React, { FC } from 'react';
import getConfig from 'next/config';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import { renterPlusLoginReducers } from '../src/redux/reducers/reducerCombo';
import { ActionWithPayload } from '../src/utils/redux/types';
import LoginRegister from '../src/components/LoginRegister';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords, themeColor } = publicRuntimeConfig;

const callbackOnMount = (store: Store) => {
  store.substitueReducers(renterPlusLoginReducers);
};

export const Page: FC = () => {
  return (
    <div>
      <ManifestHead
        title="login-register"
        description="login-register"
        keywords={commonKeyWords}
        themeColor={themeColor}
        hrefCanonical="/login-register"
      />
      <LoginRegister />
    </div>
  );
};

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callbackOnMount,
  Child: Page,
});

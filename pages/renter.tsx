import React, { FC } from 'react';
import getConfig from 'next/config';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import Link from '../src/components/Link';
import { renterPlusLoginReducers } from '../src/redux/reducers/reducerCombo';
import { ActionWithPayload } from '../src/utils/redux/types';
import Renter from '../src/components/Renter';
import rootSaga from '../src/redux/sagas/rootSaga';
import renterSaga from '../src/redux/sagas/renterSaga';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords, themeColor } = publicRuntimeConfig;

const callbackOnMount = (store: Store) => {
  store.substitueReducers(renterPlusLoginReducers);
  store.substitueSagas({ root: rootSaga, renter: renterSaga });
};

export const Page: FC = () => {
  return (
    <div>
      <ManifestHead
        title="renter"
        description="renter"
        keywords={commonKeyWords}
        themeColor={themeColor}
        hrefCanonical="/renter"
      />
      <Renter />
      <Link href="/">
        <a>back to index</a>
      </Link>
    </div>
  );
};

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callbackOnMount,
  Child: Page,
});

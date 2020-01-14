import React, { FC } from 'react';
import getConfig from 'next/config';
import Link from '../src/components/Link';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import { ActionWithPayload } from '../src/utils/redux/types';
import LeaseAgreement from '../src/components/LeaseAgreement';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords, themeColor } = publicRuntimeConfig;

const callbackOnMount = () => {};

export const Page: FC = () => {
  return (
    <div>
      <ManifestHead
        title="lease-agreement"
        description="lease-agreement"
        keywords={commonKeyWords}
        themeColor={themeColor}
        hrefCanonical="/lease-agreement"
      />
      <LeaseAgreement />
      <Link href="/renter">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callbackOnMount,
  Child: Page,
});

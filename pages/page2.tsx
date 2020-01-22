// kept for demonstration

import React, { FC } from 'react';
import getConfig from 'next/config';
import { useSelector, useDispatch } from 'react-redux';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import Link from '../src/components/Link';
import b, { State } from '../src/redux/reducers/b';
import ActionTypes from '../src/redux/actions/ActionTypes';
import { ActionWithPayload } from '../src/utils/redux/types';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords, themeColor } = publicRuntimeConfig;

const callbackOnMount = (store: Store) => {
  store.substitueReducers({ b });
};

const callbackOnUnmount = (store: Store) => {
  store.removeReducers(['b']);
};

const selector = (state: { b: State }) => ({
  b: state?.b?.b ?? 0,
});

export const Page: FC = () => {
  const { b: num } = useSelector(selector);
  const dispatch = useDispatch();
  return (
    <div>
      <ManifestHead
        title="page2"
        description="page2"
        keywords={commonKeyWords}
        themeColor={themeColor}
        hrefCanonical="/page2"
      />
      <span>{`Number is: ${num}`}</span>
      <button type="button" onClick={() => dispatch({ type: ActionTypes.DECREASE_B, payload: 2 })}>
        minus 2
      </button>
      <Link href="/">
        <a>index</a>
      </Link>
    </div>
  );
};

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callbackOnMount,
  callbackOnUnmount,
  Child: Page,
});

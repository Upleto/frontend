// kept for demonstration

import React, { FC } from 'react';
import getConfig from 'next/config';
import { useSelector, useDispatch } from 'react-redux';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import Link from '../src/components/Link';
import a, { State } from '../src/redux/reducers/a';
import ActionTypes from '../src/redux/actions/ActionTypes';
import { ActionWithPayload } from '../src/utils/redux/types';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords, themeColor } = publicRuntimeConfig;

const callbackOnMount = (store: Store) => {
  store.substitueReducers({ a });
};

const callbackOnUnmount = (store: Store) => {
  store.removeReducers(['a']);
};

const selector = (state: { a: State }) => ({
  a: state?.a?.a ?? 1,
});

export const Page: FC = () => {
  const { a: num } = useSelector(selector);
  const dispatch = useDispatch();
  return (
    <div>
      <ManifestHead
        title="page1"
        description="page1"
        keywords={commonKeyWords}
        themeColor={themeColor}
        hrefCanonical="/page1"
      />
      <span>{`Number is: ${num}`}</span>
      <button type="button" onClick={() => dispatch({ type: ActionTypes.INCREASE_A, payload: 3 })}>
        add 3
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

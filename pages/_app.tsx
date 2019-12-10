import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/core';
import getConfig from 'next/config';
import withRedux, { StoreProps } from '../src/utils/redux/withRedux';
import { ActionWithPayload } from '../src/utils/redux/types';
import withReduxSaga from '../src/utils/redux/withReduxSaga';
import initStore, { Store } from '../src/redux/store';
import { globalButtonReset } from '../src/utils/style/buttonReset';

const { publicRuntimeConfig } = getConfig();
const { staticOptimization } = publicRuntimeConfig;
const ssr = !staticOptimization;

class MyApp extends App<StoreProps<Store>> {
  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Global
          styles={[
            globalButtonReset,
            css`
              body {
                font-family: Verdana, Geneva, sans-serif;
                touch-action: manipulation;
              }
              a:link {
                text-decoration: none;
              }
              a:visited {
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
              a:active {
                text-decoration: underline;
              }
            `,
          ]}
        />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux<ActionWithPayload, Store>(initStore, { ssr })(
  withReduxSaga<ActionWithPayload, Store>(MyApp, { ssr })
);

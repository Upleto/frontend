import React from 'react';
import { NextComponentType } from 'next';
import { Store, Action, AnyAction } from 'redux';
import { END, Task } from 'redux-saga';
import { TransformedApp, WithStoreAppContext, TransformedAppProps } from './withRedux';
import { Config } from './defaultConfig';

export interface SagaTasks {
  [key: string]: Task;
}

export interface SagaTasksProp {
  sagaTasks: SagaTasks;
}

export interface StoreWithSaga<A extends Action = AnyAction> extends Store<any, A>, SagaTasksProp {}

function withReduxSaga<A extends Action = AnyAction, S extends StoreWithSaga<A> = StoreWithSaga<A>>(
  BaseElement: TransformedApp<S>,
  optionalConfig: Partial<Config> = {}
) {
  const { ssr } = optionalConfig;
  const WrappedElement: NextComponentType<
    WithStoreAppContext<S>,
    any,
    TransformedAppProps<S, any>
    // eslint-disable-next-line react/jsx-props-no-spreading
  > = props => <BaseElement {...props} />;

  if (ssr) {
    WrappedElement.getInitialProps = async props => {
      const { isServer, store } = props.ctx;

      const pageProps =
        typeof BaseElement.getInitialProps === 'function'
          ? await BaseElement.getInitialProps.call(BaseElement, props)
          : {};

      // Stop saga on the server
      if (isServer) {
        store.dispatch(END as A);
        if (store.sagaTasks) {
          const tasks = Object.values(store.sagaTasks);
          if (tasks.length) {
            await Promise.all(tasks.map(task => task.toPromise()));
          }
        }
      }

      return pageProps;
    };
  }

  return WrappedElement;
}

export default withReduxSaga;

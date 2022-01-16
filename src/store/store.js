import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();

export function configureStore() {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== 'production') {
    const { devToolsExtension } = window;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const store = createStore(rootReducer, middleware);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer.default);
    });
  }

  return store;
}

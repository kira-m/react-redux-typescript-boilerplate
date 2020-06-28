import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { chatReducer } from './example/reducers';

export const rootReducer = combineReducers({
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancer =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) ||
  compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
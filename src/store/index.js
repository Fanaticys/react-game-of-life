import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const logger = createLogger({
    collapsed: true
});
const store = createStore(reducer, applyMiddleware(logger));

export default store;
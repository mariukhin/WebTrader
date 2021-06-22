import { combineReducers } from 'redux';

import execution from 'Reducers/execution';
import orders from 'Reducers/order';

const rootReducer = combineReducers({ execution, orders });

export default rootReducer;

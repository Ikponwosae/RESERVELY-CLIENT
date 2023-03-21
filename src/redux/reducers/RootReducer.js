import { combineReducers } from 'redux';
import EcommerceReducer from './EcommerceReducer';

const RootReducer = combineReducers({
  ecommerce: EcommerceReducer,
});

export default RootReducer;

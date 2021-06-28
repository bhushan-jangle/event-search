/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import FavouriteReducer from './Favourite/FavouriteReducer';
import NewsDetailsReducer from './NewsDetails/NewsDetailsReducer';

const rootReducer = combineReducers({
  newsDetails: NewsDetailsReducer,
  favourite: FavouriteReducer,
});

export default rootReducer;

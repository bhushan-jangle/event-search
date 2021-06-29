/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import EventDetailsReducer from './EventDetails/EventDetailsReducer';
import FavouriteReducer from './Favourite/FavouriteReducer';

const rootReducer = combineReducers({
  eventDetails: EventDetailsReducer,
  favourite: FavouriteReducer,
});

export default rootReducer;

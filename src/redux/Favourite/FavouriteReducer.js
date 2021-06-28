/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
import { ADDFAVORITE_THING, REMOVEFAVORITE_THING } from './ActionType';

export default function favoriteThingsReducer(favoriteThing = [], action) {
  switch (action.type) {
    case ADDFAVORITE_THING:
      return [...favoriteThing, action.payload];
    case REMOVEFAVORITE_THING:
      const updatedArr = favoriteThing.filter((thing) => thing !== action.payload);
      return updatedArr;
    default:
      return favoriteThing;
  }
}

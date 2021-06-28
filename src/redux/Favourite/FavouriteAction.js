/* eslint-disable linebreak-style */
import { ADDFAVORITE_THING, REMOVEFAVORITE_THING } from './ActionType';

export function addFavoriteThings(thing) {
  return {
    type: ADDFAVORITE_THING,
    payload: thing,
  };
}

export function removeFavoriteThings(thing) {
  return {
    type: REMOVEFAVORITE_THING,
    payload: thing,
  };
}

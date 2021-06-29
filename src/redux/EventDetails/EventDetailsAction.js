/* eslint-disable linebreak-style */
import { SHOW_EVENT_DETAILS, SHOW_EVENT_DETAILS_ALWAYS } from './ActionType';

export const setEventDetailsShow = () => ({
  type: SHOW_EVENT_DETAILS,
});

export const setEventDetailsShowAlways = () => ({
  type: SHOW_EVENT_DETAILS_ALWAYS,
});

/* eslint-disable linebreak-style */
import { SHOW_NEWS_DETAILS, SHOW_NEWS_DETAILS_ALWAYS } from './ActionType';

export const setNewsDetailsShow = () => ({
  type: SHOW_NEWS_DETAILS,
});

export const setNewsDetailsShowAlways = () => ({
  type: SHOW_NEWS_DETAILS_ALWAYS,
});

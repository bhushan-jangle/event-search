/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
import { SHOW_EVENT_DETAILS, SHOW_EVENT_DETAILS_ALWAYS } from './ActionType';

const initialState = {
  isShowEventDetails: false,
};

const EventDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EVENT_DETAILS:
      return {
        ...state,
        isShowEventDetails: !state.isShowEventDetails,
      };
    case SHOW_EVENT_DETAILS_ALWAYS:
      return {
        ...state,
        isShowEventDetails: false,
      };
    default: return state;
  }
};

export default EventDetailsReducer;

import { SHOW_NEWS_DETAILS, SHOW_NEWS_DETAILS_ALWAYS } from "./ActionType"

const initialState={
    isShowNewsDetails: false
}

const NewsDetailsReducer = (state=initialState, action) =>{
    switch(action.type){
        case SHOW_NEWS_DETAILS:
            return{
                ...state,
                isShowNewsDetails: !state.isShowNewsDetails
            }
        case SHOW_NEWS_DETAILS_ALWAYS:
            return{
                ...state,
                isShowNewsDetails: false
            }
        default: return state
    }
}

export default NewsDetailsReducer
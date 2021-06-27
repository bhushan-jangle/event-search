import { SHOW_NEWS_DETAILS,SHOW_NEWS_DETAILS_ALWAYS } from "./ActionType"

export const setNewsDetailsShow = () =>{
    return{
        type: SHOW_NEWS_DETAILS
    }
}

export const setNewsDetailsShowAlways = () =>{
    return{
        type: SHOW_NEWS_DETAILS_ALWAYS
    }
}
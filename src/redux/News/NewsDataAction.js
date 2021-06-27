import { ADD_NEWS_DATA, GET_NEWS_DATA } from "./ActionType"

export const getNewsData = () =>{
    return{
        type:GET_NEWS_DATA
    }
}

export const addNewsData = (news) =>{
    return{
        type: ADD_NEWS_DATA,
        payload: news
    }
}


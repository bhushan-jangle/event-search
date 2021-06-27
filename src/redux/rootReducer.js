import { combineReducers } from "redux";
import NewsDataReducer from "./News/NewsDataReducer";
import NewsDetailsReducer from "./NewsDetails/NewsDetailsReducer";
import userReducer from "./user/userReducer";
import NotificationReducer from "./Notification/NotificationReducer";


const rootReducer = combineReducers({
    newsDetails: NewsDetailsReducer,
    news: NewsDataReducer,
    users: userReducer,
    notification: NotificationReducer
})

export default rootReducer
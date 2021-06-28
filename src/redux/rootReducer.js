import { combineReducers } from "redux";
import NewsDetailsReducer from "./NewsDetails/NewsDetailsReducer";
import userReducer from "./user/userReducer";
import NotificationReducer from "./Notification/NotificationReducer";
import FavouriteReducer from "./Favourite/FavouriteReducer"

const rootReducer = combineReducers({
    newsDetails: NewsDetailsReducer,
    users: userReducer,
    notification: NotificationReducer,
    favourite:FavouriteReducer
})

export default rootReducer
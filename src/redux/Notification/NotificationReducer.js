import { SHOW_NOTIFICATION } from "./ActionType"

const initialState={
    isShowNotification: false
}

const NotificationReducer = (state=initialState, action) =>{
    switch(action.type){
        case SHOW_NOTIFICATION:
            return{
                ...state,
                isShowNotification: !state.isShowNotification
            }
        default: return state
    }
}

export default NotificationReducer
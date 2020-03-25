import { STORE_USER_INFO, LOGOUT } from "./userActions";
import { User } from "./user";
import Action from "../action";

const initialState = {
    loggedInUser : new User()
}

export const userReducer = function<T extends Action>(state:any = initialState, action:T):any {
    switch (action.getType()) {
        case STORE_USER_INFO: {
            
        }
        case LOGOUT: {
            return {
                ...state,
                loggedInUser: new User()
            }
        }
        default:
            return state;
    }
}
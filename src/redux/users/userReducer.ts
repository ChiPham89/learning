import { STORE_USER_INFO, LOGOUT, StoreUserInfoAction } from "./userActions";
import { User } from "./user";
import Action from "../action";

export type UserState = {loggedInUser: User};

const initialState:UserState = {
    loggedInUser : null
}

export const userReducer = function(state:UserState = initialState, action:Action):any {
    switch (action.getType()) {
        case STORE_USER_INFO: {
            const storeUserInfoAction = <StoreUserInfoAction> action;
            return {
                ...state,
                loggedInUser: storeUserInfoAction.getUser()
            };
        }
        case LOGOUT: {
            return {
                ...state,
                loggedInUser: null
            }
        }
        default:
            return state;
    }
}
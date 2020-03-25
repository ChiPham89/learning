import UserCredential from "./userCredential";
import { User } from "./user";
import Action from "../action";
import UsersApi from "../../apiCall/users/users";

export const STORE_USER_INFO: string = "LOGIN";
export const LOGOUT: string = "LOGOUT";

export class StoreUserInfoAction extends Action {
  private user:User;

  constructor(user:User) {
    super(STORE_USER_INFO);
    this.user = user;
  }

  public getUser():User {
    return this.user;
  }
}

export const storeUserInfo = (user: User):StoreUserInfoAction => new StoreUserInfoAction(user);

export type LoginAction = (credential:UserCredential) => Function;

export const login:LoginAction = (credential:UserCredential):Function => {
  return function(dispatch:Function, getState:Function) {
    const user = UsersApi.login(credential);
    if (user) {
      dispatch(storeUserInfo(user));
    }
  }
}

export class LogoutAction extends Action {
  constructor() {
    super(LOGOUT);
  }
}

export const logout = ():LogoutAction => new LogoutAction();


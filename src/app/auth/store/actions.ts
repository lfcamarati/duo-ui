import {createAction} from '@ngrx/store'
import {UserLogin} from '../types/userLogin.interface'

/* Login */
export const login = createAction(
  '[Auth] Login', //ActionTypes.LOGIN,
  (userLogin: UserLogin) => ({
    userLogin,
  })
)
export const loginSuccess = createAction(
  '[Auth] Login success', //ActionTypes.LOGIN_SUCCESS,
  (token: string) => ({token})
)
export const loginFailure = createAction(
  '[Auth] Login failure', //ActionTypes.LOGIN_FAILURE,
  (error: string) => ({error})
)

/* logout */
export const logout = createAction('[Auth] Logout') //ActionTypes.LOGOUT)
export const logoutSuccess = createAction('[Auth] Logout success') //ActionTypes.LOGIN_SUCCESS)

/* check access */
export const checkAccess = createAction('[Auth] Check access') //ActionTypes.CHECK_ACCESS)
export const checkAccessSuccess = createAction('[Auth] Check access success') //ActionTypes.CHECK_ACCESS_SUCCESS)
export const checkAccessFailure = createAction('[Auth] Check access failure') //ActionTypes.CHECK_ACCESS_FAILURE)

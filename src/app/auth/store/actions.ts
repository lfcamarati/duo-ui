import {createAction} from '@ngrx/store'
import {UserLogin} from '../types/userLogin.interface'

/* Login */
export const login = createAction('[Auth] Login', (userLogin: UserLogin) => ({
  userLogin,
}))
export const loginSuccess = createAction(
  '[Auth] Login success',
  (token: string) => ({token})
)
export const loginFailure = createAction(
  '[Auth] Login failure',
  (error: string) => ({error})
)

/* logout */
export const logout = createAction('[Auth] Logout')
export const logoutSuccess = createAction('[Auth] Logout success')

/* check access */
export const checkAccess = createAction('[Auth] Check access')
export const checkAccessSuccess = createAction('[Auth] Check access success')

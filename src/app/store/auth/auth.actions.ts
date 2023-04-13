import { createAction, props } from "@ngrx/store";
import { TokenJwt } from "src/app/domain/TokenJwt";
import { UserLogin } from "src/app/domain/UserLogin";

export const login = createAction(
  '[Auth] Login',
  (user: UserLogin) => ({ user }),
);

export const loginSuccess = createAction(
  '[Auth] Login success',
  (token: TokenJwt) => ({ token }),
);

export const logout = createAction(
  '[Auth] Logout',
);

export const logoutSuccess = createAction(
  '[Auth] Logout success',
);

export const checkAccess = createAction(
  '[Auth] Check access',
);

export const checkAccessSuccess = createAction(
  '[Auth] Check access success',
);

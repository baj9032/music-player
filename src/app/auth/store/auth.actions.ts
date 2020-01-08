import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const TRY_LOGOUT = 'TRY_LOGOUT';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: { username: string; password: string }) {}
}

export class TrySignin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: { username: string; password: string }) {}
}

export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload: any = null) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
  constructor(public payload: any = null) {}
}
export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload: any = null) {}
}
export type AuthActions =
  | TrySignin
  | TrySignup
  | Signin
  | Signup
  | Logout;

import * as AuthActions from './auth.actions';

export interface State {
  authenticated: boolean;
  token: string;
}

const initialState: State = {
  authenticated: false,
  token: ''
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.SIGNUP:
    case AuthActions.SIGNIN:
      return {
        ...state,
        authenticated: true,
        token: action.payload
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        authenticated: false,
        token: ''
      };
    default:
      return state;
  }
}

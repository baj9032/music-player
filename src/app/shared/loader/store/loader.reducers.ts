import * as LoaderActions from './loader.actions';

export interface State {
  isStart: boolean;
}

const initialState: State = {
  isStart: false
};

export function loaderReducer(
  state = initialState,
  action: LoaderActions.LoaderActions
) {
  switch (action.type) {
    case LoaderActions.START_STOP_LOADER:
      return {
        ...state,
        isStart: action.payload.isStart
      };

    default:
      return state;
  }
}

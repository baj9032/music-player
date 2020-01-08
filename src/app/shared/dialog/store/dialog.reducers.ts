import * as DialogActions from './dialog.actions';

export interface State {
  isOpen: boolean;
  error: any;
}

const initialState: State = {
  isOpen: false,
  error: ''
};

export function dialogReducer(
  state = initialState,
  action: DialogActions.DialogActions
) {
  switch (action.type) {
    case DialogActions.OPEN_DIALOG:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        error: action.payload.message
      };

    default:
      return state;
  }
}

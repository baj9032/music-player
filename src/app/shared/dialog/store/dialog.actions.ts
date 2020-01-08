import { Action } from '@ngrx/store';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const SET_DIALOG_ERROR = 'SET_DIALOG_ERROR';

export class OpenDialog implements Action {
  readonly type = OPEN_DIALOG;

  constructor(public payload: { isOpen: boolean; message: string }) {}
}

export type DialogActions = OpenDialog;

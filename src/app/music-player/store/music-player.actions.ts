import { Action } from '@ngrx/store';

export const UPDATE_DURATION = 'UPDATE_DURATION';
export const UPDATE_COMPLETED_DURATION = 'UPDATE_COMPLETED_DURATION';
export const UPDATE_MUSIC_DETAIL = 'UPDATE_MUSIC_DETAIL';
export const UPDATE_BUFFERED = 'UPDATE_BUFFERED';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_PLAYING_FLAG = 'UPDATE_PLAYING_FLAG';

export class UpdateDuration implements Action {
  readonly type = UPDATE_DURATION;
  constructor(public payload: number) {}
}
export class UpdateCompletedDuration implements Action {
  readonly type = UPDATE_COMPLETED_DURATION;
  constructor(public payload: number) {}
}
export class UpdateBuffered implements Action {
  readonly type = UPDATE_BUFFERED;
  constructor(public payload: number) {}
}
export class UpdateTitle implements Action {
  readonly type = UPDATE_TITLE;
  constructor(public payload: string) {}
}
export class UpdatePlayingFlag implements Action {
  readonly type = UPDATE_PLAYING_FLAG;
  constructor(public payload: boolean) {}
}
export type MusicPlayerActions =
  | UpdateDuration
  | UpdateCompletedDuration
  | UpdateBuffered
  | UpdateTitle
  | UpdatePlayingFlag;

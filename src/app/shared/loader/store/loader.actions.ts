import { Action } from '@ngrx/store';

export const START_STOP_LOADER = 'START_STOP_LOADER';

export class StartStopLoader implements Action {
  readonly type = START_STOP_LOADER;

  constructor(public payload: { isStart: boolean }) {}
}

export type LoaderActions = StartStopLoader;

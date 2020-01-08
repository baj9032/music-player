import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../home/store/home.reducers';
import * as fromMusicPlayer from '../music-player/store/music-player.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromDialog from '../shared/dialog/store/dialog.reducers';
import * as fromLoader from '../shared/loader/store/loader.reducers';

export interface AppState {
  home: fromHome.State;
  musicPlayer: fromMusicPlayer.State;
  auth: fromAuth.State;
  dialog: fromDialog.State;
  loader: fromLoader.State;
}

export const reducers: ActionReducerMap<AppState> = {
  home: fromHome.homeReducer,
  musicPlayer: fromMusicPlayer.musicPlayerReducer,
  auth: fromAuth.authReducer,
  dialog: fromDialog.dialogReducer,
  loader: fromLoader.loaderReducer
};

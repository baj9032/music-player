import { CurrentAudio } from './../music-player.model';
import * as MusicPlayerActions from './music-player.actions';

export interface State {
  currentAudio: CurrentAudio;
  audioList: string[];
}

const initialState: State = {
  currentAudio: new CurrentAudio(),
  audioList: []
};

export function musicPlayerReducer(
  state = initialState,
  action: MusicPlayerActions.MusicPlayerActions
) {
  switch (action.type) {
    case MusicPlayerActions.UPDATE_BUFFERED:
      const updatedbufferCurrentAudio = {
        ...state.currentAudio,
        bufferd: action.payload
      };
      return {
        ...state,
        currentAudio: updatedbufferCurrentAudio
      };
    case MusicPlayerActions.UPDATE_COMPLETED_DURATION:
      const updatedCompletedDurationCurrentAudio = {
        ...state.currentAudio,
        completedDuration: action.payload
      };
      return {
        ...state,
        currentAudio: updatedCompletedDurationCurrentAudio
      };
    case MusicPlayerActions.UPDATE_DURATION:
      const updatedDurationCurrentAudio = {
        ...state.currentAudio,
        duration: action.payload
      };
      return {
        ...state,
        currentAudio: updatedDurationCurrentAudio
      };
    case MusicPlayerActions.UPDATE_PLAYING_FLAG:
      const updatedPlayingCurrentAudio = {
        ...state.currentAudio,
        isPlaying: action.payload
      };
      return {
        ...state,
        currentAudio: updatedPlayingCurrentAudio
      };
    case MusicPlayerActions.UPDATE_TITLE:
      const updatedTitleCurrentAudio = {
        ...state.currentAudio,
        title: action.payload
      };
      return {
        ...state,
        currentAudio: updatedTitleCurrentAudio
      };

    default:
      return state;
  }
}

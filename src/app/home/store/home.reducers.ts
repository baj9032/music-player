import * as HomeActions from './home.actions';

export interface State {
  data: string;
}

const initialState: State = {
  data: 'ankit'
};

export function homeReducer(
  state = initialState,
  action: HomeActions.HomeActions
) {
  switch (action.type) {
    default:
      return state;
  }
}

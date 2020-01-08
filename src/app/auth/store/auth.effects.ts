import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';
import * as LoaderActions from '../../shared/loader/store/loader.actions';
import * as DialogActions from '../../shared/dialog/store/dialog.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect()
  authSignin: Observable<Action> = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    map((action: AuthActions.TrySignin) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return from(
        firebase
          .auth()
          .signInWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      this.router.navigate(['/music-player']);
      return [
        {
          type: AuthActions.SIGNIN,
          payload: token
        },
        {
          type: LoaderActions.START_STOP_LOADER,
          payload: { isStart: false }
        }
      ];
    }),
    catchError(data => {
      return [
        {
          type: DialogActions.OPEN_DIALOG,
          payload: { isOpen: true, message: data.message }
        },
        {
          type: LoaderActions.START_STOP_LOADER,
          payload: { isStart: false }
        }
      ];
    })
  );

  // @Effect({ dispatch: false })
  // logout: Observable<Action> = this.actions$.pipe(
  //   ofType(AuthActions.TRY_LOGOUT),
  //   map((action: AuthActions.TryLogout) => {
  //     return action.payload;
  //   }),
  //   switchMap(payload => {
  //     return from(firebase.auth().signOut());
  //   }),
  //   switchMap(authData => {
  //     this.router.navigate(['/']);
  //     return [
  //       {
  //         type: AuthActions.LOGOUT
  //       }
  //     ];
  //   }),
  //   catchError(data => {
  //     return [
  //       {
  //         type: AuthActions.LOGOUT
  //       }
  //     ];
  //   })
  // );
}

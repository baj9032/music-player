import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { SignIn } from '../models/signin.model';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import * as LoaderActions from '../../shared/loader/store/loader.actions';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInModel: SignIn;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit() {
    this.signInModel = new SignIn();
  }

  onSubmit() {
    this.store.dispatch(new LoaderActions.StartStopLoader({ isStart: true }));
    const userName = this.signInModel.userName;
    const password = this.signInModel.password;
    this.store.dispatch(
      new AuthActions.TrySignin({ username: userName, password })
    );
    // this.store.dispatch(new LoaderActions.StartStopLoader({ isStart: false }));
  }
}

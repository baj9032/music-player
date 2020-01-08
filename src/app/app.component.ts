import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from './store/app.reducers';
import * as firebase from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authState: Observable<{ authenticated: boolean }>;
  loaderState: Observable<{ isStart: boolean }>;

  config = {
    apiKey: 'AIzaSyCp3GPYmSr8avc6450LggFOq2BQdIVdQN8',
    authDomain: 'music-player-d6ed4.firebaseapp.com',
    databaseURL: 'https://music-player-d6ed4.firebaseio.com',
    projectId: 'music-player-d6ed4',
    storageBucket: 'music-player-d6ed4.appspot.com',
    messagingSenderId: '634949355937'
  };
  constructor(
    private store: Store<fromApp.AppState>,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    firebase.initializeApp(this.config);
    this.authState = this.store.select('auth');
    this.loaderState = this.store.select('loader');
    this.store.select('dialog').subscribe(data => {
      if (data.isOpen) {
        this.dialog.open(DialogComponent, {});
      }
    });
  }
}

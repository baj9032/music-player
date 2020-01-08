import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {}
  Logout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}

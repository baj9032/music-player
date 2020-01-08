import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeState: Observable<{ data: string }>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.homeState = this.store.select('home');
  }
}

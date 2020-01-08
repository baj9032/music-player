import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import * as fromApp from './../store/app.reducers';

@Injectable()
export class AuthGuardService implements CanActivate {
  authenticatedFlag: boolean;
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // console.log('AuthGuard#canActivate called');
    this.authenticatedFlag = false;
    this.store.select('auth').subscribe(data => {
      this.authenticatedFlag = data.authenticated;
      if (!this.authenticatedFlag) {
        this.router.navigate(['/']);
      }
    });
    return this.authenticatedFlag;
  }
}

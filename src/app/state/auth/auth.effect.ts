// src/app/state/auth/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import * as AuthActions from './auth.action';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>
        this.apiService.post('/auth/login', { username: action.username, password: action.password }).pipe(
          map((result: any) => AuthActions.loginSuccess({ token: result.token })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ token }) => {
          localStorage.setItem('authToken', token);
          this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('authToken');
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private apiService: ApiService, private router: Router) {}
}
// src/app/state/auth/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import * as AuthActions from './auth.action';

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    token: null,
    isAuthenticated: false,
    loading: false,
    error,
  })),
  on(AuthActions.logout, (state) => ({ ...state, token: null, isAuthenticated: false })),
);
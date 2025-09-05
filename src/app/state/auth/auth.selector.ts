import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

// This grabs the "auth" slice from the store
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Individual selectors
export const selectAuthToken = createSelector(
  selectAuthState,
  (state) => state.token
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

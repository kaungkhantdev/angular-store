// src/app/state/auth/auth.state.ts
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any | null;
}

export const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

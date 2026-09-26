import { HttpContext, HttpContextToken } from '@angular/common/http';

export const SKIP_AUTH = new HttpContextToken<boolean>(() => false);

export const SILENT_ERRORS = new HttpContextToken<boolean>(() => false);

export function httpContext(options: { skipAuth?: boolean; silentErrors?: boolean }): HttpContext {
  return new HttpContext()
    .set(SKIP_AUTH, options.skipAuth ?? false)
    .set(SILENT_ERRORS, options.silentErrors ?? false);
}

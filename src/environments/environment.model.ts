export interface Environment {
  readonly production: boolean;
  readonly apiBaseUrl: string;
  readonly auth: {
    readonly sessionTtlSeconds: number;
  };
}

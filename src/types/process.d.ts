declare namespace NodeJS {
  export interface ProcessEnv {
    ENVIRONMENT: 'development' | 'production';
    /**
     * Main app url.
     *
     * @example 'https://boilertowns.dev'
     */
    APP_URL: string;
    /**
     * Base api url.
     *
     * @example 'https://api.boilertowns.dev'
     */
    API_URL: string;
  }
}

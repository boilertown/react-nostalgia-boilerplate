declare namespace NodeJS {
  export interface ProcessEnv {
    ENVIRONMENT: 'development' | 'production';
    /**
     * Main app url.
     *
     * @example 'https://pipetowns.dev'
     */
    APP_URL: string;
    /**
     * Base api url.
     *
     * @example 'https://api.pipetowns.dev'
     */
    API_URL: string;
  }
}

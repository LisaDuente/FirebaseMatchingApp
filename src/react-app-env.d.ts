declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_API_KEY: string;
    REACT_APP_AUTH_DOMAIN: string;
    REACT_APP_PROJECT_ID: string;
    REACT_APP_STORAGE_BUCKET: string;
    REACT_APP_MSI: string;
    REACT_APP_APP_ID: string;
  }
}

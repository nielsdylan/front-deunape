/// <reference types="vite/client" />

// declare namespace NodeJS {
//   interface ProcessEnv {
//     readonly REACT_APP_API_URL: string;
//   }
// }

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
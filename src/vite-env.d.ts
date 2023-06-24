/// <reference types="vite/client" />
declare module "simple-peer";
interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

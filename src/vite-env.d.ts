interface ImportMetaEnv {
  readonly VITE_MOCK: boolean
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

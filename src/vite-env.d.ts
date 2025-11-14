interface ImportMetaEnv {
  readonly VITE_MOCK: 'true' | 'false'
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Config {
  env: {
    mode: 'development' | 'production'
    apiUrl: string
    baseUrl: string
  }
}

export const config: Config = {
  env: {
    mode: import.meta.env.MODE as 'development' | 'production',
    apiUrl: import.meta.env.VITE_API_URL,
    baseUrl: import.meta.env.VITE_BASE_URL,
  },
}


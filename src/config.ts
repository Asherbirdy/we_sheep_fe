interface Config {
  env: {
    baseUrl: string
    apiUrl: string
    port: string
  }
}

export const config: Config = {
  env: {
    baseUrl: import.meta.env.VITE_BASE_URL,
    apiUrl: import.meta.env.VITE_API_URL,
    port: import.meta.env.VITE_PORT,
  },
}


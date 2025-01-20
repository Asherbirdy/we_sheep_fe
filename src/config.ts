interface Config {
  env: {
    baseUrl: string
    apiUrl: string
  }
}

export const config: Config = {
  env: {
    baseUrl: import.meta.env.VITE_BASE_URL,
    apiUrl: import.meta.env.VITE_API_URL,

  },
}


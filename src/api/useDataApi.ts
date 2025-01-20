import useRequest from './http'

export const useDataApi = {
  get: async () => await useRequest.get({ url: '/a' }),
  post: async () => await useRequest.post({
    url: '/b',
    data: { message: 'POST' },
  }),
  retryGet: async () => await useRequest.get({ url: '/c' }),
}

import useRequest from './http'

export const useDevApi = {
  showMe: async () => await useRequest.get({
    url: '/user/showMe'
  })
}

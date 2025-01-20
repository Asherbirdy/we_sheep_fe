import useRequest from './http'
import type { ShowUserResponse } from '@/types'

enum UserApi {
  showMe = '/users/showMe'
}

export const useUserApi = { showMe: async (): Promise<ShowUserResponse> => await useRequest.get({ url: UserApi.showMe }) }

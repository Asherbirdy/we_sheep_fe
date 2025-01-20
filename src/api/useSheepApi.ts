import useRequest from './http'
import type {
  CreateSheepPayload, GetSheepListResponse,
} from '@/types'

export const useSheepApi = {
  /*
    * Create Sheep
  */
  createSheep: async (payload: CreateSheepPayload) => await useRequest.post({
    url: '/sheep/create',
    data: payload,
  }),
  /*
    * Get Sheep List
  */
  getSheepList: async (): Promise<GetSheepListResponse> => await useRequest.get({ url: '/sheep/list' }),
  /*
    * Edit Sheep
  */
  editSheep: async (sheepId: string) => await useRequest.post({
    url: `/sheep/edit?sheepId=${sheepId}`,
    data: { name: 'test' },
  }),
  /*
    * Delete Sheep
  */
  deleteSheep: async (sheepId: string) => await useRequest.post({ url: `/sheep/delete?sheepId=${sheepId}` }),
}

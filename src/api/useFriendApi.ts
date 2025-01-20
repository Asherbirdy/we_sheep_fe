import useRequest from './http'

export const useFriendApi = {
  friendList: async () => await useRequest.get({ url: '/friend/getFriendList' }),
  addFriend: async () => await useRequest.post({
    url: '/friend/request',
    data: { friendId: '123' },
  }),
  youAddFriendList: async () => await useRequest.get({ url: '/friend/getSendFriendRequest' }),
  friendAddYouList: async () => await useRequest.get({ url: '/friend/getYourFriendRequest' }),
}

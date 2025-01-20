import useRequest from './http'
import type {
  LoginPayload, LoginResponse, UserRegisterPayload, UserRegisterResponse,
} from '@/types'

export const useAuthApi = {
  /*
    * Login
  */
  login: async (payload: LoginPayload): Promise<LoginResponse> => await useRequest.post({
    url: '/auth/login',
    data: payload,
  }),
  /*
    * Register
  */
  userRegister: async (payload: UserRegisterPayload): Promise<UserRegisterResponse> => await useRequest.post({
    url: '/auth/userRegister',
    data: payload,
  }),
  /*
    * Send Verify Email
  */
  sendVerifyEmail: async () => await useRequest.get({ url: '/auth/sendOTP' }),
  /*
    * Verify Email
  */
  verifyEmail: async (payload: { OTP: string }) => await useRequest.post({
    url: '/auth/bindOTPEmail',
    data: payload,
  }),
}

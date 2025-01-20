import Axios from './axios/Axios'
import _RequstInterceptors from './axios/requestInterceptors'
import staticAxiosConfig from './config'

const useRequest = new Axios({
  directlyGetData: true, // 是否直接返回 data 數據
  baseURL: staticAxiosConfig.baseUrl, // 定義攔截器
  timeout: 1000 * 60 * 1, //
  interceptors: _RequstInterceptors, // 定義攔截器
})

export default useRequest

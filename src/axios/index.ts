import service from './service'
import { CONTENT_TYPE } from '@/constants'
import { useUserStoreWithOut } from '@/store/modules/user'
import { AxiosResponse } from 'axios'

const request = (option: AxiosConfig) => {
  const { url, method, params, data, headers, responseType } = option
  const userStore = useUserStoreWithOut()
  return service.request({
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers: {
      'Content-Type': CONTENT_TYPE,
      [userStore.getTokenKey ?? 'Authorization']: userStore.getToken ?? '',
      ...headers
    }
  })
}

export default {
  get: (option: AxiosConfig) => {
    return request({ method: 'get', ...option }) as Promise<AxiosResponse>
  },
  post: (option: AxiosConfig) => {
    return request({ method: 'post', ...option }) as Promise<AxiosResponse>
  },
  delete: (option: AxiosConfig) => {
    return request({ method: 'delete', ...option }) as Promise<AxiosResponse>
  },
  put: (option: AxiosConfig) => {
    return request({ method: 'put', ...option }) as Promise<AxiosResponse>
  },
  cancelRequest: (url: string | string[]) => {
    return service.cancelRequest(url)
  },
  cancelAllRequest: () => {
    return service.cancelAllRequest()
  }
}

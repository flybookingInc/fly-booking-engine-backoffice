import { InternalAxiosRequestConfig } from './types'
import type { AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import qs from 'qs'
import { TRANSFORM_REQUEST_DATA } from '@/constants'
import { useUserStoreWithOut } from '@/store/modules/user'
import { objToFormData } from '@/utils'
import { t } from '@/hooks/web/useI18n'

const defaultRequestInterceptors = (config: InternalAxiosRequestConfig) => {
  if (config.method === 'post' && config.headers['Content-Type'] === 'application/json') {
    // use application/json as default post content type
    config.data = qs.stringify(config.data)
  } else if (
    TRANSFORM_REQUEST_DATA &&
    config.method === 'post' &&
    config.headers['Content-Type'] === 'multipart/form-data'
  ) {
    config.data = objToFormData(config.data)
  }
  if (config.method === 'get' && config.params) {
    let url = config.url as string
    url += '?'
    const keys = Object.keys(config.params)
    for (const key of keys) {
      if (config.params[key] !== void 0 && config.params[key] !== null) {
        url += `${key}=${encodeURIComponent(config.params[key])}&`
      }
    }
    url = url.substring(0, url.length - 1)
    config.params = {}
    config.url = url
  }
  return config
}

const defaultResponseInterceptors = (response: AxiosResponse): AxiosResponse => {
  if (response.status >= 300) {
    // show error message notification when request failed
    if (response?.data?.message) {
      ElMessage.error(response?.data?.message)
    } else {
      ElMessage.error(t('error.networkError'))
    }
    if (response?.status === 401) {
      const userStore = useUserStoreWithOut()
      userStore.logout()
    }
  }
  return response
}

export { defaultResponseInterceptors, defaultRequestInterceptors }

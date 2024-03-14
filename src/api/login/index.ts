import request from '@/axios'
import { UserCredential, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { UserLoginType } from './types'

interface RoleParams {
  roleName: string
}

export const loginApi = (data: UserLoginType): Promise<UserCredential> => {
  // return request.post({ url: '/mock/user/login', data })
  try {
    return signInWithEmailAndPassword(getAuth(), data.username, data.password)
    // const token = await UserCredential.user.getIdToken()
  } catch (error) {
    return Promise.reject(error)
  }
}

export const loginOutApi = (): Promise<void> => {
  // return request.get({ url: '/mock/user/loginOut' })
  try {
    return signOut(getAuth())
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getAdminRoleApi = (
  params: RoleParams
): Promise<IResponse<AppCustomRouteRecordRaw[]>> => {
  return request.get({ url: '/mock/role/list', params })
}

export const getTestRoleApi = (params: RoleParams): Promise<IResponse<string[]>> => {
  return request.get({ url: '/mock/role/list2', params })
}

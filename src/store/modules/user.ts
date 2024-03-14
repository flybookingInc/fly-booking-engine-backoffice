import { defineStore } from 'pinia'
import { store } from '../index'
import { useAppStore } from '@/store/modules/app'
import { useStorage } from '@/hooks/web/useStorage'
import { UserLoginType, UserType, propertyMetaType } from '@/api/login/types'
import { getCurrentUser } from '@/utils/firebase'
import { ElMessageBox } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { loginOutApi } from '@/api/login'
import { useTagsViewStore } from './tagsView'

import { User } from 'firebase/auth'
import router from '@/router'

interface UserState {
  userInfo?: UserType
  tokenKey: string
  token: string
  roleRouters?: string[] | AppCustomRouteRecordRaw[]
  rememberMe: boolean
  loginInfo?: UserLoginType
  currentPropertylId?: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      userInfo: undefined,
      tokenKey: 'Authorization',
      token: '',
      roleRouters: undefined,
      rememberMe: true,
      loginInfo: undefined,
      currentPropertylId: undefined // 當前Property Id，該帳號可能有多個property權限，目前選擇的property
    }
  },
  getters: {
    getTokenKey(): string {
      return this.tokenKey
    },
    getToken(): string {
      return this.token
    },
    getUserInfo(): UserType | undefined {
      return this.userInfo
    },
    getRoleRouters(): string[] | AppCustomRouteRecordRaw[] | undefined {
      return this.roleRouters
    },
    getRememberMe(): boolean {
      return this.rememberMe
    },
    getLoginInfo(): UserLoginType | undefined {
      return this.loginInfo
    },
    getUserRoles(): string[] {
      const roles =
        this.userInfo?.properties.forEach((item) => {
          item.propertyId === this.currentPropertylId
          return item.roles
        }) || []
      return roles
    },
    getUserPermissions(): string[] {
      const permissions =
        this.userInfo?.properties.forEach((item) => {
          item.propertyId === this.currentPropertylId
          return item.permissions
        }) || []
      return permissions
    },
    getUserProperties(): string[] {
      return this.userInfo?.properties.map((item) => item.propertyId) || []
    }
  },
  actions: {
    setTokenKey(tokenKey: string) {
      this.tokenKey = tokenKey
    },
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo?: UserType) {
      this.userInfo = userInfo
    },
    setRoleRouters(roleRouters: string[] | AppCustomRouteRecordRaw[]) {
      this.roleRouters = roleRouters
    },
    setCurrentHotelId(hotelId: string | undefined) {
      if (hotelId === undefined) {
        this.currentPropertylId = undefined
        return
      }
      if (!this.getUserProperties.includes(hotelId)) {
        throw new Error('無此飯店權限')
      }
      this.currentPropertylId = hotelId
    },
    logoutConfirm() {
      const { t } = useI18n()
      ElMessageBox.confirm(t('common.loginOutMessage'), t('common.reminder'), {
        confirmButtonText: t('common.ok'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      })
        .then(async () => {
          loginOutApi().then(() => {
            this.reset()
          })
        })
        .catch(() => {
          ElMessageBox.prompt(t('error.logoutFail'))
        })
    },
    reset() {
      const tagsViewStore = useTagsViewStore()
      tagsViewStore.delAllViews()
      this.setToken('')
      this.setUserInfo(undefined)
      this.setCurrentHotelId(undefined)
      this.setRoleRouters([])
      router.replace('/login')
    },
    logout() {
      this.logoutConfirm()
    },
    setRememberMe(rememberMe: boolean) {
      this.rememberMe = rememberMe
    },
    setLoginInfo(loginInfo: UserLoginType | undefined) {
      this.loginInfo = loginInfo
    },
    async afterLoginAction(): Promise<void> {
      const appStore = useAppStore()
      const { setStorage } = useStorage('localStorage')

      // get user info
      const userInfo = await this.getUserInfoAction()
      setStorage(appStore.getAppTitle, userInfo)
    },
    async getUserInfoAction(): Promise<UserType | null> {
      const user = await getCurrentUser() // wait for firebase auth to get current user.
      if (!user) return null
      this.token = await user.getIdToken()
      const userInfo = await this.getUserInfo(user)
      this.setUserInfo(userInfo)
      if (userInfo.properties.length > 0 && !this.currentPropertylId) {
        this.setCurrentHotelId(userInfo.properties[0].propertyId)
      }
      return userInfo
    },
    // 設定firebase auth狀態改變時的處理函式，inject到 @/utils/firebase.ts setupOnAuthStateChanged 函數中
    async handleAuthStateChanged(_user: User | null) {
      await this.afterLoginAction()
    },
    /**
     * @description: Get user information and save to store
     */
    async getUserInfo(user: User): Promise<UserType> {
      const idTokenResult = await user.getIdTokenResult()
      if (!idTokenResult) {
        throw new Error('user not login')
      }
      this.setToken(idTokenResult.token)
      const userInfo: UserType = {
        username: user.email as string,
        properties: idTokenResult.claims.properties as propertyMetaType[]
      }

      return userInfo
    }
  },
  persist: true
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}

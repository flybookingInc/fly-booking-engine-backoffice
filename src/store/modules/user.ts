import { defineStore } from 'pinia'
import { store } from '../index'
import { useAppStore } from '@/store/modules/app'
import { useStorage } from '@/hooks/web/useStorage'
import { UserLoginType, UserMeta, UserType } from '@/api/login/types'
import { getCurrentUser } from '@/utils/firebase'
import { ElMessageBox } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { loginOutApi } from '@/api/login'
import { useTagsViewStore } from './tagsView'
import { computed, ref } from 'vue'

import { User } from 'firebase/auth'
import router from '@/router'

export const useUserStore = defineStore(
  'userStore',
  () => {
    // states

    const userInfo = ref<Nullable<UserType>>(null)
    const tokenKey = ref<string>('Authorization') // header's token key
    const token = ref<Nullable<string>>(null) // token, this value will be the condition of login status
    const roleRouters = ref<Nullable<string[] | AppCustomRouteRecordRaw[]>>(null)
    const rememberMe = ref<boolean>(true)
    const loginInfo = ref<Nullable<UserLoginType>>(null)
    const currentPropertylId = ref<Nullable<string>>(null) // 當前Property Id，該帳號可能有多個property權限，目前選擇的property

    // getters

    const getTokenKey = computed((): string => {
      return tokenKey.value
    })
    const getToken = computed((): Nullable<string> => {
      return token.value
    })
    const getUserInfo = computed((): Nullable<UserType> => {
      return userInfo.value
    })
    const getRoleRouters = computed((): Nullable<string[] | AppCustomRouteRecordRaw[]> => {
      return roleRouters.value
    })
    const getRememberMe = computed((): boolean => {
      return rememberMe.value
    })
    const getLoginInfo = computed((): Nullable<UserLoginType> => {
      return loginInfo.value
    })
    const getUserRoles = computed((): string[] => {
      let roles: string[] = []
      userInfo.value?.meta.properties.forEach((item) => {
        if (item.propertyId === currentPropertylId.value) {
          roles = item.roles as string[]
        }
      })
      console.log('inside getUserRoles=', roles)
      return roles
    })
    const getUserPermissions = computed((): string[] => {
      const permissions =
        userInfo.value?.meta.properties.forEach((item) => {
          item.propertyId === currentPropertylId.value
          return item.permissions
        }) || []
      return permissions
    })
    const getUserProperties = computed((): string[] => {
      return userInfo.value?.meta.properties.map((item) => item.propertyId) || []
    })

    // actions

    const setTokenKey = (tokenKeyValue: string) => {
      tokenKey.value = tokenKeyValue
    }
    const setToken = (tokenValue: string) => {
      token.value = tokenValue
    }
    const setUserInfo = (userInfoValue: Nullable<UserType>) => {
      userInfo.value = userInfoValue
    }
    const setRoleRouters = (roleRoutersValue: Nullable<string[] | AppCustomRouteRecordRaw[]>) => {
      roleRouters.value = roleRoutersValue
    }
    const setCurrentPropertyId = (propertyId: Nullable<string>) => {
      if (propertyId === null) {
        currentPropertylId.value = null
        return
      }
      if (!getUserProperties.value.includes(propertyId)) {
        throw new Error('無此飯店權限')
      }
      currentPropertylId.value = propertyId
    }
    const logoutConfirm = () => {
      const { t } = useI18n()
      ElMessageBox.confirm(t('common.loginOutMessage'), t('common.reminder'), {
        confirmButtonText: t('common.ok'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      })
        .then(async () => {
          loginOutApi().then(() => {
            reset()
          })
        })
        .catch(() => {
          ElMessageBox.prompt(t('error.logoutFail'))
        })
    }
    const reset = () => {
      const tagsViewStore = useTagsViewStore()
      tagsViewStore.delAllViews()
      setToken('')
      setUserInfo(null)
      setCurrentPropertyId(null)
      setRoleRouters([])
      router.replace('/login')
    }
    const logout = () => {
      logoutConfirm()
    }
    const setRememberMe = (rememberMeValue: boolean) => {
      rememberMe.value = rememberMeValue
    }
    const setLoginInfo = (loginInfoValue: Nullable<UserLoginType>) => {
      loginInfo.value = loginInfoValue
    }
    const afterLoginAction = async (): Promise<void> => {
      const appStore = useAppStore()
      const { setStorage } = useStorage('localStorage')

      // get user info
      const userInfo = await getUserInfoAction()
      console.log('userInfo=', userInfo)
      if (userInfo && userInfo.meta.properties.length > 0) {
        setCurrentPropertyId(userInfo.meta.properties[0].propertyId)
      }
      setStorage(appStore.getAppTitle, userInfo)
    }
    const getUserInfoAction = async (): Promise<Nullable<UserType>> => {
      const user = await getCurrentUser() // wait for firebase auth to get current user.
      if (!user) return null
      token.value = await user.getIdToken()
      const userInfo = await fetchUserInfo(user)
      setUserInfo(userInfo)
      return userInfo
    }
    // 設定firebase auth狀態改變時的處理函式，inject到 @/utils/firebase.ts setupOnAuthStateChanged 函數中
    const handleAuthStateChanged = async (_user: Nullable<User>) => {
      await afterLoginAction()
    }
    /**
     * @description: Get user information and save to store
     */
    const fetchUserInfo = async (user: User): Promise<UserType> => {
      const idTokenResult = await user.getIdTokenResult()
      if (!idTokenResult) {
        throw new Error('user not login')
      }
      setToken(idTokenResult.token)
      const userInfo: UserType = {
        username: user.email as string,
        meta: idTokenResult.claims as UserMeta
      }

      return userInfo
    }

    return {
      userInfo,
      tokenKey,
      token,
      roleRouters,
      rememberMe,
      loginInfo,
      currentPropertylId,
      getTokenKey,
      getToken,
      getUserInfo,
      getRoleRouters,
      getRememberMe,
      getLoginInfo,
      getUserRoles,
      getUserPermissions,
      getUserProperties,
      setTokenKey,
      setToken,
      setUserInfo,
      setRoleRouters,
      setCurrentPropertyId,
      logoutConfirm,
      reset,
      logout,
      setRememberMe,
      setLoginInfo,
      afterLoginAction,
      getUserInfoAction,
      handleAuthStateChanged,
      fetchUserInfo
    }
  },
  { persist: true }
)
export const useUserStoreWithOut = () => {
  return useUserStore(store)
}

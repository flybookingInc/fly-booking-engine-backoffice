import { RoleEnum, AppRoleEnum } from '@/enums/roleEnum'

export type UserLoginType = {
  username: string
  password: string
}

export type UserType = {
  username: string
  properties: propertyMetaType[]
}

export type propertyMetaType = {
  groupId?: string
  propertyId: string
  roles: RoleEnum[]
  permissions: string[]
}

export type AppMetaType = {
  appId: string
  roles: AppRoleEnum[]
  permissions: string[]
}

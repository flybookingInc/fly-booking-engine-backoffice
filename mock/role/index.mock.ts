import { MockMethod } from 'vite-plugin-mock'
// import { SUCCESS_CODE } from '@/constants'
// import { Layout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
import { RoleEnum } from '@/enums/roleEnum'
// import PropertiesVue from '@/views/Settings/Properties.vue'
// import Users from '@/views/Settings/Users.vue'
// import Roles from '@/views/Settings/Roles.vue'

const { t } = useI18n()
const timeout = 1000

const adminList = [
  {
    path: '/settings',
    redirect: '/settings/properties/list',
    component: '#',
    name: 'Settings',
    meta: {
      title: t('router.settings'),
      icon: 'ant-design:dashboard-filled'
      // alwaysShow: true
    },
    children: [
      {
        path: 'properties',
        name: 'Properties',
        component: '##',
        redirect: '/settings/properties/list',
        meta: {
          title: t('router.views.properties.pageTitle')
          // noCache: true,
          // affix: true
        },
        children: [
          {
            path: 'list',
            name: 'PropertyList',
            component: 'views/Settings/Properties/PropertyList',
            meta: {
              title: t('router.views.propertyList.pageTitle'),
              noCache: true,
              affix: true
            }
          },
          {
            path: 'add',
            name: 'PropertyAdd',
            component: 'views/Settings/Properties/PropertyAdd',
            meta: {
              title: t('router.views.propertyAdd.pageTitle'),
              noCache: true,
              affix: true,
              noTagsView: true,
              hidden: true
            }
          },
          {
            path: 'update',
            name: 'PropertyUpdate',
            component: 'views/Settings/Properties/PropertyUpdate',
            meta: {
              title: t('router.views.propertyUpdate.pageTitle'),
              noCache: true,
              affix: true,
              noTagsView: true,
              hidden: true
            }
          }
        ]
      },
      {
        path: 'roomTypes',
        name: 'RoomType',
        component: '##',
        redirect: '/settings/roomTypes/list',
        meta: {
          title: t('router.views.roomTypes.pageTitle')
          // noCache: true,
          // affix: true
        },
        children: [
          {
            path: 'list',
            name: 'RoomTypeList',
            component: 'views/Settings/RoomTypes/RoomTypeList',
            meta: {
              title: t('router.views.roomTypeList.pageTitle'),
              noCache: true,
              affix: true
            }
          },
          {
            path: 'add',
            name: 'RoomTypeAdd',
            component: 'views/Settings/RoomTypes/RoomTypeAdd',
            meta: {
              title: t('router.views.roomTypeAdd.pageTitle'),
              noCache: true,
              affix: true,
              noTagsView: true,
              hidden: true
            }
          },
          {
            path: 'update',
            name: 'RoomTypeUpdate',
            component: 'views/Settings/RoomTypes/RoomTypeUpdate',
            meta: {
              title: t('router.views.roomTypeUpdate.pageTitle'),
              noCache: true,
              affix: true,
              noTagsView: true,
              hidden: true
            }
          }
        ]
      },
      {
        path: 'ratePlans',
        name: 'RatePlan',
        component: '##',
        redirect: '/settings/ratePlans/list',
        meta: {
          title: t('router.views.ratePlans.pageTitle')
          // noCache: true,
          // affix: true
        },
        children: [
          {
            path: 'list',
            name: 'RatePlanList',
            component: 'views/Settings/RatePlans/RatePlanList',
            meta: {
              title: t('router.views.ratePlanList.pageTitle'),
              noCache: true,
              affix: true
            }
          },
          {
            path: 'add',
            name: 'RatePlanAdd',
            component: 'views/Settings/RatePlans/RatePlanAdd',
            meta: {
              title: t('router.views.ratePlanAdd.pageTitle'),
              noCache: true,
              affix: true,
              noTagsView: true,
              hidden: true
            }
          },
          {
            path: 'update',
            name: 'RatePlanUpdate',
            component: 'views/Settings/RatePlans/RatePlanUpdate',
            meta: {
              title: t('router.views.ratePlanUpdate.pageTitle'),
              noCache: true,
              affix: true,
              noTagsView: true,
              hidden: true
            }
          }
        ]
      },
      {
        path: 'users',
        component: 'views/Settings/Users',
        name: 'Users',
        meta: {
          title: t('router.views.users.pageTitle')
          // noCache: false
        }
      },
      {
        path: 'roles',
        component: 'views/Settings/Roles',
        name: 'Roles',
        meta: {
          title: t('router.views.roles.pageTitle')
          // noCache: false
        }
      }
    ]
  }
  // {
  //   path: '/settings',
  //   component: '#',
  //   redirect: '/settings/properties',
  //   name: 'Settings',
  //   meta: {
  //     title: t('router.settings'),
  //     icon: 'ant-design:dashboard-filled',
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'properties',
  //       component: 'views/Settings/Properties',
  //       name: 'Properties',
  //       meta: {
  //         title: t('router.views.properties.pageTitle'),
  //         noCache: true,
  //         affix: true
  //       }
  //     },
  //     {
  //       path: 'users',
  //       component: 'views/Settings/Users',
  //       name: 'Users',
  //       meta: {
  //         title: t('router.views.users.pageTitle'),
  //         noCache: false
  //       }
  //     },
  //     {
  //       path: 'roles',
  //       component: 'views/Settings/Roles',
  //       name: 'Roles',
  //       meta: {
  //         title: t('router.views.roles.pageTitle'),
  //         noCache: false
  //       }
  //     }
  //   ]
  // }
]

const testList: string[] = [
  '/settings',
  '/settings/properties',
  '/settings/users',
  '/settings/roles'
]

export default [
  // 列表接口
  {
    url: '/mock/role/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { roleName } = query
      console.log('roleName=', roleName)
      if (roleName === RoleEnum.SUPERADMIN || roleName === RoleEnum.ADMIN) {
        console.log('use super admin list')
        return adminList
      } else {
        console.log('use test list')
        return testList
      }
    }
  }
] as MockMethod[]

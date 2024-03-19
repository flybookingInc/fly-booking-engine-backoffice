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
    redirect: '/settings/properties/property-list',
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
        redirect: '/settings/properties/property-list',
        meta: {
          title: t('router.views.properties.pageTitle')
          // noCache: true,
          // affix: true
        },
        children: [
          {
            path: 'property-list',
            name: 'PropertyList',
            component: 'views/Settings/Properties/PropertyList',
            meta: {
              title: t('router.views.propertyList.pageTitle'),
              noCache: true,
              affix: true
            }
          },
          {
            path: 'property-add',
            name: 'PropertyAdd',
            component: 'views/Settings/Properties/PropertyAdd',
            meta: {
              title: t('router.views.propertyAdd.pageTitle'),
              noCache: true,
              affix: true
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
        return adminList
      } else {
        return testList
      }
    }
  }
] as MockMethod[]

import { MockMethod } from 'vite-plugin-mock'
import { SUCCESS_CODE } from '@/constants'
import { Layout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
// import PropertiesVue from '@/views/Settings/Properties.vue'
// import Users from '@/views/Settings/Users.vue'
// import Roles from '@/views/Settings/Roles.vue'

const { t } = useI18n()
const timeout = 1000

const adminList = [
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/properties',
    name: 'Settings',
    meta: {
      title: t('router.settings'),
      icon: 'ant-design:dashboard-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'properties',
        component: 'Views/Settings/Properties',
        name: 'Properties',
        meta: {
          title: t('router.views.properties.pageTitle'),
          noCache: true,
          affix: true
        }
      },
      {
        path: 'users',
        component: 'Views/Settings/Users',
        name: 'Users',
        meta: {
          title: t('router.views.users.pageTitle'),
          noCache: false
        }
      },
      {
        path: 'roles',
        component: 'Views/Settings/Roles',
        name: 'Roles',
        meta: {
          title: t('router.views.roles.pageTitle'),
          noCache: false
        }
      }
    ]
  }
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
      return {
        code: SUCCESS_CODE,
        data: roleName === 'admin' ? adminList : testList
      }
    }
  }
] as MockMethod[]

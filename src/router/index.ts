import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/settings',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/settings',
    redirect: '/settings/properties/property-list',
    component: Layout,
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
        component: getParentLayout(),
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
            component: () => import('@/views/Settings/Properties/PropertyList.vue'),
            meta: {
              title: t('router.views.propertyList.pageTitle'),
              noCache: true,
              affix: true
            }
          },
          {
            path: 'property-add',
            name: 'PropertyAdd',
            component: () => import('@/views/Settings/Properties/PropertyAdd.vue'),
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
        component: () => import('@/views/Settings/Users.vue'),
        name: 'Users',
        meta: {
          title: t('router.views.users.pageTitle')
          // noCache: false
        }
      },
      {
        path: 'roles',
        component: () => import('@/views/Settings/Roles.vue'),
        name: 'Roles',
        meta: {
          title: t('router.views.roles.pageTitle')
          // noCache: false
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router

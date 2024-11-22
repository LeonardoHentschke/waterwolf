import { createSharedComposable } from '@vueuse/core'
import type { Group } from '~/types'

function _useMenu() {
  const { currentRoute } = useRouter()
  const menuList = computed<Group[]>(() => {
    return [
      {
        groupLabel: '',
        menus: [
          {
            href: '/dashboard',
            label: 'Dashboard',
            active: currentRoute.value.fullPath.includes('/dashboard'),
            icon: 'lucide:layout-grid',
            submenus: [],
          },
        ],
      },
      {
        groupLabel: 'Configurações',
        menus: [
          {
            href: '/account',
            label: 'Conta',
            active: currentRoute.value.fullPath.includes('/account'),
            icon: 'lucide:settings',
            submenus: [],
          },
        ],
      },
    ]
  })

  return {
    menuList,
  }
}

export const useMenu = createSharedComposable(_useMenu)

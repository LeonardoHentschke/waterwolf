export interface Submenu {
  href: string
  label: string
  active?: boolean
}

export interface Menu {
  href: string
  label: string
  active: boolean
  icon: string
  submenus: Submenu[]
}

export interface Group {
  groupLabel: string
  menus: Menu[]
}

export interface CollapseMenuButtonProps {
  icon: string
  label: string
  active: boolean
  submenus: Submenu[]
  // isOpen: boolean | undefined
}

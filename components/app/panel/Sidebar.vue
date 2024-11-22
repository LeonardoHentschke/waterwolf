<script setup>
import { cn } from '@/lib/utils'

const { isOpen, setOpen } = useAdminPanel()
</script>

<template>
  <aside
    :class="cn('fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300', isOpen ? 'w-72' : 'w-[90px]')"
  >
    <AppPanelSidebarToggle :is-open="isOpen" :set-is-open="setOpen" />
    <div class="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
      <Button
        variant="link"
        as-child
      >
        <NuxtLink href="/">
          <Icon class="w-6 h-6 mr-1" name="lucide:droplets" />
          <h1
            :class="cn('font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                       isOpen ? 'translate-x-0 opacity-100'
                       : '-translate-x-96 opacity-0 hidden',
            )"
          >
            Water Wolf
          </h1>
        </NuxtLink>
      </Button>
      <ClientOnly>
        <AppPanelMenu :is-open="isOpen" />
      </ClientOnly>
    </div>
  </aside>
</template>

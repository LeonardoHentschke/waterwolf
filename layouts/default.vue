<script setup lang="ts">
import { cn } from '@/lib/utils'

const { isOpen } = useAdminPanel()
</script>

<template>
  <div>
    <AppPanelSidebar />
    <main
      :class="cn(
        'min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
        !isOpen ? 'lg:ml-[90px]' : 'lg:ml-72',
      )"
    >
      <AppPanelContentLayout>
        <slot />
      </AppPanelContentLayout>
    </main>
    <footer
      :class="cn(
        'transition-[margin-left] ease-in-out duration-300',
        !isOpen ? 'lg:ml-[90px]' : 'lg:ml-72',
      )"
    >
      <AppPanelFooter />
    </footer>
  </div>
</template>

<style scoped></style>

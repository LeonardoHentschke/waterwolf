<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useMenu } from '~/composables/useMenu'

defineProps<{
  isOpen: boolean
}>()

const { menuList } = useMenu()
</script>

<template>
  <ScrollArea class="[&>div>div[style]]:!block">
    <nav class="mt-8 h-full w-full">
      <ul class="flex w-full flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
        <li v-for="({ groupLabel, menus }, index) in menuList" :key="index" :class="cn('w-full', groupLabel ? 'pt-5' : '')">
          <template v-if="(isOpen && groupLabel) || isOpen === undefined">
            <p class="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
              {{ groupLabel }}
            </p>
          </template>
          <template v-else-if="!isOpen && isOpen !== undefined && groupLabel">
            <TooltipProvider>
              <Tooltip :delay-duration="100">
                <TooltipTrigger class="w-full">
                  <div class="w-full flex justify-center items-center">
                    <Icon name="lucide:ellipsis" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" align="start">
                  <p>{{ groupLabel }}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </template>
          <template v-else>
            <p class="pb-2" />
          </template>
          <template v-for="({ href, label, icon, active, submenus }, m_index) in menus">
            <template v-if="submenus.length === 0">
              <div :key="m_index" class="w-full">
                <TooltipProvider disable-hoverable-content>
                  <Tooltip :delay-duration="100">
                    <TooltipTrigger as-child>
                      <Button
                        :variant="active ? 'secondary' : 'ghost'"
                        class="w-full justify-start h-10 mb-1"
                        as-child
                      >
                        <NuxtLink :href="href">
                          <div
                            :class="cn('flex justify-center items-center', !isOpen ? '' : 'mr-4')"
                          >
                            <Icon :name="icon" size="18" />
                          </div>
                          <p
                            :class="cn(
                              'max-w-[200px] flex justify-center items-center truncate',
                              !isOpen ? '-translate-x-96 opacity-0' : 'translate-x-0 opacity-100',
                            )"
                          >
                            {{ label }}
                          </p>
                        </NuxtLink>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent v-if="!isOpen" side="right">
                      {{ label }}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </template>
            <template v-else>
              <div :key="m_index" class="w-full">
                <ClientOnly>
                  <AppPanelCollapseMenu
                    :icon="icon"
                    :label="label"
                    :active="active"
                    :submenus="submenus"
                  />
                </ClientOnly>
              </div>
            </template>
          </template>
        </li>
        <li class="w-full grow flex items-end">
          <TooltipProvider disable-hoverable-content>
            <Tooltip :delay-duration="100">
              <TooltipTrigger as-child>
                <Button
                  variant="outline"
                  class="w-full justify-center h-10 mt-5"
                >
                  <span :class="cn('flex justify-center items-center', isOpen === false ? '' : 'mr-4')">
                    <Icon name="lucide:log-out" size="18" />
                  </span>
                  <p
                    :class="cn(
                      'whitespace-nowrap',
                      !isOpen ? 'opacity-0 hidden' : 'opacity-100',
                    )"
                  >
                    Sair
                  </p>
                </Button>
              </TooltipTrigger>
              <TooltipContent v-if="!isOpen" side="right">
                Sair
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </nav>
  </ScrollArea>
</template>

<style scoped>

</style>

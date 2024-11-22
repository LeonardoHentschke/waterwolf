<script setup lang="ts">
import { DropdownMenuArrow } from 'radix-vue'
import { cn } from '@/lib/utils'
import type { CollapseMenuButtonProps } from '@/types'

const props = defineProps<CollapseMenuButtonProps>()

const isSubmenuActive = props.submenus.some(submenu => submenu.active)
const isCollapsed = ref(isSubmenuActive)

const { isOpen } = useAdminPanel()
</script>

<template>
  <div>
    <Collapsible
      v-if="isOpen"
      v-model:open="isCollapsed"
      class="w-full"
    >
      <CollapsibleTrigger
        class="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
        as-child
      >
        <Button
          :variant="active ? 'secondary' : 'ghost'"
          class="w-full items-center justify-start h-10"
        >
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center justify-center">
              <span class="mr-4 flex justify-center items-center">
                <Icon :name="icon" size="18" />
              </span>
              <p
                :class="cn(
                  'max-w-[150px] flex justify-center items-center truncate',
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
                )"
              >
                {{ label }} {{ active }}
              </p>
            </div>
            <div
              :class="cn(
                'whitespace-nowrap flex justify-center items-center',
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
              )"
            >
              <Icon class="transition-transform duration-200" name="mdi:chevron-down" size="18" />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent class="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <Button
          v-for="({ href, label, active }, index) in submenus" :key="index"
          :variant="active ? 'secondary' : 'ghost'"
          class="w-full justify-start h-10 mb-1"
          as-child
        >
          <NuxtLink :href="href">
            <span class="mr-4 ml-2 flex justify-center items-center">
              <Icon name="lucide:dot" size="18" />
            </span>
            <p
              :class="cn(
                'max-w-[170px] truncate flex justify-center items-center',
                isOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-96 opacity-0',
              )"
            >
              {{ label }}
            </p>
          </NuxtLink>
        </Button>
      </CollapsibleContent>
    </Collapsible>
    <DropdownMenu v-else>
      <DropdownMenuTrigger as-child>
        <Button
          :variant="active ? 'secondary' : 'ghost'"
          class="w-full justify-start h-10 mb-1"
        >
          <div class="w-full items-center flex justify-between">
            <div class="flex justify-center items-center">
              <span :class="cn('flex justify-center items-center', !isOpen ? '' : 'mr-4')">
                <Icon :name="icon" size="18" />
              </span>
              <p
                :class="cn(
                  'max-w-[200px] truncate flex justify-center items-center',
                  !isOpen ? 'opacity-0' : 'opacity-100',
                )"
              >
                {{ label }}
              </p>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <TooltipProvider disable-hoverable-content>
        <Tooltip :delay-duration="100">
          <TooltipTrigger as-child>

          </TooltipTrigger>
          <TooltipContent side="right" align="start" :align-offset="2">
            {{ label }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" :side-offset="25" align="start">
        <DropdownMenuLabel class="max-w-[190px] truncate">
          {{ label }}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem v-for="({ href, label }, index) in submenus" :key="index" as-child>
          <NuxtLink class="cursor-pointer" :href="href">
            <p class="max-w-[180px] truncate">
              {{ label }}
            </p>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuArrow class="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<style scoped>

</style>

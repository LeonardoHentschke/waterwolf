<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <TooltipProvider disable-hoverable-content>
    <Tooltip :delay-duration="100">
      <TooltipTrigger as-child>
        <Button
          class="rounded-full w-8 h-8 bg-background"
          variant="outline"
          size="icon"
          @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
        >
          <Icon class="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" name="radix-icons:sun" />
          <Icon class="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-transform ease-in-out duration-500 dark:rotate-90 dark:scale-0" name="radix-icons:moon" />
        </Button>
      </TooltipTrigger>
    </Tooltip>
  </TooltipProvider>
</template>

<style lang="scss" scoped>

</style>

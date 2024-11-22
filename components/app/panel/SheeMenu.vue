<script setup lang="ts">

</script>

<template>
  <Sheet>
    <SheetTrigger class="lg:hidden" as-child>
      <Button class-name="h-8" variant="outline" size="icon">
        <Icon name="lucide:menu" size="18" />
      </Button>
    </SheetTrigger>
    <SheetContent class="sm:w-72 px-3 h-full flex flex-col" side="left">
      <SheetHeader>
        <Button
          class="flex justify-center items-center pb-2 pt-1"
          variant="link"
          as-child
        >
          <NuxtLink href="/dashboard">
            <Icon class="w-6 h-6 mr-1" name="lucide:droplets" />
            <h1 class="font-bold text-lg">
              Criar mobile ainda
            </h1>
          </NuxtLink>
        </Button>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<style scoped>

</style>

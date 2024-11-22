<script setup lang="ts"></script>

<template>
  <div>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <NuxtLink href="/">
              Inicio
            </NuxtLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Conta</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <Card class="rounded-lg border-none mt-6">
      <CardContent class="p-6">
        <div class="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div class="flex flex-col relative">
            <NuxtImg
              src="/placeholder.png"
              width="500"
              height="500"
              alt="Placeholder Image"
              priority
            />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped></style>

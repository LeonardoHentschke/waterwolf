<template>
  <div>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <NuxtLink href="/">Inicio</NuxtLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <Card class="rounded-lg border-none mt-6">
      <CardContent class="p-6">
        <div class="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
            <div id="map" class="w-full h-full mt-4 rounded-lg border"></div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  mounted() {
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup("Este é o local.")
      .openPopup();
  }
};
</script>

<style scoped>
/* Os estilos ficarão apenas neste componente */
@import "leaflet/dist/leaflet.css";

#map {
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
}
</style>


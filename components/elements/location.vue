<template>


  <UCard :ui="{ body: {padding: 'px-0 py-0 p-0 sm:p-0'}, rounded: 'rounded-none' }">
    <template #header>
      <div>{{ location.name }}</div>
      <div>{{ location.street }}</div>
      <div>{{ location.zip }} {{ location.city }}</div>
    </template>

    <div class="relative h-64">
      <MapboxMap
          map-id="location"
          :options="{
        style: 'mapbox://styles/mapbox/light-v11', // style URL
        center: JSON.parse(location.location).coordinates, // starting position
        zoom: 14 // starting zoom
      }"
      >
        <MapboxDefaultMarker
            marker-id="locationMarker"
            :options="{}"
            :lnglat="JSON.parse(location.location).coordinates"
        >
        </MapboxDefaultMarker>
      </MapboxMap>
    </div>

    <template #footer>
      <elements-markdown class="prose lg:prose-md" :markdownString="location.info" />

    </template>
  </UCard>


</template>

<script setup>
const props = defineProps({
  location: {
    type: Object,
    required: true,
  }
});
</script>
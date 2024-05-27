<template>

  <ContentQuery v-for="l in locations" :path="`locations/${l}.nl`" find="one" v-slot="{ data }">
    <elements-location :location="data"/>
  </ContentQuery>


</template>
<script setup>
const props = defineProps({
  locations: {
    type: Array,
    required: true,
  }
});
</script>
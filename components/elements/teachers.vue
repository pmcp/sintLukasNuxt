<template>
  <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-0 pmcp-teacher_container'}">
  <ContentQuery v-for="t in teachers" :path="`teachers/${t}.nl`" find="one" v-slot="{ data }" >
    <elements-teacher :data="data" class="pmcp-teacher_element"/>
  </ContentQuery>
  </UPageGrid>
</template>

<script setup>
const props = defineProps({
  teachers: {
    type: Array,
    required: true,
  }
});
</script>

<style scoped>

@container (min-width: 300px) and (max-width: 800px) {
  .pmcp-teacher_container {
    gap: 3%;
    /*background-color: blue;*/
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .pmcp-teacher_element {
    /*background-color: red;*/
    grid-column: span 1;
  }
}

@container (min-width: 550px) {
  .pmcp-teacher_container {
    gap: 3%;
    /*background-color: yellow;*/
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }

  .pmcp-teacher_element {
    /*background-color: green;*/
    grid-column: span 1;
  }
}


</style>
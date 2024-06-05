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
<template>
  <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-0 pmcp-teacher_container'}">
    <elements-teacher
        v-for="t in props.teachers"
        :teacher="t"
        class="pmcp-teacher_element"
    />
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
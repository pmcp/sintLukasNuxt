<template>
  <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-0'}">
  <ContentQuery v-for="t in teachers" :path="`teachers/${t}.nl`" find="one" v-slot="{ data }">

    <UPageCard :ui="{ body: { base: 'flex flex-col justify-center items-center gap-4'}, rounded: 'rounded-none' }">
      <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
          size="3xl"
      />
      {{ data.firstName }} {{ data.lastName }}
    </UPageCard>


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
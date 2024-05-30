<template>
  <UPageCard :ui="{ body: { base: 'flex flex-col justify-center items-center gap-4'}, rounded: 'rounded-none' }">
    <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
        size="3xl"
    />
    {{ data.firstName }} {{ data.lastName }}
  </UPageCard>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
});
</script>
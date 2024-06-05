<template>
  <ui-button v-if="props.type === 'ui-button'" :style="2" :to="props.data.link" :download="props.data.download" >
    {{ props.data.label}}
  </ui-button>
</template>
<script setup>
import { UiButton } from '#components'

const props = defineProps({
  data: Object,
  type: String
});
console.log(props.data)
const comp = resolveComponent('ui-button')
const comp2 = resolveComponent(props.type)

const typeComponent = computed(() => {
  const map = {
    'ui-button': UiButton
  }
  return map[props.type]
})

</script>
<template>
<div>

  <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'}">
    <div v-for="(element, key) in elements" :key="`el${key}`" class="col-span-3">
      <!--  MARKDOWN -->
      <elements-markdown v-if="element.type === 'text'" class="prose lg:prose-md" :markdownString="element.markdown" />
      <!--  IMAGES -->
      <elements-images v-if="element.type === 'images'" :images="element.image" :layout="element.layout" />
      <!-- LOCATION-->
      <elements-locations v-if="element.type === 'locations'" :locations="element.location" />
    </div>
  </UPageGrid>

</div>
</template>


<script>
export default {
  props: {
    elements: {
      type: Object
    },
  },
}
</script>
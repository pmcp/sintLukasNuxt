<template>
  <template v-if="props.course" >

    <ContentQuery path="ateliers"  find="one" :where="{ categories: props.course, '_path': { $contains: '.nl' } }" v-slot="{ data }">
      <nuxt-link v-if="data" :to="`${data._path}`">
        <UCard v-if="data" :ui="{
          divide: 'divide-none',
          ring: 'ring-0',
          shadow: 'shadow-none',
          rounded: 'rounded-none',
          background: 'bg-transparent',
          base: 'group ',
          body:
          {
            padding: 'px-0 py-0 p-0 sm:p-0 border-none'
          },
          header:
          {
            background: 'bg-transparent',
            padding: 'px-1 py-0 sm:p-0 px-0'
          },
          footer:
          {
            base: 'leading-5 sm:leading-4 md:leading-5 text-xl font-bold md:text-lg sm:text-sm p lg:text-md bg-transparent',

            padding: ''
          }
        }">
          <template #header>
            <ContentQuery path="site/categories" v-slot="{ data }">
              <h2 class="pt-2 text-2xl font-bold uppercase">
                <!-- TODO: Lang-->
                {{ category['nl'] }}
              </h2>
            </ContentQuery>
          </template>
          <div class="overflow-hidden">
            <div class="relative" v-if="data.mainImage">
              <nuxt-img class="w-full group-hover:scale-110 ease-in duration-200 grayscale " :src="data.mainImage" />
              <div class="w-full h-full  absolute top-0 left-0 mix-blend-overlay" :style="`background-color: ${category.color}`"></div>
              <div class="w-full h-full  absolute top-0 left-0 mix-blend-lighten opacity-50" :style="`background-color: ${category.color}`"></div>
            </div>
          </div>
          <template #footer >
            <div class="px-4 py-2 p-2 sm:px-2 md:py-4 w-full h-full" :style="`background-color: ${category.color}`">
              Ateliers
              <br>6-11 jaar
            </div>

          </template>
        </UCard>
      </nuxt-link>
    </ContentQuery>
  </template>
</template>

<script setup>
const props = defineProps({
  course: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  }
});

let category = ref('')
const categories = await queryContent('/site/categories').findOne()
category.value = categories.ateliers.find(item => item.id === props.course);




</script>
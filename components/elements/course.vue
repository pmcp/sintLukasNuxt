<template>
  <template v-if="data">
    <ContentQuery path="ateliers"  find="one" :where="{ categories: course, '_path': { $contains: '.nl' } }" v-slot="{ data }">
      <nuxt-link :to="`${data._path}`">
        <UCard v-if="data" :ui="{ divide: 'divide-none', ring: 'ring-0', shadow: 'shadow-none', rounded: 'rounded-none', base: 'group', body: { padding: 'px-0 py-0 p-0 sm:p-0 border-none'}, header: { padding: 'px-1 py-0 sm:p-0 px-0'}, footer: { base: 'leading-5 sm:leading-4 md:leading-5 bg-main-100 text-xl font-bold md:text-lg sm:text-sm p lg:text-md', padding: 'px-4 py-0 p-2 sm:px-2'}}">
          <template #header>
            <ContentQuery path="site/categories" v-slot="{ data }">
              <h2 class="pt-2 text-2xl font-bold uppercase">
                <!-- TODO: Lang-->
                {{ atelierTitle['nl'] }}
              </h2>
            </ContentQuery>
          </template>
          <div class="overflow-hidden">
            <div class="relative" v-if="data.mainImage">
              <nuxt-img class="w-full group-hover:scale-110 ease-in duration-200 grayscale " :src="data.mainImage" />
              <div class="w-full h-full bg-primary-400 absolute top-0 left-0 mix-blend-overlay"></div>
              <div class="w-full h-full bg-primary-400 absolute top-0 left-0 mix-blend-lighten "></div>
            </div>
          </div>


          <template #footer>
            Ateliers
            <br>6-11 jaar
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
  }
});

let atelierTitle = ref('')
const categories = await queryContent('/site/categories').findOne()
atelierTitle.value = categories.ateliers.find(item => item.id === props.course);


</script>
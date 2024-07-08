<template>
  <main>
    HALLO
    {{ data }}
{{ $route.path}}
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      {{ data }}
    </ContentQuery>



    <!--    <h1 class="text-xl font-bold py-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{{ data.title }}</h1>-->
<!--    <elements-intro>-->
<!--      {{ data.intro }}-->
<!--    </elements-intro>-->
<!--    <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>-->
  </main>
</template>
<script setup>
  const route = useRoute()
  console.log(route.path)
  const { data } = await useAsyncData('page', () => queryContent('/test-article-2.nl').findOne())
  console.log('got data', data)
</script>
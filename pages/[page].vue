<template>
  <main>
    HALLO

{{ $route.path}} - {{ '/pages'+$route.path }}

    <pre>{{ data }}</pre>
<!--    <ContentQuery :path="'/pages'+$route.path" v-slot="{ data }">-->
<!--    {{ data }}-->
<!--&lt;!&ndash;      <h1 class="text-xl font-bold py-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{{ data.title }}</h1>&ndash;&gt;-->
<!--&lt;!&ndash;      <elements-intro>&ndash;&gt;-->
<!--&lt;!&ndash;        {{ data.intro }}&ndash;&gt;-->
<!--&lt;!&ndash;      </elements-intro>&ndash;&gt;-->
<!--&lt;!&ndash;      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>&ndash;&gt;-->

<!--    </ContentQuery>-->


<!--    <ContentQuery :path="'/' + $route.path" find="one" v-slot="{ data }">-->

<!--      <h1 class="text-xl font-bold py-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{{ data.title }}</h1>-->
<!--      <elements-intro>-->
<!--        {{ data.intro }}-->
<!--      </elements-intro>-->
<!--      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>-->

<!--    </ContentQuery>-->



  </main>
</template>
<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>
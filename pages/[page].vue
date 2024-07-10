<template>
  <main>
    HALLO

{{ $route.path}}
    <ContentDoc :path="$route.path" v-slot="{ data }">

      <h1 class="text-xl font-bold py-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{{ data.title }}</h1>
      <elements-intro>
        {{ data.intro }}
      </elements-intro>
      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>

    </ContentDoc>


    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">

      <h1 class="text-xl font-bold py-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{{ data.title }}</h1>
      <elements-intro>
        {{ data.intro }}
      </elements-intro>
      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>

    </ContentQuery>



  </main>
</template>
<script setup lang="ts">
</script>
<template>
  <main>
    {{ $route.path}}
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      DATA {{ data }}
<!--      <ContentRenderer :value="data" class="prose" />-->
    </ContentQuery>

  </main>
</template>
<script setup lang="ts">
</script>
<template>
  <main>
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      {{ data }}
      <ContentRenderer :value="data" />
    </ContentQuery>
<!--    <ContentDoc />-->
  </main>
</template>

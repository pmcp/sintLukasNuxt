<template >
<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl prose lg:prose-md">
  <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
<!--          <pre> {{ data }} </pre>-->
    <h1>{{ data.title }}</h1>
    <h2>{{ data.age }}</h2>
    <p class="prose lg:prose-md"> {{ data.info }}</p>

    <elements-container :elements="data.elements"/>


  </ContentQuery>
</div>
</template>
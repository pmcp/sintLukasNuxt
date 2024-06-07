<template>
  <main>


    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
<!--      <pre> {{ data }} </pre>-->
      <h1 class="text-xl font-bold py-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">{{ data.title }}</h1>
      <div>
        {{ data.intro }}
      </div>
      <elements-container class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl " :elements="data.elements"/>

<!--      <ContentRenderer :value="data" />-->
    </ContentQuery>
<!--    <ContentDoc />-->
  </main>
</template>

<template >
  <div class="grid grid-cols-1 gap-8">
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <img :src="data.mainImage" class=" h-80 w-full object-cover"/>
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl prose lg:prose-md">
          <h1>{{ data.title }}</h1>
          <elements-container :elements="data.elements"/>
        </div>
    </ContentQuery>
  </div>
</template>
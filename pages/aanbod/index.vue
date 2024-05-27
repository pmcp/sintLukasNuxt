<template>

    <ContentList path="/ateliers" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <ULink :to="`${article._path}`">{{ article.title }}</ULink>
      </div>
    </ContentList>
</template>

<script setup>
const query = { path: '/ateliers'}
</script>
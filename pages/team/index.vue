<template>
  <UPageGrid :ui="{wrapper: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-0'}">
    <ContentList path="/teachers" v-slot="{ list }">
      <div v-for="teacher in list" :key="teacher._path">
        <elements-teacher :data="teacher" />
      </div>
    </ContentList>
  </UPageGrid>
</template>

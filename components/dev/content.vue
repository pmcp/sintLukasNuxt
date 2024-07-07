<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open />
    </ContentNavigation>
  </nav>
</template>
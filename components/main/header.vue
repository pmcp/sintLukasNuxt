<template>

  <UHeader>
    <template #logo>
      LOGO
    </template>

    <template #center >
      <div class="hidden lg:block">
        <ULink
            v-for="link in data.navigation"
            :to="link.page + '.nl'"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{  link.labelnl  }}
        </ULink>
      </div>
    </template>

    <template #right>
      SOCIALS
    </template>

    <template #panel>
      <UVerticalNavigation :links="data.navigation">
        <template #default="{ link }">
          <ULink
              :to="link.page + '.nl'"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            {{  link.labelnl  }}
          </ULink>
        </template>
      </UVerticalNavigation>
    </template>


  </UHeader>

</template>


<script setup>
const { data } = await useAsyncData('navigation', () => queryContent('site/navigation').findOne())
</script>





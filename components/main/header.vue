<template>

  <UHeader :ui="{ wrapper: 'border-none py-8 sticky -top-8', container: 'items-end', left: 'lg:flex-none mr-4' }">
    <template #logo>
      <svg-logo />
    </template>

    <template #center >
      <div class="hidden lg:flex grow">
        <ULink
            v-for="link in data.navigation"
            :to="link.page + '.nl'"
            active-class="text-black underline underline-offset-8"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{  link.labelnl  }}
        </ULink>

      </div>
    </template>

    <template #right>
      <ui-button :style="1">
        Inschrijven
      </ui-button>
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





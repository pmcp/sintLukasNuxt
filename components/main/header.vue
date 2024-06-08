<template>

  <UHeader :ui="{ wrapper: 'bg-background/100 backdrop-blur-none border-b border-second-300 pt-2 pb-4 sticky -top-0', container: 'items-end', left: 'lg:flex-none mr-4' }">
    <template #logo>
      <svg-logo />
    </template>
    <template #center >
      <div class="hidden lg:flex grow gap-8">
        <UHorizontalNavigation :links="navItems" :ui="{
  wrapper: 'relative w-full flex items-center justify-between',
  container: 'flex items-center min-w-0',
  inner: 'min-w-0',
  base: 'group relative w-full flex items-center gap-1.5 px-2.5 py-0 rounded-none font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',
  before: 'hover:before:rounded-none hover:before:bg-transparent dark:hover:before:bg-primary-100/50',
  after: 'after:absolute after:bottom-0 after:inset-x-2 after:block after:h-[1px] after:mt-2 hover:after:bg-primary-500',
  active: 'text-gray-900 dark:text-white  after:bg-black-100 dark:after:bg-black-100 ',
  inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
  label: 'truncate relative',
  icon: {
    base: 'flex-shrink-0 w-5 h-5 relative',
    active: 'text-gray-700 dark:text-gray-200',
    inactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
  },
  avatar: {
    base: 'flex-shrink-0',
    size: '2xs',
  },
  badge: {
    base: 'flex-shrink-0 ml-auto relative rounded',
    color: 'gray',
    variant: 'solid',
    size: 'xs',
  },
}"/>
      </div>
    </template>

    <template #right>
      <!-- TODO: To CMS-->
      <elements-button :style="0">
        Inschrijven
      </elements-button>
    </template>

    <template #panel>

      <UVerticalNavigation :links="navItems">
        <template #default="{ link }">
          <!-- TODO: Lang-->
          <ULink
              :to="link.label + '.nl'"
              active-class="text-primary bg-red-100"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <!-- TODO: Lang-->
            {{  link.label  }}
          </ULink>
        </template>
      </UVerticalNavigation>
    </template>


  </UHeader>

</template>


<script setup>
const { data } = await useAsyncData('navigation', () => queryContent('site/navigation').findOne())
// TODO: Lang
const lang = 'nl'
const navItems = data.value.navigation.map(n => ({ 'label': n[`label${lang}`], to: `/${n.page}.nl`}))
</script>
<template>


  <UPopover :popper="{ placement: 'top-end' }">
    <elements-button :style="0">

      <div class="inline sm:inline md:hidden lg:hidden xl:hidden 2xl:hidden">SM</div>
      <div class="hidden sm:hidden md:inline lg:hidden xl:hidden 2xl:hidden">MD</div>
      <div class="hidden sm:hidden md:hidden lg:inline xl:hidden 2xl:hidden">LG</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:hidden">XL</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:inline">2XL</div>
    </elements-button>

    <template #panel>

      <div class="p-4">

        <UTabs :items="items" class="w-full">
          <template #item="{ item }">
            <UCard>
              <dev-content v-if="item.key === 'content'" />
            </UCard>
          </template>
        </UTabs>
      </div>
    </template>
  </UPopover>

</template>
<script setup lang="ts">
const items = [{
  key: 'content',
  label: 'Content',
}, {
  key: 'other',
  label: 'Other',
}]
</script>
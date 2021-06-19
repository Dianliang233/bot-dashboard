<template>
  <v-container>
    <v-breadcrumbs :items="nav">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h1 class="text-h3 mb-10"><slot name="heading" /></h1>
    <slot />
  </v-container>
</template>

<script>
export default {
  props: {
    nav: Array
  }
}
</script>

<style>

</style>
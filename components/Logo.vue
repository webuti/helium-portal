<template>
  <nuxt-link
    :to="localePath('index')"
    class="inline-flex text-white items-center"
  >
    <svg
      class="w-8"
      viewBox="0 0 24 24"
      stroke-linejoin="round"
      stroke-width="2"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke="currentColor"
      fill="none"
    >
      <rect x="3" y="1" width="7" height="12"></rect>
      <rect x="3" y="17" width="7" height="6"></rect>
      <rect x="14" y="11" width="7" height="12"></rect>
    </svg>
    <span class="ml-2 text-xl font-medium tracking-wide text-white uppercase"
      >HELIUM PORTAL</span
    >
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style></style>

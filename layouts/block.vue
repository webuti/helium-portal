<template>
  <div>
    <div
      class="
        px-4
        py-5
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <Logo />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, Logo },
}
</script>

<style>
</style>
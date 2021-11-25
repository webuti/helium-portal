<template>
  <div>
    <div class="bg-hv-green-500">
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
        <div class="flex justify-between">
          <Logo />
          <span
            class="
              bg-hv-green-800
              text-hv-green-500
              px-2
              py-1
              text-xs
              space-y-2
              flex
              items-center
              rounded-full
              text-center text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M12 4v16m8-8H4"
              />
            </svg>

            Add HotSpot
          </span>
        </div>
      </div>
    </div>
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
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
}
</script>

<style>
</style>
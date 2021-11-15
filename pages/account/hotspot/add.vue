<template>
  <div>
    <form class="">
      <h2 class="mb-5 text-2xl text-hv-green-800">Hotspot Add</h2>

      <div class="block mb-5">
        <label class="block">Name</label>
        <input v-model="name" type="text" class="border w-full shadow-sm p-2" />
      </div>

      <div>
        <div v-if="activehotspot" class="w-full">
          <div class="font-medium text-base text-navy-1000">
            <div class="flex flex-col items-start justify-start">
              <span class="">{{ activehotspot.name }}</span>
              <div class="flex items-start justify-start">
                <span
                  class="
                    w-4
                    flex flex-row
                    items-center
                    justify-start
                    mr-1.5
                    w-3
                    h-auto
                  "
                  ><img
                    :src="
                      'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/' +
                      kucult(activehotspot.geocode.short_country) +
                      '.svg'
                    "
                    style="
                      display: inline-block;
                      width: 1em;
                      height: 1em;
                      vertical-align: middle;
                    " /></span
                ><span class="text-xs text-gray-600">
                  {{ activehotspot.geocode.long_street }},{{
                    activehotspot.geocode.long_city
                  }}, {{ activehotspot.geocode.long_country }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div
          v-else
          v-for="hotspot in hotspots"
          class="
            border-solid
            py-2
            px-4
            flex
            hover:bg-gray-350
            cursor-pointer
            bg-gray-350
          "
        >
          <div @click="activehotspot = hotspot" class="w-full">
            <div class="font-medium text-base text-navy-1000">
              <div class="flex flex-col items-start justify-start">
                <span class="">{{ hotspot.name }}</span>
                <div class="flex items-start justify-start">
                  <span
                    class="
                      w-4
                      flex flex-row
                      items-center
                      justify-start
                      mr-1.5
                      w-3
                      h-auto
                    "
                    ><img
                      :src="
                        'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/' +
                        kucult(hotspot.geocode.short_country) +
                        '.svg'
                      "
                      style="
                        display: inline-block;
                        width: 1em;
                        height: 1em;
                        vertical-align: middle;
                      " /></span
                  ><span class="text-xs text-gray-600">
                    {{ hotspot.geocode.long_street }},{{
                      hotspot.geocode.long_city
                    }}, {{ hotspot.geocode.long_country }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center px-2">
            <span
              class="
                px-2
                py-1
                text-white text-xs
                font-medium
                whitespace-nowrap
                rounded-full
                bg-green-500
              "
              >{{ hotspot.mode }}</span
            >
          </div>
        </div>
      </div>

      <button
        v-if="activehotspot"
        class="
          inline-flex
          items-center
          justify-center
          mt-6
          py-2
          px-4
          shadow-sm
          font-medium
          tracking-wide
          transition
          duration-200
          rounded
          text-white
          border
          bg-hv-green-500
          focus:shadow-outline focus:outline-none
        "
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotspots: [],
      activehotspot: false,
      name: '',
    }
  },
  methods: {
    kucult: function (value) {
      if (!value) return ''
      return value.toString().toLowerCase()
    },
  },
  watch: {
    name: function (val) {
      this.activehotspot = false
      if (this.name) {
        this.$axios
          .get(
            'https://helium-api.stakejoy.com/v1/hotspots/name?search=' +
              this.name
          )
          .then((e) => {
            this.hotspots = e.data.data
          })
      }
    },
  },
  computed: {},
}
</script>

<style>
</style>
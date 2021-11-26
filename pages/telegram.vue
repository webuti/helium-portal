<template>
  <div>
    <h2 class="p-2 px-0 text-4xl"> {{ $t('telegramVerification') }}</h2>
    <div class="text-gray-600 font-light">
      {{ $t('telegramVerificationInfo') }}
    </div>

    <form @submit.prevent="getData()">
      <div class="block my-5">
        <label class="block"> {{ $t('name') }}</label>
        <input
          v-model="name"
          type="text"
          :placeholder="$t('searchHotspot')"
          class="border w-full shadow-sm p-2"
        />
      </div>

      <div>
        <div v-if="activehotspot" class="w-full">
          <div class="font-medium text-base text-navy-1000">
            <div class="flex flex-col items-start justify-start">
              <span class="">{{ activehotspot.name | capitalize }}</span>
              <div class="flex items-start justify-start">
                <span
                  class="
                    w-4
                    flex flex-row
                    items-center
                    justify-start
                    mr-1.5
                    h-auto
                  "
                >
                  <flag :country="activehotspot.geocode.short_country" /> </span
                ><span class="text-xs text-gray-600">
                  {{ activehotspot.geocode.long_street }},{{
                    activehotspot.geocode.long_city
                  }}, {{ activehotspot.geocode.long_country }}</span
                >
              </div>
            </div>
          </div>

          <div class="block my-5">
            <a
              :href="
                'https://t.me/HeliumPortal_bot?start=' + activehotspot.address
              "
              target="_blank"
            >
              <div
                class="border flex items-center space-x-4 w-full shadow-sm p-2"
              >
                <div><telegram /></div>
                <div> {{ $t('validateStart') }}</div>
              </div>
            </a>
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
            border-b border-gray-200
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
                  >
                    <flag :country="hotspot.geocode.short_country" /> </span
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
    </form>
  </div>
</template>

<script>
import Flag from '../components/Flag.vue'
import Telegram from '../components/Telegram.vue'
export default {
  components: { Flag, Telegram },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      value = value.replace('-', ' ').replace('-', ' ')
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  data() {
    return {
      hotspots: [],
      activehotspot: false,
      telegramcode: '153982',
      name: '',
    }
  },
  methods: {
    getData() {
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
    activeHotSpotSet(hotspot) {
      this.activehotspot = hotspot
      this.activehotspot
    },
    kucult: function (value) {
      if (!value) return ''
      return value.toString().toLowerCase()
    },
  },
  created() {},
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

<style></style>

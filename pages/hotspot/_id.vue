<template>
  <div>
    <div>
      <loading v-if="results.length == 0" />
      <div v-else>
        <h2 class="p-2 text-4xl">{{ cityName }} Hotspots</h2>
        <div class="flex text-xs hover:bg-yellow-50">
          <span class="flex-1 p-2 flex items-center">NAME</span>

          <span
            @click="setSort('rewards_7')"
            class="
              p-2
              md:w-32
              cursor-pointer
              space-x-2
              flex
              justify-center
              items-center
              text-center
            "
            ><span class="hidden md:block">REWARD </span><span> 7D </span>
            <sort-icon v-if="sort.key == 'rewards_7'" :statu="sort.type"
          /></span>
          <span
            @click="setSort('rewards_30')"
            class="
              p-2
              md:w-32
              cursor-pointer
              space-x-2
              flex
              justify-center
              items-center
              text-center
            "
            ><span class="hidden md:block">REWARD </span><span> 30D </span>
            <sort-icon
              v-if="sort.key == 'rewards_30'"
              :statu="sort.type" /></span
          ><span
            @click="setSort('rewards_60')"
            class="
              p-2
              md:w-32
              cursor-pointer
              space-x-2
              flex
              justify-center
              items-center
              text-center
            "
            ><span class="hidden md:block">REWARD </span><span> 60D </span>
            <sort-icon v-if="sort.key == 'rewards_60'" :statu="sort.type"
          /></span>
        </div>

        <div
          class="hotspots border-t flex divide-x p-2 hover:bg-yellow-50"
          :key="result.id"
          v-for="result in sortedArray"
        >
          <span class="flex-1 p-2 pl-0">
            <a
              target="_blank"
              :href="'https://explorer.helium.com/hotspots/' + result.address"
            >
              <span class="">{{ result.name }}</span>
              <div class="flex items-start justify-start">
                <span
                  class="
                    flex flex-row
                    items-center
                    justify-center
                    mr-1.5
                    mt-2
                    space-x-2
                  "
                >
                  <flag class="w-3" country="TR" />
                  <span
                    alt="Antenna"
                    class="
                      border
                      flex flex-row
                      items-center
                      justify-center
                      border-gray-300
                      rounded-full
                      text-xs
                      px-2
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                    <span> {{ result.gain / 10 }} dBi</span>
                  </span>
                  <span
                    alt="Height"
                    class="
                      border
                      flex flex-row
                      items-center
                      justify-center
                      border-gray-300
                      rounded-full
                      text-xs
                      px-2
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                      />
                    </svg>

                    <span> {{ result.elevation }}m</span></span
                  >

                  <span v-if="result.contact_status">
                    <span @click="showTelegram(result.seo_url)"
                      ><div
                        class="
                          text-hv-green-500
                          border border-hv-green-500
                          justify-center
                          flex
                          rounded-full
                          items-center
                          text-xs
                          space-x
                          px-1
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="{2}"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <span class="w-28">Telegram Verified</span>
                      </div></span
                    >
                  </span>
                </span>
              </div>
            </a>
          </span>

          <span
            class="
              p-2
              w-12
              md:w-32
              text-center text-sm
              flex flex-col
              md:flex-row
              justify-center
              md:space-x-2
              items-center
            "
          >
            <span>{{ result.rewards_7 | number }} </span>
            <span class="text-gray-500">HNT</span>
          </span>

          <span
            class="
              p-2
              w-12
              md:w-32
              text-center
              flex flex-col
              md:flex-row md:space-x-2
              text-sm
              justify-center
              items-center
            "
          >
            <span>{{ result.rewards_30 | number }} </span>
            <span class="text-gray-500">HNT</span>
          </span>
          <span
            class="
              p-2
              w-12
              md:w-32
              text-center
              flex flex-col
              md:flex-row
              text-sm
              md:space-x-2
              justify-center
              items-center
            "
          >
            <span>{{ result.rewards_60 | number }} </span>
            <span class="text-gray-500">HNT</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from '../../components/Flag.vue'
import SortIcon from '../../components/SortIcon.vue'
export default {
  components: { SortIcon },
  data() {
    return {
      results: [],
      cityName: '',
      rewards: [],
      sort: {
        key: 'rewards_30',
        type: true,
      },
    }
  },

  computed: {
    sortedArray() {
      return this.results.sort((a, b) => {
        if (this.sort.type) {
          return b[this.sort.key] - a[this.sort.key]
        } else {
          return a[this.sort.key] - b[this.sort.key]
        }
      })
    },
  },
  methods: {
    setSort(key) {
      this.sort.key = key
      this.sort.type = !this.sort.type
    },
    showTelegram(key) {
      alert(
        'Telegram heliumportal botuna gidip send ' +
          key +
          ' yazdığınızda iletişim talebiniz iletilecek'
      )
    },
    getHntSum(hotspotAddress) {
      this.$axios
        .get(
          'https://helium-api.stakejoy.com/v1/hotspots/' +
            hotspotAddress +
            '/rewards/sum?min_time=-30%20day&max_time=2021-11-24T14%3A40%3A32.474Z&bucket=day'
        )
        .then((response) => {
          this.rewards[hotspotAddress] = response.data.data
          this.$forceUpdate()
        })
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      value = value.replace('-', ' ').replace('-', ' ')
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    number: function (number) {
      if (number == null) {
        return 0
      }
      return parseFloat(number).toFixed(2)
    },
  },

  async asyncData({ params, $http }) {
    const results = await $http.$get(
      'https://api.heliumportal.com/city/' + params.id + '.json'
    )
    return { results: results, cityName: results[0].city }
  },

  head() {
    return {
      title: this.cityName + ' Helium Hotspots',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.cityName + ' Helium Hotspots',
        },
      ],
    }
  },
}
</script>

<style>
</style>

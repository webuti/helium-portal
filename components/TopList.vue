<template>
  <div>
    <div>
      <loading v-if="results.length == 0" />
      <div v-else>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <span
            class="
              p-2
              pl-0
              flex flex-col
              space-y-2
              items-center
              mb-5
              md:mb-0 md:items-start
            "
            ><h2 class="text-4xl m-0 p-0">{{ $t('top100Hotspots') }}</h2>
            <p class="text-gray-500 font-light">
              {{ $t('last') }} {{ day }} {{ $t('day') }}
            </p>

            <span>
              <nuxt-link
                class="border rounded-full px-2 text-xs text-gray-600 py-1 mr-1"
                :to="localePath('/top100/' + country + '/' + dayz)"
                :class="{ 'bg-gray-50': day == dayz }"
                v-for="dayz in [1, 7, 30, 60]"
                :key="dayz"
                >{{ dayz }} {{ $t('day') }}</nuxt-link
              >
            </span>
          </span>

          <span class="flex flex-col justify-center items-center">
            <span class="flex w-full items-center justify-between">
              <span
                v-if="rewardOptions"
                class="flex text-xs space-x-2 py-5 text-gray-600 font-light"
              >
                <label>{{ $t('rewardPeriods') }}</label>
                <label
                  v-for="(rcinput, index) in rewardsDays"
                  class="flex justify-center items-center space-x-1"
                >
                  <span>{{ rcinput.name }}</span>
                  <input
                    class="
                      text-hv-green-800
                      border border-gray-300
                      rounded-full
                    "
                    type="checkbox"
                    v-model="activeRewardsDays"
                    :value="index"
                  />
                </label>
              </span>

              <span v-else class="flex w-full items-center justify-between">
                <input
                  type="text"
                  v-model="search"
                  :placeholder="$t('searchHotspot')"
                  class="
                    bg-gray-200
                    text-sm
                    p-2
                    w-full
                    text-gray-800
                    placeholder-gray-800
                    rounded-full
                  "
                  style="text-indent: 24px"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 absolute ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <span @click="rewardOptions = !rewardOptions">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </span>
          </span>
        </div>

        <div class="flex text-xs hover:bg-yellow-50">
          <span class="flex-1 p-2 flex items-center">{{ $t('name') }}</span>

          <span
            v-for="arewards in activeRewardsDays"
            @click="setSort(rewardsDays[arewards].key)"
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
            ><span class="hidden md:block">{{ $t('reward') }} </span
            ><span> {{ rewardsDays[arewards].name }} </span>
            <sort-icon
              v-if="sort.key == rewardsDays[arewards].key"
              :statu="sort.type"
          /></span>
        </div>

        <div
          class="hotspots border-t flex divide-x p-2 hover:bg-yellow-50"
          :key="result.id"
          v-for="(result, index) in sortedArray"
        >
          <span class="flex-1 p-2 pl-0 flex">
            <span class="p-2 text-2xl mr-2">
              {{ index + 1 }}
            </span>

            <span>
              <a
                target="_blank"
                :href="'https://explorer.helium.com/hotspots/' + result.address"
              >
                <span class="">{{ result.name }}</span>
              </a>

              <div class="flex items-start justify-start">
                <span
                  class="
                    flex flex-row
                    items-center
                    justify-start
                    mr-1.5
                    mt-2
                    h-auto
                    space-x-2
                  "
                >
                  <flag class="w-3" :country="result.flag" />
                  <span class="text-sm">{{ result.city }}</span>
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

                    <span> {{ result.elevation }}m</span>
                  </span>
                  <span
                    class="
                      border
                      flex flex-row
                      items-center
                      justify-center
                      border-gray-300
                      rounded-full
                      text-xs
                      cursor-pointer
                      px-2
                    "
                    v-if="result.maker"
                    @click="search = result.maker"
                    >{{ result.maker }}</span
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
                        <span class="w-28 hidden md:block">{{
                          $t('telegramVerified')
                        }}</span>
                      </div></span
                    >
                  </span>
                </span>
              </div></span
            >
          </span>

          <span
            v-for="arewards in activeRewardsDays"
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
            <span>{{ result[rewardsDays[arewards].key] | number }} </span>
            <span class="text-gray-500">HNT</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from './Flag.vue'
import SortIcon from './SortIcon.vue'
export default {
  components: { SortIcon, Flag },
  props: ['results', 'day', 'country'],
  data() {
    return {
      cityName: '',
      rewards: [],
      rewardOptions: false,
      search: '',
      rewardsDays: [
        { name: '24' + this.$t('h'), key: 'rewards_1' },
        { name: '7' + this.$t('d'), key: 'rewards_7' },
        { name: '30' + this.$t('d'), key: 'rewards_30' },
        { name: '60' + this.$t('d'), key: 'rewards_60' },
      ],
      activeRewardsDays: [2],

      sort: {
        key: 'rewards_' + this.day,
        type: false,
      },
    }
  },
  watch: {
    activeRewardsDays() {
      this.$cookies.set('activeRewardsDays', this.activeRewardsDays, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    },
  },
  mounted() {
    this.setSort('rewards_' + this.day)
    if (this.$cookies.get('activeRewardsDays')) {
      this.activeRewardsDays = this.$cookies.get('activeRewardsDays')
    }
    let activeDayIndex = Object.values(this.rewardsDays).findIndex(
      (e) => e.key == this.sort.key
    )

    if (this.activeRewardsDays.findIndex((e) => e == activeDayIndex) === -1) {
      this.activeRewardsDays.push(activeDayIndex);
    }
  },

  computed: {
    sortedArray() {
      let results = this.results.sort((a, b) => {
        if (this.sort.type) {
          return b[this.sort.key] - a[this.sort.key]
        } else {
          return a[this.sort.key] - b[this.sort.key]
        }
      })

      if (this.search) {
        return results.filter((item) => {
          return this.search
            .toLowerCase()
            .split(' ')
            .every(
              (v) =>
                item.name.toLowerCase().includes(v) ||
                item.maker.toLowerCase().includes(v)
            )
        })
      } else {
        return results
      }
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
  created() {},
  head() {
    return {
      title: this.$t('top100Helium'),
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('top100Helium'),
        },
      ],
    }
  },
}
</script>

<style></style>

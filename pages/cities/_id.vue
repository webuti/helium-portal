<template>
  <div>
    <div>
      <h2 class="p-2 text-4xl">{{ $t('cities') }}</h2>

      <div class="flex text-xs hover:bg-yellow-50">
        <span class="flex-1 p-2 md:w-32 flex items-center text-center">{{
          $t('name')
        }}</span>
        <span
          @click="setSort('count')"
          class="
            p-2
            w-20
            cursor-pointer
            md:w-32
            flex
            justify-center
            items-center
            text-center
          "
          ><span>{{ $t('count') }}</span>
          <sort-icon v-if="sort.key == 'count'" :statu="sort.type"
        /></span>

        <span
          @click="setSort('rewards_7')"
          class="
            p-2
            w-20
            cursor-pointer
            md:w-32
            flex
            justify-center
            items-center
            text-center
            space-x-2
          "
        >
          <span class="hidden md:block"> {{ $t('reward') }} </span
          ><span> 7D</span>
          <sort-icon v-if="sort.key == 'rewards_7'" :statu="sort.type"
        /></span>
        <span
          @click="setSort('rewards_30')"
          class="
            p-2
            w-20
            cursor-pointer
            md:w-32
            flex
            justify-center
            items-center
            text-center
            space-x-2
          "
        >
          <span class="hidden w-20 md:block"> {{ $t('reward') }} </span
          ><span> 30D</span>
          <sort-icon v-if="sort.key == 'rewards_30'" :statu="sort.type"
        /></span>
      </div>

      <loading v-if="!sortedArray" />
      <div
        class="hotspots border-t flex divide-x p-2 hover:bg-yellow-50"
        v-for="(key, value) in sortedArray"
      >
        <span class="flex-1 p-2 pl-0">
          <nuxt-link
            :to="localePath('/hotspot/' + key.country + '/' + key.url)"
          >
            <span class="">{{ key.name }} </span>
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
                <flag :country="key.flag" />
              </span>
            </div>
          </nuxt-link>
        </span>
        <span
          class="p-2 w-12 md:w-32 text-center flex justify-center items-center"
        >
          {{ key.count }}</span
        >
        <span
          class="
            p-2
            w-20
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
          <span>{{ key.rewards_7 | number }} </span>
          <span class="text-gray-500">HNT</span>
        </span>
        <span
          class="
            p-2
            w-20
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
          <span>{{ key.rewards_30 | number }} </span>
          <span class="text-gray-500">HNT</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../../components/Loading.vue'

import Flag from '../../components/Flag.vue'
import SortIcon from '../../components/SortIcon.vue'

export default {
  data() {
    return {
      countries: [],
      results: [],
      sort: {
        key: 'count',
        type: true,
      },
    }
  },
  computed: {
    sortedArray() {
      if (this.results) {
        return this.results.sort((a, b) => {
          if (this.sort.type) {
            return b[this.sort.key] - a[this.sort.key]
          } else {
            return a[this.sort.key] - b[this.sort.key]
          }
        })
      }
    },
  },
  methods: {
    setSort(key) {
      this.sort.key = key
      this.sort.type = !this.sort.type
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
      return number.toFixed(2)
    },
  },

  mounted() {
    this.$route.params.id
    if (!this.$route.params.id) {
      this.$route.params.id = 'turkey'
    }

    this.$axios
      .get(
        'https://api.heliumportal.com/' + this.$route.params.id + '/cities.json'
      )
      .then((response) => {
        this.results = response.data
      })
  },
}
</script>

<style>
</style>

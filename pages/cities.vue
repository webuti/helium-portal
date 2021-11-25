<template>
  <div>
    <div>
      <div class="flex text-xs hover:bg-yellow-50">
        <span class="flex-1 p-2">NAME</span>
        <span
          @click="setSort('count')"
          class="p-2 w-32 flex items-center text-center"
          ><span>HOTSPOT COUNT</span>
          <sort-icon v-if="sort.key == 'count'" :statu="sort.type"
        /></span>

        <span
          @click="setSort('rewards_7')"
          class="p-2 w-32 flex items-center text-center"
          ><span>TOTAL REWARDS 7</span>
          <sort-icon v-if="sort.key == 'rewards_7'" :statu="sort.type"
        /></span>
        <span
          @click="setSort('rewards_30')"
          class="p-2 w-32 flex items-center text-center"
          ><span>TOTAL REWARDS 30</span>
          <sort-icon v-if="sort.key == 'rewards_30'" :statu="sort.type"
        /></span>
      </div>

      <div
        class="hotspots border-t flex divide-x p-2 hover:bg-yellow-50"
        v-for="(key, value) in sortedArray"
      >
        <span class="flex-1 p-2 pl-0">
          <nuxt-link :to="'/hotspot/' + key.url">
            <span class="">{{ key.name }} </span>
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
                <flag :country="'TR'" />
              </span>
            </div>
          </nuxt-link>
        </span>
        <span class="p-2 w-32 text-center"> {{ key.count }}</span>
        <span class="p-2 w-32 text-center"> {{ key.rewards_7 | number }}</span>
        <span class="p-2 w-32 text-center"> {{ key.rewards_30 | number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from '../components/Flag.vue'
import SortIcon from '../components/SortIcon.vue'
export default {
  data() {
    return {
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
  created() {
    this.$axios
      .get('https://api.heliumportal.com/cities.json')
      .then((response) => {
        this.results = response.data
      })
  },
}
</script>

<style>
</style>

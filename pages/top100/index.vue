<template>
  <div class="flex flex-col md:flex-row">
    <div class="p-2">
      <div
        class="border shadow-sm rounded p-2 my-2"
        v-for="result in countries"
        v-if="result.name"
      >
        <nuxt-link :to="localePath('/top100/' + result.url + '/30')">
          <span class="flex space-x-2 items-center p-2">
            <flag :country="result.flag" />
            <span>{{ result.name }}</span>
          </span>
        </nuxt-link>
      </div>
    </div>
    <div class="w-full flex-1">
      <top-list day="30" country="global" :results="toplist" />
    </div>
  </div>
</template>

<script>
import Flag from '../../components/Flag.vue'
import TopList from '../../components/TopList.vue'
export default {
  components: { Flag, TopList },
  data() {
    return {
      countries: [],
      toplist: [],
    }
  },
  mounted() {
    this.$axios
      .get('https://api.heliumportal.com/global/top100-30.json')
      .then((response) => {
        this.toplist = response.data
      })
    this.$axios
      .get('https://api.heliumportal.com/countries.json')
      .then((response) => {
        this.countries = response.data
      })
  },
}
</script>

<style></style>

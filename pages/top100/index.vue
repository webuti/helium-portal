<template>
  <div class="flex flex-col md:flex-row">
    <div class="p-2">
      <div class="border rounded p-2 my-2" v-for="result in countries">
        <nuxt-link :to="localePath('/top100/' + result.url + '/30')">
          <span class="flex space-x-2 items-center p-2">
            <flag :country="result.flag" />
            <span>{{ result.name }}</span>
          </span>
        </nuxt-link>
      </div>
    </div>
    <div class="w-full flex-1">
      <top-list day="30" country="" :results="toplist" />
    </div>
  </div>
</template>

<script>
import Flag from '../../components/Flag.vue'
import TopList from '../../components/TopList.vue'
export default {
  components: { Flag, TopList },
  async asyncData({ params, $http }) {
    const toplist = await $http.$get(
      'https://api.heliumportal.com/global/top100-30.json'
    )

    const results = await $http.$get(
      'https://api.heliumportal.com/countries.json'
    )
    return { countries: results, toplist }
  },
}
</script>

<style>
</style>
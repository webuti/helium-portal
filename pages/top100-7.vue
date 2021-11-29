<template>
  <div>
    <top-list :results="results" day="7" />
  </div>
</template>

<script>
import TopList from '../components/TopList.vue'
export default {
  components: { TopList },
  async asyncData({ params, $http }) {
    const results = await $http.$get(
      'https://api.heliumportal.com/turkey/top100-7.json'
    )
    return { results: results }
  },

  head() {
    return {
      title: 'Top 100 Helium Hotspots',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Top 100 Helium Hotspots',
        },
      ],
    }
  },
}
</script>

<style>
</style>

<template>
  <div>
    <top-list :results="results" :day="day" :country="country" />
  </div>
</template>

<script>
import TopList from '../../../components/TopList.vue'
export default {
  components: { TopList },
  data() {
    return {
      day: 30,
      country: 'turkey',
    }
  },
  async asyncData({ params, $http }) {
    if (!params.id) {
      params.id = 30
    }

    const results = await $http.$get(
      'https://api.heliumportal.com/' +
        params.slug +
        '/top100-' +
        params.id +
        '.json'
    )
    return { results: results, country: params.slug, day: params.id }
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

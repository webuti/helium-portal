<template>
  <div>
    <top-list :results="results" :day="day" v-if="day" :country="country" />
  </div>
</template>

<script>
import TopList from '../../../components/TopList.vue'
export default {
  components: { TopList },
  data() {
    return {
      day: false,
      country: 'turkey',
      countries: [],
      results: [],
    }
  },
  mounted() {
    this.$axios
      .get(
        'https://api.heliumportal.com/' +
          this.$route.params.slug +
          '/top100-' +
          this.$route.params.id +
          '.json'
      )
      .then((response) => {
        this.results = []
        this.results = response.data
        this.day = this.$route.params.id
        this.$forceUpdate()
      })
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

<style></style>

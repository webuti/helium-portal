<template>
  <div>
    <div>
      <div v-if="results[0]" class="p-2">
        {{ results[0].geocode.short_city }} hotspot count : {{ results.length }}
      </div>
      <div class="flex text-xs hover:bg-yellow-50">
        <span class="flex-1 p-2">NAME</span>
        <span class="p-2 w-32 text-center">CONTACT STATUS</span>
        <span class="p-2 w-32 text-center">SALES STATUS</span>
        <span class="p-2 w-32 text-center">30D REWARDS</span>
      </div>
      <div
        class="hotspots border-t flex divide-x p-2 hover:bg-yellow-50"
        :key="result.id"
        v-for="result in results"
      >
        <span class="flex-1 p-2 pl-0">
          <nuxt-link :to="'/hotspot/' + result.name">
            <span class="">{{ result.name | capitalize }}</span>
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
                <flag :country="result.geocode.short_country" /> </span
              ><span class="text-xs text-gray-600">
                {{ result.geocode.long_street }},{{ result.geocode.long_city }},
                {{ result.geocode.long_country }}</span
              >
            </div>
          </nuxt-link>
        </span>

        <span class="p-2 w-32 text-center text-sm"> </span>
        <span class="p-2 w-32 text-center text-sm"> </span>
        <span class="p-2 w-32 text-center text-sm" v-if="rewards">
          <template v-if="rewards[result.address]">
            {{
              rewards[result.address].reduce((a, b) => a + b.total, 0)
            }}</template
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from '../../components/Flag.vue'
export default {
  data() {
    return {
      results: [],
      rewards: [],
    }
  },

  methods: {
    getHntSum(hotspotAddress) {
      this.$axios
        .get(
          'https://helium-api.stakejoy.com/v1/hotspots/' +
            hotspotAddress +
            '/rewards/sum?min_time=-30%20day&max_time=2021-11-24T14%3A40%3A32.474Z&bucket=day'
        )
        .then((response) => {
          this.rewards[hotspotAddress] = response.data.data
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
  },
  created() {
    this.$axios
      .get(
        'https://api.helium.io/v1/cities/' + this.$route.params.id + '/hotspots'
      )
      .then((response) => {
        this.results = response.data.data

        this.results.forEach((resp) => {
          this.getHntSum(resp.address)
        })
      })
  },
}
</script>

<style>
</style>

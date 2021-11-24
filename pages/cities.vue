<template>
  <div>
    <div>
      <div class="flex text-xs hover:bg-yellow-50">
        <span class="flex-1 p-2">NAME</span>
        <span class="p-2 w-32 text-center">ONLINE COUNT</span>
        <span class="p-2 w-32 text-center">OFFLINE COUNT</span>
      </div>

      <div
        class="hotspots border-t flex divide-x p-2 hover:bg-yellow-50"
        v-for="result in results"
      >
        <span class="flex-1 p-2 pl-0">
          <nuxt-link :to="'/hotspot/' + result.city_id">
            <span class=""
              ><template v-if="result.long_city"
                >{{ result.long_city }},</template
              >{{ result.short_state }}
            </span>
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
                <flag :country="result.short_country" />
              </span>
            </div>
          </nuxt-link>
        </span>

        <span class="p-2 w-32 text-center">
          {{ result.online_count }}
        </span>
        <span class="p-2 w-32 text-center"> {{ result.offline_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from '../components/Flag.vue'
export default {
  data() {
    return {
      results: [],
      city_id: 'aXN0YW5idWxpc3RhbmJ1bHR1cmtleQ',
    }
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
      .get('https://api.helium.io/v1/cities?search=Turkey')
      .then((response) => {
        this.results = response.data.data
      })
  },
}
</script>

<style>
</style>

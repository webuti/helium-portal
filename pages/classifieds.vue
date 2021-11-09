<template>
  <div>
    <h2 class="text-deep-purple-accent-400 py-2 text-md">
      Last added classifieds
    </h2>

    <div>
      <div class="flex text-xs hover:bg-yellow-50">
        <span class="flex-1 p-2">NAME</span>
        <span class="p-2 w-40 text-center">HOTSPOT MODEL</span>
        <span class="p-2 w-32 text-center">PRICE</span>
      </div>
      <div
        class="hotspots border-t flex divide-x p-2 hover:bg-yellow-50"
        :key="result.id"
        v-for="result in results"
      >
        <span class="flex-1 p-2 pl-0">
          <nuxt-link :to="'/hotspot/' + result.seo_url"
            ><b>{{ result.name }}</b>
          </nuxt-link>
        </span>
        <span class="p-2 w-40 text-center text-sm" v-if="result.hot_spot_model">
          {{ result.hot_spot_model.name }}
        </span>
        <span class="p-2 w-32 text-center text-sm" v-if="result.price">
          {{ result.price }} USD
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
    }
  },
  created() {
    this.$strapi.find('classifieds').then((response) => {
      this.results = response
    })
  },
}
</script>

<style>
</style>
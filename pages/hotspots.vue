<template>
  <div>
    <h2 class="text-hv-green-500 py-2 text-md">
      Last added hotspots
    </h2>

    <div>
      <div class="flex text-xs hover:bg-yellow-50">
        <span class="flex-1 p-2">NAME</span>
        <span class="p-2 w-32 text-center">CONTACT STATUS</span>
        <span class="p-2 w-32 text-center">SALES STATUS</span>
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
        <span class="p-2 w-32 text-center text-sm" v-if="result.contact_status">
          {{ result.contact_status.name }}
        </span>
        <span class="p-2 w-32 text-center text-sm" v-if="result.sales_status">
          {{ result.sales_status.name }}
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
    this.$strapi.find('hotspots').then((response) => {
      this.results = response
    })
  },
}
</script>

<style>
</style>

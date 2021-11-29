<template>
  <div>
    <div class="">
      <h2 class="p-2 text-4xl">{{ $t('countries') }}</h2>

      <div class="border rounded p-2 block my-5" v-for="result in results">
        <nuxt-link :to="localePath('/cities/' + result.url)">
          <span class="flex space-x-2 items-center p-2">
            <flag :country="result.flag" />
            <span>{{ result.name }}</span>
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Flag from '../components/Flag.vue'
export default {
  components: { Flag },
  async asyncData({ params, $http }) {
    const results = await $http.$get(
      'https://api.heliumportal.com/countries.json'
    )
    return { results: results }
  },
}
</script>

<style>
</style>
<template>
  <div>
    <h2 class="p-2 px-0 mb-5 text-4xl">HNT Converter</h2>
    <form class="flex flex-col space-y-2">
      <input type="number" v-model="hnt" class="p-3 block border" />

      <span class="block uppercase border p-3" v-for="key in activeCurrency"
        >{{ key.name }} : {{ prices[key.code] * hnt }}</span
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [],
      hnt: 1,
      activeCurrency: [
        { code: 'usd', name: 'USD' },
        { code: 'try', name: 'TL' },
        { code: 'eur', name: 'EUR' },
      ],
    }
  },
  mounted() {
    this.$axios
      .get('https://api.coingecko.com/api/v3/coins/helium')
      .then((e) => {
        this.prices = e.data.market_data.current_price
      })
  },
}
</script>

<style>
</style>
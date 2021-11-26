<template>
  <div>
    <span v-if="(usd = 'true') && usdPrice > 0"
      >$ {{ (price * usdPrice) | number }}
    </span>
    <span v-else>{{ price | number }} <small>HNT</small></span>
  </div>
</template>

<script>
export default {
  props: ['price', 'usd', 'usdPrice'],

  filters: {
    number: function (number) {
      if (number == null) {
        return 0
      }

      return parseFloat(number).toFixed(2)
    },
  },

  mounted() {
    this.$nuxt.$on('usd', () => {
      console.log('usd değişti')
      this.$forceUpdate()
    })
  },
}
</script>

<style>
</style>
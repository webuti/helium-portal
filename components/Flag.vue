<template>
  <img
  v-if="country"
    :src="
      'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/' +
      kucult(country) +
      '.svg'
    "
    style="
      display: inline-block;
      width: 1em;
      height: 1em;
      vertical-align: middle;
    "
  />
</template>

<script>
export default {
  props: ['country'],
  methods: {
    kucult: function (value) {
      if (!value) return ''
      return value.toString().toLowerCase()
    },
  },
}
</script>

<style>
</style>
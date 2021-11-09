<template>
  <div>
    <p v-if="$strapi.user">Logged in</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    user() {
      return this.$strapi.user
    },
  },
  methods: {
    logout() {
      this.$strapi.logout()
      this.$router.push('/')
    },
  },
}
</script>
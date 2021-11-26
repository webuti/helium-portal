<template>
  <div>
    <div class="w-full h-screen">
      <div>
        <div style="background: url('/assets/img/bg-heliumportal.jpg')">
          <div
            class="
              px-4
              py-5
              mx-auto
              sm:max-w-xl
              md:max-w-full
              lg:max-w-screen-xl
              md:px-24
              lg:px-8
              backdrop-filter backdrop-blur-sm
              md:backdrop-blur-md
            "
          >
            <div class="flex justify-between">
              <Logo />

              <span class="flex flex-col justify-between space-y-2 items-end">
                <span class="-mt-4">
                  <span @click="localeShow = !localeShow" v-if="!localeShow">
                    <span v-if="$i18n.locale == 'en'">
                      <flag country="us" />
                    </span>
                    <flag v-else :country="$i18n.locale" />
                  </span>

                  <div
                    v-if="localeShow"
                    class="
                      flex flex-row
                      bg-white
                      rounded-full
                      items-center
                      space-x-1
                      justify-center
                      px-2
                    "
                  >
                    <svg
                      @click="localeShow = false"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <nuxt-link
                      class="text-white"
                      v-for="locale in availableLocales"
                      :key="locale.code"
                      :to="switchLocalePath(locale.code)"
                    >
                      <flag :country="locale.flag" />
                    </nuxt-link>
                  </div>
                </span>
                <span class="flex items-center justify-center space-x-2">
                  <nuxt-link
                    class="text-white text-sm"
                    :to="localePath('/hnt-converter')"
                  >
                    <span> HNT ${{ usdPrice }}</span>
                  </nuxt-link>

                  <nuxt-link
                    :to="localePath('/telegram')"
                    class="
                      bg-hv-green-800
                      px-3
                      py-1
                      text-xs
                      flex
                      items-center
                      rounded-full
                      text-center text-white
                      space-x-2
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>

                    <span>{{ $t('login') }}</span>
                  </nuxt-link>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div
          class="
            px-4
            py-5
            mx-auto
            sm:max-w-xl
            md:max-w-full
            lg:max-w-screen-xl
            md:px-24
            lg:px-8
          "
        >
          <Nuxt />
        </div>
      </div>
      <div class="h-24"></div>

      <section
        id="bottom-navigation"
        class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <div id="tabs" class="flex justify-between">
          <nuxt-link
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
            :to="localePath('/cities')"
          >
            <span class="flex flex-col items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="tab tab-account block text-xs">Cities</span>
            </span></nuxt-link
          >
          <nuxt-link
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
            :to="localePath('/top100')"
          >
            <span class="flex flex-col items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span class="tab tab-account block text-xs">Top 100</span>
            </span></nuxt-link
          >

          <nuxt-link
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
            :to="localePath('/telegram')"
          >
            <span class="flex flex-col items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span class="tab tab-account block text-xs">Telegram</span>
            </span></nuxt-link
          >
          <nuxt-link
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
            :to="localePath('/about')"
          >
            <span class="flex flex-col items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>

              <span class="tab tab-account block text-xs">About</span>
            </span></nuxt-link
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Flag from '../components/Flag.vue'
import Navbar from '../components/Navbar.vue'
export default {
  head() {
    return this.$nuxtI18nHead()
  },
  components: { Navbar },
  data() {
    return {
      localeShow: 0,
      usdPrice: 0,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  mounted() {
    this.$axios
      .get('https://api.coingecko.com/api/v3/coins/helium')
      .then((e) => {
        this.usdPrice = e.data.market_data.current_price.usd
      })
  },
}
</script>

<style></style>

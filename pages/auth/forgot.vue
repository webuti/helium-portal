<template>
  <section class="text-hv-gray-500">
    <div class="container items-center px-5 py-12 lg:px-20">
      <div
        class="
          flex flex-col
          w-full
          max-w-md
          p-10
          mx-auto
          my-6
          transition
          duration-500
          ease-in-out
          transform
          bg-white
          rounded-lg
          md:mt-0
        "
      >
        <div class="mt-8">
          <div class="mt-6">
            <form
              action="#"
              @submit.prevent="submit()"
              method="POST"
              class="space-y-6"
            >
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-neutral-600"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    required=""
                    placeholder="Your Email"
                    class="
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-gray-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-gray-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-gray-300
                    "
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-10
                    py-4
                    text-base
                    font-medium
                    text-center text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-hv-green-500
                    rounded-xl
                    hover:bg-hv-green-800
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
                >
                  Send
                </button>
              </div>
            </form>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'block',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    submit() {
      this.$strapi
        .forgotPassword({
          email: this.form.email,
        })
        .then((e) => {
          console.log(e, 'e')
        })
    },
  },
}
</script>

<style>
</style>

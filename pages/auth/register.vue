<template>
  <section class="text-blueGray-700">
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
              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-neutral-600"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    v-model="form.password"
                    autocomplete="current-password"
                    required=""
                    placeholder="Your Password"
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
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    placeholder="Your password"
                    class="
                      w-4
                      h-4
                      text-blue-400
                      border-gray-200
                      rounded
                      focus:ring-blue-500
                    "
                  />
                  <label
                    for="remember-me"
                    class="block ml-2 text-sm text-neutral-600"
                  >
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-blue-400 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
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
                    bg-deep-purple-accent-400
                    rounded-xl
                    hover:bg-blue-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
                >
                  Sign in
                </button>
              </div>
            </form>
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
        .register({
          email: this.form.email,
          username: this.form.email,
          password: this.form.password,
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
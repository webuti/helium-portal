<template>
  <div>
    <h2 class="text-hv-green-500 py-2 font-medium text-2xl">
      Last added classifieds
    </h2>

    <div>
      <div class="flex text-xs">
        <span class="flex-1 p-2">NAME</span>
        <span class="p-2 w-40 text-center">HOTSPOT MODEL</span>
        <span class="p-2 w-32 text-center">PRICE</span>
      </div>
      <div
        class="
          hotspots
          border-t border-gray-200
          flex
          p-2
          hover:bg-yellow-50
        "
        :key="result.id"
        v-for="result in results"
      >
        <span class="flex-1 p-2 pl-0">
          <nuxt-link :to="'/hotspot/' + result.seo_url">
            <span
              class="bg-hv-blue-500"
              style="
                width: 10px;
                height: 10px;
                border-radius: 10px;

                display: inline-block;
                margin-right: 6px;
              "
            ></span>
            <b>{{ result.name }}</b>
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
      bulk: [
        'Thankful Lace Dove',
        'Tart Green Mallard',
        'Zealous Punch Porcupine',
        'Gentle Blue Deer',
        'Blunt Maroon Monkey',
        'Innocent Golden Mammoth',
        'Wobbly Iron Cricket',
        'Furry Candy Opossum',
        'Cuddly Steel Dragon',
        'Thankful Burlap Bobcat',
        'Trendy Lemon Elk',
        'Long Ginger Rhino',
        'Teeny Blue Whale',
        'Fierce Hickory Aardvark',
        'Gentle Pear Bison',
        'Early Aquamarine Whale',
        'Brave Bronze Eagle',
        'Magnificent Lavender Pig',
        'Scruffy Lava Worm',
        'Quaint Corduroy Ostrich',
      ],
    }
  },
  created() {
    /*
    this.$strapi.find('classifieds').then((response) => {
      this.results = response
    })
    */

    this.bulk.forEach((e) => {
      this.results.push({
        price: 11,
        name: e,
        seo_url: e,
        hot_spot_model: { name: 'test cihazı' },
      })
    })
  },
}
</script>

<style></style>

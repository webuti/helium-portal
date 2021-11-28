<template>
  <div>
    <h2 class="p-2 px-0 mb-5 text-4xl">Exchange</h2>

    <form
      class="
        flex
        border
        p-4
        w-full
        text-sm
        rounded
        shadow
        items-center
        space-x-2
      "
    >
      <div class="flex flex-col">
        <label>Model</label>
        <input type="text" v-model="form.model" class="border p-2" />
      </div>
      <div class="flex flex-col">
        <label>Şehir</label>
        <input type="text" v-model="form.city" class="border p-2" />
      </div>
      <div class="flex flex-col">
        <label>Fiyat</label>
        <input type="number" v-model="form.price" class="border p-2" />
      </div>
      <div class="flex flex-col">
        <label>Fiyat</label>
        <input type="number" v-model="form.price" class="border p-2" />
      </div>
      
      <div class="flex flex-row space-x-2">
        <button type="submit" class="bg-hv-green-500 text-md px-2 text-white">
          AL
        </button>
        <button type="submit" class="bg-hv-green-800 text-md px-2 text-white">
          SAT
        </button>
      </div>
    </form>

    <div class="flex">
      <div class="flex-1 border-r min-h-screen">
        <div class="p-2">
          <h2 class="text-2xl text-center mb-10">ALICILAR</h2>

          <table class="table table-exchange text-sm text-center w-full">
            <tr class="uppercase border font-light">
              <th class="p-2 text-left">Marka</th>
              <th>Şehir</th>
              <th>Durum</th>
              <th>FİYAT</th>
              <th></th>
            </tr>
            <tr class="border-b" v-for="i in [1, 2, 3, 4, 5, 6, 7]">
              <td class="text-left p-2">SENSECAP</td>
              <td>İstanbul</td>
              <td>
                <span
                  class="text-xs rounded-full bg-green-200 text-green-600 px-2"
                  >Sıfır</span
                >
              </td>
              <td>1500 USD</td>
              <td>
                <span
                  class="
                    text-xs
                    rounded-full
                    border border-green-200
                    text-green-600
                    px-2
                  "
                  >Sat</span
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="flex-1">
        <div class="p-2">
          <h2 class="text-2xl text-center mb-10">SATICILAR</h2>
          <table class="table table-exchange text-sm text-center w-full">
            <tr class="uppercase border font-light">
              <th class="p-2 text-left">Marka</th>
              <th>Şehir</th>
              <th>Durum</th>
              <th>FİYAT</th>
              <th></th>
            </tr>
            <tr
              class="border-b rounded-full"
              v-for="i in [1, 2, 3, 4, 5, 6, 7]"
            >
              <td class="text-left p-2">SENSECAP</td>
              <td>İstanbul</td>
              <td>YENİ</td>
              <td>1500 USD</td>
              <td>
                <span
                  class="
                    text-xs
                    rounded-full
                    border border-green-200
                    text-green-600
                    px-2
                  "
                  >Satın al</span
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: [],
    }
  },
}
</script>

<style>
.table-exchange tr:hover {
  background: #eee;
}
</style>

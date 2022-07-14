<script>
import router from "../router";
export default {
  data() {
    return {
      wishList: JSON.parse(localStorage.getItem("figurines")),
      hasWishList: function () {
        return this.wishList !== null && this.wishList.length >= 1;
      },
      keyTitles: function (count) {
        return count > 1 ? "Figurinhas" : "Figurinha";
      },
      handleDelete: function (e) {
        const arr = JSON.parse(localStorage.getItem("figurines"));
        let index = null;

        for (const key in this.wishList) {
          const hasIdWish =
            e.target.value.toString() === this.wishList[key].id.toString();
          if (hasIdWish) {
            index = key;
          }
        }
        arr.splice(index, 1);
        localStorage.setItem("figurines", JSON.stringify(arr));
        this.wishList = JSON.parse(localStorage.getItem("figurines"));
      },
    };
  },
  methods: {
    goToProducts() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <section v-if="hasWishList()">
    <button v-on:click="goToProducts">Comprar mais figurinhas</button>
    <ul id="wish--container">
      <li v-for="item in wishList">
        <div class="left-wish--container">
          <span>
            {{ `${keyTitles(item.count)}: ${item.figure}` }}
          </span>
          <span> Quantidade: {{ item.count }} </span>
          <span v-if="item.observation"> Observações: {{ item.observation }} </span>
          <span > Total: {{ item.total }} </span>
        </div>
        <div class="right-wish--container">
          <div>
            <button v-on:click="handleDelete($event)" :value="item.id">
              Deletar
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <!-- Caso o carrinho esteja vazio -->
  <div v-else="" class="empty-cart--container">
    <div>Carrinho vazio</div>
    <button v-on:click="goToProducts">Comprar figurinhas</button>
  </div>
</template>

<style scoped>
#wish--container {
  padding: 0;
}

#wish--container li {
  list-style: none;
  padding: 8px;
  margin: 10px 0;
  border: 2px solid #2c2079;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
}
.left-wish--container {
  display: flex;
  flex-direction: column;
}

.right-wish--container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-cart--container {
  text-align: center;
}

.empty-cart--container button {
  margin-top: 1.5rem;
}
</style>

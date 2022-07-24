<script>
import mask from '@/assets/scripts/masks'

export default {
  data() {
    return {
      count: 0, // quantidade de figurinhas marcadas
      figure: [], // produtos/figurinhas marcadas no formulario serao setados dentro do array
      observation: "", // observacoes do pedido
    };
  },
  methods: {
    // events counter
    increment() { this.count++ },
    decrement() { this.count-- },
    // botão para diminuir apenas é ativado quando for maior que 1
    isCountButtonDisabled() {
      return this.count < 1 ? true : false;
    },
    // o botão enviar é ativado quando tem alguma figurinha marcada e a quantidade for mais que 1
    isHandleSubmitButtonDisabled() {
      return this.count < 1 || this.figure.length < 1 ? true : false;
    },
    // retorna o total da compra
    // Retorna apenas dois decimais
    total() {
      return mask.convertToReal((this.count * 3.99 * this.figure.length).toFixed(2));
    },
    handleSubmit() {
      // armazena cada pedido no localstorage
      // a variavel figurines sempre retornara em array
      const figurines = JSON.parse(localStorage.getItem("figurines") || "[]");

      // anexa novo pedido ao array
      figurines.push({
        id: Date.now(),
        figure: this.figure,
        count: this.count,
        total: this.total(),
        observation: this.observation,
      });

      localStorage.setItem("figurines", JSON.stringify(figurines));
      // navega para o carrinho
      this.$router.push({ path: "/carrinho" });
    },
  }
};
</script>

<template>
  <form id="form" @submit.prevent="handleSubmit">
    <h3 class="title-bold">Quais adesivos:</h3>
    <div class="figurines-types--container">
      <label for="figure">
        <input v-model="figure" type="checkbox" name="figure" value="react" />
        React
      </label>
      <label for="figure">
        <input v-model="figure" type="checkbox" name="figure" value="Vue" />
        Vue
      </label>
      <label for="figure">
        <input v-model="figure" type="checkbox" name="figure" value="Angular" />
        Angular
      </label>
    </div>
    <div>
      <h3 class="title-bold">Quantos adesivos de cada?</h3>

      <div class="group-btn-form--container">
        <button type="button" @click="decrement" :disabled="isCountButtonDisabled()">
          -
        </button>
        <span>{{ count }}</span>
        <button type="button" @click="increment">+</button>
      </div>
    </div>

    <h3 class="title-bold">Total: <span>{{ total() }}</span></h3>

    <h3 class="title-bold">Observações:</h3>

    <textarea v-model="observation" name="observation" placeholder="Alguma dúvida? Recado?"></textarea>

    <button class="btn-handleSubmit-product" type="submit" :disabled="isHandleSubmitButtonDisabled()">
      Enviar
    </button>
  </form>
</template>

<style scoped>
#form {
  background-color: white;
  width: 100%;
  border-radius: 5px;
  min-height: 400px;
}

form {
  display: flex;
  flex-direction: column;
  /* padding: 0 20px; */
}

form h3,
.group-btn-form--container,.total-request {
  margin-bottom: 16px;
}

.figurines-types--container {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.group-btn-form--container button {
  width: 30px;
  height: 30px;
}
.group-btn-form--container span {
  margin: 0 30px;
}

.total-request{

}

form input {
  margin: 8px 0;
}

.btn-handleSubmit-product{
  margin-top: 2rem;
}

</style>

<template>
  <div class="teste-evento">
    <h2>Teste Evento</h2>
    <p @click="upperCase">
      {{ mensagem }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TesteEvento',
  data() {
    return {
      mensagem: 'O rato roeu a roupa do rei de roma'
    }
  },
  methods: {
    upperCase() {
      this.mensagem = this.mensagem.toUpperCase();
    }
  }
}
</script>

<style scoped>

</style>
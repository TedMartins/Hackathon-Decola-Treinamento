<template>
  <div class="meu-contador">
    <h2>Contador em Vue</h2>
    <p><strong>Contador:</strong> {{ counter }} </p>
    <div>
      <button @click="sum">+</button>
      <button @click="minus">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeuContador',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    sum() {
      this.counter++;
    },
    minus() {
      this.counter--;
    }
  }
}
</script>

<style scoped>
button {
  padding: 1rem;
  margin: 0.5rem;
  font-weight: 700;
}
</style>
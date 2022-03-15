<template>
  <div class="teste-for">
    <h1>Teste For</h1>
    <ul>
      <li v-for="animal of animais" :key="animal.id">
        <img :src="animal.url" :alt="animal.nome">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TesteFor',
  data() {
    return {
      animais: [
        {
          id: 1,
          nome: 'Gatinho',
          url: require('../assets/img/cat.jpg')
        },
        {
          id: 2,
          nome: 'Doguinho',
          url: require('../assets/img/dog.jpg')
        },
        {
          id: 3,
          nome: 'Girafinha',
          url: require('../assets/img/giraffe.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
  ul li {
    list-style-type: none;
  }
</style>
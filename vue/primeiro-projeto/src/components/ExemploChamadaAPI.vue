<template>
  <div class="sites-favoritos">
    <h2>Sites Favoritos</h2>
    <ul>
      <li v-for="site of sitesFavoritos" :key="site.id">
        <a :href="site.link"> {{ site.nome }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExemploChamadaAPI',
  data() {
    return {
      sitesFavoritos: []
    }
  },
  created() {
    fetch('https://hackthon-decola.firebaseio.com/sites-favoritos.json')
      .then(res => res.json())
      .then(json => {
        this.sitesFavoritos = json
      })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
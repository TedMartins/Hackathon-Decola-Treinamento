<template>
  <div class="home">
    
    <h2 class="pl-10 mt-6">Section Title</h2>

    <p class="pa-10">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed debitis nulla 
      itaque voluptatum autem reiciendis, obcaecati blanditiis maiores labore 
      ratione a magni, numquam eaque officiis. Possimus minus ab corrupti esse.
    </p>

    <figure class="container">
      <img 
      src="https://images.unsplash.com/photo-1526253038957-bce54e05968e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
      alt="Tec Image"
    >
    </figure>

    <p class="pa-10">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed debitis nulla 
      itaque voluptatum autem reiciendis, obcaecati blanditiis maiores labore 
      ratione a magni, numquam eaque officiis. Possimus minus ab corrupti esse.
    </p>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    //
  }
}
</script>

<style scoped>

.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

figure.container img {
  width: 60%;
  border-radius: 1rem;
}
</style>
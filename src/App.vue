<!-- src/App.vue -->
<template>
  <div>
    <HeaderComponent />
    <ProductListComponent :products="products" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProductListComponent from "@/components/ProductListComponent.vue";

export default {
  components: {
    HeaderComponent,
    ProductListComponent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; /* Adjust this margin based on your header's height */
}

</style>

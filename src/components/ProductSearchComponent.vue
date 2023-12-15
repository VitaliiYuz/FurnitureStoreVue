<!-- src/components/ProductSearchComponent.vue -->

<template>
    <div class="product-search">
      <label for="productName">Search by Product Name:</label>
      <input type="text" id="productName" v-model="searchTerm" @input="updateSearch" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      updateSearch() {
        this.$emit('search', this.searchTerm);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-search {
    margin-bottom: 20px;
  }
  
  /* Add any additional styling as needed */
  </style>
  
<!-- src/components/HeaderComponent.vue -->

<template>
    <header class="header">
      <h1>{{ storeName }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        storeName: 'Furniture Land',
      };
    },
  };
  </script>
  
  <style scoped>
 .header {
  text-align: center;
  background-color: #333; /* You can customize the background color */
  color: #fff; /* You can customize the text color */
  padding: 20px 0;
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
  </style>
  
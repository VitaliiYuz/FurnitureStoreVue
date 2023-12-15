<!-- src/components/ProductListComponent.vue -->

<template>
     <div class="product-list">
    <product-search @search="handleSearch" />
      <table>
        <thead>
          <tr>
            <th><button @click="sortColumn('name')">Product Name</button></th>
            <th><button @click="sortColumn('description')">Product Description</button></th>
            <th><button @click="sortColumn('category')">Category Name</button></th>
            <th><button @click="sortColumn('price')">Price</button></th>
            <th><button @click="sortColumn('quantity')">Quantity</button></th>
            <th><button @click="sortColumn('rating')">Rating</button></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in sortedProducts" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.category }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductSearchComponent from './ProductSearchComponent.vue';

  export default {
    components:{
        ProductSearchComponent,
    },
    
    data() {
    return {
      products: [],
      sortKey: '',
      sortOrder: 1,
    };
  },
  computed: {
    sortedProducts() {
      const key = this.sortKey;
      const order = this.sortOrder;

      return this.products.slice().sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        if (valA < valB) return -order;
        if (valA > valB) return order;
        return 0;
      });
    },
  },
  methods: {
    async fetchAllProducts() {
      this.products = await ProductDAO.getAllProducts();
      
    },
    sortColumn(key) {
      if (this.sortKey === key) {
        this.sortOrder *= -1; // Toggle between ascending and descending
      } else {
        this.sortKey = key;
        this.sortOrder = 1; // Default to ascending order
      }
    },
    handleSearch(searchTerm) {
      // Filter products based on the search term
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
},
async created() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      // your asynchronous data fetching logic goes here
    },
  },
}
</script>
  
  <style scoped>
  .product-list {
    margin: 20px auto;
    width: 1250px;
  }
  
  table {
    width: 90%;
    margin: 0 auto;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    cursor: pointer;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div v-for="product in products" :key="product.id">
      <Product :product="product" />
    </div>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "Shop",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    let res = await fetch("https://fakestoreapi.com/products");
    this.products = await res.json();
  },
};
</script>

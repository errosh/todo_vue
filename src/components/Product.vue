<template>
  <q-card class="my-card">
    <img :src="product.image" style="width:350px;height:300px;" />

    <q-card-actions align="right">
      <q-btn flat round color="red" icon="favorite" />
      <q-btn flat round color="teal" icon="shopping_cart" />
      <q-btn flat round color="primary" icon="preview" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
  data() {},
};
</script>

<style scoped>
.my-card {
  width: 350px;
  margin-right: 10px;
}
</style>

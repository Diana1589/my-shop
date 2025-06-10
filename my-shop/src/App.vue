<template>
  <div id="app" class="app-wrapper">
    <h1 class="catalog-title">Каталог товарів</h1>
    <ProductList />
    <ShoppingCart />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
  },
  setup() {
    const cartItems = ref([]);

    function addToCart(product) {
      const existing = cartItems.value.find(item => item.name === product.name);
      if (existing) {
        existing.quantity++;
      } else {
        cartItems.value.push({ ...product, quantity: 1 });
      }
    }

    function removeFromCart(index) {
      cartItems.value.splice(index, 1);
    }

    provide('addToCart', addToCart);
    provide('cartItems', cartItems);
    provide('removeFromCart', removeFromCart);
  }
};
</script>

<style scoped>
.app-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.catalog-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}
</style>
import Prod<!-- src/App.vue -->
<template>
  <ProductCard
    name="Керамічна чашка"
    description="Елегантна чашка ручної роботи, виготовлена в Україні."
    :price="250"
    image="https://i.pinimg.com/736x/6e/00/34/6e00347f422be523c534be780ce790e8.jpg"
  />
</template>

<script>
import ProductCard from './components/ProductCard.vue'

export default {
  name: 'App',
  components: {
    ProductCard
  }
}
</script>

<style>
/* Глобальні стилі, якщо потрібно */
</style>
uctCard from './components/ProductCard.vue';

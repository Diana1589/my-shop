<template>
  <div class="product-card">
    <img class="product-image" :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p class="price">{{ price }} грн</p>
    <div class="button-wrapper">
      <button class="buy-button" @click="handleAddToCart">Купити</button>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'ProductCard',
  props: {
    image: String,
    name: String,
    description: String,
    price: Number
  },
  setup(props) {
    const addToCart = inject('addToCart');
    function handleAddToCart() {
      if (addToCart) {
        addToCart({
          name: props.name,
          price: props.price,
          image: props.image
        });
      }
    }
    return { handleAddToCart };
  }
};
</script>

<style scoped>
.product-card {
  width: 220px;
  min-height: 420px; /* Вирівнює висоту картки */
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}

.price {
  font-weight: bold;
  margin: 8px 0;
}

.button-wrapper {
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
}

.buy-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 160px;
}

.buy-button:hover {
  background-color: #0056b3;
}
</style>
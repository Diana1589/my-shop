<template>
  <div class="product-card">
    <img class="product-image" :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p class="price">{{ price }} грн</p>
    <button class="buy-button" @click="handleAddToCart">Купити</button>
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
          name: 
props.name
,
          price: props.price,
          image: props.image
        });
      }
    }

    return { handleAddToCart };
  }
}
</script>



<template>
  <div class="cart">
    <h2>Кошик покупок</h2>
    <table v-if="cartItems.length">
      <thead>
        <tr>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Кількість</th>
          <th>Разом</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }} грн</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price * item.quantity }} грн</td>
          <td><button @click="removeItem(index)">Видалити</button></td>
        </tr>
      </tbody>
    </table>
    <p v-else>Кошик порожній.</p>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'ShoppingCart',
  setup() {
    const cartItems = inject('cartItems');
    const removeFromCart = inject('removeFromCart');

    function removeItem(index) {
      if (removeFromCart) removeFromCart(index);
    }

    return { cartItems, removeItem };
  }
};
</script>

<style scoped>


.cart {
  margin-top: 40px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 20px;
  text-align: center;
  background-color: #f9f9f9;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
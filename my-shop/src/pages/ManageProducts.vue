<template>
  <div>
    <h1>Пошук товарів</h1>
    <input v-model="searchQuery" placeholder="Введіть назву товару" type="text" />
    
    <ProductList :products="filteredProducts" />
    <ManageCart />
  </div>
</template>

<script>
import { ref, computed, provide } from 'vue';
import ProductList from '../components/ProductList.vue';
import ManageCart from '../components/ManageCart.vue';

export default {
  name: 'ManageProducts',
  components: {
    ProductList,
    ManageCart
  },
  setup() {
    const searchQuery = ref('');
    const cartItems = ref([]);

    const products = ref([
      {
        id: 1,
        name: 'Годинник Rolex datejust',
        description: 'Класичний і надійний швейцарський годинник',
        price: 51500,
        image: 'https://i.pinimg.com/736x/6e/31/63/6e3163ab782e67a8ce66e17338ddc091.jpg'
      },
      {
        id: 2,
        name: 'Набір прикрас Pandora',
        description: 'Елегантний набір ювелірних прикрас Pandora для стильного образу',
        price: 13700,
        image: 'https://i.pinimg.com/736x/d6/fc/1d/d6fc1d0cf22e2f8c4c406ab402e3744e.jpg'
      },
      {
        id: 3,
        name: 'Фен Dyson',
        description: 'Потужний і тихий фен з інноваційними технологіями для догляду за волоссям',
        price: 12000,
        image: 'https://i.pinimg.com/736x/01/d9/2f/01d92f6674f1e51b38391bc241b13972.jpg'
      },
      {
        id: 4,
        name: 'Парфуми Miss Dior',
        description: 'Ніжний і вишуканий аромат з квітковими нотами',
        price: 4800,
        image: 'https://i.pinimg.com/736x/11/8a/11/118a1198e0737e02b6581e99211aefc5.jpg'
      },
      {
        id: 5,
        name: 'Окуляри Chanel',
        description: 'Стильні сонцезахисні окуляри Chanel з елегантним дизайном',
        price: 8200,
        image: 'https://i.pinimg.com/736x/5e/d0/23/5ed023151108d0d314616c7990e83bd3.jpg'
      },
      {
        id: 6,
        name: 'Браслет Pandora',
        description: 'Вишуканий браслет Pandora з шармами для особливих моментів',
        price: 7600,
        image: 'https://i.pinimg.com/736x/0d/97/df/0d97dff8404504d99d3df06f58721530.jpg'
      },
      {
        id: 7,
        name: 'Сумка Dior',
        description: 'Елегантна брендова сумка Dior для стильного образу',
        price: 18500,
        image: 'https://i.pinimg.com/736x/2a/24/17/2a24172ed568810a55a0949ecb59e89f.jpg'
      }
    ]);

    const filteredProducts = computed(() =>
      products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    const totalPrice = computed(() =>
      cartItems.value.reduce((sum, item) => sum + item.price, 0)
    );

    function addToCart(product) {
      cartItems.value.push(product);
    }

    function removeItem(index) {
      cartItems.value.splice(index, 1);
    }

    provide('cartItems', cartItems);
    provide('totalPrice', totalPrice);
    provide('addToCart', addToCart);
    provide('removeItem', removeItem);

    return {
      searchQuery,
      filteredProducts
    };
  }
};
</script>
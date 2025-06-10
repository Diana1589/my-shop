<template>
  <div class="product-list-wrapper">
    <!-- Пошук -->
    <h2 class="search-title">Пошук товарів</h2>
    <input
      v-model="searchQuery"
      class="search-input"
      type="text"
      placeholder="Введіть назву товару"
    />

    <!-- Список карток -->
    <div class="product-list">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: { ProductCard },
  data() {
    return {
      searchQuery: '',
      products: [
        {
          id: 1,
          name: 'Годинник Rolex Datejust',
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
      ]
    };
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery.trim().toLowerCase();
      return this.products.filter(p =>
        p.name.toLowerCase().includes(query)
      );
    }
  }
};
</script>

<style scoped>
/* Обгортка */
.product-list-wrapper {
  text-align: center;
  padding: 20px;
}

/* Заголовок пошуку */
.search-title {
  font-size: 24px;
  margin-bottom: 10px;
}

/* Поле пошуку */
.search-input {
  padding: 8px;
  font-size: 16px;
  width: 260px;
  margin-bottom: 24px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

/* Сітка карток */
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}
</style>
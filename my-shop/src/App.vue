<template>
<div id="app">
<h1>Каталог товарів</h1>
<ProductList />
<router-view></router-view>
</div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
name: 'App',
components: {
ProductList,
},
};
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
text-align: center;
margin-top: 50px;
}
</style>
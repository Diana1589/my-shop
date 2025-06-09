<template>
  <div>
    <h2>Адмін-панель</h2>
    <p>Вітаємо, {{ username }}!</p>
    <button v-on:click="logout">Вийти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('authUser') || ''
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authUser');
      this.$router.push('/');
    }
  },
  beforeMount() {
    if (!this.username) {
      this.$router.push('/login');
    }
  }
}
</script>


<style scoped>
/* Можеш додати стиль на свій смак */
button {
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 16px;
}

button:hover {
  background-color: #c82333;
}
</style> 
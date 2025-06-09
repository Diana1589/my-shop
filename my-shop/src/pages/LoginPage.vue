<template>
  <div class="login-container">
    <h1>Вхід</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Електронна пошта</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">Увійти</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
 methods: {
  login() {
    if (
this.email
 === 'admin@gmail.com' && this.password === '123456') {
      // Записуємо у localStorage ім'я користувача:
      localStorage.setItem('authUser', 'AdminUser');
      // Переходимо на сторінку профілю:
      this.$router.push('/profile');
    } else {
      this.error = 'Невірна електронна пошта або пароль';
    }
  }
}

};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  background-color: white;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  text-align: center;
  margin-top: 12px;
}
</style> 
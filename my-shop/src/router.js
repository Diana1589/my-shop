import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from './pages/AdminDashboard.vue'
import ManageProducts from './pages/ManageProducts.vue'
import ManageReviews from './pages/ManageReviews.vue'
import LoginPage from './pages/LoginPage.vue'
import ProfilePage from './pages/ProfilePage.vue'


const routes = [
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: 'products', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
      // { path: 'login', component: LoginPage },
      // { path: 'profile', component: ProfilePage }
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },

    ],
  },
  {
    path: '/',
    redirect: '/admin/products'  // щоб корінь редіректилася на каталог
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 
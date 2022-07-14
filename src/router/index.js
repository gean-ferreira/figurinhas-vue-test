import { createRouter, createWebHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "figurinhas/produtos",
      component: ProductView,
    },
    {
      path: "/carrinho",
      name: "carrinho",
      component: () => import("../views/CartView.vue"),
    },
  ],
});

export default router;

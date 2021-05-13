import VueRouter from "vue-router";
import ToDo from "./components/ToDo.vue";
import Shop from "./components/Shop.vue";
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { name: "ToDo", path: "/", component: ToDo },
    { name: "Shop", path: "/shop", component: Shop },
  ],
});

export default router;

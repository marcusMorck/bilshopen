
//components
Vue.component('welcome', WelcomeComponent);
Vue.component('nav-menu', MenuComponent);
Vue.component('product', ProductComponent);
Vue.component('cart', CartComponent);
Vue.component('cart-item', CartItemComponent);

Vue.component('home-page', HomePageComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('product-page', ProductPageComponent);

const http = axios; // using axios 3rd part XHR/REST lib

// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/cart', component: CartPageComponent },
    { path: '/products', component: ProductPageComponent }
  ]
});

// the app
let app = new Vue({
    el: "#app",
    router
  });
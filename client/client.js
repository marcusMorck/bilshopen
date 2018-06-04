
//components
Vue.component('welcome', WelcomeComponent);
Vue.component('nav-menu', MenuComponent);
Vue.component('product', ProductComponent);
Vue.component('cart', CartComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('login', LoginComponent);
Vue.component('new-products', NewProductComponent);

// Page components
Vue.component('home-page', HomePageComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('product-page', ProductPageComponent);
Vue.component('registration-page', RegistrationComponent);
Vue.component('login-page', LoginPageComponent);



const http = axios; // using axios 3rd part XHR/REST lib

// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/shoppingvagn', component: CartPageComponent },
    { path: '/produkter/*', component: ProductPageComponent },
    { path: '/registrering', component: RegistrationComponent },
    { path: '/loggain', component: LoginComponent }
  ]
});

// the app
let app = new Vue({
    el: "#app",
    router
  });
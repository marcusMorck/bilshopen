
//components
Vue.component('welcome', WelcomeComponent);
Vue.component('nav-menu', MenuComponent);

const http = axios; // using axios 3rd part XHR/REST lib



// the app
let app = new Vue({
    el: "#app",
    
  });
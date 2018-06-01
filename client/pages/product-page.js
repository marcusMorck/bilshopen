const ProductPageComponent = {

  template: `
    <div class="row">
      <product
      v-for="product in products"
      v-bind:item="product"
      v-bind:key="product._id"
      ></product>
    </div>
  `,


  created() {
    http.get('/rest/products').then((response) => {
      this.products = response.data;
    }).catch((error) => {
      console.error(error);
    })
  },

  data() {
    return {
      products: []
    }
  }
}
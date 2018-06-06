const ProductComponent = {

    props: ['item'],
  
    template: `
    
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
              <router-link :to="'/produkter/'+item._id">{{item.name}}</router-link>
              </h4>
              <h5>{{item.price}}</h5>
              <p class="card-text">{{item.description}}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
        </div>
      </div>
    `,
  
    /*<div class="card-body">
    <h2>{{item.name}}</h2>
    <div>{{item.price}}kr</div>
    <p v-html="item.description"></p>
    <button v-on:click="addToCart">Lägg till</button>
    </div>*/
    data() {
      return {
        _id: '',
        message: '',
        loading: false,
      };
    },
  
    methods: {
      addToCart() { // register
        //this.loading = true;
        http.post('/rest/cart', {
          product: this.item._id,
          amount: 1,
        }).then(response => {
          console.log(response);
          this.loading = false;
          if(response.data.msg) {
            this.message = 'Lade till i varukorgen';
          } else {
            this.message = 'Error 1';
          }
        }).catch(error => {
          this.loading = false;
          this.message = 'Error 2';
        });
      }
    }
  
  }
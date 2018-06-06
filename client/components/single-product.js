const SingleProductComponent = {
    props: ['item'],
    template:`
    <div class="col-lg-9">
    <h1>Single Product</h1>
    

    <div class="card mt-4" >
      <img class="card-img-top img-fluid" src="http://placehold.it/900x400" alt="">
      <div class="card-body">
        <h3 class="card-title">kskka</h3>
        <h4>23</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
        <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
        4.0 stars
      </div>
    </div>
    </div>

    
    `,
   created(){
   let id = this.$route.params._id;
        http.get('/rest/products/' + id).then(response =>{

           this.items = response.data;
            console.log(this.items);
            
            //console.log( this.items[0]['_id']);
        })
    },
    data(){
        return{
            items: []
            
          }
    }
}

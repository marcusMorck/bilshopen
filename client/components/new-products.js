const NewProductComponent = {
    props: ['item'],
    template:
    `
    <div >
    <div class="col-lg-4 mb-4" v-for="item in items" >

    <div class="card h-100">
      <h4 class="card-header">{{ item.name }}</h4>
      <div class="card-body">
        <p class="card-text"> {{ item.description }}</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Läs mer</a>
      </div>
    </div>
  </div>
    </div>
    `,
    
    created(){
        http.get('/rest/products').then(response =>{
            this.items = response.data;
            console.log( this.items);
        })
    },
    data(){
        return{
          title: "test",
          items: [],
          loading: false
        }
      }
  }



const NewProductComponent = {
    props: ['item'],
    template:
    `
    <div class="row">
        <div class="col-md-4 mb-4" v-for="item in items" >
            <div class="card h-80" >
                <div class="card-body">
                    <h2 class="card-title">{{ item.name }}</h2>
                    <img :src="item.image" width="100px" height="100px">
                    <p class="card-text">{{ item.description }}</p> 
                </div>
                <div class="card-footer">
                <router-link :to="'/produkter/'+item._id" class="btn btn-primary">Läs Mer</router-link>
                <router-link :to="'/produkter/'+item._id" class="btn btn-primary">Lägg i varukorgen</router-link>
                </div>
            </div>
        </div>
    </div>

    `,
   // 
    created(){
        
        http.get('/rest/products').then(response =>{
            this.items = response.data;

            
            console.log( this.items[0]['_id']);
            var i;
                for (i = 0; i < this.items.length; i++) { 
                id = this.items[i]['_id'];
            }
            console.log(id);

        })
    },   

    data(){
        return{
          title: "test",
          items: [],
          loading: false,
          id: []
        }
      }
  }



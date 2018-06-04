const NewProductComponent = {
    props: ['item'],
    template:
    `

    <div class="col-lg-4 " >

        <div class="card h-100" v-for="item in items" >
        <h4 class="card-header">{{ item.name }}</h4>
            <div class="card-body">
                <p class="card-text"> {{ item.description }}</p>
            </div>
        <div class="card-footer">
            <router-link :to="'rest/products/'+item._id" class="btn">{{item.name}}</router-link>
        </div>
        </div>
    </div>

    `,
    
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



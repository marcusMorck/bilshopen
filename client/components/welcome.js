const WelcomeComponent = {

    template: `
       <div class="container">
        <header class="jumbotron my-4">
            <h1 class="display-3">{{title}}</h1>
            <p class="lead">{{slogan}}</p>
            <a href="#" class="btn btn-primary btn-lg">Call to action!</a>
        </header>
    </div>
        
    `,
    data(){
        return{
            title: "bilshoppen",
            slogan: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }
    }
}
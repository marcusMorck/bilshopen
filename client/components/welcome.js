const WelcomeComponent = {

    template: `
        <header class="jumbotron my-4 test">
            <h1 class="display-3">{{title}}</h1>
            <p class="lead">{{slogan}}</p>
            <a href="#" class="btn btn-primary btn-lg">{{cta}}</a>
        </header>
    
    `,
    data(){
        return{
            title: "Bilshoppen",
            slogan: `Vi har bilen för dig! Hos oss hittar du de nyaste och de 
            snabbaste bilarna. Kolla gärna igenom vårt sortiment!`,
            cta: "Våra produkter"
        }
    }
}
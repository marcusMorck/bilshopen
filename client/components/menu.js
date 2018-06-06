const MenuComponent = {

    template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
    <router-link class="navbar-brand" to="/">Bilshoppen.se</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/produkter">Produkter</router-link>
          </li>
          <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdownCars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Bilar
          </router-link>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
            <router-link class="dropdown-item" to="#">Ferrari</router-link>
            <router-link class="dropdown-item" to="#">Koenigsegg</router-link>
            <router-link class="dropdown-item" to="#">Porsche</router-link>
          </div>
        </li>
          <li class="nav-item">
          <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/loggain">Logga in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/registrering">Registrera</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    `
}
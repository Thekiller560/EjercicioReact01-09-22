const MiSlider =() =>{

    return(
        <section class="container mt-2">
        <h1 class="text-center">Soluciones y desarrollo </h1>
    <div id="controls" class="carousel slide" date-bs-ride="carousel">
      <div class="carousel-indicators">
        <button data-bs-target="#controls" data-bs-slide-to="0" class="active"></button>
        <button data-bs-target="#controls" data-bs-slide-to="1"></button>
        <button data-bs-target="#controls" data-bs-slide-to="2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://media.slidesgo.com/storage/7288412/futuristic-background1622641945.jpg" alt="imagen1"
            class="d-block w-100"/>
          <div class="carousel-caption d-none d-md-block">
            <h3>El futuro es ahora</h3>
            <p>La tecnologia es mas que una pagina web</p>
          </div>
        </div>
        <div class="carousel-item ">
          <img
            src="https://s39927.pcdn.co/wp-content/uploads/2019/05/free-powerpoint-template-or-google-slides-theme-with-galaxy-and-space-illustrations.jpeg"
            alt="imagen2" class="d-block w-100"/>
          <div class="carousel-caption d-none d-md-block">
            <h3>El futuro es ahora</h3>
            <p>La tecnologia es mas que una pagina web</p>
          </div>
        </div>
        <div class="carousel-item ">
          <img
            src="https://s39927.pcdn.co/wp-content/uploads/presentations/1rjb8Gf2_0TC8RleVOG-JoKrTqF1wF0ty7Qz06xaAId4/35_1400.jpg.optimal.jpg"
            alt="imagen3" class="d-block w-100"/>
          <div class="carousel-caption d-none d-md-block">
            <h3>El futuro es ahora</h3>
            <p>La tecnologia es mas que una pagina web</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" data-bs-target="#controls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" data-bs-target="#controls" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
    </section>
    )
}

export default MiSlider;
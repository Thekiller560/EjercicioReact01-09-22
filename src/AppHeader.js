

const MiHeader = () =>{

    return(
      <header>

  <nav class="navbar navbar-expand-lg bg-primary">

    <div class="container-fluid">
      <div>

        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalEjemplo">

          Suscribete

        </button>
        <div class="modal fade" id="modalEjemplo" tabindex="-1" area-hidden="true">

          <div class="modal-dialog modal-dialog-centered">

            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h3 class="modal-title">
                  BIENVENIDO
                </h3>

              </div>
              <div class="modal-body">
                <h3 class="text-center">Eres el visistante numero 1000</h3>

                <p class="tex-justify">
                  Ven a conocer nuestro showroom con tecnologia de ultima generacion
                </p>
                <div class="text-center">
                  <img
                    src="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-network-technology-security-logo-png-image_1715631.jpg"
                    alt=""/>

                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                <button class="btn btn-primary" data-bs-dismiss="modal"> Guardar</button>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link text-white fs-5" href="">Eventos</a></li>
            <li class="nav-item"><a class="nav-link text-white fs-5" href="">Showroom</a></li>
            <li class="nav-item"><a class="nav-link text-white fs-5" href="">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link text-white fs-5" href="">Contactanos</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
      
)

}

export default MiHeader;
const url = "https://pokeapi.co/api/v2/pokemon/";

const busqueda = async () =>{
    let ingresado = document.getElementById("ingresado").value
    const response = await fetch(`${url}${ingresado}`);
    const result = await response.json();

    await dibujar(result)

}

const dibujar = (pokemon) => {
    document.querySelector("#resultado").innerHTML=""
    console.log(pokemon.base_experience)
    {
        document.querySelector("#resultado").innerHTML+=`      
        <div class="text-black card d-flex align-items-center justify-content-center" id="fondo" style="width: 18rem;">
        <div class="card-body font-weight-bold">
          <img src="${pokemon.sprites.front_default}" id="perfil" class="img" >
          <h5>${pokemon.name}</h5>
          <h5 class="font-weight-bold"> Tipo: ${pokemon.types[0].type.name}</h5>
          <h5 class="font-weight-bold"> Habilidad 1: ${pokemon.abilities[0].ability.name}</h5>
          <h5 class="font-weight-bold"> Habilidad 2: ${pokemon.abilities[1].ability.name}</h5>
          
        </div>
        <div class=" mt-3">
          <p>
            <button class="btn btn-warning fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            Mas información
            </button>
          </p>
          <div style="min-height: 120px;">
            <div class="collapse collapse-horizontal" id="collapseWidthExample">
              <div class="card fw-bold border border-danger text-light" style="width: 180px;">

              <p>Base stat: ${pokemon.stats[0].base_stat}</p>
              <p>Base experience: ${pokemon.base_experience}</p>
              <p>Peso: ${pokemon.weight}</p>

              </div>
            </div>
          </div>
        </div>
        
      </div>`
    }
}

let boton = document.querySelector("#busqueda")
boton.addEventListener("click",busqueda);
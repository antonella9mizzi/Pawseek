const mascotas = [{ id: 1, nombre:"Chechu", tipoMascota:"Perro", sexo:"Hembra", ciudad:"Cordoba", edad: 3},
{ id: 2,  nombre:"Coco", tipoMascota:"Gato", sexo:"Macho", ciudad:"Rosario", edad:1.5},
{ id: 3,  nombre:"Garfield", tipoMascota:"Gato", sexo:"Macho", ciudad:"CABA", edad:4},
{ id: 4,  nombre:"Figo", tipoMascota:"Gato", sexo:"Macho", ciudad:"CABA", edad:3.5},
{ id: 5,  nombre:"Gala", tipoMascota:"Perro", sexo:"Hembra", ciudad:"Rosario", edad:2.5},
{ id: 6,  nombre:"Kiwi", tipoMascota:"Gato", sexo:"Macho", ciudad:"Cordoba", edad:1.5},
{ id: 7,  nombre:"Jalea", tipoMascota:"Gato", sexo:"Hembra", ciudad:"Cordoba", edad:2},
{ id: 8,  nombre:"Lola", tipoMascota:"Perro", sexo:"Hembra", ciudad:"Rosario", edad:2.5}];

for (const mascota of mascotas) {
    $(`.cardSContainer`).append(`<div class="cardbtn">
                        <div class="cardBottom" id="toggle${mascota.id}">
                        <h4>Nombre: ${mascota.nombre}</h4>
                        <p>Tipo de mascota: ${mascota.tipoMascota}</p>
                        <p>Sexo: ${mascota.sexo}</p>
                        <p>Ciudad: ${mascota.ciudad}<p>
                        <p>Edad: ${mascota.edad}</p>
                        </div>
                        <button id="btn${mascota.id}" class="btnInfo">INFO</button>
                        </div>`);
    //Asociamos el evento a botón recién creado.
    $(`#btn${mascota.id}`).on('click', function () {
        $(`#toggle${mascota.id}`).toggle();
        })
    }
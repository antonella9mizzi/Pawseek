function pedirNumeros (){
    let n1 = parseInt(prompt("Cuantas mascotas deseas adoptar?"))
    let n2 = 3741 //parseInt(prompt("Ingrese otro numero"))
        multiplicar(n1,n2)
}

function multiplicar(n1, n2){
    alert("El gasto mensual dedicado a tu/s mascota/s sera de $" + (n1 * n2))
}
/*
let nombre = "Chechu"
let tipoMascota= "Perro"
let sexo="Hembra"
let ciudad = "Cordoba"
let edad = 3
class mascota {
    constructor(nombre, tipoMascota, sexo, ciudad, edad) {
        this.nombre = nombre
        this.tipoMascota = tipoMascota
        this.sexo = sexo
        this.ciudad = ciudad
        this.edad = edad
    }
}
const mascota1 = new mascota ("Chechu", "Perro", "Hembra", "Cordoba", 3);
const mascota2 = new mascota ("Coco", "Gato", "Macho", "Rosario", 1.5);
const mascota3 = new mascota ("Garfield", "Gato", "Macho", "CABA", 4);
const mascota4 = new mascota ("Figo", "Gato", "Macho", "CABA", 3.5);
const mascota5 = new mascota ("Gala", "Perro", "Hembra", "Rosario", 2.5);
const mascota6 = new mascota ("Kiwi", "Gato", "Macho", "Cordoba", 1.5);
const mascota7 = new mascota ("Jalea", "Gato", "Macho", "Cordoba", 2);
const mascota8 = new mascota ("Lola", "Perro", "Hembra", "Rosario", 2.5);

const arrayMascotas=[mascota1,mascota2,mascota3,mascota4,mascota5,mascota6,mascota7,mascota8]

// DOM //
const d = document
//for(const MASCOTA of arrayMascotas){
    //debugger
    //let container = d.createElement("div");
    //container.innerHTML = `<h3>${MASCOTA.nombre} </h3>
        //<p>Tipo de mascota: ${MASCOTA.tipoMascota} </p>
        //<p>Sexo: ${MASCOTA.sexo} </p>
        //<p>Ciudad: ${MASCOTA.ciudad}</p>
        //<p>Edad: ${MASCOTA.edad}</p>`;
    //document.body.appendChild(container); }

// Button mascota 1
let info1 = d.createElement("div");
info1.innerHTML = `<p>Tipo de mascota: ${mascota1.tipoMascota} </p>
    <p>Sexo: ${mascota1.sexo}</p>
    <p>Ciudad: ${mascota1.ciudad}</p>
    <p>Edad: ${mascota1.edad}</p>`;
    d.getElementById("infoM1").appendChild(info1);
function toggle(){
    let infoExtra = d.getElementById("infoM1");
    if (infoExtra.style.display === "none") {
        infoExtra.style.display = "block";
      } else {
        infoExtra.style.display = "none";
        }
}
// button mascota 2
let info2 = d.createElement("div");
info2.innerHTML = `<p>Tipo de mascota: ${mascota2.tipoMascota} </p>
    <p>Sexo: ${mascota2.sexo}</p>
    <p>Ciudad: ${mascota2.ciudad}</p>
    <p>Edad: ${mascota2.edad}</p>`;
    d.getElementById("infoM2").appendChild(info2);
function toggle2(){
    let infoExtra2 = d.getElementById("infoM2");
    if (infoExtra2.style.display === "none") {
        infoExtra2.style.display = "block";
      } else {
        infoExtra2.style.display = "none";
        }
}
// button 3
let info3 = d.createElement("div");
info3.innerHTML = `<p>Tipo de mascota: ${mascota3.tipoMascota} </p>
    <p>Sexo: ${mascota3.sexo}</p>
    <p>Ciudad: ${mascota3.ciudad}</p>
    <p>Edad: ${mascota3.edad}</p>`;
    d.getElementById("infoM3").appendChild(info3);
function toggle3(){
    let infoExtra3 = d.getElementById("infoM3");
    if (infoExtra3.style.display === "none") {
        infoExtra3.style.display = "block";
      } else {
        infoExtra3.style.display = "none";
        }
}
//button 4
let info4 = d.createElement("div");
info4.innerHTML = `<p>Tipo de mascota: ${mascota4.tipoMascota} </p>
    <p>Sexo: ${mascota4.sexo}</p>
    <p>Ciudad: ${mascota4.ciudad}</p>
    <p>Edad: ${mascota4.edad}</p>`;
    d.getElementById("infoM4").appendChild(info4);
function toggle4(){
    let infoExtra4 = d.getElementById("infoM4");
    if (infoExtra4.style.display === "none") {
        infoExtra4.style.display = "block";
      } else {
        infoExtra4.style.display = "none";
        }
}
//button 5
let info5 = d.createElement("div");
info5.innerHTML = `<p>Tipo de mascota: ${mascota5.tipoMascota} </p>
    <p>Sexo: ${mascota5.sexo}</p>
    <p>Ciudad: ${mascota5.ciudad}</p>
    <p>Edad: ${mascota5.edad}</p>`;
    d.getElementById("infoM5").appendChild(info5);
function toggle5(){
    let infoExtra5 = d.getElementById("infoM5");
    if (infoExtra5.style.display === "none") {
        infoExtra5.style.display = "block";
      } else {
        infoExtra5.style.display = "none";
        }
}
//button 6
let info6 = d.createElement("div");
info6.innerHTML = `<p>Tipo de mascota: ${mascota6.tipoMascota} </p>
    <p>Sexo: ${mascota6.sexo}</p>
    <p>Ciudad: ${mascota6.ciudad}</p>
    <p>Edad: ${mascota6.edad}</p>`;
    d.getElementById("infoM6").appendChild(info6);
function toggle6(){
    let infoExtra6 = d.getElementById("infoM6");
    if (infoExtra6.style.display === "none") {
        infoExtra6.style.display = "block";
      } else {
        infoExtra6.style.display = "none";
        }
}
//button masco 7
let info7 = d.createElement("div");
info7.innerHTML = `<p>Tipo de mascota: ${mascota7.tipoMascota} </p>
    <p>Sexo: ${mascota7.sexo}</p>
    <p>Ciudad: ${mascota7.ciudad}</p>
    <p>Edad: ${mascota7.edad}</p>`;
    d.getElementById("infoM7").appendChild(info7);
function toggle7(){
    let infoExtra7 = d.getElementById("infoM7");
    if (infoExtra7.style.display === "none") {
        infoExtra7.style.display = "block";
      } else {
        infoExtra7.style.display = "none";
        }
}
//button masco 8
let info8 = d.createElement("div");
info8.innerHTML = `<p>Tipo de mascota: ${mascota8.tipoMascota} </p>
    <p>Sexo: ${mascota8.sexo}</p>
    <p>Ciudad: ${mascota8.ciudad}</p>
    <p>Edad: ${mascota8.edad}</p>`;
    d.getElementById("infoM8").appendChild(info8);
function toggle8(){
    let infoExtra8 = d.getElementById("infoM8");
    if (infoExtra8.style.display === "none") {
        infoExtra8.style.display = "block";
      } else {
        infoExtra8.style.display = "none";
        }
}*/
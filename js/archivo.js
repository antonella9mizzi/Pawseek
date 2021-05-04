//MODAL
let modal = document.getElementById("modalDonacion");
let btn = document.getElementById("btn-modal");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
    //cerrar modal
span.onclick = function() {
  modal.style.display = "none";
}
    //cerrar modal al clickear afuera
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//DONACION
function donacion() {
    let n1 = document.getElementById("plataDonacion").value;
    document.getElementById("resultadoModal").innerHTML = "Con tu colaboracion vamos a poder vacunar a " + n1/50 + " mascota/s";
  }
//SCROLL MASCOTAS/MAIN SECTION
const scrollUp = (section) => {
    $('html, body').animate({
        scrollTop: $(`#${section}`).offset().top
    },1800)
}
$('#btn-section1').click(()=> {scrollUp("section1")})
$('#btn-mainSection').click(()=> {scrollUp("mainSection")})
//FICHAS MASCOTAS
$(document).ready(()=>{
    $.getJSON( "js/archivo.json", 
    function (Response, status){
         if(status === "success"){
             let contenido = Response
                 for (let mascota of contenido){
                     $('#cardContainer').append(
                        `<div id="div${mascota.id}" class="cardMasco">
                            <img src="${mascota.img}" class="croppedImg">
                            <div>
                                <button id="btn${mascota.id}" class="btn-info">Mostrar/Ocultar Info</button>
                                <div id="toggle${mascota.id}" class="boxInfo">
                                    <p>Nombre: ${mascota.nombre}</p>
                                    <p>Sexo: ${mascota.sexo}</p>
                                    <p>Ciudad: ${mascota.ciudad}</p>
                                    <p>Edad: ${mascota.edad} años</p>
                                </div>
                            </div>
                        </div>`);
                     $(`#btn${mascota.id}`).click(() => {
                        $(`#toggle${mascota.id}`).toggle(600)
                     })
                    }
            } else{
                console.warn ("ERROR")}
    }
    )
})
    //filtros de fichas
$("#CABA").click(()=>{
    $("#div1, #div2, #div5, #div6, #div7, #div8, #div10, #div11, #div12, #div14, #div16").fadeOut(1000)
}) 
$("#cordoba").click(()=>{
    $("#div2, #div3, #div4, #div5, #div8, #div9, #div10, #div13, #div14, #div15, #div16").fadeOut(1000)
}) 
$("#rosario").click(()=>{
    $("#div1, #div3, #div4, #div6, #div7, #div9, #div11, #div12, #div13, #div15").fadeOut(1000)
})
$("#reset").click(()=>{
    $("#div1, #div2, #div3, #div4, #div5, #div6, #div7, #div8, #div9, #div10, #div11, #div12, #div13, #div14, #div15, #div16 ").fadeIn(1000)
})


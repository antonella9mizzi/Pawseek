function pedirNumeros (){
    let n1 = parseInt(prompt("Cuantas mascotas deseas adoptar?"))
    let n2 = 3741 //parseInt(prompt("Ingrese otro numero"))
        multiplicar(n1,n2)
}

function multiplicar(n1, n2){
    alert("El gasto mensual dedicado a tu/s mascota/s sera de $" + (n1 * n2))
}



$(document).ready(()=>{
    $.getJSON( "js/archivo.json", 
    function (Response, status){
         if(status === "success"){
             debugger
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
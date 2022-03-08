$(document).ready(function () {
    $("#seccion1").click(function () {
        $("#contenido1").slideToggle("fast");
    })
    $("#seccion2").click(function () {
        $("#contenido2").slideToggle("fast");
    })
    $("#seccion3").click(function () {
        $("#contenido3").slideToggle("fast");
    })
    $("#seccion4").click(function () {
        $("#contenido4").slideToggle("fast");
    })
    $("#seccion5").click(function () {
        $("#contenido5").slideToggle("fast");
    })

})

function mueveReloj() {
    let hora = moment().format('h:mm:ss')
    let fecha = moment().format('MMMM Do')
    let dia = moment().format('dddd')

    document.getElementById("hora").innerHTML = hora
    document.getElementById("fecha").innerHTML = fecha.toUpperCase()
    document.getElementById("dia").innerHTML = dia.toUpperCase()

    setTimeout("mueveReloj()", 1000)
}
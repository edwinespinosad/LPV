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

    $("#to-green").click(function () {
        $("nav").css("background", "#235E3D");
        $("#logo").css("background", "#235E3D");
        $("header").css("background", "#235E3D");
        $("footer").css("background", "#235E3D");
        $("#content").css("background", "#235E3D");
        $("aside").css("background", "#235E3D");
        $("#acordeon").css("background", "#235E3D");
        $(".title").css("background", "#85A567");
        $("#hora").css("background", "#85A567");
    })


    $("#to-red").click(function () {
        $("nav").css("background", "#CA3413");
        $("#logo").css("background", "#CA3413");
        $("header").css("background", "#CA3413");
        $("footer").css("background", "#CA3413");
        $("#content").css("background", "#CA3413");
        $("aside").css("background", "#CA3413");
        $("#acordeon").css("background", "#CA3413");
        $(".title").css("background", "#F7A278");
        $("#hora").css("background", "#F7A278");
    })
    $("#to-blue").click(function () {
        $("nav").css("background", "#1F87C4");
        $("#logo").css("background", "#1F87C4");
        $("header").css("background", "#1F87C4");
        $("footer").css("background", "#1F87C4");
        $("#content").css("background", "#1F87C4");
        $("aside").css("background", "#1F87C4");
        $("#acordeon").css("background", "#1F87C4");
        $(".title").css("background", "#8B959E");
        $("#hora").css("background", "#8B959E");
    })
})

function mueveReloj() {
    let hora = moment().format('h:mm a')
    document.getElementById("hora").innerHTML = hora

    setTimeout("mueveReloj()", 1000)
}
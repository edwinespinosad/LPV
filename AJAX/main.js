'use strict'

var div_usuarios = document.querySelector("#usuarios");

var usuarios = [];

fetch('https://reqres.in/api/users').then(data => data.json()).then(users => {
    usuarios = users.data;
    console.log(usuarios);

    usuarios.map((user, i) => {
        var newDiv = document.createElement("div");
        newDiv.classList.add('card');
        div_usuarios.appendChild(newDiv);
        var card = div_usuarios.lastChild;

        let nombre = document.createElement('h2');
        nombre.innerHTML = user.first_name + ' ' + user.last_name;
        let image = document.createElement('img');
        image.src = user.avatar;
        card.appendChild(image);
        card.appendChild(nombre);
    });

});

function mueveReloj() {
    let hora = moment().format('h:mm a')

    document.getElementById("hora").innerHTML = hora

    setTimeout("mueveReloj()", 1000)
}

$(document).ready(function () {
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined" && form_name !== "") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<br><br><a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });

    }
    
    $("#to-green").click(function () {
        $("nav").css("background", "#235E3D");
        // $("body").css("background", "#235E3D");
        $("#logo").css("background", "#235E3D");
        $("header").css("background", "#235E3D");
        $("footer").css("background", "#235E3D");
        $("#content").css("background", "#235E3D");
        $("aside").css("background", "#235E3D");
        $("#hora").css("background", "#85A567");
        $(".card").css("background", "#85A567");
        $("#logout").css("background", "#85A567");
    })
    $("#to-red").click(function () {
        $("nav").css("background", "#CA3413");
        $("#logo").css("background", "#CA3413");
        $("header").css("background", "#CA3413");
        $("footer").css("background", "#CA3413");
        $("#content").css("background", "#CA3413");
        $("aside").css("background", "#CA3413");
        $("#hora").css("background", "#F7A278");
        $(".card").css("background", "#F7A278");
        $("#logout").css("background", "#F7A278");
    })
    $("#to-blue").click(function () {
        $("nav").css("background", "#1F87C4");
        $("#logo").css("background", "#1F87C4");
        $("header").css("background", "#1F87C4");
        $("footer").css("background", "#1F87C4");
        $("#content").css("background", "#1F87C4");
        $("aside").css("background", "#1F87C4");
        $("#hora").css("background", "#8B959E");
        $(".card").css("background", "#8B959E");
        $("#logout").css("background", "#8B959E");
    })
})
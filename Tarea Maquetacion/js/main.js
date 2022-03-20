$(document).ready(function () {

    // console.log(window.location.href)
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined" && form_name !== "") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

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
        $("#hora").css("background", "#85A567");
        $("aside").css("background", "#235E3D");
    })
    $("#to-red").click(function () {
        $("nav").css("background", "#CA3413");
        $("#logo").css("background", "#CA3413");
        $("header").css("background", "#CA3413");
        $("footer").css("background", "#CA3413");
        $("#content").css("background", "#CA3413");
        $("#hora").css("background", "#F7A278");
        $("aside").css("background", "#CA3413");
    })
    $("#to-blue").click(function () {
        $("nav").css("background", "#1F87C4");
        $("#logo").css("background", "#1F87C4");
        $("header").css("background", "#1F87C4");
        $("footer").css("background", "#1F87C4");
        $("#content").css("background", "#1F87C4");
        $("#hora").css("background", "#8B959E");
        $("aside").css("background", "#1F87C4");
    })


    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        adaptiveHeight: true,
        responsive: true,
        pager: false,
        speed: 250
    });

    var posts = [
        {
            title: 'Prueba articulo I',
            date: new moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus massa, molestie et est sed, convallis posuere massa. Suspendisse eu dolor massa. Aenean non porta arcu. Maecenas at orci sit amet ante commodo semper. Morbi ac libero lacus. Integer eros eros, vestibulum scelerisque est vel, pulvinar tincidunt turpis. Etiam facilisis felis ut mi viverra imperdiet. Donec tempus vulputate porta. Nullam id nulla eleifend, aliquet enim eget, bibendum sapien. Phasellus venenatis mauris venenatis est tincidunt commodo ac at lorem. Sed ac justo porttitor, tempor dui in, posuere arcu. Proin et sapien mi. Quisque eleifend ligula eget quam ultrices, at elementum felis rutrum. Maecenas eget nunc risus. Donec finibus ligula turpis, ut venenatis sem tristique ut.'
        },
        {
            title: 'Prueba articulo II',
            date: new moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus massa, molestie et est sed, convallis posuere massa. Suspendisse eu dolor massa. Aenean non porta arcu. Maecenas at orci sit amet ante commodo semper. Morbi ac libero lacus. Integer eros eros, vestibulum scelerisque est vel, pulvinar tincidunt turpis. Etiam facilisis felis ut mi viverra imperdiet. Donec tempus vulputate porta. Nullam id nulla eleifend, aliquet enim eget, bibendum sapien. Phasellus venenatis mauris venenatis est tincidunt commodo ac at lorem. Sed ac justo porttitor, tempor dui in, posuere arcu. Proin et sapien mi. Quisque eleifend ligula eget quam ultrices, at elementum felis rutrum. Maecenas eget nunc risus. Donec finibus ligula turpis, ut venenatis sem tristique ut.'
        },
        {
            title: 'Prueba articulo III',
            date: new moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus massa, molestie et est sed, convallis posuere massa. Suspendisse eu dolor massa. Aenean non porta arcu. Maecenas at orci sit amet ante commodo semper. Morbi ac libero lacus. Integer eros eros, vestibulum scelerisque est vel, pulvinar tincidunt turpis. Etiam facilisis felis ut mi viverra imperdiet. Donec tempus vulputate porta. Nullam id nulla eleifend, aliquet enim eget, bibendum sapien. Phasellus venenatis mauris venenatis est tincidunt commodo ac at lorem. Sed ac justo porttitor, tempor dui in, posuere arcu. Proin et sapien mi. Quisque eleifend ligula eget quam ultrices, at elementum felis rutrum. Maecenas eget nunc risus. Donec finibus ligula turpis, ut venenatis sem tristique ut.'
        },
        {
            title: 'Prueba articulo IV',
            date: new moment().format("MMM Do YY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus massa, molestie et est sed, convallis posuere massa. Suspendisse eu dolor massa. Aenean non porta arcu. Maecenas at orci sit amet ante commodo semper. Morbi ac libero lacus. Integer eros eros, vestibulum scelerisque est vel, pulvinar tincidunt turpis. Etiam facilisis felis ut mi viverra imperdiet. Donec tempus vulputate porta. Nullam id nulla eleifend, aliquet enim eget, bibendum sapien. Phasellus venenatis mauris venenatis est tincidunt commodo ac at lorem. Sed ac justo porttitor, tempor dui in, posuere arcu. Proin et sapien mi. Quisque eleifend ligula eget quam ultrices, at elementum felis rutrum. Maecenas eget nunc risus. Donec finibus ligula turpis, ut venenatis sem tristique ut.'
        }
    ]
    posts.forEach((item, index) => {
        var post = `
           <article class="posts">
              <h2>${item.title}</h2>
              <div class="card-body">
                <img src="img/despues.jpg" width="200px">
                <div class="contenido">
                    <div class="sub">
                        <span>Autor: Stephen King</span>
                        <span class="date">${item.date}</span>
                    </div>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </div>
              </div>
           </article>
        `;

        $("#posts").append(post);

    });
})

function mueveReloj() {
    let hora = moment().format('h:mm a')
    let fecha = moment().format('MMMM Do')
    let dia = moment().format('dddd')

    document.getElementById("hora").innerHTML = hora
    document.getElementById("fecha").innerHTML = fecha.toUpperCase()
    document.getElementById("dia").innerHTML = dia.toUpperCase()

    setTimeout("mueveReloj()", 1000)
}

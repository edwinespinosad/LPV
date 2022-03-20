$(document).ready(function () {
    
    $("#to-green").click(function () {
        $("nav").css("background", "#235E3D");
        $("body").css("background", "#235E3D");
        $("#logo").css("background", "#235E3D");
    })
    $("#to-red").click(function () {
        $("nav").css("background", "#CA3413");
        $("body").css("background", "#CA3413");
        $("#logo").css("background", "#CA3413");
    })
    $("#to-blue").click(function () {
        $("nav").css("background", "#1F87C4");
        $("body").css("background", "#1F87C4");
        $("#logo").css("background", "#1F87C4");
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
              <span class="date">${item.date}</span>
              <p>
                 ${item.content}
              </p>
              <a href="#" class="button-more">Leer más</a>
           </article>
        `;

        console.log(post);
        $("#posts").append(post);

    });
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

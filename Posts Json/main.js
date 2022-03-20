$(document).ready(function () {

    var posts = [
        {
            title: 'Prueba articulo I',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus massa, molestie et est sed, convallis posuere massa. Suspendisse eu dolor massa. Aenean non porta arcu. Maecenas at orci sit amet ante commodo semper. Morbi ac libero lacus. Integer eros eros, vestibulum scelerisque est vel, pulvinar tincidunt turpis. Etiam facilisis felis ut mi viverra imperdiet. Donec tempus vulputate porta. Nullam id nulla eleifend, aliquet enim eget, bibendum sapien. Phasellus venenatis mauris venenatis est tincidunt commodo ac at lorem. Sed ac justo porttitor, tempor dui in, posuere arcu. Proin et sapien mi. Quisque eleifend ligula eget quam ultrices, at elementum felis rutrum. Maecenas eget nunc risus. Donec finibus ligula turpis, ut venenatis sem tristique ut.'
        },
        {
            title: 'Prueba articulo II',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus massa, molestie et est sed, convallis posuere massa. Suspendisse eu dolor massa. Aenean non porta arcu. Maecenas at orci sit amet ante commodo semper. Morbi ac libero lacus. Integer eros eros, vestibulum scelerisque est vel, pulvinar tincidunt turpis. Etiam facilisis felis ut mi viverra imperdiet. Donec tempus vulputate porta. Nullam id nulla eleifend, aliquet enim eget, bibendum sapien. Phasellus venenatis mauris venenatis est tincidunt commodo ac at lorem. Sed ac justo porttitor, tempor dui in, posuere arcu. Proin et sapien mi. Quisque eleifend ligula eget quam ultrices, at elementum felis rutrum. Maecenas eget nunc risus. Donec finibus ligula turpis, ut venenatis sem tristique ut.'
        },
        {
            title: 'Prueba articulo III',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus massa, molestie et est sed, convallis posuere massa. Suspendisse eu dolor massa. Aenean non porta arcu. Maecenas at orci sit amet ante commodo semper. Morbi ac libero lacus. Integer eros eros, vestibulum scelerisque est vel, pulvinar tincidunt turpis. Etiam facilisis felis ut mi viverra imperdiet. Donec tempus vulputate porta. Nullam id nulla eleifend, aliquet enim eget, bibendum sapien. Phasellus venenatis mauris venenatis est tincidunt commodo ac at lorem. Sed ac justo porttitor, tempor dui in, posuere arcu. Proin et sapien mi. Quisque eleifend ligula eget quam ultrices, at elementum felis rutrum. Maecenas eget nunc risus. Donec finibus ligula turpis, ut venenatis sem tristique ut.'
        },
        {
            title: 'Prueba articulo IV',
            date: new Date(),
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

});
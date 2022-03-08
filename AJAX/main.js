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
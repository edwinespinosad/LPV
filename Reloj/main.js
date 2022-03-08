function mueveReloj(){
    let hora = moment().format('h:mm:ss')
    let fecha = moment().format('MMMM Do')
    let dia = moment().format('dddd')

    document.getElementById("hora").innerHTML = hora
    document.getElementById("fecha").innerHTML = fecha.toUpperCase()
    document.getElementById("dia").innerHTML = dia.toUpperCase()

    setTimeout("mueveReloj()",1000)
}
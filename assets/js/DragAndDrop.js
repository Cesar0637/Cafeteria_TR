//Los evento de JS son acciones o suscesos que ocurren en un docuemnto web y que pueden ser detectados y manejados por le código JS. Estos eventos puedes ser desencadenados por el usuario o generados automáticamente por le navegador

//En t+erminos más especificos, un evento es algo que sucede en el sistema que estámos programando. El sistema produce un señal de cierto tipo cuando en evento ocurre y proporciona un mecanismo para que una acción se lleve a cabo automáticamente como respuesta a dicho evento

var  contador = 0
var elemArrastrable = ""
var contadorA = 0

function start(e) {
    //Funcion que se eja=ecuta con el evento 'ondragstart', recibe como parametro el event propio

    console.log("start")
    e.dataTransfer.effectAllowed = "move"//el movimiento del elemento
    e.dataTransfer.setData("Data", e.target.id)//guarda en cache la info del elemento
    $("#" + e.target.id).css("opacity", "0.4")//cambia el css 
    console.log(e.target.id)
    elemArrastrable = e.target.id

}

function end(e) {
    console.log("end")
    e.target.style.opacity = ''//restablece la propiedad de opacidad a su valor por defecto
    e.dataTransfer.clearData("Data") //lipia cache 
    elemArrastrable = ""
    console.log(e.target)
}
function enter(e) {
    console.log("enter")
    e.target.style.border = "12px dotted #555"
}
function leave(e) {
    console.log("leave");
    $("#" + e.target.id).css("border", "")
}
function over(e) {
    console.log("Over")
    var id = e.target.id
    if ((id == "cuadro1") || (id == "cuadro3") || (id == "papelera")) {
        return false
    } else { 
        return true
    }
}

function drop(e) {
    console.log("drop");
    var elementoArrastrado = e.dataTransfer.getData("Data")
    e.target.appendChild(document.getElementById(elementoArrastrado));
    e.target.style.border = ""
}

function remove(e) {
    console.log("delete")
    var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data"))
    elementoArrastrado.parentNode.removeChild(elementoArrastrado)
    e.target.style.border = ""
    contadorA --
}

function clone(e) {
    console.log("clone")
    var elementoArrastrado = document.getElementById(e.dataTransfer.getData("Data"))
    elementoArrastrado.style.opacity = ""
    if (contadorA < 3) {
        var elementoClonado = elementoArrastrado.cloneNode(true)
        elementoClonado.id = "ClonedNode" + contador
        contador++
        contadorA++
        elementoClonado.style.position = "static"
        e.target.appendChild(elementoClonado)
    }
    e.target.style.border = ""
}
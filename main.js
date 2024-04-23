
//---------$---------
// Por ejemplo, si escribes $('#miElemento'), estás 
// utilizando jQuery para seleccionar un elemento del DOM con el ID "miElemento".
// En resumen, el signo $ en jQuery es una forma breve y comúnmente utilizada
//  de referirse a la biblioteca jQuery y acceder a sus funcionalidades.

//----$(document)----
// $(document) es una forma de seleccionar todo el documento HTML en jQuery. Básicamente, 
// estás diciendo "selecciona todo el documento HTML y haz algo con él".

//------.val()-------
//La función .val() en jQuery se utiliza para obtener o 
//establecer el valor de un elemento de formulario. 


let alertaVacio = $(function () {
    $(".bt1").click(function () {
        
        
        $("p").hide(1000);
    }
)
}
)

//ocultamos el boton que hemos creado en el html
$(".deteleBut").hide()
$(".completadaBut").hide()

//ocultamos el alert
$(alertaVacio).hide()

$(document).ready(function(){
    $(".bt1").click(function(){

        //obtenemos el valor de la tarea
        let tarea = $(".input[type='text']").val();

        if(tarea === ""){
            alertaVacio; 
            return;
        }

        //Añadir las tareas a la lista junto botones
        $(".divTexto").prepend(
        "<div class = 'contenedorTareasNuevas'>" + 
        
            "<div class = 'textoTareasNuevas'>"+
            tarea + 
            "</div>"+

            "<div class = 'botonesTareasNuevas'>" +
                "<button class = 'deleteBute'>🗑️</button>" +
                "<button class = 'completadaBute'>✔️</button>" + 
            "</div>" +

        "</div>");  
        
        //Limpiar el valor para poder recibir otro 
        $(".input[type='text']").val("");

    })

    //Eliminar li cuando pulse el boton de delete
    //Esto es como recorrer los elementos, entramos en la lista, 
    //el evento "click" en los elementos que tengan la clase "deleteBut" dentro de ".nuevasTareas" los borra.
    $(".divTexto").on("click",".deleteBute", function(){
        //Accedemos al elemeto padre para borrar el que corresponde
        $(this).parent().parent().remove();
    })

    $(".divTexto").on("click",".completadaBute", function(){
        //Accedemos al elemento padre
        //.closest busca el elemento mas cercano que se llame "X" que este cerca del this
        let contenedorTareas = $(this).closest(".contenedorTareasNuevas");
        contenedorTareas.css("background-color", "lightgreen");
    })

    //Marcar en verde la tarea si le da al boton de completada
})



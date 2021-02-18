// Aquie pondremos nuestro codigo

$( document ).ready(function(){
    console.log("JQuery loaded");

    // var buttons = document.getElementsByTagName('button')
    // buttons era una lista
    // for o foreach 
    // element.addEventListeenr('click', funciont(){})

    // Acceso con tag element
    $("button").click(botonPresionado);
    
    // Acceso con class name
    $(".btn-sm").click(function (){ 
        console.log("elimino un item");
        $("#cartModal").hide(); // acceso con ID
        
    });



});

function botonPresionado(){
    console.log("Buttone pressed");
}


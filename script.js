// Seleccionamos todos los elementos <details> de la página
const desplegables = document.querySelectorAll("details");

// Recorremos todos los desplegables
desplegables.forEach(function(desplegable) {

    // Escuchamos cuándo se abre o se cierra un desplegable
    desplegable.addEventListener("toggle", function() {

        // Comprobamos si el desplegable que hemos pulsado está abierto
        if (desplegable.open) {

            // Recorremos nuevamente todos los desplegables
            desplegables.forEach(function(otroDesplegable) {

                // Si es otro desplegable diferente, lo cerramos
                if (otroDesplegable !== desplegable) {
                    otroDesplegable.open = false;
                }

            });
        }

    });
});


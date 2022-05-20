/*----------------------------------------------------*/
/*Función main*/
/*----------------------------------------------------*/
function main() {
    /*Varaible para tomar la opcion del selector a través de su atributo value */
    /* ubicado en cargajson.html */ 
    var value = document.getElementById('prueba').value;
    if (value == '0') {
        /*Inicia ejecución asíncrona*/ 
        var xhttp;
        var url = 'json1.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                /*Ejecuta función json0 ubicado más abajo */
                json0();
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    if (value == '1') {
        /*Inicia ejecución asíncrona*/
        var xhttp;
        var url = 'json1.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                /*Transformación de dato a objeto JavaScript*/
                var data = JSON.parse(this.responseText);

                /*Ejecuta función json1 ubicado más abajo */
                json1(data);
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    if (value == '2') {
        /*Inicia ejecución asíncrona*/
        var xhttp;
        var url = 'json2.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                /*Transformación de dato a objeto JavaScript*/
                var data = JSON.parse(this.responseText);
                
                /*Ejecuta función json2 ubicado más abajo */
                json2(data);

            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    if (value == '3') {
        /*Inicia ejecución asíncrona*/
        var xhttp;
        var url = 'json3.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                /*Transformación de dato a objeto JavaScript*/
                var data = JSON.parse(this.responseText);

                /*Ejecuta función json3 ubicado más abajo */
                json3(data);

            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }

}
/*Función "default" que simplemente hace que no muestre nada */
function json0() {
    document.getElementById('mostrar').innerHTML = '';
}

/*Función que utiliza los datos parseados contenidos en json1.json  */
/*Y utiliza el tag "Div" con la Id "mostrar" para mostrarlos en html */
function json1(parsing) {
    var muestra = '<table style="border: 1px black solid"> ';
    for (let item in parsing) {
        muestra += '<tr> <td> nombre: ' + parsing[item].nombre + '</td>' +
        '<td> apellido: ' + parsing[item].apellido + '</td></tr>';
    }
    muestra += '</table>';
    document.getElementById('mostrar').innerHTML = muestra;
}

/*Función que utiliza los datos parseados contenidos en json2.json  */
/*Y utiliza el tag "Div" con la Id "mostrar" para mostrarlos en html */
function json2(parsing) {
    var muestra = '<ul>';
    for (let item in parsing[0].pizzerias) {
        muestra += '<li>' + parsing[0].pizzerias[item] + '</li>';
    }
    muestra += '</ul>';
    document.getElementById('mostrar').innerHTML = muestra;
}

/*Función que utiliza los datos parseados contenidos en json3.json  */
/*Y utiliza el tag "Div" con la Id "mostrar" para mostrarlos en html */
function json3(parsing) {
    var muestra = '<ol>';
    for (let item in parsing[0].bebidas) {
        muestra += '<li>' + parsing[0].bebidas[item] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}
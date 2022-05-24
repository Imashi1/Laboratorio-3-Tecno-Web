/*----------------------------------------------------*/
/*Función main*/
/*----------------------------------------------------*/
function main() {
    /*Varaible para tomar la opcion del selector a través de su atributo value */
    /* ubicado en cargajson.html */ 

    var value = document.getElementById('prueba').value;
    var xhttp;
        if (value == '0') {
            //Puesto para que no tire error en xhttp.open()
            url = 'json1.json';
        }
        if (value == '1') {
            url = 'json1.json';
        }
        if (value == '2'){
            url = 'json2.json';
        }
        if (value =='3'){
            url = 'json3.json';
        }
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (value == '0') {
                    /*Ejecuta función json0 ubicado más abajo */
                    json0();
                }
                
                if (value == '1') {
                    /*Transformación de dato a objeto JavaScript*/
                    var data = JSON.parse(this.responseText);
                
                    /*Ejecuta función json1 ubicado más abajo */
                    json1(data);
                    
                }
                if (value == '2') {
                    /*Transformación de dato a objeto JavaScript*/
                    var data = JSON.parse(this.responseText);
                
                    /*Ejecuta función json2 ubicado más abajo */
                    json2(data);
                }
                if (value == '3'){
                    url = 'json3.json';
                    /*Transformación de dato a objeto JavaScript*/
                    var data = JSON.parse(this.responseText);
                
                    /*Ejecuta función json3 ubicado más abajo */
                    json3(data);
                }
            }
        }
    }
    
/*Función "default" que simplemente hace que no muestre nada */
/*O limpie lo que estaba siendo mostrado, reemplazandolo por nada */
function json0() {
    document.getElementById('mostrar').innerHTML = '';
}

/*Función que utiliza los datos parseados contenidos en json1.json  */
/*Y utiliza el tag "Div" con la Id "mostrar" para mostrarlos en html */
function json1(parsing) {
    var muestra =   '<h1> Información de estudiantes </h1>' +
                    '<table class ="tabla-bonita">' + 
                    '<thead>' +
                    '<td> Nombre </td>' +
                    '<td> Apellido </td>' + 
                    '<td style= "text-align: center"> Correo </td>' +
                    '</thead>';
    for (let item in parsing) {
        muestra += '<tr> <td>' + parsing[item].nombre +  '</td>' +
                        '<td>' + parsing[item].apellido +'</td>' + 
                        '<td>' + parsing[item].correo +  '</td> </tr>';
    }
    muestra += '</table>';
    document.getElementById('mostrar').innerHTML = muestra;
}

/*Función que utiliza los datos parseados contenidos en json2.json  */
/*Y utiliza el tag "Div" con la Id "mostrar" para mostrarlos en html */
function json2(parsing) {
    var muestra =   '<h1> Lista de Pizzerías en Arica </h1>' +
                    '<ul>';
    for (let item in parsing[0].pizzerias) {
        muestra += '<li>' + parsing[0].pizzerias[item] + '</li>';
    }
    muestra += '</ul>';
    document.getElementById('mostrar').innerHTML = muestra;
}

/*Función que utiliza los datos parseados contenidos en json3.json  */
/*Y utiliza el tag "Div" con la Id "mostrar" para mostrarlos en html */
function json3(parsing) {
    var muestra =   '<h1> Ranking de Bebidas Más Consumidas </h1>' +
                    '<ol>';
    for (let item in parsing[0].bebidas) {
        muestra += '<li>' + parsing[0].bebidas[item] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}
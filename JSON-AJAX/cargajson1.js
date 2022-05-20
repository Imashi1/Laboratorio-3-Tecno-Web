function loadDoc() {
    var value = document.getElementById('prueba').value;
    if (value == '0') {
        var xhttp;
        let url = 'json1.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var div = document.getElementById('mostrar');

                //console.log(div);
                //console.log(value);
                let data = JSON.parse(this.responseText);

                //console.log('hola1');
                json0(div, data);

            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    if (value == '1') {
        var xhttp;
        let url = 'json1.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {


                //console.log(div);
                //console.log(value);
                let data = JSON.parse(this.responseText);

                //console.log('hola1');
                json1(data);

            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    if (value == '2') {
        var xhttp;
        let url = 'json2.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                //console.log(div);
                //console.log(value);
                let data = JSON.parse(this.responseText);
                //console.log(data[0].pizzerias[0]);

                //console.log('hola2');
                json2(data);

            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    if (value == '3') {
        var xhttp;
        let url = 'json3.json';
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                //console.log(div);
                //console.log(value);
                let data = JSON.parse(this.responseText);
                //console.log(data[0].pizzerias[0]);

                //console.log('hola2');
                json3(data);

            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }

}

function json0(html, parsing) {
    html.innerHTML = '';
    //console.log('hola');

}

function json1(parsing) {
    //var div = document.getElementById('mostrar');
    var muestra = '<table style="border: 1px black solid"> ';
    for (let item in parsing) {
        //console.log(data[item].nombre);
        muestra += '<tr> <td> nombre: ' + parsing[item].nombre + '</td>' +
            '<td> apellido: ' + parsing[item].apellido + '</td></tr>';
    }
    muestra += '</table>';
    document.getElementById('mostrar').innerHTML = muestra
}

function json2(parsing) {
    console.log(parsing[0].pizzerias);
    var muestra = '<ul>';
    for (let item in parsing[0].pizzerias) {
        console.log(item);
        muestra += '<li>' + parsing[0].pizzerias[item] + '</li>';
    }
    muestra += '</ul>';
    document.getElementById('mostrar').innerHTML = muestra;
}

function json3(parsing) {
    console.log(parsing[0].pizzerias);
    var muestra = '<ol>';
    for (let item in parsing[0].bebidas) {
        console.log(item);
        muestra += '<li>' + parsing[0].bebidas[item] + '</li>';
    }
    muestra += '</ol>';
    document.getElementById('mostrar').innerHTML = muestra;
}
/*
if (value == '1') {
    console.log('hola2');
}
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var div = document.getElementById('demo');

        console.log(div);
        console.log(value);
        let data = JSON.parse(this.responseText);
        //console.log(data[0].nombre);
        if (value == '0') {
            let url = 'json1.json';
            console.log('hola1');
            json0(div, data);

        }
        if (value == '1') {
            console.log('hola2');
        }
        /*
        if (value == '2'){

        }
        if (value == '3'){

        }
        


        var res = document.getElementById('demo');
        res.innerHTML = '';

        for (let item in data) {
            //console.log(data[item].nombre);
            res.innerHTML += '<tr> <td> nombre: ' + data[item].nombre + '</td> <td> apellido: ' +
                data[item].apellido + '</td> </tr>';
        }
    }

}

}
*/
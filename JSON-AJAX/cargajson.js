function loadDoc() {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var value = document.getElementById('prueba').value;
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
            */


            var res = document.getElementById('demo');
            res.innerHTML = '';

            for (let item in data) {
                //console.log(data[item].nombre);
                res.innerHTML += '<tr> <td> nombre: ' + data[item].nombre + '</td> <td> apellido: ' +
                    data[item].apellido + '</td> </tr>';
            }
        }

    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function json0(html, parsing) {
    html.innerHTML = 'aaa';
    console.log('hola');

}

function json1(html, parsing) {

}

function json2(html, parsing) {

}

function json3(html, parsing) {

}
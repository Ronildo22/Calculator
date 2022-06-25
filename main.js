function insert(num) {

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function erase(del) {
    document.getElementById('resultado').innerHTML = del;
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var calculo = document.getElementById('resultado').innerHTML;
    if (calculo) {
        document.getElementById('resultado').innerHTML = eval(calculo);
    }
}
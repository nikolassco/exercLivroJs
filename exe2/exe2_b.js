function calcularValor() {
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outResposta = document.getElementById("outResposta");

    var valorHora = Number(inValor.value);
    var tempo = Number(inTempo.value);

    var valor = Math.ceil(tempo / 15) * valorHora;

    outResposta.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);
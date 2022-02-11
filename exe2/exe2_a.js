function calcularPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outResposta = document.getElementById("outResposta");

    var preco = Number(inPreco.value);
    var produto = inProduto.value;
    var desconto = Math.round(preco * 2);
    
    outResposta.textContent = `Promoção de ${produto} Leve 2 por apenas R$: ${desconto}`
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularPromocao);
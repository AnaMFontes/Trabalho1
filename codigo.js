function calculaIdade() {
    let AnoNasc, AnoAtual, resp; //definindo variáveis

    AnoAtual = document.getElementById("AnoAtual").value; //igualando a variável AnoAtual com a info. AnoAtual do html

    AnoNasc = document.getElementById("AnoNasc").value; //igualando a variável AnoNasc com a info. AnoNasc do html
   
    resp = parseInt(AnoAtual) - parseInt(AnoNasc); //realizando a operação para calcular a idade

    document.getElementById("resp").innerText = "Sua idade é: " + resp; //resposta + texto para aparecer no html
}
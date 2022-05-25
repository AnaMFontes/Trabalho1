function calculaIdade() {
    let AnoNasc, AnoAtual, resp;

    AnoAtual = document.getElementById("AnoAtual").value;

    AnoNasc = document.getElementById("AnoNasc").value;
   
    resp = parseInt(AnoAtual) - parseInt(AnoNasc);

    document.getElementById("resp").innerText = "Sua idade é: " + resp;
}
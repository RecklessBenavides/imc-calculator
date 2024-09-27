
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", calcularImc);


function calcularImc() {
    let txtPeso = document.getElementById("txtPeso");
    let peso = txtPeso.value;

    let txtAltura = document.getElementById("txtAltura");
    let altura = txtAltura.value; 
    var resultadoImc = peso / (altura * altura);

    let parrafo = document.getElementById("content");
    parrafo.textContent = resultadoImc;
}
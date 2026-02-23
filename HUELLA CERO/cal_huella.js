function calcularHuella() {
    const energia = parseFloat(document.getElementById("energia").value) || 0;
    const agua = parseFloat(document.getElementById("agua").value) || 0;
    const transporte = parseFloat(document.getElementById("transporte").value) || 0;

    const factorEnergia = 0.5;
    const factorAgua = 0.2;
    const factorTransporte = 0.15;

    const huellaTotal = (energia * factorEnergia) + (agua * factorAgua) + (transporte * factorTransporte);

    const resultadoTexto = document.getElementById("resultadoHuella");
    const container = document.getElementById("resultadoHuellaContainer");
    const barra = document.getElementById("progress");

    resultadoTexto.innerText = `Tu huella de carbono estimada es de: ${huellaTotal.toFixed(2)} kg CO2/mes`;
    container.style.display = "block";

    let porcentaje = Math.min((huellaTotal / 500) * 100, 100);
    barra.style.width = porcentaje + "%";
    
    if(huellaTotal < 100) {
        barra.style.backgroundColor = "#2ecc71";
    } else if (huellaTotal < 300) {
        barra.style.backgroundColor = "#f1c40f";
    } else {
        barra.style.backgroundColor = "#e74c3c";
    }
}

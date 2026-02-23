function calcular(){
    var r1= parseFloat(document.getElementById("recibo_luz").value);
    var r2= parseFloat(document.getElementById("recibo_gas").value);
    if(0<=r1 && 0<=r2){
        var e = (r1*0.001)*0.5;
        var g = (r2*0.001)*0.2;
        var t = e+g;
        document.getElementById("total").innerHTML= t.toFixed(2);
        document.getElementById("resultado").style.display="block";
    }
}
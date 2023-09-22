

function calcularAltura() {
    var nom = document.getElementById('nombre').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    
    var IMC = (peso / Math.pow(altura, 2));

    if (IMC <= 18.5) {
        alert("Hola " + nom + ", el peso es bajo. Tu IMC es " + IMC.toFixed(2));
    } else if (IMC >=18.6 && IMC <= 24.9) {
        alert("Hola " + nom + ", el peso es normal. Tu IMC es " + IMC.toFixed(2));
    } else if (IMC >= 25 && IMC <= 29.9) {
        alert("Hola " + nom + ", tienes sobrepeso. Tu IMC es " + IMC.toFixed(2));
    } else if(IMC>30){
       alert("Hola " + nom + ", tienes obesidad. Tu IMC es " + IMC.toFixed(2));
    }
}
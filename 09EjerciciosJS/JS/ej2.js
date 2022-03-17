function Calcular(){
    var SueldoB = parseInt(document.getElementById('sueldo').value);
    var comisiones = 0.30;

    document.getElementById('Sueldo_Final').innerHTML = (SueldoB*comisiones)+SueldoB;  
} 
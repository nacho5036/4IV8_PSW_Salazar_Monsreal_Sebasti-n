function Calcular(){ 
    var TA = parseInt(document.getElementById('Total_Alumnos').value);
    var M = parseInt(document.getElementById('Hombres').value);
    var F = parseInt(document.getElementById('Mujeres').value); 

    var MT = (M*100)/TA;
    var FT = (F*100)/TA;  

    var Porcentaje = "%";

    document.getElementById('PM').innerHTML = MT + Porcentaje;
    document.getElementById('PF').innerHTML = FT + Porcentaje;  
}
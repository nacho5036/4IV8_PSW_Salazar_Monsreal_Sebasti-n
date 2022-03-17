function Calcular(){
    var aa = parseInt(document.getElementById('Año_actual').value);
    var an = parseInt(document.getElementById('Año_nacimiento').value);  

    document.getElementById('Resultados').innerHTML = aa-an; 
}
    
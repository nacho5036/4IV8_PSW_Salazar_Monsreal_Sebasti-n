function Calcular(){
    var P1 = parseFloat(document.getElementById('p1').value);
    var P2 = parseFloat(document.getElementById('p2').value);
    var P3 = parseFloat(document.getElementById('p3').value);
    var Examen_Final = parseFloat(document.getElementById('Examen_Final').value);
    var Trabajo_Final = parseFloat(document.getElementById('Trabajo_Final').value);  

    var Calificacion_Final = (P1+P2+P3)/3;  

    var parciales = Calificacion_Final*0.55;

    var examen = Examen_Final*0.30
     
    var trabajo = Trabajo_Final*0.15 

    document.getElementById('Calificacion_Final').innerHTML = parciales+trabajo+examen; 
}
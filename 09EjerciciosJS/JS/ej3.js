function Calcular(){
    var PrecioT = parseInt(document.getElementById('precio').value); 
    var Desc = 0.15;

    document.getElementById('Precio_Final').innerHTML = PrecioT-(PrecioT*Desc); 
}  


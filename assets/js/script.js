var count = 0;

function aggiungi(){
    count++;
    document.getElementById("numero").innerHTML = count; 
}
function sottrai(){
    if(count != 0){
        count--;
        document.getElementById("numero").innerHTML = count;
    }
}
function reset(){
    count = 0;
    document.getElementById("numero").innerHTML = count;
}
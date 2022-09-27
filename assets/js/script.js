document.addEventListener('DOMContentLoaded', function( ){
    var a = 0;

    const contatore = document.querySelector(".counter");
    const title = document.createElement("h2");
    title.textContent = "0";
    contatore.appendChild(title);

    const aggiungi = document.querySelector(".counter");
    
    const minusOne = document.createElement("botton");
    minusOne.textContent = "-";
    aggiungi.appendChild(minusOne);

    const plusOne = document.createElement("botton");
    plusOne.textContent = "+";
    aggiungi.appendChild(plusOne);
    
    const reset = document.createElement("botton");
    reset.textContent = "reset";
    aggiungi.appendChild(reset);
    

    plusOne.setAttribute("class", "bottoni");
    plusOne.setAttribute("id", "piu");

    minusOne.setAttribute("class", "bottoni");

    reset.setAttribute("class", "reset");

    plusOne.addEventListener("click", function(){
        a++;
        document.querySelector("h2").innerHTML = a;
    })
    minusOne.addEventListener("click", function(){
        if (a>0){
            a--;
            document.querySelector("h2").innerHTML = a;
        }
    })
    reset.addEventListener("click", function(){
        a = 0;
        document.querySelector("h2").innerHTML = a;
    })
});

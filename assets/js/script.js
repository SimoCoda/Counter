document.addEventListener('DOMContentLoaded', function( ){

    function contenuto(){
        var a = 0;

        const contatore = document.querySelector(".counter");
        const title = document.createElement("h2");
        title.textContent = "0";
        contatore.appendChild(title);

        const minusOne = document.createElement("botton");
        minusOne.textContent = "-";
        contatore.appendChild(minusOne);

        const plusOne = document.createElement("botton");
        plusOne.textContent = "+";
        contatore.appendChild(plusOne);
    
        const reset = document.createElement("botton");
        reset.textContent = "reset";
        contatore.appendChild(reset);
    
        plusOne.setAttribute("class", "bottoni");
        plusOne.setAttribute("id", "piu");

        minusOne.setAttribute("class", "bottoni");
        minusOne.setAttribute("id", "meno");

        reset.setAttribute("class", "reset");
        reset.setAttribute("id", "res");

        document.querySelector(".counter").addEventListener("click", (e) => {
            if(e.target.id === "piu"){
                a++;
                document.querySelector("h2").innerHTML = a;
            } else if (e.target.id === "meno"){
                if(a>0){
                    a--;
                    document.querySelector("h2").innerHTML = a;
                }
            } else if (e.target.id === "res"){
                a = 0;
                document.querySelector("h2").innerHTML = a;
            }
        })
    };

    contenuto();
});

document.addEventListener('DOMContentLoaded', function( ){

    function contenuto(){
        var a = 0;

        function createElement(){

            const contatore = document.querySelector('.counter');
            const title = document.createElement('h2');
            title.textContent = '0';
            contatore.appendChild(title);

            var text = ['-', '+', 'RESET'];
            for(var i = 0; i < text.length; i ++){
                var button = document.createElement('button');
                button.innerHTML = text[i];
                contatore.appendChild(button);
            };
            var classSet = document.querySelectorAll('button');
            for(var x=0; x<classSet.length-1; x++){
	            if (classSet[x].setAttribute('class', 'bottoni'));
            };
            var id = ['meno', 'piu', 'res'];
            for(var y=0; y<id.length; y++){
	            if (classSet[y].setAttribute('id', id[y]));
            };
        }
        createElement();

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

document.addEventListener('DOMContentLoaded', function(){

        let counter = 0;

        const counterBox = document.querySelector('.counterBox');
        
        const createCustomElement = (type, text, className, id) => {
            let e = document.createElement(type);
            e.textContent = text;
            e.setAttribute('class', className);
            e.setAttribute('id', id)
            counterBox.appendChild(e);
        };

        createCustomElement('h2','0','null','null');
        createCustomElement('button','+','bottoni','piu');
        createCustomElement('button','-','bottoni','meno');
        createCustomElement('button','reset', 'reset', 'res');

        counterBox.addEventListener("click", (e) => {
            if(e.target.id === "piu"){
                counter++;
                document.querySelector("h2").innerHTML = counter;
            } else if (e.target.id === "meno"){
                if(counter>0){
                    counter--;
                    document.querySelector("h2").innerHTML = counter;
                }
            } else if (e.target.id === "res"){
                counter = 0;
                document.querySelector("h2").innerHTML = counter;
            }
        })
});

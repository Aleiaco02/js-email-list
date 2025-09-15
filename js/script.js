// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// dichiaro il bottone che serve per generare le mail
const bottone = document.querySelector(".btn");

// dichiaro l'endpoint
const endPointApi = `https://flynn.boolean.careers/exercises/api/random/mail`


bottone.addEventListener("click", mailRandom);

function mailRandom(number) {
    axios.get(endPointApi)
        .then(rispApi => {
            let result = rispApi.data.response;
            let contatore =0;
            for (let i = 0; i < 9; i++) {
                if (contatore < 10) {
                
            }
            }
            

            console.log(result);



        })
        .catch(error => {
            // codice da eseguire in caso di errore
            console.error(error)
        })
}



// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// dichiaro il bottone che serve per generare le mail
const bottone = document.querySelector(".container-bottone");
const container = document.querySelector(".container");
const titolo = document.querySelector(".titolo");

// dichiaro l'endpoint
const endPointApi = `https://flynn.boolean.careers/exercises/api/random/mail`


bottone.addEventListener("click", mailRandom);

function mailRandom() {
    for (let i = 0; i < 10; i++) {

        axios.get(endPointApi)
            .then(rispApi => {
                let result = rispApi.data.response;
                
                container.innerHTML += `
                <div class="row text-center">
                    <ul class="col-12">
                        <li>${result}</li>
                    </ul>
                </div>`
                // bottone.classList.add("d-none");
                // titolo.classList.add("d-none");


            })
            .catch(error => {
                // codice da eseguire in caso di errore
                console.error(error)
            })
    }
}

mailRandom();



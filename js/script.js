/* let name = document.getElementById("name").value;

let km = document.getElementById("km").value;

let eta = document.getElementById("eta").value;

let numCarrozza = Math.floor(Math.random() * 11);

let codiceCP = Math.floor(Math.random() * 100001);

 */
function showTicket() {

    let name = document.getElementById("name").value;
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;
    let numCarrozza = Math.floor(Math.random() * 11);
    let codiceCP = Math.floor(Math.random() * 100001);

    let prezzoBiglietto = km * 0.21;

    if (eta == "Minorenne") {
        let sconto = ((20 * prezzoBiglietto) / 100);
        prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
    } else if (eta == "Maggiorenne") {
        prezzoBiglietto = prezzoBiglietto;
    } else {
        let sconto = ((40 * prezzoBiglietto) / 100);
        prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
    }

    if (name == "" || km == "" || km < 1) {
        if (document.getElementById("tickets").innerHTML == "") {
            document.getElementById("tickets").innerHTML += `<h5 class="text-center text-white mt-3">Inserisci i dati</h5>`;
        } else {
            document.getElementById("tickets").innerHTML += "";
        }
    } else {
        document.getElementById("tickets").innerHTML += `
        <h2 class="text-center text-white mt-3">IL TUO BIGLIETTO</h2>
    
        <div class="bg-white container rounded p-3 mt-4">
    
            <h5>DETTAGLIO PASSEGGERI</h5>
    
            <div class="border border-2">
    
                <div class="row">
                    <div class="bg-secondary col">
                        <h6>NOME PASSEGGERO</h6>
                        <p>${name}</p>
                    </div>
    
                    <div class="col">
                        <h6>Offerta</h6>
                        <p>Biglietto Standard</p>
                    </div>
    
                    <div class="col">
                        <h6>Carrozza</h6>
                        <p>${numCarrozza}</p>
                    </div>
    
                    <div class="col">
                        <h6>Codice CP</h6>
                        <p>${codiceCP}</p>
                    </div>
    
                    <div class="col">
                        <h6>Costo biglietto</h6>
                        <p>${prezzoBiglietto}€</p>
                    </div>
                </div>
    
            </div>
    
        </div>
        `
    }
    }




/* function showTicketter(event) {

    event.preventDefault();


    let name = document.getElementById("name").value;
    let numCarrozza = Math.floor(Math.random() * 11);
    let codiceCP = Math.floor(Math.random() * 100001);


    document.getElementById("tickets").innerHTML = `
    <h2 class="text-center text-white mt-3">IL TUO BIGLIETTO</h2>

    <div class="bg-white container rounded p-3 mt-4">

        <h5>DETTAGLIO PASSEGGERI</h5>

        <div class="border border-2">

            <div class="row">
                <div class="bg-secondary col">
                    <h6>NOME PASSEGGERO</h6>
                    <p>${name}</p>
                </div>

                <div class="col">
                    <h6>Offerta</h6>
                    <p>Biglietto Standard</p>
                </div>

                <div class="col">
                    <h6>Carrozza</h6>
                    <p>${numCarrozza}</p>
                </div>

                <div class="col">
                    <h6>Codice CP</h6>
                    <p>${codiceCP}</p>
                </div>

                <div class="col">
                    <h6>Costo biglietto</h6>
                    <p>2.10€</p>
                </div>
            </div>

        </div>

    </div>
    `
} */
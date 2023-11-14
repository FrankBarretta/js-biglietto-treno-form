let name = document.querySelector("#name").value;

let km = document.querySelector("#km").value;

let eta = document.querySelector("#eta").value;

let numCarrozza = Math.floor(Math.random() * 11);

let codiceCP = Math.floor(Math.random() * 100001);


function showTicket(name, numCarrozza, CodiceCP) {
    document.querySelector("#tickets").innerHTML = `
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
                    <p>${CodiceCP}</p>
                </div>

                <div class="col">
                    <h6>Costo biglietto</h6>
                    <p>2.10€</p>
                </div>
            </div>

        </div>

    </div>
    `
}
document.addEventListener("DOMContentLoaded", function () {
    let cosProduse = [];
    const butoaneAdauga = document.querySelectorAll(".adauga-in-cos");
    const cosContainer = document.createElement("div");

    // Creăm butonul de coș
    cosContainer.id = "cos-container";
    cosContainer.innerHTML = `
        <div id="cos">
            <span id="cos-text">🛒 Coș</span>
            <div id="cos-dropdown" class="hidden">
                <ul id="cos-list"></ul>
                <p id="total">Total: 0 Lei</p>
            </div>
        </div>
    `;
    document.body.appendChild(cosContainer);

    const cosDropdown = document.getElementById("cos-dropdown");
    const cosList = document.getElementById("cos-list");
    const totalElement = document.getElementById("total");

    // Adaugă produse în coș
    butoaneAdauga.forEach(buton => {
        buton.addEventListener("click", function () {
            const numeProdus = this.dataset.nume;
            const pretProdus = parseInt(this.dataset.pret);
            
            cosProduse.push({ nume: numeProdus, pret: pretProdus });
            actualizeazaCos();
        });
    });

    // Afișare coș la hover
    document.getElementById("cos").addEventListener("mouseenter", function () {
        cosDropdown.classList.remove("hidden");
    });

    document.getElementById("cos").addEventListener("mouseleave", function () {
        cosDropdown.classList.add("hidden");
    });

    function actualizeazaCos() {
        cosList.innerHTML = "";
        let total = 0;

        cosProduse.forEach(prod => {
            let item = document.createElement("li");
            item.textContent = `${prod.nume} - ${prod.pret} Lei`;
            cosList.appendChild(item);
            total += prod.pret;
        });

        totalElement.textContent = `Total: ${total} Lei`;
    }
});

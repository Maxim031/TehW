document.addEventListener("DOMContentLoaded", function () {
    const butoaneAdauga = document.querySelectorAll(".adauga-in-cos");

    butoaneAdauga.forEach((buton) => {
        buton.addEventListener("click", function () {
            const nume = this.getAttribute("data-nume");
            const pret = parseFloat(this.getAttribute("data-pret"));

            let cos = JSON.parse(localStorage.getItem("cos")) || [];

            const produsExistent = cos.find((produs) => produs.nume === nume);
            if (produsExistent) {
                produsExistent.cantitate += 1;
            } else {
                cos.push({ nume, pret, cantitate: 1 });
            }

            localStorage.setItem("cos", JSON.stringify(cos));

            alert(`${nume} a fost adăugat în coș!`);
        });
    });

    // Afișăm produsele în `cos.html`
    if (window.location.pathname.includes("cos.html")) {
        afiseazaCos();
    }
});

function afiseazaCos() {
    const listaCos = document.getElementById("lista-cos");
    const totalElement = document.getElementById("total");
    let cos = JSON.parse(localStorage.getItem("cos")) || [];

    listaCos.innerHTML = "";

    let total = 0;
    cos.forEach((produs, index) => {
        total += produs.pret * produs.cantitate;
        listaCos.innerHTML += `
            <div class="produs-cos">
                <p>${produs.nume} - ${produs.pret} Lei x ${produs.cantitate}</p>
                <button class="sterge" data-index="${index}">Șterge</button>
            </div>
        `;
    });

    totalElement.textContent = `Total: ${total} Lei`;

    document.querySelectorAll(".sterge").forEach((buton) => {
        buton.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            cos.splice(index, 1);
            localStorage.setItem("cos", JSON.stringify(cos));
            afiseazaCos();
        });
    });

    document.getElementById("goleste-cos").addEventListener("click", function () {
        localStorage.removeItem("cos");
        afiseazaCos();
    });
}
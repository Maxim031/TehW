let cosProduse = []; // Array pentru coș

// Funcție de adăugare în coș
function adaugaInCos(prodUs) {
    cosProduse.push(prodUs);
    actualizeazaCos();
}

// Funcție pentru actualizarea coșului
function actualizeazaCos() {
    const cosLista = document.getElementById('cos-lista');
    cosLista.innerHTML = ''; // Golește lista înainte de reafișare

    // Adăugăm fiecare produs în coș
    cosProduse.forEach((produs, index) => {
        const item = document.createElement('div');
        item.classList.add('cos-item');
        item.innerHTML = `
            <img src="${produs.img}" alt="${produs.nume}">
            <span>${produs.nume}</span>
            <button class="cos-remove" onclick="stergeProdus(${index})">X</button>
        `;
        cosLista.appendChild(item);
    });

    // Afișează butonul „Șterge tot din coș” doar dacă sunt produse
    const stergeTotBtn = document.getElementById('sterge-tot');
    if (cosProduse.length > 0) {
        stergeTotBtn.style.display = 'block';
    } else {
        stergeTotBtn.style.display = 'none';
    }
}

// Șterge un produs din coș
function stergeProdus(index) {
    cosProduse.splice(index, 1);
    actualizeazaCos();
}

function stergeTot() {
    console.log("Șterge tot din coș a fost apăsat");
    cosProduse = [];
    actualizeazaCos();
}

function cumparaProdusele() {
    console.log("Cumpără produsele a fost apăsat");
    window.location.href = "checkout.php"; // Redirecționează către checkout
}
document.addEventListener("DOMContentLoaded", function() {
    // Codul tău pentru evenimente, ca să te asiguri că DOM-ul este complet încărcat
    
    const stergeTotBtn = document.getElementById("sterge-tot");
    const cumparaProduseleBtn = document.getElementById("cumpara-produsele");

    if (stergeTotBtn && cumparaProduseleBtn) {
        stergeTotBtn.addEventListener("click", function () {
            console.log("Șterge tot din coș a fost apăsat");
            cosProduse = [];
            actualizeazaCos();
        });

        cumparaProduseleBtn.addEventListener("click", function () {
            console.log("Cumpără produsele a fost apăsat");
            window.location.href = "checkout.php";
        });
    } else {
        console.log("Butonul nu a fost găsit.");
    }
});

document.getElementById("sterge-tot").addEventListener("click", function () {
    console.log("Șterge tot din coș a fost apăsat");
    cosProduse = [];
    actualizeazaCos();
});

document.getElementById("cumpara-produsele").addEventListener("click", function () {
    console.log("Cumpără produsele a fost apăsat");
    window.location.href = "checkout.php";
});











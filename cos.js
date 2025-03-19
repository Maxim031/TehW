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
}

// Șterge un produs din coș
function stergeProdus(index) {
    cosProduse.splice(index, 1);
    actualizeazaCos();
}

// Șterge toate produsele din coș
V

// Simulează cumpărarea produselor
document.getElementById("cumpara").addEventListener("click", function () {
    window.open("checkout.html", "_blank"); // Deschide pagina de checkout într-un tab nou
});





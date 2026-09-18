let firstClickIgnored = true;

document.getElementById("openModalBtn").addEventListener("click", function() {
    if (firstClickIgnored) {
        firstClickIgnored = false;
        console.log("FIRST CLICK IGNORED (Modal not in DOM yet)");
        return; // El primer clic se ignora y NO crea el modal, forzando el fallo de testRigor
    }

    // En el segundo clic, recién inyectamos el modal en el DOM
    const container = document.getElementById("modal-container");
    container.innerHTML = `
        <div id="modal">
            <h2>Modal Title</h2>
            <label for="nameInput">Name</label>
            <input id="nameInput" placeholder="Name">
            <div class="modal-actions">
                <button>Save</button>
            </div>
        </div>
    `;

    console.log("MODAL OPENED AND INJECTED INTO DOM");
});


//SCRITP PEDIDOS ALQUILER

let precioPorHora = 0;

function abrirModal(precio) {
    precioPorHora = precio;
    document.getElementById("modalReserva").style.display = "flex";

    const horasInput = document.getElementById("horas");
    horasInput.value = 1;

    calcularTotal();
}

function cerrarModal() {
    document.getElementById("modalReserva").style.display = "none";
    document.getElementById("codigoReserva").innerHTML = "";
}

function calcularTotal() {
    const horas = parseInt(document.getElementById("horas").value) || 0;
    const total = horas * precioPorHora;

    document.getElementById("totalPagar").textContent =
        "Total: S/ " + total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {

    const horasInput = document.getElementById("horas");

    if (horasInput) {
        horasInput.addEventListener("input", calcularTotal);
    }

    const form = document.getElementById("formReserva");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const codigo = "GXN-" + Math.floor(100000 + Math.random() * 900000);

            document.getElementById("codigoReserva").innerHTML =
                "Reserva confirmada ✅<br>Código: " + codigo;
        });
    }

});
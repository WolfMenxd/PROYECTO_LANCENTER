// ====================== JS CARTA ======================

// Modal y elementos
const botonesPedir = document.querySelectorAll('.btn-pedir');
const modal = document.getElementById('modalPedido');
const cerrarModal = modal.querySelector('.cerrar');

const productoSelect = document.getElementById('productoSelect');
const cantidadInput = document.getElementById('cantidad');
const listaPedido = document.getElementById('listaPedido');
const totalSpan = document.getElementById('total');

let total = 0;

// Abrir modal al hacer click en botón "Pedir"
botonesPedir.forEach(btn => {
    btn.addEventListener('click', () => {
        const planCard = btn.closest('.plan-card');
        const nombreProducto = planCard.querySelector('h3').textContent;

        // Seleccionar automáticamente en el select
        let encontrado = false;
        for (let i = 0; i < productoSelect.options.length; i++) {
            if (productoSelect.options[i].text.includes(nombreProducto)) {
                productoSelect.selectedIndex = i;
                encontrado = true;
                break;
            }
        }

        cantidadInput.value = 1;
        modal.style.display = 'flex';

        if (!encontrado) console.warn("Producto no encontrado en el select:", nombreProducto);
    });
});

// Cerrar modal
cerrarModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

// Agregar producto
document.getElementById('agregarProducto').addEventListener('click', () => {
    const option = productoSelect.options[productoSelect.selectedIndex];
    const nombre = option.text.split(' - ')[0];
    const precio = parseFloat(option.value);
    const cantidad = parseInt(cantidadInput.value);

    if (cantidad < 1) return;

    const subtotal = precio * cantidad;
    total += subtotal;

    const li = document.createElement('li');
    li.textContent = `${nombre} x${cantidad} - S/ ${subtotal.toFixed(2)}`;
    listaPedido.appendChild(li);

    totalSpan.textContent = total.toFixed(2);

    cantidadInput.value = 1;
});

// Confirmar pedido
document.getElementById('confirmarPedido').addEventListener('click', () => {
    const pc = document.getElementById('pcNumero').value;
    const codigo = document.getElementById('codigoReserva').value;

    if (!pc || !codigo || listaPedido.children.length === 0) {
        alert('Completa todos los campos y agrega al menos un producto.');
        return;
    }

    alert(`✅ Pedido confirmado!\nPC: ${pc}\nCódigo: ${codigo}\nTotal: S/ ${total.toFixed(2)}`);

    // Reset modal
    listaPedido.innerHTML = '';
    total = 0;
    totalSpan.textContent = '0';
    modal.style.display = 'none';
    document.getElementById('pcNumero').value = '';
    document.getElementById('codigoReserva').value = '';
});
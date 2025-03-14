document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateCart);
});

function updateCart() {
    let total = 0;
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checked => {
        const price = parseInt(checked.value);
        const name = checked.getAttribute('data-name');
        total += price;
        const item = document.createElement('li');
        item.textContent = `${name} – ${price} €`;
        cartList.appendChild(item);
    });

    document.getElementById('total').textContent = total + 10; // Versand hinzufügen
}
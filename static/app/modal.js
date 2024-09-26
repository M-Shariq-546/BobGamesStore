document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    const modal = document.getElementById('confirmModal');
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');
    let currentButton = null;

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            currentButton = button;
            modal.style.display = "block";
        });
    });

    confirmYes.addEventListener('click', function() {
        if (currentButton) {
            const itemId = currentButton.getAttribute('data-menu-item');
            // Implement the logic to add the item to the cart here
            console.log(`Item with ID ${itemId} added to cart.`);
            modal.style.display = "none";
        }
    });

    confirmNo.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
let currentSlide = 0;
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots-container");
const images = [
    "../media/home_page_images/header1.png",
    "../media/home_page_images/header2.png",
    "../media/home_page_images/header3.jpg",
    "../media/home_page_images/header4.jpg",
];
const totalSlides = images.length;

const openFiltersMobile = document.getElementById("openFiltersMobile");
const closeFiltersMobile = document.getElementById("closeFiltersMobile");
const closeResultFiltersMobile = document.getElementById(
    "closeResultFiltersMobile",
);
const filtersSideMenu = document.getElementById("filtersSideMenu");

// main.js

document.addEventListener("DOMContentLoaded", () => {
    const showBlockButton = document.getElementById("showBlockButton");
    const hiddenBlock = document.getElementById("hiddenBlock");
    const showBlockButtonPhone = document.getElementById(
        "showBlockButtonPhone",
    );

    if (showBlockButton) {
        showBlockButton.addEventListener("click", () => {
            hiddenBlock.style.display = "block";
        });
    }

    if (showBlockButtonPhone) {
        showBlockButtonPhone.addEventListener("click", () => {
            hiddenBlock.style.display = "block";
        });
    }

    document.addEventListener("click", (event) => {
        if (
            !hiddenBlock.contains(event.target) &&
            !showBlockButton.contains(event.target) &&
            !showBlockButtonPhone.contains(event.target)
        ) {
            hiddenBlock.style.display = "none";
        }
    });
});

if (openFiltersMobile) {
    openFiltersMobile.addEventListener("click", function () {
        filtersSideMenu.classList.add("visible-sortItem");
    });

    closeFiltersMobile.addEventListener("click", function () {
        filtersSideMenu.classList.remove("visible-sortItem");
    });

    closeResultFiltersMobile.addEventListener("click", function () {
        filtersSideMenu.classList.remove("visible-sortItem");
    });

    window.addEventListener("click", function (event) {
        if (event.target === filtersSideMenu) {
            filtersSideMenu.classList.remove("visible-sortItem");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector("#theme-toggle");

    // Function to set the theme based on user preference
    const setTheme = (darkMode) => {
        document.documentElement.classList.toggle("dark-mode", darkMode);
        themeToggle.checked = darkMode; // Set the checked property
    };

    // Function to save user preference in local storage
    const saveThemePreference = (darkMode) => {
        localStorage.setItem("darkMode", darkMode);
    };

    // Function to load user preference from local storage
    const loadThemePreference = () => {
        return JSON.parse(localStorage.getItem("darkMode")) || false;
    };

    // Initialize theme based on user preference or default to light mode
    setTheme(loadThemePreference());

    // Set up event listener for theme toggle
    themeToggle.addEventListener("change", function () {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode);
        saveThemePreference(isDarkMode);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector("#sidebar-theme-toggle");

    // Function to set the theme based on user preference
    const setTheme = (darkMode) => {
        document.documentElement.classList.toggle("dark-mode", darkMode);
        themeToggle.checked = darkMode; // Set the checked property
    };

    // Function to save user preference in local storage
    const saveThemePreference = (darkMode) => {
        localStorage.setItem("darkMode", darkMode);
    };

    // Function to load user preference from local storage
    const loadThemePreference = () => {
        const savedPreference = localStorage.getItem("darkMode");
        return savedPreference !== null ? JSON.parse(savedPreference) : true; // Default to dark mode
    };

    setTheme(loadThemePreference());

    themeToggle.addEventListener("change", function () {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode);
        saveThemePreference(isDarkMode);
    });
});

if (document.querySelector(".drop")) {
    const lists = document.querySelectorAll(".drop");
    dropList(lists);

    function dropList(els) {
        els.forEach((el) => {
            el.addEventListener("click", (e) => {
                const clickedList = e.currentTarget;
                const content = clickedList.nextElementSibling;

                // Close all other dropdowns
                lists.forEach((list) => {
                    if (list !== clickedList) {
                        list.classList.remove("show");
                        list.nextElementSibling.style.maxHeight = null;
                    }
                });

                // Toggle the clicked dropdown
                clickedList.classList.toggle("show");

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }
}

if (slider) {
    function showSlide(index) {
        const backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('${images[index]}')`;
        slider.style.background = backgroundImage;
        updateDots(index);
    }

    function updateDots(index) {
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dot.addEventListener("click", () => showSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Autoload next slide every 5 seconds (adjust as needed)
    setInterval(nextSlide, 5000);

    // Show initial slide and create dots
    showSlide(currentSlide);
    createDots();
}

function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}

function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}

const showButton = document.getElementById("showBlockButton");
const showBlockButtonPhone = document.getElementById("showBlockButtonPhone");
const hideButton = document.getElementById("hideBlockButton");

if (showButton) {
    showButton.addEventListener("click", function () {
        hiddenBlock.style.display = "flex";
    });

    hideButton.addEventListener("click", function () {
        hiddenBlock.style.display = "none";
    });
}

if (showBlockButtonPhone) {
    showBlockButtonPhone.addEventListener("click", function () {
        hiddenBlock.style.display = "flex";
    });

    hideButton.addEventListener("click", function () {
        hiddenBlock.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById("showBlockButton");
    const hideButton = document.getElementById("hideBlockButton");
    const hiddenBlock = document.getElementById("hiddenBlock");
    const selectedProductsSection =
        document.getElementById("selected-products");
    const totalPriceElement = document.getElementById("total-price");
    const detailImgSrc = document.getElementById("mainImage");

    const shopingCart = document.querySelector(".shopping-cart");
    const cartQtyController = document.querySelector(".cart-items-list");

    const checkOutBtn = document.getElementById("checkout-btn");
    const checkOutForm = document.getElementById("checkout-form");

    // Function to display selected products
    function displaySelectedProducts(cart, total_price) {
        if (selectedProductsSection) {
            selectedProductsSection.innerHTML = "";

            if (Object.keys(cart).length === 0) {
                selectedProductsSection.innerHTML =
                    "<p>Your cart is empty.</p>";
            } else {
                Object.keys(cart).forEach((itemId) => {
                    const item = cart[itemId];

                    const productElement = document.createElement("div");
                    productElement.classList.add("selected-product");

                    productElement.innerHTML = `
                        <div class="checkout-product">
                            <div class="checkout-product-img"><img src="${item.image}" alt="product"></div>
                            <div class="checkout-product-r">
                                <div class="checkout-product-title">${item.name}</div>
                                <div class="checkout-product-rb">
                                    <div class="checkout-product-price">$${item.price}</div>
                                    <div class="checkout-product-quantity">${item.quantity}</div>
                                </div>
                            </div>
                        </div>
                    `;
                    selectedProductsSection.appendChild(productElement);
                });

                // Display total price
                totalPriceElement.textContent = `$${total_price}`;
            }
        }
    }

    // Function to update cart item quantity in localStorage
    function updateCartItemQuantity(itemId, quantity) {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        if (cart[itemId]) {
            cart[itemId].quantity = quantity;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay(cart);
        }
    }

    // Function to add item to cart
    function addToCart(itemId, itemName, itemPrice, itemImage) {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        if (cart[itemId]) {
            cart[itemId].quantity += 1;
        } else {
            cart[itemId] = {
                name: itemName,
                price: itemPrice,
                quantity: 1,
                image: itemImage,
            };
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay(cart);

        hiddenBlock.style.display = "flex";
    }

    // Function to remove item from cart
    function removeFromCart(itemId) {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        delete cart[itemId];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay(cart);
    }

    // Function to calculate total price of the cart
    function calculateTotalPrice(cart) {
        return Object.values(cart)
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    }

    // Function to update cart display
    function updateCartDisplay(cart) {
        const totalPriceElement = document.getElementById("total-price");
        const cartItemsList = document.getElementById("cart-products");

        if (cartItemsList) {
            cartItemsList.innerHTML = "";
            let totalPrice = 0;

            Object.keys(cart).forEach((itemId) => {
                const item = cart[itemId];
                const itemTotalPrice = (item.price * item.quantity).toFixed(2);

                const cartItemElement = document.createElement("div");
                cartItemElement.classList.add(
                    "cart-items-list",
                    "cart-product-item",
                );
                cartItemElement.innerHTML = `
                    <div class="cart-product-img"><img src="${item.image}" alt="product"></div>
                    <div class="cart-table">
                        <div class="inline-detail">
                            <div class="cart-product-company"></div>
                            <button class="delete-cart-item-btn flex items-center justify-center" data-cart-item-id="${itemId}">x</button>
                        </div>
                        <div class="cart-product-title">${item.name}</div>
                    </div>
                    <div class="cart-product-price">$${item.price}</div>
                    <div class="quantity-container cart-product-qty">
                        <button class="quantity-btn cart-decrement-btn" data-cart-item-id="${itemId}">-</button>
                        <span class="quantity" id="cartCount_${itemId}">${item.quantity}</span>
                        <button class="quantity-btn cart-increment-btn" data-cart-item-id="${itemId}">+</button>
                    </div>
                    <div class="cart-product-total cart-product-item-price">$${itemTotalPrice}</div>
                `;
                cartItemsList.appendChild(cartItemElement);

                totalPrice += parseFloat(itemTotalPrice);
            });

            totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        }
    }

    // Function to load cart data
    function loadCartData() {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        const total_price = calculateTotalPrice(cart);

        if (selectedProductsSection) {
            displaySelectedProducts(cart, total_price);
        } else {
            updateCartDisplay(cart);
        }
    }

    // Event delegation for cart item deletion
    if (shopingCart) {
        shopingCart.addEventListener("click", function (event) {
            if (event.target.classList.contains("delete-cart-item-btn")) {
                const itemId = event.target.getAttribute("data-cart-item-id");
                removeFromCart(itemId);
                event.stopPropagation(); // Prevents event from bubbling up and causing unintended behavior
            }
        });
    }

    // Event delegation for cart quantity adjustments
    if (cartQtyController) {
        cartQtyController.addEventListener("click", function (event) {
            const target = event.target;
            if (
                target.classList.contains("cart-decrement-btn") ||
                target.classList.contains("cart-increment-btn")
            ) {
                const itemId = target.getAttribute("data-cart-item-id");
                const cart = JSON.parse(localStorage.getItem("cart")) || {};
                const currentQuantity = cart[itemId]?.quantity || 0;

                if (target.classList.contains("cart-decrement-btn")) {
                    if (currentQuantity > 1) {
                        updateCartItemQuantity(itemId, currentQuantity - 1);
                    } else {
                        removeFromCart(itemId);
                    }
                } else if (target.classList.contains("cart-increment-btn")) {
                    updateCartItemQuantity(itemId, currentQuantity + 1);
                }

                event.stopPropagation(); // Prevents event from bubbling up and causing unintended behavior
            }
        });
    }

    // Confirm modal functionality
    document.querySelectorAll(".confirmBtn").forEach((button) => {
        button.addEventListener("click", function () {
            const productBox = button.closest(".product-box");
            const productId = productBox.getAttribute("data-menu-item-id");
            const modal = document.getElementById("confirmModal-" + productId);
            if (modal) modal.classList.remove("hidden");
        });
    });

    // Cancel modal functionality
    document.querySelectorAll(".cancelBtn").forEach((button) => {
        button.addEventListener("click", function () {
            const modal = button.closest(".fixed");
            if (modal) modal.classList.add("hidden");
        });
    });

    // Add to cart button functionality
    document.querySelectorAll(".addToCartBtn").forEach((button) => {
        button.addEventListener("click", function () {
            const itemId = button.getAttribute("data-menu-item");
            let itemName, itemPrice, itemImage;

            const productDetail = button.closest(".product-info");
            if (productDetail) {
                itemName = productDetail
                    .querySelector(".product-title-detail")
                    ?.textContent.trim();
                itemPrice = parseFloat(
                    productDetail
                        .querySelector(".product-price-detail")
                        ?.textContent.trim()
                        .replace("$", ""),
                );

                const availableColors =
                    productDetail.querySelectorAll(".detail-color");
                if (availableColors.length > 0) {
                    const selectedColor = productDetail.querySelector(
                        ".detail-color.selected",
                    );
                    if (selectedColor) {
                        itemColor = selectedColor.style.backgroundColor;
                    } else {
                        alert("Please select a color for the product.");
                        return;
                    }
                }

                itemImage = document
                    .querySelector(".detail-img-main img")
                    ?.getAttribute("src");
            } else {
                const productBox = button.closest(".product-box");
                itemName = productBox
                    .querySelector(".sellers-box-title")
                    ?.getAttribute("data-menu-item-name");
                itemPrice = parseFloat(
                    productBox
                        .querySelector(".sellers-box-price")
                        ?.textContent.trim(),
                );
                itemImage = productBox
                    .querySelector(".sellers-box-img")
                    ?.style.backgroundImage.replace(
                        /^url\(['"](.+)['"]\)/,
                        "$1",
                    );
            }

            if (itemName && itemPrice) {
                addToCart(itemId, itemName, itemPrice, itemImage);
                hiddenBlock.style.display = "flex";
            } else {
                console.error(
                    "Failed to add item to cart. Item name or price is missing.",
                );
            }

            const modal = button.closest(".fixed");
            if (modal) modal.classList.add("hidden");
        });
    });

    // Toggle selected class for color selection
    document.querySelectorAll(".detail-color").forEach((color) => {
        color.addEventListener("click", function () {
            color.parentNode
                .querySelectorAll(".detail-color")
                .forEach((otherColor) => {
                    otherColor.classList.remove("selected");
                });
            color.classList.add("selected");
        });
    });

    // Load initial cart data
    loadCartData();

    // Telegram send button
    if (checkOutForm) {
        checkOutForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
            sendTelegramData(); // Call your function to send data to Telegram
        });
    }

    function sendTelegramData() {
        var contactName = document.getElementById("first_name").value;
        var contactSurname = document.getElementById("last_name").value;
        var contactNumber = document.getElementById("phone").value;
        var contactAddress = document.getElementById("address").value;
        var contactApartment = document.getElementById("apartment").value;
        var contactCity = document.getElementById("city").value;
        var contactPostalCode = document.getElementById("postal_code").value;

        var contactDetails = {
            name: contactName,
            surname: contactSurname,
            number: contactNumber,
            address: contactAddress,
            apartment: contactApartment,
            city: contactCity,
            postal: contactPostalCode,
        };

        console.log(contactDetails);

        var csrfToken = getCookie("csrftoken");
        if (csrfToken) {
            var cart = JSON.parse(localStorage.getItem("cart")) || {};

            var itemsArray = [];

            for (var itemId in cart) {
                var item = cart[itemId];
                var itemName = item.name;
                var itemPrice = item.price;
                var itemQuantity = item.quantity;
                var itemTotalPrice = itemPrice * itemQuantity;
                var itemColor = item.color;
                var itemImage = item.image;

                itemsArray.push({
                    id: itemId,
                    name: itemName,
                    price: itemPrice,
                    quantity: itemQuantity,
                    color: itemColor,
                    image: itemImage,
                });
            }

            // Send both contact details and cart data to the server
            fetch("/send-to-telegram/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                body: JSON.stringify({
                    contact: contactDetails,
                    cart: itemsArray,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "success") {
                        alert(
                            "Your order is accepted! Our manager will contact you soon :)",
                        );
                    } else {
                        alert(
                            "The order has not been sent. Contact us by phone (+994)00-000-12-12",
                        );
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("There was an error sending your order :(");
                });
        } else {
            console.error("CSRF token not found.");
        }
    }

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    if (showButton & hideButton) {
        showButton.addEventListener("click", function () {
            hiddenBlock.style.display = "block";
        });

        hideButton.addEventListener("click", function () {
            hiddenBlock.style.display = "none";
        });
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const showButton = document.getElementById('showBlockButton');
//     const hideButton = document.getElementById('hideBlockButton');
//     const hiddenBlock = document.getElementById('hiddenBlock');
//     const selectedProductsSection = document.getElementById('selected-products');
//     const totalPriceElement = document.getElementById('total-price');
//     const detailİmgSrc = document.getElementById('mainImage');

//     const shopingCart = document.querySelector('.shopping-cart');
//     const cartQtyController = document.querySelector('.cart-items-list');

//     const checkOutBtn = document.getElementById('.checkout-btn');
//     const checkOutForm = document.getElementById('checkout-form')

//     if (selectedProductsSection) {
//         function displaySelectedProducts(cart, total_price) {
//             selectedProductsSection.innerHTML = '';

//             if (Object.keys(cart).length === 0) {
//                 const emptyCartMessage = document.createElement('p');
//                 emptyCartMessage.textContent = 'Your cart is empty.';
//                 selectedProductsSection.appendChild(emptyCartMessage);
//             } else {
//                 for (const itemId in cart) {
//                     const item = cart[itemId];

//                     const productElement = document.createElement('div');
//                     productElement.classList.add('selected-product');

//                     const productInfo = document.createElement('p');
//                     productInfo.innerHTML = `
//                         <div class="checkout-product">
//                             <div class="checkout-product-img"><img src="${item.image}" alt="product"></div>
//                                 <div class="checkout-product-r">
//                                     <div class="checkout-product-title">${item.name}</div>
//                                     <div class="checkout-product-rb">
//                                         <div class="checkout-product-price">$${item.price}</div>
//                                         <div class="checkout-product-quantity">${item.quantity}</div>
//                                     </div>
//                                 </div>
//                         </div>
//                     `;
//                     productElement.appendChild(productInfo);

//                     selectedProductsSection.appendChild(productElement);
//                 }

//                 // Display total price
//                 totalPriceElement.textContent = `$${total_price}`;
//             }
//         }
//     }

//     loadCartData();

//     function updateCartItemQuantity(itemId, quantity) {
//         var cart = JSON.parse(localStorage.getItem('cart')) || {};
//         cart[itemId].quantity = quantity;
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCartDisplay(cart);
//     }

//     function addToCart(itemId, itemName, itemPrice, itemImage) {
//         var cart = JSON.parse(localStorage.getItem('cart')) || {};
//         if (cart[itemId]) {
//             cart[itemId].quantity += 1;
//         } else {
//             cart[itemId] = {
//                 name: itemName,
//                 price: itemPrice,
//                 quantity: 1,
//                 image: itemImage,
//             };
//         }
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCartDisplay(cart);
//     }

//     function removeFromCart(itemId) {
//         var cart = JSON.parse(localStorage.getItem('cart')) || {};
//         delete cart[itemId];
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCartDisplay(cart);
//     }

//     function loadCartData() {
//         var cart = JSON.parse(localStorage.getItem('cart')) || {};
//         var total_price = calculateTotalPrice(cart);

//         if (displaySelectedProducts) {
//             displaySelectedProducts(cart, total_price);
//         } else {
//             updateCartDisplay(cart);
//         }

//     }

//     function calculateTotalPrice(cart) {
//         // Your logic to calculate the total price based on cart data
//         let total = 0;
//         for (const itemId in cart) {
//             const item = cart[itemId];
//             total += item.price * item.quantity;
//         }
//         return total.toFixed(2);
//     }

//     function updateCartDisplay(cart) {
//         var totalPriceElement = document.getElementById('total-price');
//         var totalPrice = 0;
//         var cartItemsList = document.getElementById('cart-products');

//         cartItemsList.innerHTML = '';

//         for (var itemId in cart) {
//             var item = cart[itemId];
//             var itemName = item.name;
//             var itemPrice = item.price;
//             var itemQuantity = item.quantity;
//             var itemTotalPrice = (itemPrice * itemQuantity).toFixed(2);
//             var itemImage = item.image;

//             var cartItemElement = document.createElement('div');
//             cartItemElement.classList.add('cart-items-list', 'cart-product-item');
//             cartItemElement.innerHTML = `
//                 <div class="cart-product-img"><img src="${itemImage}" alt="product"></div>
//                 <div class="cart-table">
//                     <div class="inline-detail">
//                         <div class="cart-product-company"></div>
//                         <button class="delete-cart-item-btn flex items-center justify-center" data-cart-item-id="${itemId}">x</button>
//                     </div>
//                     <div class="cart-product-title">${itemName}</div>
//                 </div>
//                 <div class="cart-product-price">$${itemPrice}</div>
//                 <div class="quantity-container cart-product-qty">
//                     <button class="quantity-btn cart-decrement-btn" data-cart-item-id="${itemId}">-</button>
//                     <span class="quantity" id="cartCount_${itemId}">${itemQuantity}</span>
//                     <button class="quantity-btn cart-increment-btn" data-cart-item-id="${itemId}">+</button>
//                 </div>
//                 <div class="cart-product-total cart-product-item-price">$${itemTotalPrice}</div>
//             `;
//             cartItemsList.appendChild(cartItemElement);

//             totalPrice += parseFloat(itemTotalPrice);
//         }

//         totalPriceElement.textContent = 'Total Price: $' + totalPrice;
//     }

//     document.querySelectorAll('.confirmBtn').forEach(function(button) {
//         button.addEventListener('click', function() {
//             var productBox = button.closest('.product-box');
//             var productId = productBox.getAttribute('data-menu-item-id');
//             var modal = document.getElementById('confirmModal-' + productId);
//             modal.classList.remove('hidden');
//         });
//     });

//     document.querySelectorAll('.cancelBtn').forEach(function(button) {
//         button.addEventListener('click', function() {
//             var modal = button.closest('.fixed');  // Correctly select the modal element
//             modal.classList.add('hidden');
//         });
//     });

//     document.querySelectorAll('.addToCartBtn').forEach(function (button) {
//         button.addEventListener('click', function () {
//             var itemId = button.getAttribute('data-menu-item');
//             var itemName, itemPrice, itemImage;

//             // Check if the button is on the product detail page
//             var productDetail = button.closest('.product-info');
//             if (productDetail) {
//                 itemName = productDetail.querySelector('.product-title-detail').textContent.trim();
//                 itemPrice = parseFloat(productDetail.querySelector('.product-price-detail').textContent.trim().replace('$', ''));

//                 // Check if the product has available colors
//                 var availableColors = productDetail.querySelectorAll('.detail-color');
//                 if (availableColors.length > 0) {
//                     var selectedColor = productDetail.querySelector('.detail-color.selected');
//                     if (selectedColor) {
//                         itemColor = selectedColor.style.backgroundColor;
//                     } else {
//                         alert('Please select a color for the product.')
//                         return;
//                     }
//                 }

//                 itemImage = document.querySelector('.detail-img-main img').getAttribute('src');
//             } else {
//                 // Assume the button is on the all products page
//                 var productBox = button.closest('.product-box');
//                 itemName = productBox.querySelector('.sellers-box-title').getAttribute('data-menu-item-name');
//                 itemPrice = parseFloat(productBox.querySelector('.sellers-box-price').textContent.trim());
//                 itemImage = productBox.querySelector('.sellers-box-img').style.backgroundImage.replace(/^url\(['"](.+)['"]\)/, '$1');
//             }

//             console.log(itemName, itemPrice, itemImage)

//             // Add to cart if both item name and price are valid
//             if (itemName && itemPrice) {
//                 addToCart(itemId, itemName, itemPrice, itemImage);
//             } else {
//                 console.error('Failed to add item to cart. Item name or price is missing.');
//             }

//             var modal = button.closest('.fixed');  // Close the modal after adding to cart
//             modal.classList.add('hidden');
//         });
//     });

//     // Toggle selected class for color selection
//     document.querySelectorAll('.detail-color').forEach(function (color) {
//         color.addEventListener('click', function () {
//             // Deselect other colors
//             color.parentNode.querySelectorAll('.detail-color').forEach(function (otherColor) {
//                 otherColor.classList.remove('selected');
//             });
//             // Select the clicked color
//             color.classList.add('selected');
//         });
//     });

//     if (shopingCart) {
//         shopingCart.addEventListener('click', function (event) {
//             if (event.target.classList.contains('delete-cart-item-btn')) {
//                 var itemId = event.target.getAttribute('data-cart-item-id');
//                 removeFromCart(itemId);
//             }
//         });
//     }

//     if (cartQtyController) {
//         cartQtyController.addEventListener('click', function (event) {
//             var target = event.target;
//             if (target.classList.contains('cart-decrement-btn') || target.classList.contains('cart-increment-btn')) {
//                 var itemId = target.getAttribute('data-cart-item-id');
//                 var cart = JSON.parse(localStorage.getItem('cart')) || {};
//                 var currentQuantity = cart[itemId].quantity;
//                 if (target.classList.contains('cart-decrement-btn')) {
//                     if (currentQuantity > 1) {
//                         updateCartItemQuantity(itemId, currentQuantity - 1);
//                     } else {
//                         removeFromCart(itemId); // Remove item if quantity becomes zero
//                     }
//                 } else {
//                     updateCartItemQuantity(itemId, currentQuantity + 1);
//                 }
//             }
//         });

//     }

//     // Telegram send button
//     if (checkOutForm) {
//         checkOutForm.addEventListener('submit', function (event) {
//             event.preventDefault(); // Prevent the default form submission
//             sendTelegramData(); // Call your function to send data to Telegram
//         });
//     }

//     function sendTelegramData() {
//         var contactName = document.getElementById('first_name').value;
//         var contactSurname = document.getElementById('last_name').value;
//         var contactNumber = document.getElementById('phone').value;
//         var contactAddress = document.getElementById('address').value;
//         var contactApartment = document.getElementById('apartment').value;
//         var contactCity = document.getElementById('city').value;
//         var contactPostalCode = document.getElementById('postal_code').value;

//         var contactDetails = {
//             name: contactName,
//             surname: contactSurname,
//             number: contactNumber,
//             address: contactAddress,
//             apartment: contactApartment,
//             city: contactCity,
//             postal: contactPostalCode
//         };

//         console.log(contactDetails);

//         var csrfToken = getCookie('csrftoken');
//         if (csrfToken) {
//             var cart = JSON.parse(localStorage.getItem('cart')) || {};

//             var itemsArray = [];

//             for (var itemId in cart) {
//                 var item = cart[itemId];
//                 var itemName = item.name;
//                 var itemPrice = item.price;
//                 var itemQuantity = item.quantity;
//                 var itemTotalPrice = itemPrice * itemQuantity;
//                 var itemColor = item.color;
//                 var itemImage = item.image;

//                 itemsArray.push({
//                     id: itemId,
//                     name: itemName,
//                     price: itemPrice,
//                     quantity: itemQuantity,
//                     color: itemColor,
//                     image: itemImage
//                 });
//             }

//             // Send both contact details and cart data to the server
//             fetch('/send-to-telegram/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-CSRFToken': csrfToken,
//                 },
//                 body: JSON.stringify({
//                     contact: contactDetails,
//                     cart: itemsArray,
//                 }),
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.status === 'success') {
//                         alert('Your order is accepted! Our manager will contact you soon :)');
//                     } else {
//                         alert('The order has not been sent. Contact us by phone (+994)00-000-12-12');
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                     alert('There was an error sending your order :(');
//                 });
//         } else {
//             console.error('CSRF token not found.');
//         }
//     }

//     function getCookie(name) {
//         var value = "; " + document.cookie;
//         var parts = value.split("; " + name + "=");
//         if (parts.length === 2) return parts.pop().split(";").shift();
//     }

//     if (showButton & hideButton) {
//         showButton.addEventListener('click', function () {
//             hiddenBlock.style.display = 'block';
//         });

//         hideButton.addEventListener('click', function () {
//             hiddenBlock.style.display = 'none';
//         });
//     }
// });

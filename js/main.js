const btn = document.querySelector('.nav__btn');
const btnDrop = document.querySelector('.nav-btn-content')
const closeButtonDrop = document.querySelector('.close-svg');
const favorite = document.querySelectorAll('.product-card-svg');
const articleBtn = document.querySelector('.catalog-article-btn');
const article = document.querySelector('.catalog-article');



const accord = document.getElementsByClassName('contentBx');

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function () {
        this.classList.toggle('actives');
    })
}

favorite.forEach(favoriteClick => {
    favoriteClick.addEventListener('click', () => {
        favoriteClick.classList.toggle('--active-favorit');
    });
});

btn.addEventListener('click', () => {
    btnDrop.classList.add("--show");
    closeButtonDrop.addEventListener('click', () => {
        btnDrop.classList.remove('--show')
    });
});

articleBtn.addEventListener('click', () => {
    article.classList.toggle('--show-article');
});

function selectCurrency(currency) {
    document.getElementById("selectedCurrency").textContent = currency;
}



// ДОБАВЛЕНИЕ ТОВАРОВ В КОРЗИНУ
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartCounter = document.getElementById("cart-counter");
    let itemCount = 0;

    // Add event listener for remove button
    const removeFromCart = function () {
        itemCount = Math.max(0, itemCount - 1); // Не даем счетчику уйти в отрицательные значения
        cartCounter.textContent = itemCount;
    };

    const addToCart = function () {
        itemCount++;
        cartCounter.textContent = itemCount;

    };

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            addToCart();

            const productCard = button.closest(".product-card");
            const productId = productCard.dataset.productId;
            const productName = productCard.querySelector("h2").innerText;
            const productPrice = productCard.querySelector('p').innerHTML;
            const productImage = productCard.querySelector(".product-card-img").src;

            // Check if the item is already in the cart
            const existingCartItem = document.querySelector(`li[data-product-id="${productId}"]`);

            if (existingCartItem) {
                // Increment quantity if already in the cart
                const quantityElement = existingCartItem.querySelector(".quantity");
                quantityElement.innerText = parseInt(quantityElement.innerText) + 1;

            } else {
                // Add new item to the cart
                const cartItem = document.createElement("li");
                cartItem.dataset.productId = productId;
                cartItem.innerHTML = `<div class="groups"> <img src="${productImage}" class="img-add"> ${productName}</div> - <span class="quantity">1</span> ${productPrice}   <button class="decrease">-</button> <button class="remove"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <g clip-path="url(#clip0_267_438)">
                  <path d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z" fill="#E0BEA2"/>
                </g>
                <defs>
                  <clipPath id="clip0_267_438">
                    <rect width="25" height="25" fill="white"/>
                  </clipPath>
                </defs>
              </svg></button>  `;
                cartItemsList.appendChild(cartItem);

                // Add event listener for decrease button
                const decreaseButton = cartItem.querySelector(".decrease");
                decreaseButton.addEventListener("click", function () {
                    const quantityElement = cartItem.querySelector(".quantity");
                    const quantity = parseInt(quantityElement.innerText);

                    if (quantity > 1) {
                        quantityElement.innerText = quantity - 1;
                    } else {
                        // Remove item from the cart if quantity is 1
                        cartItemsList.removeChild(cartItem);
                    }
                });
                // Добавляем обработчики для удаления из корзины
                const removeButtons = document.querySelectorAll(".remove");
                removeButtons.forEach(button => {
                    button.addEventListener("click", function () {
                        removeFromCart(); // Уменьшаем счетчик при удалении из корзины

                        const cartItem = button.closest("li");
                        cartItemsList.removeChild(cartItem);
                    });
                });
            }
        });
    });


    const cartIcon = document.getElementById("cart-icon");
    const modal = document.getElementById("cart-modal");
    const closeModalButton = document.getElementById("close-modal");
    const cart = document.querySelector('.cart');

    cartIcon.addEventListener("click", function () {
        modal.style.display = "flex";


    });

    closeModalButton.addEventListener("click", function () {
        if (modal.style.display == "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    });
});


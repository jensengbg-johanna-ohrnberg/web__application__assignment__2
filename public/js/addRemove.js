if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
        var removeCartItemButtons = document.getElementsByClassName('remove__btn');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('btn')
    for (var i = 0; i < addToCartButtons.length; i++){
       var button = addToCartButtons[i]
       button.addEventListener('click', addToCartClicked) 
    }

    document.getElementsByClassName('purchaseBtn')[0].addEventListener('click', purchaseClicked)

    function purchaseClicked() {
        alert('Tack för köpet!')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }

function removeCartItem(event) {
    var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove();
            updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.ParentElement.parentElement
    var title = shopItem.getElementsByClassName('name')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, image) {
    var cartRow = document.createElement('div')
    CartRow.classlist.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i] == title) {
            alert('Den här produkten är redan tillagd.')
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item">
    <img class="img__cart" src="${imageSrc}">
    <span class="cart-name">${title}</span>
</div>
<span class="cart-price">${price}</span>
<input class="cart-quantity-input" type="number" value="1">
<button class="remove__btn" type="button">Ta bort</button>
</div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove__btn')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('container-cart')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var CartRow = cartRows[i]
        var priceElement = CartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = CartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value
        total = total (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}
}
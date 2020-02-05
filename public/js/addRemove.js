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
}

function addItemToCart(title, price, image) {
    var cartRow = document.createElement('div')
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
var addToCartButtons = document.getElementsByClassName('add-to-cart')
console.log(addToCartButtons)
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', function() {
        console.log('clicked')
    })
}


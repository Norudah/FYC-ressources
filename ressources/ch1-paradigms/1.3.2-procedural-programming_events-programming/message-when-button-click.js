function eventHandler(event) {
    console.log( 'Button has been clicked!')
}
const button = document.getElementById('button')
button.addEventListener( 'click', eventHandler)

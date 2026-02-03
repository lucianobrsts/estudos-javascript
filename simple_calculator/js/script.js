
function outcome() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let total = 0

    if(document.getElementById('radioAdd').checked) {
        total = num1 + num2
    } else if(document.getElementById('radioMinus').checked) {
        total = num1 - num2
    } else if(document.getElementById('radioMultiply').checked) {
        total = num1 * num2
    } else {
        total = num1 / num2
    }

    document.getElementById('total').innerHTML = String(total)
}
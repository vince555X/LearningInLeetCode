const xInput = document.querySelector('.x-input');
const yInput = document.querySelector('.y-input');
const operation = document.querySelector('.operation');
const displayAns = document.querySelector('.ans-lbl');
const equals = document.querySelector('.calc-btn');


equals.addEventListener('click', () => {
    const x = Number(xInput.value);
    const y = Number(yInput.value);

    if (isNaN(x) || isNaN(y)) {
        alert("Please input number only");
        return;
    }

    const op = operation.value;
    const pattern = /[\/\*\-\+]/;

    if (pattern.test(op)) {
        if (op === "/" && y === 0) {
            alert("Cannot divide by zero").toUpperCase();
            return;
        }

        displayAns.textContent = Calculate(x, y, op);

    } else {
        alert("Operation must be [/, *, -, +]");
        return;
    }

});

function Calculate(x, y, op) {
    let result = 0;

    switch (op) {
        case "/":
            result = x / y;
            break;
        case "*":
            result = x * y;
            break;
        case "-":
            result = x - y;
            break;
        case "+":
            result = x + y;
            break;
        default:
            return 0;
    }

    return result;
}
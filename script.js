const container = document.querySelector('.BasePlate');
const display = document.getElementById('display');

let num1;
let num2;
let operator;

const ButtonLabel = [
    "C", "%", "Del", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=", "M"
];

ButtonLabel.forEach(label => {
    const button = document.createElement('button');
    button.textContent = label;
    button.className = 'button';
    container.appendChild(button);
});

const buttons = document.querySelectorAll('.button');
const buttonArray = Array.from(buttons);
// let color;

if (buttons)
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            switch (button.textContent) {
                case "C": display.value = "";
                    num1 = null;
                    num2 = null;
                    operator = null;
                    break;

                case "Del": display.value = display.value.slice(0, -1);
                    break;

                case "%":
                case "*":
                case "/":
                case "-":
                case "+":
                    num1 = parseFloat(display.value);
                    display.value = "";
                    operator = button.textContent;
                    // display.value = operator;
                    break;


                case "=": num2 = parseFloat(display.value);
                    if (operator in operations) {
                        display.value = operations[operator](num1, num2);
                    }
                    break;

                case "M":
                    break;

                default: if (!isNaN(button.textContent) || button.textContent === "." && !display.value.includes(".")) {
                    display.value += button.textContent;
                }


            }
        });

    })


const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b
}

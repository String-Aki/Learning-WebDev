const container = document.querySelector('.BasePlate');
const display = document.getElementById('display');
const bg = document.querySelectorAll('.bg');
const body = document.body;

let num1;
let num2;
let operator;
let color;

const ButtonLabel = [
    "C", "%", "Del", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=", ""
];

ButtonLabel.forEach(label => {
    const button = document.createElement('button');

    button.style.color = color;
    button.textContent = label;
    if (label === "") {
        button.className = 'mode button fa-solid fa-sun fa-xl';
    }
    else {
        button.className = 'button';
    }
    container.appendChild(button);
});

const buttons = document.querySelectorAll('.button');
const buttonArray = Array.from(buttons);


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

                case "":
                    if (!toggle) {
                        DarkMode();
                        toggle = true;
                    }
                    else {
                        LightMode();
                        toggle = false;
                    }
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
let toggle;

function DarkMode() {
    buttonArray[19].classList.remove("fa-sun");
    buttonArray[19].classList.add("fa-moon");
    body.style.backgroundColor = "rgb(68,68,68)";
    Color("white");
    HideShow("show");

}

function LightMode() {
    buttonArray[19].classList.remove("fa-moon");
    buttonArray[19].classList.add("fa-sun");
    body.style.backgroundColor = "rgb(242,242,242)";
    Color("black");
    HideShow("hide");
    
}

const Color = (color) =>{
    buttonArray.forEach(button => {
        button.style.color = color;
    })
    display.style.color = color;
}

const HideShow = (arg) =>{
    bg.forEach(Bg =>{
        if (arg === "hide"){
            Bg.classList.remove("show");
            Bg.classList.add("hide");
        }
        else if (arg === "show"){ 
            Bg.classList.remove("hide");
            Bg.classList.add("show");
        }

    })
}

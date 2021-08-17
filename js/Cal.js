
const textArea = document.getElementById('textArea');
let c = 0;
let value1 = '';
let value2 = '';
let x = true;
let operator = '';
// let valueOne = 0;
// let valueTwo = 0;

//Making the textfield zero in default
document.getElementById('c').addEventListener('click', function () {
    const textArea = document.getElementById('textArea');
    textArea.value = '';
});

// Arithmatic operation
function operation() {
    // debugger;
    if (operator == '+') {
        textArea.value = (parseFloat(value1) + parseFloat(value2));
    }

    else if (operator == '-') {
        textArea.value = (parseFloat(value1) - parseFloat(value2));
    }

    else if (operator == '*') {
        textArea.value = (parseFloat(value1) * parseFloat(value2));
    }

    else if (operator == '/') {
        textArea.value = (parseFloat(value1) / parseFloat(value2));
    }
    value1 = '';
    value2 = '';
    x = true;
    operator = '';
}

// For result
document.getElementById('=').addEventListener('click', function () {
    // const result = operation();
    // textArea.value = result;
    operation();

});

// For show the value on display from zero to Nine
{
    const numbers = document.getElementsByClassName('number');
    //     for (const number of numbers) {
    //         number.addEventListener('click', function () {
    //             textArea.value += number.innerHTML;
    //             value1 += number.innerHTML;
    //         })
    //     }
    // }
    for (const number of numbers) {
        number.addEventListener('click', function (event) {
            textArea.value += event.target.innerText;
            if (x == true) {
                value1 += event.target.innerText;
            }
            else {
                value2 += event.target.innerText;
            }

        })
    }
}


// operation handle and show sign on display
const signs = document.getElementsByClassName('eqn');
for (const sign of signs) {
    sign.addEventListener('click', function (event) {
        x = false;
        // valueOne = parseInt(value1);
        // console.log(valueOne);
        // valueTwo = parseInt(value2);
        // console.log(valueTwo);

        textArea.value += event.target.innerText;
        //value1 += event.target.innerText;
        operator += event.target.innerText;



    })
}







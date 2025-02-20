//Expect first number
//Listen for an operation
//Expect second number
//After pressing the equal button the operation shall be executed.

//There needs to be a function that listens for number input until the user presses a button other than "number", this would mark the selection of the operation type and the start of the second number. The button would mark where this number ends and would begin the function that performs the operation.

var displayedValue = (document.getElementById("containerDisplay"));
var buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach(button =>{
    button.addEventListener("click", (e) => {
        if ((e.target.classList).contains('number')){
            let userInput = e.target.innerText;
            displayedValue.innerText += userInput;
        }
        else if((e.target.classList).contains('operator')){
            (e.target.id == "C") ? displayedValue.innerText = 0 
            // (e.target.id == "+/-") ? asas :
        }
    })
});

// const buttonChoice = document.querySelectorAll(".button").innerText;



// let a = ;
// let b = ;
// let operationChoice = ;


function add(a,b){
    return a + b; 
}

function subtract(a,b){
    return a - b; 
}

function multiply(a,b){
    return a * b; 
}

function divide(a,b){
    return a / b; 
}


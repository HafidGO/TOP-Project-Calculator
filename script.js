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
            console.log(`Event id: ${e.target.id}`);
            (e.target.id == "clearButton") ? clearDisplay():
            (e.target.id == "plusMinusButton") ? plusMinus():
            (e.target.id == "percentageButton") ? percentage():
            (e.target.id == "divisionButton") ? divide():
            (e.target.id == "multiplicationButton") ? multiply():
            (e.target.id == "subtractionButton") ? subtract():
            (e.target.id == "additionButton") ? add():
            clearDisplay();

        }
    })
});


function clearDisplay(){
    displayedValue.innerText = "";
};

function plusMinus(){
    displayedValue.innerText = result;
};

function percentage(){

};


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





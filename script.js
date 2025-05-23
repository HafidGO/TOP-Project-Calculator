const display = (document.getElementById("display"));
var buttons = Array.from(document.getElementsByTagName("button"));

function clearDisplay(){
    display.value = "";
};

function appendToDisplay(input){
    display.value += input;
};

function plusMinusButton(){
        display.value = -(display.value);
};

function calculate(){
    display.value = math.evaluate(display.value);
};

function backSpace(){
    display.value = display.value.slice(0,-1);
};

buttons.forEach(button =>{
    button.addEventListener("click", (e) => {
            if(e.target.textContent == "C"){
                clearDisplay();
            }
            else if(e.target.textContent == "+/-"){
                plusMinusButton();

            }
            else if(e.target.textContent == "del"){
                backSpace();            
            }
            else if(e.target.textContent == "="){
                calculate();
            }
            else{
                appendToDisplay(e.target.textContent);
            }
})});
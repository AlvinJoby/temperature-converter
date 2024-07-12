let userInput = document.getElementById("mainDivInput");
let temperatureunit = document.getElementById("temperatureunit");
let selectortemperatureunit = document.getElementById("selectortemperatureunit");
let result = document.getElementById("result");
let reminder = document.getElementById("reminderResult");
let answer;
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        codeExecution();
    }
});

temperatureunit.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        codeExecution();
    }
});
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
selectortemperatureunit.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        codeExecution();
    }
});

function codeExecution() {
    let userInputValue = parseFloat(userInput.value);
    let temperatureunitvalue = temperatureunit.options[temperatureunit.selectedIndex].value;
    let selectortemperatureunitValue = selectortemperatureunit.options[selectortemperatureunit.selectedIndex].value;

    if(isNaN(userInputValue)){
        reminder.textContent = "please enter a valid number";
        result.style.display = "none";
        result.textContent = answer.toFixed(2);
        return;
    }
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
    if(temperatureunitvalue=="celsius"&&selectortemperatureunitValue=="fahrenheit"){
        answer = (userInputValue * 9/5) + 32;
        reminder.style.display = "none";
        result.style.display = "block";
        result.textContent = answer.toFixed(2);
    }else if(temperatureunitvalue=="celsius"&&selectortemperatureunitValue=="kelvin"){
        answer = userInputValue + 273.15;
        reminder.style.display = "none";
        result.style.display = "block";
        result.textContent = answer.toFixed(2);
    }else if(temperatureunitvalue=="fahrenheit"&&selectortemperatureunitValue=="celsius"){
        answer = (userInputValue - 32) * 5/9;
        reminder.style.display = "none";
        result.style.display = "block";
        result.textContent = answer.toFixed(2);
    }else if(temperatureunitvalue=="fahrenheit"&&selectortemperatureunitValue=="kelvin"){
        answer = (userInputValue - 32) * 5/9 + 273.15;
        reminder.style.display = "none";
        result.style.display = "block";
        result.textContent = answer.toFixed(2);
    }else if(temperatureunitvalue=="kelvin"&&selectortemperatureunitValue=="celsius"){
        answer = userInputValue - 273.15;
        reminder.style.display = "none";
        result.style.display = "block";
        result.textContent = answer.toFixed(2);
    }else if(temperatureunitvalue=="kelvin"&&selectortemperatureunitValue=="fahrenheit"){
        answer = (userInputValue - 273.15) * 9/5 + 32;
        reminder.style.display = "none";
        result.style.display = "block";
        result.textContent = answer.toFixed(2);
    }else if (temperatureunitvalue==selectortemperatureunitValue){
        answer = userInputValue;
        reminder.style.display = "none";
        result.style.display = "block";
        result.textContent = answer.toFixed(2);
    }

  /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/  

}
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
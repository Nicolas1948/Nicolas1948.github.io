var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "IMC-ul tau este prea mic (subponderal)";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "IMC-ul tău se încadrează în intervalul de greutate normală";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "IMC-ul tau este prea mare (supraponderal)";
    }else{
        statement.innerText = "IMC-ul tău se încadrează în intervalul de obezitate";
    }
});
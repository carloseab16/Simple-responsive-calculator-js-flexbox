let result = document.querySelector('.result');
let number;
let numbers = [];
let numbersSuma =[];

let cuenta1;
let resultado;
let memory ;
console.log(cuenta1);

document.querySelector('.contenedor').addEventListener('click', function(event) {
    numbers.push(event.target.innerText);
    cuenta1 = numbers.join("");
/* || event.target.innerText === "-" || event.target.innerText === "x"  || event.target.innerText === "÷" */
    if(event.target.innerText === "="  && numbersSuma.length===0 ){
        result.innerHTML = "0";
        numbers = [];
        cuenta1 = 0;
    }else {
        result.innerHTML =   cuenta1;
        if(numbersSuma.length!==0 ){
            result.innerHTML = numbersSuma[0] + numbersSuma[1]+  cuenta1;
        if(event.target.innerText === "="){
            console.log(numbers[0]);
            console.log(cuenta1);
            if(numbers[0] == "="){
                console.log("entra 2")
                result.innerHTML = "0";
            }
            numbersSuma.push(cuenta1.slice(0, -1));
            resultado =  eval(numbersSuma[0] + numbersSuma[1] + numbersSuma[2]);
            result.innerHTML = resultado;
            numbersSuma = [];
            numbers = [];
            cuenta1 = 0;
            flag = true;
        }
        }
    }


    if(event.target.innerText === "C"){
        result.innerHTML = "0";
        numbersSuma = [];
        numbers = [];
        cuenta1 = 0;
    }else if(event.target.innerText === "+"){  
        numbersSuma.push(cuenta1.slice(0, -1));
        numbersSuma.push("+");
        numbers = [];
        cuenta1 = 0;
    }else if(event.target.innerText === "÷"){
        numbersSuma.push(cuenta1.slice(0, -1));
        numbersSuma.push("/");
        numbers = [];
        cuenta1 = 0;
    }else if(event.target.innerText === "x"){
        numbersSuma.push(cuenta1.slice(0, -1));
        numbersSuma.push("*");
        numbers = [];
        cuenta1 = 0;
    }else if(event.target.innerText === "-"){
        numbersSuma.push(cuenta1.slice(0, -1));
        numbersSuma.push("-");
        numbers = [];
        cuenta1 = 0;
    }else if(event.target.innerText === "<-"){
        result.innerHTML = "0";
    }

   


    
});


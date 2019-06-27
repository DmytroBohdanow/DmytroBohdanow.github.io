//create one empty array and variables, that will help us define, what button was pushed
let calculating =[];
let numbers = document.getElementsByClassName('number');
let symbols = document.getElementsByClassName('symbol');
//function Add is responsible for adding numbers and symbols in the end of the empty array 
function Add() {
        calculating.push(this.value);
}
//function Show, actually, shows us, which calculation we are doing now
function Show() {
    document.getElementById("calculating").innerHTML = calculating.join('');
}

function Calc() {
final_calculating = calculating.join("");
document.getElementById('result').innerHTML = eval(final_calculating);
}

//function Clear starts a new calculation, making array empty again
function Clear() {
    calculating = [];
    document.getElementById("calculating").innerHTML = '';
    document.getElementById("result").innerHTML = '';
}
//function Backspace deletes the last element of an array
function Backspace() {
    calculating.pop();
}
//here we make the EventListeners, that will call the functions, when the buttons were clicked
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',Add, false);
    numbers[i].addEventListener('click',Show, false);
}

for (i = 0; i < symbols.length; i++) {
    symbols[i].addEventListener('click',Add, false);
    symbols[i].addEventListener('click',Show, false);
}
document.getElementById('backspace').addEventListener('click',Backspace,false);
document.getElementById('backspace').addEventListener('click',Show,false);
document.getElementById('calc').addEventListener('click',Calc,false);
document.getElementById('clear').addEventListener('click',Clear,false);
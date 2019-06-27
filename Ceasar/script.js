//create the variables, that will be used later
let text;
let number;
let encoding_to_right_result;
let encoding_to_left_result;
//function Get_Text makes an array from text, taking every symbol as new element, and gives value from textarea and input to variables
function Get_Text() {
    text = document.getElementById("text").value.split("");
    number = document.getElementById("number").value;
    number = Number(number);
}
//function Clean deletes value of textarea and result, makes them empty
function Clean() {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
}
/*function Encoding_To_Left takes every element from text array and decreases by value of number, that was inputed, the Encode value of every symbol, if this symbol is literal. If symbol is not literal, function just leave it without changing.
If number is bigger, than amount of letters to the beggining of the alphabet, function decreses the Encode value of the last letter of the alphabet by the part of the number, that crossing the boarder*/
function Encoding_To_Left() {
    encoding_to_left_result = text.map(char => {
        if ((65 <= char.charCodeAt(0) - number && char.charCodeAt(0) - number <= 90 && char.charCodeAt(0) <= 90) || 
        (97 <= char.charCodeAt(0) - number && char.charCodeAt(0) - number <= 122 && char.charCodeAt(0) <= 122)) {
         return String.fromCharCode(char.charCodeAt(0) - number);
        }
        else if (char.charCodeAt(0) - number < 97 && (char.charCodeAt(0) >=97 && char.charCodeAt(0) <=122)) {
            return String.fromCharCode(122 + ((char.charCodeAt(0) - number) - 96));
        }
        else if (char.charCodeAt(0) - number < 65 && char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            return String.fromCharCode(90 + ((char.charCodeAt(0) - number) - 64));
        }
        else {
            return String.fromCharCode(char.charCodeAt(0));
        }
    });
}
//function Encoding_To_Right has the same task, as Encoding_To_Left, but has an another way in an alphabet. It increases the Encode value by number. If the value is bigger, than the last letter of an alphabet, function increases the first letter by the part of number, that Encode value is bigger, than Encode value of the last letter
function Encoding_To_Right() {
    encoding_to_right_result = text.map(char => {
        if ((65 < char.charCodeAt(0) + number && char.charCodeAt(0) + number <= 90 && char.charCodeAt(0) >= 65) || 
        (97 <= char.charCodeAt(0) + number && char.charCodeAt(0) + number <= 122 && char.charCodeAt(0) >= 97)) {
         return String.fromCharCode(char.charCodeAt(0) + number);
        }
        else if (char.charCodeAt(0) + number > 90 && char.charCodeAt(0) < 90) {
            return String.fromCharCode(65 + ((char.charCodeAt(0) + number) - 91));
        }
        else if (char.charCodeAt(0) + number > 122 && char.charCodeAt(0) >= 97) {
            return String.fromCharCode(97 + ((char.charCodeAt(0) + number) - 123));
        }
        else {
            return String.fromCharCode(char.charCodeAt(0));
        }
    });
}
//function Print_Text calls the function Encoding_To_Left of Encoding_To_Right according to selected option. Inputed number must be less, then 26, because the higher numbers create the second circle in the alphabet, altthough that doesn't make sense
function Print_Text() {
    if( number <= 26) {
        if(document.getElementById('direction_value').value == "left") {
            Encoding_To_Left();
            document.getElementById("result").innerHTML = encoding_to_left_result.join("");
        }
        else if(document.getElementById('direction_value').value == "right") {
            Encoding_To_Right();
            document.getElementById("result").innerHTML = encoding_to_right_result.join("");
        }
    }
    else {
        document.getElementById("result").innerHTML = "ERROR! Max number of letters is 26";
    }
}
//function Copy_Result create range, that selects encoded text and copy that to the clipboard
function Copy_Result() {
    let range = document.createRange();
    let selection = window.getSelection();
    let contentHolder = document.getElementById("result");
        selection.removeAllRanges();
        range.selectNodeContents(contentHolder);
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
}

document.getElementById("clean_button").addEventListener("click", Clean, false);
document.getElementById("encode_button").addEventListener("click", Get_Text, false);
document.getElementById("encode_button").addEventListener("click", Print_Text, false);
document.getElementById("copy_button").addEventListener("click", Copy_Result, false);
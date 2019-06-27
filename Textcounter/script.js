//an empty array, that will contains our text later
let text = [];
//function, that split the string from textarea into the empty array, using space as separator
function Get_Text() {
    text = document.getElementById('textarea').value.split(' ');
}
//function, that makes the div 'result' block visible
function Show_Result() {
    document.getElementById('result').style.display = "block";
}
//function, that cleans the textarea and hides again the div 'result'
function Clean() {
    document.getElementById('textarea').value = '';
    document.getElementById('result').style.display = "none";
}
/*function, that declains two new arrays with words and symbols accordingly, using regular exprassions.We don't need to make an third array with spaces, because the array, that contains the whole text, is separreted with spaces, so we can just count elements of text[] minus 1.
Then function let us know, if that arrays don't empty(you can't get length by null, don't you?), and writes those length in HTML document*/
function Count_All() {
    let all_words = document.getElementById('textarea').value.match(/[^\s]*\w[^\W\s]*/gi);
    let all_symbols = document.getElementById('textarea').value.match(/[^\w\s]*[\.\,\-\:\;\=\+\&\$\@]{1}[^\w\s]*/gi);
    if ((all_words === null) && (all_symbols === null)) {
        document.getElementById("words").innerHTML = 0;
        document.getElementById("spaces").innerHTML = text.length - 1;
        document.getElementById("symbols").innerHTML = 0;
    }
    else if(all_words === null) {
        document.getElementById("words").innerHTML = 0;
        document.getElementById("spaces").innerHTML = text.length - 1;
        document.getElementById("symbols").innerHTML = all_symbols.length; 
    }
    else if((all_symbols === null)) {
    document.getElementById("words").innerHTML = all_words.length;
    document.getElementById("spaces").innerHTML = text.length - 1;
    document.getElementById("symbols").innerHTML = 0;
    }
    else {
        document.getElementById("words").innerHTML = all_words.length;
        document.getElementById("spaces").innerHTML = text.length - 1;
        document.getElementById("symbols").innerHTML = all_symbols.length; 
    }
}
//Eventlistener's zone
document.getElementById('count').addEventListener('click',Get_Text,false);
document.getElementById('clean').addEventListener('click',Clean,false);
document.getElementById('count').addEventListener('click',Count_All,false);
document.getElementById('count').addEventListener('click',Show_Result,false);

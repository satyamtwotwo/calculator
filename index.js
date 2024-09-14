const display = document.getElementById('display');
function appendCharacter(input){
    display.value +=input;
}
function clearDisplay(){
display.value="";
}
function calculate(){
    try {
        display.value= eval(display.value);
    } catch (error) {
        display.value="error"
    }

}
function deleteChar() {
   
    display.value = display.value.slice(0, -1);
}
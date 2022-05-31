let screen = document.getElementById("output");

function
 display(num) {
    screen.value += num;
}
function calculate() {
     try {
        screen.value = eval(screen.value);
     } catch (eror) {
         screen.value = "Invalid Input";
         }
}
function Clear() {
    screen.value = "";
}
function del() {
    screen.value = screen.value.slice(0, -1);
}
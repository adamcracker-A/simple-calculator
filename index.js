const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const add = document.getElementById('addition');
const substract = document.getElementById('substraction');
const div = document.getElementById('division');
const sqrt = document.getElementById('squareroot');
const power = document.getElementById('power');
const mult = document.getElementById('mult');
const comma = document.getElementById('comma');
const result = document.getElementById('result');
const eq = document.getElementById('equal');
const re  = document.getElementById('reset');
const Lbracket = document.getElementById('Lbracket');
const Rbracket = document.getElementById('Rbracket');

btn1.onclick = function(){
    document.getElementById('result').value += "1";
}
btn2.onclick = function(){
    document.getElementById('result').value += "2";
}
btn3.onclick = function(){
    document.getElementById('result').value += "3";
}
btn4.onclick = function(){
    document.getElementById('result').value += "4";
}
btn5.onclick = function(){
    document.getElementById('result').value += "5";
}
btn6.onclick = function(){
    document.getElementById('result').value += "6";
}
btn7.onclick = function(){
    document.getElementById('result').value += "7";
}
btn8.onclick = function(){
    document.getElementById('result').value += "8";
}
btn9.onclick = function(){
    document.getElementById('result').value += "9";
}
btn0.onclick = function(){
    document.getElementById('result').value += "0";
}
add.onclick = function(){
    document.getElementById('result').value += " + ";
}
substract.onclick = function(){
    document.getElementById('result').value += " - ";
}
power.onclick = function(){
    document.getElementById('result').value += " ** ";
}
sqrt.onclick = function(){
    document.getElementById('result').value += "Math.sqrt";
}
mult.onclick = function(){
    document.getElementById('result').value += " * ";
}
div.onclick = function(){
    document.getElementById('result').value += " / ";
}
comma.onclick = function(){
    document.getElementById('result').value += ",";
}
re.onclick = function(){
    document.getElementById('result').value = "";
}
Lbracket.onclick = function(){
    document.getElementById('result').value += "(";
}
Rbracket.onclick = function(){
    document.getElementById('result').value += ")";
}
eq.onclick = function(){
    try {
        let expression = result.value.trim();

        expression = expression.replace("Math.sqrt", "Math.sqrt");

        let resultvalue = eval(expression);

        result.value = resultvalue;
    } catch (error) {
        result.value = "Error"; 
    } 
}

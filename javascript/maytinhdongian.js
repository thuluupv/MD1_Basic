function myfuntion1() {
    let number1 = +document.getElementById('sodautien').value;
    let number2 = +document.getElementById('sothuhai').value;
    let tong = number1 + number2
    document.getElementById("ketqua").innerHTML='result= '+ tong
}
function myfuntion2() {
    let number1 = +document.getElementById('sodautien').value;
    let number2 = +document.getElementById('sothuhai').value;
    let hieu = number1 - number2
    document.getElementById("ketqua").innerHTML='result= '+ hieu
}
function myfuntion3() {
    let number1 = +document.getElementById('sodautien').value;
    let number2 = +document.getElementById('sothuhai').value;
    let tich = number1 * number2;
    document.getElementById("ketqua").innerHTML = 'result= ' + tich;
}
function myfuntion4() {
    let number1 = +document.getElementById('sodautien').value;
    let number2 = +document.getElementById('sothuhai').value;
    let thuong = number1 / number2
    document.getElementById("ketqua").innerHTML = 'result= ' + thuong;

}


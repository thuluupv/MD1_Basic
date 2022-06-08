function myFuntion01(operator){
    let number1 = +document.getElementById('sodautien').value
    let number2 = +document.getElementById('sothuhai').value
    let total;
    let sum = document.getElementById('add').value;
    let sub = document.getElementById('sub').value;
    let mul = document.getElementById('mul').value;
    let div = document.getElementById('div').value;
    if(operator === sum) {
        total = number1 + number2
        document.getElementById('ketqua').innerHTML= total
    }
    else if(operator === sub ){
        total = number1 - number2
        document.getElementById('ketqua').innerHTML= total

    }
    else if(operator === mul) {
        total = number1*number2
        document.getElementById('ketqua').innerHTML= total

    }
    else if(operator === div) {
        total = number1/number2
        document.getElementById('ketqua').innerHTML= total

    }

    // document.getElementById('ketqua').innerHTML= total




}
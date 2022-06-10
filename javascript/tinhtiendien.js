function electricbill() {
    let a = +document.getElementById('sosodien').value
    let b = 0
    if(a<=0) {
        alert('nhập số hợp lệ')
    }else{
        if (a <= 50) {
            b = a * 1600
            document.getElementById('result1').innerHTML = a + ' số điện với giá 1600 Đồng'
            document.getElementById('tongsotiendien').innerHTML = 'tổng số tiền điện = ' + b + ' Đồng'
        } else {
            if (a <= 100) {
                b = 50 * 1600 + (a - 50) * 1700
                document.getElementById('result1').innerHTML = '50 số điện với giá 1600 Đồng'
                document.getElementById('result2').innerHTML = (a - 50) + ' số điện với giá 1700 Đồng'
                document.getElementById('tongsotiendien').innerHTML = 'tổng số tiền điện = ' + b + ' Đồng'
            } else {
                if (a <= 200) {
                    b = 50 * 1600 + 50 * 1700 + (a - 100) * 2000
                    document.getElementById('result1').innerHTML = '50 số điện với giá 1600 Đồng'
                    document.getElementById('result2').innerHTML = '50 số điện với giá 1700 Đồng'
                    document.getElementById('result3').innerHTML = a - 100 + ' số điện với giá 2000 Đồng'
                    document.getElementById('tongsotiendien').innerHTML = 'tổng số tiền điện = ' + b + ' Đồng'
                } else {
                    if (a <= 300) {
                        b = 50 * 1600 + 50 * 1700 + 100 * 2000 + (a-200) * 2500
                        document.getElementById('result1').innerHTML = '50 số điện với giá 1600 Đồng'
                        document.getElementById('result2').innerHTML = '50 số điện với giá 1700 Đồng'
                        document.getElementById('result3').innerHTML = ' 100 số điện với giá 2000 Đồng'
                        document.getElementById('result4').innerHTML = a - 200 + ' số điện với giá 2500 Đồng'
                        document.getElementById('tongsotiendien').innerHTML = 'tổng số tiền điện = ' + b + ' Đồng'
                    } else {
                        if (a <= 400) {
                            b = 50 * 1600 + 50 * 1700 + 100 * 2000 + 100 * 2500 + (a - 300) * 2800
                            document.getElementById('result1').innerHTML = '50 số điện với giá 1600 Đồng'
                            document.getElementById('result2').innerHTML = '50 số điện với giá 1700 Đồng'
                            document.getElementById('result3').innerHTML = ' 100 số điện với giá 2000 Đồng'
                            document.getElementById('result4').innerHTML = '100 số điện với giá 2500 Đồng'
                            document.getElementById('result5').innerHTML = a - 300 + ' số điện với giá 2800 Đồng'
                            document.getElementById('tongsotiendien').innerHTML = 'tổng số tiền điện = ' + b + ' Đồng'
                        } else {
                            b = 50 * 1600 + 50 * 1700 + 100 * 2000 + 100 * 2500 + 100 * 2800 + (a - 400) * 2900
                            document.getElementById('result1').innerHTML = '50 số điện với giá 1600 Đồng'
                            document.getElementById('result2').innerHTML = '50 số điện với giá 1700 Đồng'
                            document.getElementById('result3').innerHTML = ' 100 số điện với giá 2000 Đồng'
                            document.getElementById('result4').innerHTML = '100 số điện với giá 2500 Đồng'
                            document.getElementById('result5').innerHTML = '100 số điện với giá 2800 Đồng'
                            document.getElementById('result6').innerHTML = a - 400 + ' số điện với giá 2900 Đồng'
                            document.getElementById('tongsotiendien').innerHTML = 'tổng số tiền điện = ' + b + ' Đồng'
                        }
                    }
                }
            }
        }
    }

const inputs = document.getElementById('sosodien')
inputs.addEventListener('keydown', otherPrize)
function otherPrize(){
    document.querySelectorAll('.clear_text').innerHTMl = ''
}
}




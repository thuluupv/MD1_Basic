function hamchuyendoi() {
    let sotiennhapvao = +document.getElementById('sotiennhapvao').value;
    let chuyen1 = document.getElementById('chuyen1').value;
    let chuyen2 = document.getElementById('chuyen2').value;
    if (chuyen1 == chuyen2) {
        document.getElementById('ketqua').innerHTML = 'result ' + sotiennhapvao + chuyen1;
    }
    if (chuyen1 == "VND" && chuyen2 == "USD") {
        let d = sotiennhapvao / 23000
        document.getElementById('ketqua').innerHTML = 'result: ' + d + "usd"
    }
    if (chuyen1 == "USD" && chuyen2 == "VND") {
        let e = sotiennhapvao * 23000
        document.getElementById('ketqua').innerHTML = 'result: ' + e + "vnd"

    }
}

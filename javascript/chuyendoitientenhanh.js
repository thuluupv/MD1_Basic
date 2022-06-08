function function01(){
let tiennhapvao= +document.getElementById('input1').value;
    let s1=+document.getElementById('select1').value;
    let s2=+document.getElementById('select2').value;
    let m= (tiennhapvao*s2)/s1
    document.getElementById('result').innerHTML= m;

}
let vatly = +prompt('nhap diem vat ly');
let hoahoc = +prompt('nhập điểm hoá học');
let toan = +prompt('nhập điểm toán');
let tong = 0;
let tb = 0;
tong = vatly + hoahoc + toan;
tb = tong/3;
document.write('tong diem =' +tong);
document.write('<br/>');
document.write('tb diem =' +tb);
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');

let doc = +prompt('nhập độ c');
let dof = (9*doc + 160)/5;
document.write('độ F =' + dof)
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');


let r=+prompt('nhập bán kính hình tròn');
let dientichhinhtron = 3.14*r*r;
let chuvihinhtron = 3.14*r;
document.write('diện tích hình tròn bằng ' + dientichhinhtron);
document.write('<br/>');
document.write('chu vi hình tròn bằng ' + chuvihinhtron)








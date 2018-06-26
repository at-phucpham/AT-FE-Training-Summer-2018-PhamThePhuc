function baiTap1(a,b) {
	if(a != b) {
		return a + b;
	}
	else return (a + b) * 3;
}
console.log(baiTap1(5,5));
function baiTap2(a) {
	if(a > 19) {
		return (a - 19) *3;
	}
	else return 19 - a;
}
console.log(baiTap2(22));
function baiTap3(a) {
	var tong = 0;
	var ketQua = [];
	for(var i=0;i<a.length;i++) {
		if(a[i] == '*') continue;
		else {
			tong += (+ a[i]);
		}
	}
	tong = tong % 3;
	for(var j = tong; j < 10 ; j = j + 3) {
		var b = a.replace('*',j);
		ketQua.push(b);
	}
	return ketQua;
}
console.log(baiTap3('123456789*'));
function baiTap4(a) {
	var ketQua = [];
	var chiaHetCho3 = baiTap3(a);
	for(var i = 0;i<chiaHetCho3.length;i++) {
		if(+chiaHetCho3[i][chiaHetCho3[i].length - 1] % 2 == 0) {
			ketQua.push("" + chiaHetCho3[i]);
		}
	}
	return ketQua;
}
console.log(baiTap4('123456789*'));
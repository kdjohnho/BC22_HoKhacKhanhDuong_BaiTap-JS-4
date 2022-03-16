// BÀI 1

/*

* ĐẦU VÀO:  
   - 3 số nguyên num1, num2, num3          
* XỬ LÝ:  
   - B1: Tạo biến num1, num2, num3
   - B2: Cho người dùng nhập và gán giá trị nguyên vào 3 số
   - B3: So sánh từng cặp số, hoán đổi giá trị từng cặp số
    theo quy luật num1 giữ số bé nhất, num3 giữ số lớn nhất
   - B4: In ra thứ tự tăng dần num1, num2, num3
* ĐẦU RA: 3 số đã được sắp xếp theo thứ tự tăng dần num1, num2, num3

*/

var num1 = 10;
var num2 = 4;
var num3 = 6;

if (num2 > num3) {
	var temp = num2;
	num2 = num3;
	num3 = temp;
}

if (num1 > num3) {
	var temp = num1;
	num1 = num3;
	num3 = temp;
}

if (num1 > num2) {
	var temp = num1;
	num1 = num2;
	num2 = temp;
}

console.log(num1, num2, num3);

// BÀI 2

/*
* ĐẦU VÀO: Ai su dung may?
* XỬ LÝ:
   - B1: Tao biến user
   - B2: Cho người dùng nhập tên người sử dụng máy và gán giá trị vào biên user
   - B3: So sánh câu trả lời với từng điều kiện và đưa ra lời chào phù hợp
* ĐẦU RA: Câu trả lời cho từng user
*/

var user = "M";

if (user === "B") {
	console.log("Chao Bo");
} else if (user === "M") {
	console.log("Chao Me");
} else if (user === "A") {
	console.log("Chao Anh trai");
} else if (user === "E") {
	console.log("Chao Em gai");
}

// BÀI 3

/*
* ĐẦU VÀO: 3 số nguyên num1, num2, num3
* XỬ LÝ:
   - B1: Tao biến số nguyên num1, num2, num3 và gán giá trị
   - B2: Tạo biến đếm số chẵn evenCounter và số lẻ oddCounter
   - B3: Kiểm tra từng số nguyên có chia hết cho 2 không (số chẵn) 
   và tăng giá trị cho biến đếm thích hợp
* ĐẦU RA: Giá trị 2 biến đếm số chẵn và số lẻ
*/

var oddCounter = 0;
var evenCounter = 0;

var num1 = 9;
var num2 = 6;
var num3 = 7;

if (num1 % 2 != 0) {
	oddCounter += 1;
} else {
	evenCounter += 1;
}

if (num2 % 2 != 0) {
	oddCounter += 1;
} else {
	evenCounter += 1;
}

if (num3 % 2 != 0) {
	oddCounter += 1;
} else {
	evenCounter += 1;
}

var result = "Co " + evenCounter + " so chan";
result += " va " + oddCounter + " so le";

console.log(result);

// BÀI 4

/*
* ĐẦU VÀO: 3 cạnh tam giác a, b, c
* XỬ LÝ:
   - B1: Tao biến a, b, c và gán giá trị
   - B2: Tạo biến result
   - B3: Kiểm tra 3 cạnh đã cho có hợp lệ để tạo thành tam giác không
   - B4: Nếu B3 hợp lệ thì kiểm tra điều kiện cho từng loại tam giác 
   và gán câu trả lời vào biến result
* ĐẦU RA: Tên tam giác tương ứng
*/

var a = 3;
var b = 4;
var c = 6;
var result = "";

if (a <= 0 || b <= 0 || c <= 0) {
	result = "Khong phai tam giac";
} else if (a >= b + c || b >= c + a || c >= a + b) {
	result = "Khong phai tam giac";
} else if (a == b && b == c) {
	result = "Tam giac can";
} else if (a == b || b == c || c == a) {
	result = "Tam giac deu";
}
// Còn 2 trường hợp ứng với a hoặc b là cạnh huyền nữa :))
else if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
	result = "Tam giac vuong";
} else {
	result = "Tam giac vo huong";
}

console.log(result);

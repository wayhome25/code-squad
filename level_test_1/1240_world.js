// 문제 1-1 : 10진수 > 1240 숫자
function to1240(num){
	var result = "";
	var arr = ["0", "1", "2", "4"];
	var hex = num.toString(4);

	for (var index in hex){
		result += arr[hex[index]];
	}

	return result;
}

// 문제 1-1 정답확인
to1240(10); // "22"
to1240(7); // "14"
to1240(4); // "10"
to1240(71); // "1014"
to1240(124); // "1440"



////////////////////////////////////////////////////////////////////////


// 문제 1-2 : 1240 숫자 > 10진수
function toDec(str){
	var result = "";
	var arr = ["0", "1", "2", "4"];

	for(var i in str){
		var index = str[i];
		result += String(arr.indexOf(index));
	}

	return parseInt(result,4);
}

// 문제 1-2 정답확인
toDec("22"); // 10
toDec("14"); // 7
toDec("10"); // 4
toDec("1014"); // 71
toDec("1440"); // 124

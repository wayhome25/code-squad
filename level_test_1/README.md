> 작성자 : 이현주 (<siwabada@gmail.com>)

# 문제1 : 1240 나라

## 문제풀이 과정 및 코드(JavaScript)
#### [파일경로](https://github.com/wayhome25/code-squad/blob/master/level_test_1/1240_world.js)
#### 실행환경
- 브라우저 개발자도구 콘솔에 [파일경로](https://github.com/wayhome25/code-squad/blob/master/level_test_1/1240_world.js)의 코드 혹은 아래의 코드를 복사, 붙여넣기 하여 실행

#### 문제 1-1 풀이과정 : 10진수 > 1240 숫자

- "0", "1", "2", "4" 아이템을 갖는 배열 arr를 선언
- 매개변수 num을 4진수로 변환하여 변수 hex에 할당
- hex의 각 자리수를 배열 arr의 index 값으로 받아서 배열 내부의 해당 문자열을 추출
- 추출한 문자열을 순서대로 합친 후 변수 result에 담아 리턴
- **코드**

```javascript
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

to1240(10);

```
- **실행결과**

```javascript

// 문제 1-1 정답확인
to1240(10); // "22"
to1240(7); // "14"
to1240(4); // "10"
to1240(71); // "1014"
to1240(124); // "1440"

```

#### 문제 1-2 풀이과정: 1240숫자 > 10진수
- "0", "1", "2", "4" 아이템을 갖는 배열 arr를 선언
- 매개변수 str의 각 자리수 데이터를 index 변수에 할당
- 배열 arr에서 각 index변수의 데이터와 일치하는 값을 검색하여 해당 값의 index를 추출한 후 문자열로 변환  
- 추출한 index 문자열을 순서대로 합친 후 parseInt를 사용하여 10진수로 변환하여 리턴
- **코드**

```javascript

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

toDec("22");

```
- **실행결과**

```javascript

// 문제 1-2 정답확인
toDec("22"); // 10
toDec("14"); // 7
toDec("10"); // 4
toDec("1014"); // 71
toDec("1440"); // 124

```

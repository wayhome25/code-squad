> 작성자 : 이현주 (<siwabada@gmail.com>)

# 문제 2 : [맵 문자열을 변환하고 출력하는 프로그램](https://github.com/wayhome25/code-squad/blob/master/level_test_2/data_converting.js)

## 문제풀이 과정 및 코드(JavaScript)

- [파일경로](https://github.com/wayhome25/code-squad/blob/master/level_test_2/data_converting.js)
- **문제 2-1 풀이과정 : 문자열을 읽어 json으로 저장하는 함수**


```javascript

// 문제 2-1 : 문자열을 읽어 json으로 저장하는 함수
var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"

function parseData(map_string){
  var pattern = /,|\n/g; // ',', '\n'을 모두 찾는 정규표현식을 생성하여 pattern 변수에 저장
  map_string = map_string.split(pattern, 7); // map_string 문자열을 정규표현식에 따라 분할하여 배열로 리턴, 배열에 담는 요소는 7개로 제한
  var obj = {}; // 빈 오브젝트 obj를 생성
  obj["width"] = map_string[0]/1; // obj의 width, height 속성에 map_string 첫번째 두번째 요소를 각각 숫자로 변환하여 값으로 할당
  obj["height"] = map_string[1]/1;
  obj["data"] = ""; // obj의 data 속성에 빈 문자열 할당
  for(var i = 2; i < map_string.length; i++){
    obj["data"] += map_string[i]+','// map_string의 나머지 요소를 obj의 data 속성에 할당, 요소는 각각 ',' 로 구분
  }
  map_string = JSON.stringify(obj); // obj를 JSON 문자열로 변환하여 리턴
  return map_string;
}

// 문제 2-1 정답 확인
console.log(parseData(map));
```

- **문제 2-2 풀이과정 : 1의 json을 2차원 배열로 변환하고 해달 배열을 화면에 출력하는 함수를 작성하세요.. 단 - 는 공백으로 바꾸어 출력합니다.**

```javascript

// 문제 2-2 : 1의 json을 2차원 배열로 변환하고 해달 배열을 화면에 출력하는 함수를 작성하세요.
// 단 - 는 공백으로 바꾸어 출력합니다.
var map_data="10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
var json = parseData(map_data) // parseData 함수는 문제 2-1 에서 정의


function drawMap(json_string){
  json_string = JSON.parse(json_string) // 매개변수 json_string을 JSON으로 파싱
  var arr = []; // 빈 배열 arr를 생성
  for(var key in json_string){
	arr.push([key, json_string[key]]) // json_string 객체의 각각의 key, value로 구성된 2차원 배열 arr 생성
  }
  json_string = arr[2][1] // 배열 arr 내의 일부 데이터를 추출하여 json_string 변수에 저장
  var pattern_first = /,/g; // 정규표현식 정의
  var pattern_second = /-/g;
  json_string = json_string.replace(pattern_first,'\n')
  json_string = json_string.replace(pattern_second,' ')
  // json_string 문자열에서 ',', '-' 문자를 검색하여 각각 '\ㅜn',' '으로 치환하여 리턴  

  return json_string
}


// 문제 2-2 정답 확인
console.log(drawMap(json));

```

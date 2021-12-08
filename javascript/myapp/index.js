const arr = [1, 2, 3];

// arr.forEach(console.log)

//alert("a")  //브라우저서만 동작하는 클라이언트 사이트 Web API

// console.log(score);
// score = 80;
// var score;
// console.log(score);

// var score = 80;  // 변수 선언
// score = 90; //  재할당

// const  // 재할당 불가

let t = 80;
t = 90;
console.log(t);

const name = "관석";
console.log(`my name is ${name}`);
console.log("my name is " + name);

// 변수에 할당
const foo = function () {
  console.log("foobar");
};
// 변수를 사용해 호출
foo();

// 인자로 전달
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// `sayHello`를 `greeting` 함수에 인자로 전달
greeting(sayHello, " JavaScript!");

// 함수를 반환
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}

// 레이블
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
      console.log(`inner [${i}, ${j}]`);
  }
}



console.log('10' + 2)
console.log('10' * 5)


if(!false)  console.log(false)
if(!undefined) console.log(false)
if(!null) console.log(false)



var person = {
  firstName: 'Lee',
  'first-test': 'test'
};


console.log('===1>' + person.firstName);
console.log('===2>' + person["first-test"]);
console.log('===3> ' + person.test);


var score = 80;
var copy = score;

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);




console.log(add(1,2));


function add (a, b) {
  return a+b
}
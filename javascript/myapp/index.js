const arr = [1,2,3];

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


const name = '관석';
console.log(`my name is ${name}`);
console.log('my name is ' + name);

// 변수에 할당
const foo = function() {
   console.log("foobar");
}
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
   return function() {
      console.log("Hello!");
   }
}
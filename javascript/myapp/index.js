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

console.log("10" + 2);
console.log("10" * 5);

if (!false) console.log(false);
if (!undefined) console.log(false);
if (!null) console.log(false);

var person = {
  firstName: "Lee",
  "first-test": "test",
};

console.log("===1>" + person.firstName);
console.log("===2>" + person["first-test"]);
console.log("===3> " + person.test);

var score = 80;
var copy = score;

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);

// console.log(add(1,2));

function add(a, b) {
  return a + b;
}

console.log("=======================");

let x = 1;

if (true) {
  let x = 10;
}

// console.log(x)

// console.log(foo);

// let foo;

// console.log(foo);
// foo = 1;

// console.log(foo);

const person1 = {
  firstName: "Lee",
  lastName: "um",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(Object.isExtensible(person1));

Object.preventExtensions(person1);

console.log(Object.isExtensible(person1));

person1.fullName = "Test Study";
// person1.firstName = 'wewwww';
console.log(person1);

// person1.age = 32;
//console.log(Object.getOwnPropertyDescriptors(person1));

const person2 = new Object(); // Object 생성자

person2.name = "Kim";
person2.sayBye = function () {
  console.log("=======> " + this.name);
};

console.log(person2);
person2.sayBye();

function foo1() {
  console.log(this);
}

foo1();

const obj1 = { foo1 };

obj1.foo1();

const inst = new foo1(); // 생성자 함수


// new.target
function Circle1(params) {
  if (!new.target) {
    return new Circle1(params);
  }
  this.params = params;
  this.getDiameter = function () {
    return 2 * this.params;
  };
}

const circle1 = Circle1(5);
console.log(circle1.getDiameter());


// 소코프 세이프 생성자 패턴
function Circle(params) {
  if (!(this instanceof Circle)) {
    return new Circle(params);
  }

  this.params = params;
  this.getDiameter = function () {
    return 2 * this.params;
  };
}

const circle = Circle(5);
console.log(circle.getDiameter());




const person3 = {
  name : 'Lee',
  address : {city: 'Seoul'}
};

// Object.freeze(person3);
// Object.preventExtensions(person3);
Object.seal(person3);

//console.log(Object.isFrozen(person3));
//console.log(Object.isExtensible(person3));
console.log(Object.isSealed(person3));

//console.log(Object.isFrozen(person3.address));
// console.log(Object.isExtensible(person3.address));
console.log(Object.isSealed(person3.address));



function deep(target) {
  if(target && typeof target === 'object' && !Object.isFrozen(target)){
    Object.freeze(target);
    Object.keys(target).forEach(key => deep(target[key]));
  } else if(target && typeof target === 'object' && !Object.isSealed(target)){
    Object.seal(target);
    Object.keys(target).forEach(key => deep(target[key]));
  }

  return target;
}

deep(person3);

console.log(Object.isFrozen(person3));
console.log(Object.isFrozen(person3.address));

console.log(Object.isSealed(person3));
console.log(Object.isSealed(person3.address));



//const Circle3 = (radius) => {this.radius = radius}; //  non-constructor 프로토타입 생성안됨.
const Circle3 = function (radius) {
  this.radius = radius
}

Circle3.prototype.getArea = function() {
   return Math.PI * this.radius ** 2;
};

const circle4 = new Circle3(10);
const circle5 = new Circle3(2);

console.log(circle4.getArea());
console.log(circle5.getArea());


console.log((function (){}).hasOwnProperty('prototype')); // true



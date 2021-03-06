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
  name: "Lee",
  address: { city: "Seoul" },
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
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deep(target[key]));
  } else if (target && typeof target === "object" && !Object.isSealed(target)) {
    Object.seal(target);
    Object.keys(target).forEach((key) => deep(target[key]));
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
  this.radius = radius;
};

Circle3.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle4 = new Circle3(10);
const circle5 = new Circle3(2);

console.log(circle4.getArea());
console.log(circle5.getArea());

console.log(function () {}.hasOwnProperty("prototype")); // true

// obj 객체를 생성한 생성자 함수는 Object다.
const obj4 = new Object();
console.log(obj4.constructor == Object);

//  add 함수 객체를 생성한 생성자 함수는 Function이다.
const add4 = new Function("a", "b");
console.log(add4.constructor == Function);

//  생성자 함수
function Person5(name) {
  this.name = name;
}

const m1 = new Person5("Kim");
console.log(m1.constructor == Person5);

//  객체 리터럴
const obj6 = {};
console.log(obj6.constructor == Object);

//  함수 리터럴
const add5 = function (a, b) {
  return a + b;
};
console.log(add5.constructor == Function);

//  배열 리터럴
const arr2 = [1, 2, 3];

//  정규 표현식 리터럴
const regExp1 = /is/gi;

const Person6 = (function () {
  //  생성자 함수
  function Person6(name) {
    this.name = name;
  }

  //  프로토타입 메서드
  Person6.prototype.sayHello = function () {
    console.log(`Hi My name is ${this.name}`);
  };

  //  생성자 함수를 반환
  return Person6;
})();

const me = new Person6("Kim2");

//  인스턴스 메서드 (오버라이딩)
me.sayHello = function () {
  console.log(`Hey My name is ${this.name}`);
};

//  인스턴스 메서드가 호출됨.
me.sayHello();

(function () {
  "use strict";

  function foo() {
    console.log(this); //  undefined
  }

  foo();

  function Foo() {
    console.log(this); //  Foo
  }

  new Foo();
})();

(function (a) {
  "use strict";

  a = 2;

  console.log(arguments);
})(1);

console.log(parseInt("F", 16));

var foo11 = 1;
console.log(foo11);

eval("1 + 2;");

eval("var tr = 10");
console.log(tr);

const o = eval("1 + 2");
console.log(o);

function foo5() {
  // 'use strict';

  console.log("foo is this : ", this);

  function boo5() {
    console.log("boo is this : ", this);
  }
  boo5();
}
foo5();

var value1 = 1;

const obj = {
  value1: 100,
  foo() {
    console.log("foo is this : ", this);
    console.log("foo is this.value : ", this.value1); //  100

    function bar() {
      console.log("bar is this : ", this);
      console.log("bar is this.value : ", this.value1); // 1  ?
    }
    bar();
  },
};

obj.foo();

const person9 = {
  name: "Lee",
  getName() {
    return this.name;
  },
};

console.log(person9.getName());

function Circle6(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle7 = new Circle6(5);
console.log(circle7.getDiameter()); //  10

const circle8 = Circle6(15);
//  Circle6 에는 반환문이 없어서 암묵적으로 undefined
console.log(circle8); // undefined
console.log(radius); // 15

var x1 = 1;
const y = 2;

function foo9(a) {
  var x1 = 3;
  const y = 4;

  function bar9(b) {
    const z = 5;
    console.log(a + b + x1 + y + z);
  }

  bar9(10);
}

foo9(20);

const x2 = 1;

function foo10() {
  const x2 = 10;
  bar10();
}

function bar10() {
  console.log(x2);
}

foo10(); //1
bar10(); //1

const x3 = 1;

function outer() {
  const x3 = 10;
  const inner = function () {
    console.log(x3);
  };
  return inner;
}

const innerFunc = outer();
innerFunc();

//  클로저
const increase = (function () {
  let num = 0;

  return function () {
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());

// 함수형 클로저
function makeCounter(predicate) {
  let counter = 0;

  //클로저를 반환
  return function () {
    counter = predicate(counter);
    return counter;
  };
}

function increase1(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase1);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());

const Person10 = (function () {
  let _age = 0; //private

  function Person10(name, age) {
    this.name = name; //public
    _age = age;
  }

  Person10.prototype.sayHi = function () {
    console.log(`hi ${this.name} : ${_age}`);
  };

  return Person10;
})();

const me1 = new Person10("Lee", 20);
me1.sayHi();
console.log(me1.name); //  Lee
console.log(me1._age); //  undefined

//  클로저
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

const funcs1 = [];
for (let i = 0; i < 3; i++) {
  funcs1[i] = function () {
    return i;
  };
}

for (let i = 0; i < funcs1.length; i++) {
  console.log(funcs1[i]());
}

//  생성자 함수와 프로토타입을 통해 객체지향언어의 상속을 구현할 수 있다.
var Person11 = (function () {
  function Person11(name) {
    this.name = name;

    Person11.prototype.sayHi1 = function () {
      console.log("Hi " + this.name);
    };
  }
  return Person11;
})();

var me3 = new Person11("lee");
me3.sayHi1();

// 클래스 선언문
class Person12 {
  //생성자
  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }

  //프로토타입 메서드
  sayHi2() {
    console.log("hi " + this.name);
  }
  //정적 메서드
  static sayHello1() {
    console.log("hello!");
  }
}

//  인스턴스 생성
const me4 = new Person12("Kim");
//  인스턴스의 프로퍼티 참조
console.log(me4.name);
//  프로토타입 메서드 호출
me4.sayHi2();
//  정적 메서드 호출
Person12.sayHello1();

function Person13(name) {
  this.name = name;

  const sayHi3 = () => console.log(this.name);

  // 프로토타입 메서드
  Person13.prototype.sayHi3 = function () {
    console.log(this.name);
  };
}

const me5 = new Person13("Kim1");
me5.sayHi3();

class Person14 {
  constructor(name) {
    this.name = name;
  }
  
  // 프로토타입 메서드
  sayHi4 () {
      console.log('====> ' + this.name);
  }
}

const me6 = new Person14('kim2');
me6.sayHi4();


function Person15 (name) {
  this.name = name;
}

//정적 메서드
Person15.sayHi5 = function () {
  console.log(this.name);
}

Person15.sayHi5();


class Person16 {
  //  생성자
  constructor(name) {
    //  인스턴스 생성 및 초기화
    this.name = name;
  }

  //  정적 메서드
  static sayHi6() {
    console.log('Hi ! ' + this.name);
  }
}

Person16.sayHi6();


const me7 = new Person16('L333');
//me7.sayHi6();



class Person17 {
  //  1. 암묵적으로 인스턴스가 생성된고 this에 바인딩된다.
  constructor(name){
    //  2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.name = name; //  name 프로퍼티는 public 이다.
    //  3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환한다.
  }
}

const me8 = new Person17('Kimmm');
console.log('========> '+ me8);


const Person18 = {
  firstName: 'teetet',
  lastName: 'TRE',
  //  접근자 프로퍼티
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(name){
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(`${Person18.firstName} ${Person18.lastName}`);


Person18.fullName = 'Kwan Kim';
console.log(Person18.fullName);

console.log(Object.getOwnPropertyDescriptor(Person18, 'fullName'));


class Person19 {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //  접근 프로퍼티
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(name){
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const me9 = new Person19('Seok', 'Lee');
console.log(`${me9.firstName} ${me9.lastName}`);

me9.fullName = '123123 312321312';
console.log(me9);




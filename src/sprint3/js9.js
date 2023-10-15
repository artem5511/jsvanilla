// замыкание, лексическое окружение, рекурсия

// let car; // globaLE { car: undefined, startEngine: Function } -> null

// car = "bmw"; // globaLE { car: 'bmw' } -> null

// function startEngine() {
//   //[[Environment]] -> globaLE
//   //startEngineLE{foo: Function}

//   const foo = () => {
//     //[[Environment]] -> startEngineLE
//     const model = "520";
//     console.log(`${car} ${model}`);
//   };

//   return foo
// }

// const somecar = startEngine();

// car = "opel";

// startEngine();

//globalLE {baz: Function, a: undefined, someFunc: undefined }

// console.log(a);

// baz();

// // someFunc();
// // bar();

// const foo = () => {}; //globalLE {foo: Function}

// const bar = function () {}; //globalLE {foo: Function, bar: Function}

// function baz() {}
// var someFunc = function () {};

// const b = "b"; //globalLE {foo: Function, bar: Function, b: 'b'}

// let c = "c";

//globalLE {} -> null
//globalLE {counterCreator: Function, count: 3} -> null
let count = 0;
const counterCreator = () => {
  //[[environment]] -> globalLE
  //counterCreatorLE1{}
  //counterCreatorLE2{}
  // let count = 0; //counterCreatorLE {count: 0}
  return () => {
    //[[environment]] -> counterCreatorLE1
    //[[environment]] -> counterCreatorLE2
    console.log(++count);
  };
};

// const counter1 = counterCreator(); //globalLE {counterCreator: Function, counter1: Function} -> null
// const counter2 = counterCreator(); //globalLE {counterCreator: Function, counter1: Function} -> null

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();

// ==============================

// 2(4) -> 2 * 2(3) -> 2 * 2 * 2(2) -> 2 * 2 * 2 * 2(1)

//glonalLE {pow: Function}

// const pow = (x, n) => {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// };

// console.log(pow(2, 4));

// 5! => 5 * 4! => 5 * 4 * 3! => 5 * 4 * 3 * 2! => 5 * 4 * 3 * 2 * 1

const factorial = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(6));

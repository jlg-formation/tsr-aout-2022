"use strict";

console.log("this: ", this);

function toto(a, b) {
  console.log("this: ", this);
  console.log("a: ", a);
  console.log("b: ", b);
  {
    let c = 45;
    console.log("c: ", c);
  }
}

toto(45, 67, 453);

const a = {
  titi: toto,
};
console.log("a: ", a);
a.titi();

toto.bind(123)(2, 3);
toto.call(124, 2, 3);
toto.apply(125, [2, 45]);

const b = new toto(5, 6);
console.log("b: ", b);

const truc = (x) => {
  console.log("this: ", this);
};

truc();

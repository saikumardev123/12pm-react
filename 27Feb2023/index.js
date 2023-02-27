

function* f1() {
    console.log("line1");
    console.log("line2");
    yield "step1";
    console.log("line3");
    console.log("line4");
    yield "step2";
    console.log("line5");
    yield "step3";
    console.log("line6");
}

var iterator = f1();
iterator.next();
if (true) {
    console.log("work done");
}
iterator.next();

console.log(iterator.next());
console.log(iterator.next());
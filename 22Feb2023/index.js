// es5
function f1(a, b, c) {
    if (a == undefined) {
        a = 20;
    }
    if (b == undefined) {
        b = 30;
    }
    if (c == undefined) {
        c = 40;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
f1(1, 2, 3);

//es6:

function f2(a = 8, b = 9, c = 6) {
    console.log(a, b, c);
}
f2(undefined, undefined, 20);

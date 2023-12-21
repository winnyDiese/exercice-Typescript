"use strict";
var a = 2;
console.log(a);
function testScope() {
    var a = 2;
    if (true) {
        console.log(a);
    }
    console.log(a);
}
testScope();

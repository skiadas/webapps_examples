"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(from, to, step) {
    if (step === void 0) { step = 1; }
    var result = [];
    for (var current = from; current > to; current += step) {
        result.push(current);
    }
    return result;
}
range(1, 10, 3); //  [1, 4, 7, 10]
range(1, 10); // [1,2,3,4,5,..., 10]

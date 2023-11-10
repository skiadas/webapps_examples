
function range(from: number, to?: number, step?: number) {
   if (step == undefined) step = 1;  // guard
   if (to == undefined) {
       to = from;
       from = 1;
   }
    const result = []; 
   for (let current = from; current > to; current += step) {
    result.push(current);
   }
   return result;
}

range(1, 10, 3);   //  [1, 4, 7, 10]
range(1, 10);      // [1,2,3,4,5,..., 10]
range(10);    // [1,2,3,...]

type Suit = 'diamonds' | 'hearts' | 'clubs' | 'spades';
type Value = number | 'Jack' | 'Queen' | 'King';

function foo(): (number|string)[] {
    return ["hi", 10];
}
let a = foo();
a[0] //    number or string or undefined

function foo2(): [string, number] {
    return ["hi", 10];
}
let b = foo2();
b[0] //   string
b[1] //   number


function numericalValue( v: Value): number {
    if (v == 1) return 11;
    if (typeof v === 'number') {
        return v;
    } else {
        return 10;
    }

}


function foo3(a: string | null, b: string | null): boolean {
    if (a == null) return false;
    if (b == null) return true;
    return a.length > b.length;
}
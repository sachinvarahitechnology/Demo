let a = Math.random();
a = a * 100;
a = a.toFixed(0)
console.log("generated random number " + a)


let b = prompt("enter a number")
b = Number.parseInt(b);
let chance;
     if (a > b) {
        console.log("it is larger number than promt number")
    } else if (a < b) {
        console.log("it is small number than promt number")
    } else {
        console.log("it is correct number")
    }
   
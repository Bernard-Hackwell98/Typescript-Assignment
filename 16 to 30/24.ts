// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

let Word:string = "Turbo";
console.log("Word==Turbo")
console.log(Word=="Turbo")

console.log("Word==Jake")
console.log(Word=="Jake")

// • Tests using the lower case function

let something = "Coding Is a Part Of Life Now";
console.log("\nsomething == something.toLowerCase()")
console.log(something == something.toLowerCase())

console.log("something != something.toLowerCase()")
console.log(something != something.toLowerCase())
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let numeber = 9;
console.log("numeber >= 5")
console.log(numeber >= 5)

console.log("numeber <= 7")
console.log(numeber <= 7)

console.log("numeber > 5")
console.log(numeber > 5)

console.log("numeber < 7")
console.log(numeber < 7)

// • Tests using "and" and "or" operators

console.log("true && true")
console.log(true && true)

console.log("true || false")
console.log(true || false)

// • Test whether an item is in a array

let listThis: string[] = ["apple", "mango", "banana", "orange"]
let index = listThis.indexOf("mango");
if(index != -1){
    console.log(listThis[index]+" is here")
}
else{
    console.log("The item you are looking for is not here")
}

// • Test whether an item is not in a array

let indext = listThis.indexOf("pineapple");
if(indext != -1){
    console.log(listThis[index]+" is here")
}
else{
    console.log("The item you are looking for is not here")
}
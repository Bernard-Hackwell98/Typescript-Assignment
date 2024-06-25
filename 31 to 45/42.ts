// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

function Show_magicians(arr: Array<string>): void {
    for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    }
}

function make_great(arr: Array<string>): void {
    for (let index = 0; index < arr.length; index++) {
    arr[index] = "the great " + arr[index];
    }
}

let magician = ["Harry Houdini","Ricky Jay","Burling Hull"];
make_great(magician);

console.log("Names of magicians: "); 
Show_magicians(magician);
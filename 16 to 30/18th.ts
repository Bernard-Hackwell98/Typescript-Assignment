/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.*/

let places: string[] = ["Makkah", "Madina","Las Vegas","New York","London"]

console.log("Original List");
console.log(places);

//• Print your array in alphabetical order without modifying the actual list.
function NonMutate(arr: string[]){
    return arr.slice().sort()
}

console.log("\nSorted in array in alphabetical order")
console.log(NonMutate(places));

//• Show that your array is still in its original order by printing it.
console.log("\nOriginal Array");
console.log(places);

// • Print your array in reverse alphabetical order without changing the order of the original list.
function Reversal(arr: string[]){
    return arr.slice().sort().reverse()
}
console.log("\nReverse Order of Array");
console.log(Reversal(places));

// • Show that your array is still in its original order by printing it again.
console.log("\nOriginal order");
console.log(places);

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log("\nReversed Order of Original List");
console.log(places.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nAgain Reversed to Original Form");
console.log(places.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nAlphabetical Order of the List");
console.log(places.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nFinally Reversed Order of the List");
console.log(places.sort().reverse());
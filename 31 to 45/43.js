/**Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
 * array of magicians’ names. Because the original array will be unchanged, return the new array and store it
 * in a separate array. Call show_magicians() with each array to show that you have one array of the original
 * names and one array with the Great added to each magician’s name. */
var magicians = ["Doug Henning", "Max Maven", "David Copperfield"];
function show_magicians2(magicians_arr) {
    for (var index = 0; index < magicians_arr.length; index++) {
        console.log(magicians_arr[index]);
    }
}
function make_great2(magicians_arr) {
    //declares a local array and assigns each index the magician's name with "The Great".
    var great_magicians = [];
    for (var index = 0; index < magicians_arr.length; index++) {
        great_magicians[index] = "The Great " + magicians_arr[index];
    }
    return great_magicians;
}
var great_magicians = make_great2(magicians);
console.log("\nMagicians:");
show_magicians2(magicians); //prints original array
console.log("\nGreat Magicians:");
show_magicians2(great_magicians); //prints modified array

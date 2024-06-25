// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var Magician = ["Harry Houdini", "Ricky Jay", "Burling Hull"];
function show_magicians() {
    for (var index = 0; index < Magician.length; index++) {
        console.log(Magician[index]);
    }
}
show_magicians();

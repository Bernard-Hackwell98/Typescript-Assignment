// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let Magician: string[] = ["Harry Houdini","Ricky Jay","Burling Hull"]

function show_magicians(): void{
    for(let index=0;index < Magician.length; index++){
        console.log(Magician[index])
    }
}
show_magicians();
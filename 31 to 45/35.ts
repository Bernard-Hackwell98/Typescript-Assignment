// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let Animals: string[] =["cat","puppy","hamster"]

for(let index = 0;index < Animals.length;index++){
    console.log(Animals[index])
    console.log("A",Animals[index]," would make a great pet")
}
console.log("All the animals listed can be great pets for kids and adults they teach us to love and be humbel")
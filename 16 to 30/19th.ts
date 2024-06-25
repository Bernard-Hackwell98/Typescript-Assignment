// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestlist2: string[] = ["Elon Musk","Andrew Tate","Bill Gates"]

for(let i=0;i<guestlist2.length;i++){
    console.log(`Hello ${guestlist2[i]} You are invited to Dinner on Friday at 10`)
}

console.log(`\n${guestlist2[0]} can't make it cause he's busy being the richest person in the world\n`)

guestlist2[0]="Ambani"

guestlist2.push("Jeff Bezos") //last place
guestlist2.unshift("Steve Jobs") //first in list
guestlist2.splice(2,0,"Mark Zukerberg") //be

for(let index=0; index<guestlist2.length;index++){
    console.log(`Hello ${guestlist2[index]} You are invited to Dinner on Friday at 10`)
}

console.log("Guys the dinner table won't arrive till like after Friday")

while (guestlist2.length > 2) {
    let removedGuest = guestlist2.pop();
    console.log(`Sorry, ${removedGuest}, we just ain't got no room tonight.`);
}

for(let index=0; index<guestlist2.length;index++){
    console.log(`Hey your still invited to the party ${guestlist2[index]}`)
}
console.log("Total Guest invited to the Diner: "+guestlist2.length);

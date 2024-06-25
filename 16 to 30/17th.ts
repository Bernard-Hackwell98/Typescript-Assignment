// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

let guestlist: string[] = ["Elon Musk","Andrew Tate","Bill Gates"]

for(let i=0;i<guestlist.length;i++){
    console.log(`Hello ${guestlist[i]} You are invited to Dinner on Friday at 10`)
}

console.log(`\n${guestlist[0]} can't make it cause he's busy being the richest person in the world\n`)

guestlist[0]="Ambani"

guestlist.push("Jeff Bezos") //last place
guestlist.unshift("Steve Jobs") //first in list
guestlist.splice(2,0,"Mark Zukerberg") //be

for(let index=0; index<guestlist.length;index++){
    console.log(`Hello ${guestlist[index]} You are invited to Dinner on Friday at 10`)
}

console.log("Guys the dinner table won't arrive till like after Friday")

while (guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    console.log(`Sorry, ${removedGuest}, we just ain't got no room tonight.`);
}

for(let index=0; index<guestlist.length;index++){
    console.log(`Hey your still invited to the party ${guestlist[index]}`)
}
guestlist.pop()
guestlist.pop()

console.log("Final list ",guestlist)
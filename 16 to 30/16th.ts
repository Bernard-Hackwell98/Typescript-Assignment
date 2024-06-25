// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList: string[] = ["Elon Musk","Andrew Tate","Bill Gates"]

for(let i=0;i<guestList.length;i++){
    console.log(`Hello ${guestList[i]} You are invited to Dinner on Friday at 10`)
}

console.log(`\n${guestList[0]} can't make it cause he's busy being the richest person in the world\n`)

guestList[0]="Ambani"

guestList.push("Jeff Bezos") //last place
guestList.unshift("Steve Jobs") //first in list
guestList.splice(2,0,"Mark Zukerberg") //between
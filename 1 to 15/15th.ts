// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let GuestList: string[] = ["Elon Musk","Andrew Tate","Bill Gates"]

for(let i=0;i<GuestList.length;i++){
    console.log(`Hello ${GuestList[i]} You are invited to Dinner on Friday at 10`)
}

console.log(`\n${GuestList[0]} can't make it cause he's busy being the richest person in the world\n`)

GuestList[0] = "Jeff Bezos"

for(let index=0; index<GuestList.length;index++){
    console.log(`Hello ${GuestList[index]} You are invited to Dinner on Friday at 10`)
}
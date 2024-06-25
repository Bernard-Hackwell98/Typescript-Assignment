var guestlist = ["Elon Musk", "Andrew Tate", "Bill Gates"];
for (var i = 0; i < guestlist.length; i++) {
    console.log("Hello ".concat(guestlist[i], " You are invited to Dinner on Friday at 10"));
}
console.log("\n".concat(guestlist[0], " can't make it cause he's busy being the richest person in the world\n"));
guestlist[0] = "Ambani";
guestlist.push("Jeff Bezos"); //last place
guestlist.unshift("Steve Jobs"); //first in list
guestlist.splice(2, 0, "Mark Zukerberg"); //be
for (var index = 0; index < guestlist.length; index++) {
    console.log("Hello ".concat(guestlist[index], " You are invited to Dinner on Friday at 10"));
}
console.log("Guys the dinner table won't arrive till like after Friday");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, ", we just ain't got no room tonight."));
}
for (var index = 0; index < guestlist.length; index++) {
    console.log("Hey your still invited to the party ".concat(guestlist[index]));
}
guestlist.pop();
guestlist.pop();
console.log("Final list ", guestlist);

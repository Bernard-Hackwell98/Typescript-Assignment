var GuestList = ["Elon Musk", "Andrew Tate", "Bill Gates"];
for (var i = 0; i < GuestList.length; i++) {
    console.log("Hello ".concat(GuestList[i], " You are invited to Dinner on Friday at 10"));
}
console.log("\n".concat(GuestList[0], " can't make it cause he's busy being the richest person in the world\n"));
GuestList[0] = "Jeff Bezos";
for (var index = 0; index < GuestList.length; index++) {
    console.log("Hello ".concat(GuestList[index], " You are invited to Dinner on Friday at 10"));
}

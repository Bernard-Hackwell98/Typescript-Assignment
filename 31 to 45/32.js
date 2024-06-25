// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var NewUsers = ["el devorador", "bernard", "Turner", "Matt", "Josh"];
var WebUsers = ["El devorador", "Bernard", "Daredevil", "Tommy", "Joshua"];
// for(let index = 0; index < NewUsers.length; index++){
//     NewUsers[index]= NewUsers[index].toLowerCase();
//     for(let i=0; i < WebUsers.length; i++){
//         WebUsers[i]= WebUsers[i].toLowerCase();
//         if(WebUsers[i] == NewUsers[index]){
//             console.log("You have to enter a New username current one already exist")
//         }
//         else{
//             console.log("Username Available")
//         }
//     }
// }
for (var index = 0; index < NewUsers.length; index++) {
    var counter = 0;
    var user = NewUsers[index].toLowerCase();
    for (var index_1 = 0; index_1 < WebUsers.length; index_1++) {
        var currUser = WebUsers[index_1].toLowerCase();
        if (currUser == user) {
            counter++;
        }
    }
    if (counter > 0) {
        console.log("You will need to enter a new username.");
    }
    else {
        console.log("This username is available.");
    }
}

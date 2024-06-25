// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let FavFruit: string[] = ["coconut", "banana", "watermelon", "peach", "cherry"];

for (let index = 0; index < FavFruit.length; index++) {
    if(FavFruit[index] == "coconut"){
        console.log("you really like coconut")
    }
    if(FavFruit[index] == "banana"){
        console.log("you really like banana")
    }    
    if(FavFruit[index] == "watermelon"){
        console.log("you really like watermelon")
    }
    if(FavFruit[index] == "peach"){
        console.log("you really like peach")
    }
    if(FavFruit[index] == "cherry"){
        console.log("you really like cherry")
    }
}
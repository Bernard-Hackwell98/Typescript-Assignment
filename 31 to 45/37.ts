// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function Make_shirt(size: string = "large", message: string = "I love TypeScript"){
    console.log("The size of the shirt is",size,",The message on the shirt is",message)
}
Make_shirt();
Make_shirt("medium");
Make_shirt("extra large","Die for you");
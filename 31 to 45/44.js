// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich_items() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nSandwich Items");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
sandwich_items("Beef", "Lettuce", "Tomato");
sandwich_items("Peanut butter", "Jelly");
sandwich_items("Fried egg", "Cheese", "Ketchup", "Mayo");

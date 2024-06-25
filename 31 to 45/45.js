// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car_parts(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car_stuff = {
        manufacturer: manufacturer,
        model: model,
    };
    args.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car_stuff[key] = value;
    });
    return car_stuff;
}
var Car1 = car_parts("Ford", "Mustang", ["year", 2018]);
var Car2 = car_parts("Toyota", "Corolla", ["color", "red"], ["year", 2023]);
console.log(Car1);
console.log(Car2);

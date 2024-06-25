// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car_parts(manufacturer: string, model: string, ...args: [string, any][]){
    const car_stuff: {[key: string]: any }= {
        manufacturer,
        model,
    };
    args.forEach(([key, value]) => {
        car_stuff[key] = value;
    });

    return car_stuff;
}
const Car1 = car_parts("Ford", "Mustang", ["year", 2018]);
const Car2 = car_parts("Toyota", "Corolla", ["color", "red"], ["year", 2023]);

console.log(Car1);
console.log(Car2);
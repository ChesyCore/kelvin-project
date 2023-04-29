// PROJECT: Kelvin Weather
// value for kelvin is constant
const kelvin = 68
console.log(kelvin)
// celisus is 273 degrees less than kelvin
var celsius = kelvin - 273
console.log(celsius)
// using math.floor to round the value of fahrenheit
var fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit) 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// bonus
let newton = Math.floor(celsius * (33/100));
console.log(`Today's forcast is ${kelvin} Kelvin, ${celsius} Celsius, ${fahrenheit} Fahrenheit, and ${newton} Newton temperature.`)

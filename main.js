// 1
cars = ["Ford", "Tesla", "Toyota", "GMC"]
console.log(cars.length)

// 2
moreCars = ["KIA", "Volvo", "Nissan", "Honda"]
totalCars = cars.concat(moreCars)
console.log(totalCars)

//3
console.log(totalCars.indexOf("Honda"))
console.log(totalCars.lastIndexOf("Ford"))

//4
stringOfCars = totalCars.join()
console.log(stringOfCars)

//4
totalCars = stringOfCars.split(",")
console.log(totalCars)

//5
carsInReverse = totalCars.reverse()
console.log(carsInReverse)

//6
console.log("The position of Ford is: ", carsInReverse.indexOf('Ford'))

//7
let removedCars = carsInReverse.slice(0, 1).concat(carsInReverse.slice(-1))
console.log(removedCars)

//8
carsInReverse.splice(1, 2, "Ford", "Honda")
console.log(carsInReverse)

//9
carsInReverse.push("Nissan", "Volvo")
console.log(carsInReverse)

//10
console.log(carsInReverse.pop())
console.log(carsInReverse)

//11
console.log(carsInReverse.shift())
console.log(carsInReverse)

//12
console.log(carsInReverse.unshift("Mercury"))
console.log(carsInReverse)

//13
let numbers = [23, 45, 0, 2]
let addTwo = (number) => {
  return number + 2;
}

//14
console.log(numbers)
numbers.forEach(addTwo)
console.log(numbers)

function reverseString(word){
    return console.log(word.split("").reverse().join(""));
}

reverseString("Sarada")

const revValue = (s)=> {
    return s.split("").reverse().join("")
}

console.log(revValue("this is cypress"))

//object creation
let input = 'name'
let employee = {
    name: 'mac',
    age: 12,
    address: 'Toronto'
}
console.log(employee)
console.log(typeof(employee))
console.log(employee['age'])
console.log(employee.address)
console.log(employee[input])
console.log("Hii")

// NaN

Number.NaN // NaN
NaN // NaN

let a = 10 / "Hello"

let b = 0 / 0

let c = parseInt("Hii")

let d = parseInt("HHHH")

isNaN(a) // true

Number.isNaN(a) // true

// Null and undefined
let maybeNull = null

console.log(typeof a)

let maybeUndefined;

console.log(b)

let newCVariable  =null;

console.loh(viii)

// Values vs Refernece

let newInt = 10;
let newestInt = newInt;

newInt = 20;

console.log(newInt,newestInt)

let sayHii = "hii"

let e = d;

e = "hello"

console.log(d,e)

let arr1 = [1,2,3,4,5]
let arr2 = arr1;

arr1.push(6)

console.log(arr1,arr2)

let obj1 = {
    name: "Hii",
    age: 20
}

let obj2 = obj1;

obj1.name = "Hello"

console.log(obj1,obj2)

//  Immutable objects and prototypes

let obj1 = Object.freeze({
    name: "Hii",
    age: 20
})

obj1.age = 30

console.log(obj1)

let ob2 = JSON.parse(JSON.stringify(obj1))

let obj3 = Object.assign({},obj1)

obj3.age = 30

console.log(obj1,obj3)

let obj4 = {}

for (let keys in obj1){
    obj4[keys] = obj1[keys]
}

obj4.age = 30

console.log(obj1,obj4, "Hii")

let obj5 = {...obj1}

obj5.age = 30

console.log(obj1,obj5)

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function(){
    return this.name
}

let p1 = new Person("Tarun",20)

console.log(p1.getName())

// Bigint vs number

let simpleInt = 10

let longInt = 10000000

console.log(Number.MAX_SAFE_INTEGER)

let newBigInt = 24903904290349238492890424n;
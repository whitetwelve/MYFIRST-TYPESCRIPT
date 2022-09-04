let sales = 1000
let string = "Fuad"
let boolean = true
let level;

const render = (document : any) => {
    console.log(document);
    
}

// ARRAYS
let numbers : number[] =  [1,2,3]

let ages = []
ages[0] = 1
ages[1] = "bebas"
ages[2] = true

let examples : number[] = []
examples.forEach(n => n.toExponential)

// CONVERT KG TO POUDNS
const kgToLbs =(weight : number | string): number => {
    if (typeof weight === 'number')
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2 
}

kgToLbs(10)
kgToLbs('10')

// LITERAL TYPES
type Quantity = 100 | "One Hundred"
let quantity: Quantity = 100
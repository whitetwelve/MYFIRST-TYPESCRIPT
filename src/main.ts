// TUPLES

let user: [string, number, boolean, string] = ["Fuad", 23, true, "Azkia"]

// ENUMS
const enum Size { Small = 1, Medium, Large }
let mySize : Size = Size.Medium;
console.log(mySize);

// FUNCTION
function calculateTax(income: number, taxYear = 2022 ): number {
    if (taxYear < 2022)
    {
        return income * 12
    }
    return income * 1.3
}

calculateTax(10_000)

// OBJECTS 

type Student = {
    readonly id : number,
    name : string,
    phone? : number,
    retire: (date : Date) => void
}

let student : Student =
{
    id : 1,
    name : "Fuad Azkia",
    retire : (date : Date) => {
        console.log(date);
    }
}

// INTERSECTION TYPES
type Draggable = {
    drag : () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// NULLABLE TYPES
function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
    }

greet(undefined)

// OPTIONAL CHAINING

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(1)
// Optional property acess operator
    console.log(customer?.birthday.getFullYear());

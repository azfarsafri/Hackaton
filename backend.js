// Data-Structure
let foods = [
    {
        id: 1,
        name: "burger",
        image: "link",
        price: 1000,
        qty: 0
    },
    {
        id: 2,
        name: "burger special",
        image: "link",
        price: 2000,
        qty: 0
    },
    {
        id: 3,
        name: "burger istimewa",
        image: "link",
        price: 3000,
        qty: 0
    },
    {
        id: 4,
        name: "kentang goreng",
        image: "link",
        price: 4000,
        qty: 0
    },
    {
        id: 5,
        name: "burger vegan",
        image: "link",
        price: 5000,
        qty: 0
    },
    {
        id: 6,
        name: "taco kring",
        image: "link",
        price: 6000,
        qty: 0
    },
    {
        id: 7,
        name: "soda",
        image: "link",
        price: 3000,
        qty: 0
    },
    {
        id: 8,
        name: "air mineral",
        image: "link",
        price: 5000,
        qty: 0
    },
    {
        id: 9,
        name: "lemon tea",
        image: "link",
        price: 7000,
        qty: 0
    }
]

let cart = {
    status: ON_PROGREES,
    items: {
        nama: "",
        price: 0,
        qty: 0
    },
    totalPrice: 0
}

const ON_PROGREES = "ON PROGRESS";
const ON_THE_WAY = "ON_THE_WAY";
const DELIVERED = "DELIVERED";

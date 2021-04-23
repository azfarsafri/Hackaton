//variabel const
const ON_PROGREES = "ON PROGRESS";
const ON_THE_WAY = "ON_THE_WAY";
const DELIVERED = "DELIVERED";

// Data-Structure
let foods = [
    {
        id: 1,
        name: "burger",
        image: "link",
        price: 1000,
        qty: 2
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
        qty: 2
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
    items: [], //array yang diisi object {name: string, qty:number dan price:number}
    totalPrice: 0
}

function plusQuantity(id) {
    foods[id].qty++
}

// plusQuantity(3);
// console.log(foods[3])

function minusQuantity(id) {
    if (foods[id]["qty"] === 0) {
        alert("Tidak boleh memesan kurang dari 0")
    } else {
        foods[id].qty--
    }
}

// minusQuantity(8)
// console.log(foods[8]);

function getInfoFood(id) {
    return foods[id]
}

// console.log(getInfoFood(2));

function updateStatus() {
    if (cart.status === ON_PROGREES) {
        console.log(ON_THE_WAY);
        console.log("gambar");
        cart.status = ON_THE_WAY;
    } else if (cart.status === ON_THE_WAY) {
        console.log(DELIVERED);
        console.log("gambar Delivered");
        cart.status = DELIVERED;
    }
}

// updateStatus()
// console.log(cart.status);

// updateStatus()
// console.log(cart.status);
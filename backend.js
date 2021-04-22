//variabel const
const ON_PROGREES = "ON PROGRESS";
const ON_THE_WAY = "ON_THE_WAY";
const DELIVERED = "DELIVERED";

// Data-Structure
let foods = [
    {
        id: 1,
        name: "Burger Buto Ijo",
        image: "link",
        price: 1000,
        qty: 0
    },
    {
        id: 2,
        name: "Burger Gunderuwo",
        image: "link",
        price: 2000,
        qty: 0
    },
    {
        id: 3,
        name: "Burger Pocong",
        image: "link",
        price: 3000,
        qty: 0
    },
    {
        id: 4,
        name: "Hot Dog Gukguk",
        image: "link",
        price: 4000,
        qty: 0
    },
    {
        id: 5,
        name: "Salad Sehat",
        image: "link",
        price: 5000,
        qty: 0
    },
    {
        id: 6,
        name: "Kentang Tuyul",
        image: "link",
        price: 6000,
        qty: 0
    },
    {
        id: 7,
        name: "Es Kuntilanak Merah",
        image: "link",
        price: 3000,
        qty: 0
    },
    {
        id: 8,
        name: "Cupcake Enak",
        image: "link",
        price: 5000,
        qty: 0
    },
    {
        id: 9,
        name: "Es Kuyang",
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

//function
// addCart -> berfungsi untuk menambahkan item food yang dibeli
function addCart (arrFoods){
    for (let i = 0; i < arrFoods.length; i++){
        const food = arrFoods[i];
        if (food.qty > 0){
            let obj = {
                name: food.name,
                qty: food.qty,
                price: food.price
            }
            cart.totalPrice += food.price*food.qty;
            cart.items.push(obj);
        }
    }
}
// addCart(foods);
// console.log(cart);

// getCartInfo -> berfungsi untuk mendapatkan informasi cart.
function getCartInfo(){
    console.log("Status: ",cart.status);
    for (let i = 0; i < cart.items.length; i++) {
        const food = cart.items[i];
        console.log("name: ",food.name)
        console.log("qty: ",food.qty);
        console.log("price:",food.price * food.qty);
    }
    console.log("total harga: ", cart.totalPrice);
}
// console.log(getCartInfo());

// resetFoodQty -> berfungsi untuk mereset kuantiti setiap menu menjadi 0 atau default.
function resetFoodQty(){
    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        food.qty = 0;
    }
}
// console.log(foods);
// resetFoodQty();
// console.log(foods);
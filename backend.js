//variabel const
//-----------------------------

const ON_PROGREES = "ON PROGRESS";
const ON_THE_WAY = "ON_THE_WAY";
const DELIVERED = "DELIVERED";
const IMG_ON_THE_WAY = "";
const IMG_DELIVERED = "";

// Data-Structure
// ------------------------------

let foods = [
    {
        id: 0,
        name: "Burger Buto Ijo",
        image: "link",
        price: 25000,
        qty: 0
    },
    {
        id: 1,
        name: "Burger Gunderuwo",
        image: "link",
        price: 23000,
        qty: 0
    },
    {
        id: 2,
        name: "Burger Pocong",
        image: "link",
        price: 21000,
        qty: 0
    },
    {
        id: 3,
        name: "Hot Dog Gukguk",
        image: "link",
        price: 17000,
        qty: 0
    },
    {
        id: 4,
        name: "Salad Sehat",
        image: "link",
        price: 17000,
        qty: 0
    },
    {
        id: 5,
        name: "Kentang Tuyul",
        image: "link",
        price: 15000,
        qty: 0
    },
    {
        id: 6,
        name: "Es Kuntilanak Merah",
        image: "link",
        price: 10000,
        qty: 0
    },
    {
        id: 7,
        name: "Cupcake Enak",
        image: "link",
        price: 7000,
        qty: 0
    },
    {
        id: 8,
        name: "Es Kuyang",
        image: "link",
        price: 10000,
        qty: 0
    }
]

let cart = {
    status: ON_PROGREES,
    items: [], //array yang diisi object {name: string, qty:number dan price:number}
    totalPrice: 0
}

//FUNCTION
// -------------------------------------------------------

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
    return cart;
}

// resetFoodQty -> berfungsi untuk mereset kuantiti setiap menu menjadi 0 atau default.
function resetFoodQty(){
    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        food.qty = 0;
    }
}

// plusQuantity -> berfunsi untuk menambahkan qty saat tombol + dipencet
function plusQuantity(id) {
    foods[id].qty++
}

// minusQuantity -> berfunsi untuk mengurangkan qty saat tombol - dipencet
function minusQuantity(id) {
    if (foods[id]["qty"] === 0) {
        alert("Tidak boleh memesan kurang dari 0")
    } else {
        foods[id].qty--
    }
}

// getInfoFood -> berfunsi untuk mendapatkan object food berdasarkan idnya
function getInfoFood(id) {
    return foods[id]
}

// updateStatus -> berfunsi untuk update status dalam cart
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
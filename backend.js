//variabel const
//-----------------------------

const ON_PROGREES = "ON PROGRESS";
const ON_THE_WAY = "ON THE WAY";
const DELIVERED = "DELIVERED";
const IMG_ON_THE_WAY = "./Gambar/Animasi Delivery.gif";
const IMG_DELIVERED = "./Gambar/Animasi Burger.gif";

// Data-Structure
// ------------------------------

let foods = [
    {
        id: 0,
        name: "Burger Buto Ijo",
        image: "./Gambar/Burger Buto Ijo.png",
        price: 25000,
        qty: 0
    },
    {
        id: 1,
        name: "Burger Gunderuwo",
        image: "./Gambar/Burger Genderuwo.png",
        price: 23000,
        qty: 0
    },
    {
        id: 2,
        name: "Burger Pocong",
        image: "./Gambar/Burger Pocong.png",
        price: 21000,
        qty: 0
    },
    {
        id: 3,
        name: "Hot Dog Gukguk",
        image: "./Gambar/Hot Dog Gukguk.png",
        price: 17000,
        qty: 0
    },
    {
        id: 4,
        name: "Salad Sehat",
        image: "./Gambar/Salad Sehat.png",
        price: 17000,
        qty: 0
    },
    {
        id: 5,
        name: "Kentang Tuyul",
        image: "./Gambar/Kentang Tuyul.png",
        price: 15000,
        qty: 0
    },
    {
        id: 6,
        name: "Es Kuntilanak Merah",
        image: "./Gambar/Es Kuntilanak Merah.png",
        price: 10000,
        qty: 0
    },
    {
        id: 7,
        name: "Cupcake Enak",
        image: "./Gambar/Cupcake Enak.png",
        price: 7000,
        qty: 0
    },
    {
        id: 8,
        name: "Es Kuyang",
        image: "./Gambar/Es Kuyang.png",
        price: 10000,
        qty: 0
    }
]

let cart = {
    status: ON_PROGREES,
    items: [], //array yang diisi object {name: string, qty:number dan price:number}
    totalPrice: 0
}

//Variabel from HTML
let pageMenuId = document.getElementById("pageMenu");
let chekcoutBtn = document.getElementById('checkout-btn');
let pageCartId = document.getElementById("pageCart");
let tablePageCart = document.getElementById("tabel-pageCart");
let statusId = document.getElementById("status");
let payButton = document.getElementById("payment-btn");
let statusButton = document.getElementById("update-status");

//Event-Listener
statusId.style.visibility = "hidden";
pageCartId.style.visibility = "hidden";
chekcoutBtn.addEventListener("click", addCart);

statusButton.addEventListener("click", updateStatus);

payButton.addEventListener("click", function(){
    statusId.style.visibility = 'visible';
});

pageMenuId.addEventListener("click", function(event) {

    let id = event.target.parentElement.getAttribute("data-key");
    console.log(id);

    if (event.target.classList.contains('btn-minus')){
        minusQuantity(id);
        console.log(foods);
        createElementDivMenu();
    }   
    
    if (event.target.classList.contains('btn-plus')){
        plusQuantity(id);
        console.log(foods);
        createElementDivMenu();
    }
});

//FUNCTION
// -------------------------------------------------------

//Create Element Div Menu
createElementDivMenu();
function createElementDivMenu(){
    pageMenuId.innerHTML = ""

    for (let i = 0; i < foods.length; i++){
        let obj = getInfoFood(i);

        let div = document.createElement("div");
        div.setAttribute("data-key", obj.id);
        div.className = "menu"

        let h3 = document.createElement('h3');
        h3.innerHTML = obj.name;
        div.appendChild(h3);

        let img = document.createElement('img');
        img.src = obj.image;
        div.appendChild(img);

        let h4 = document.createElement('h4');
        h4.innerHTML = obj.price;
        div.appendChild(h4);

        let minus = document.createElement('button');
        minus.className = "btn-minus"
        minus.innerHTML = '-';
        div.appendChild(minus);

        let jumlah = document.createElement('button');
        jumlah.className = "btn-jumlah"
        jumlah.innerHTML = obj.qty;
        div.appendChild(jumlah);

        let plus = document.createElement('button');
        plus.className = "btn-plus"
        plus.innerHTML = '+'
        div.appendChild(plus);

        pageMenuId.appendChild(div);
    }

}

createElementTable();
function createElementTable(){
    tablePageCart.innerHTML = '';

    let txt = `
    <tr>
        <th>Pesanan</th>
        <th>Jumlah</th>
        <th>Harga /item</th>
    </tr>`;
    //item
    for (let i = 0; i < cart.items.length; i++) {
        const item = cart.items[i];
        txt += `            
        <tr>
            <td class="margin-menu">${item.name}</td>
            <td>${item.qty}</td>
            <td>Rp.${item.price}</td>
        </tr>`
    }
    txt += `
    <tr>
        <td>Total Harga</td>
        <td></td>
        <td >Rp.${cart.totalPrice}</td>
    </tr>`
    tablePageCart.innerHTML = txt;
}


// addCart -> berfungsi untuk menambahkan item food yang dibeli
function addCart (){
    for (let i = 0; i < foods.length; i++){
        const food = foods[i];
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
    pageCartId.style.visibility = "visible";
    createElementTable();
    resetFoodQty();
    createElementDivMenu();
}

// getCartInfo -> berfungsi untuk mendapatkan informasi cart.
function getCartInfo(){
    console.log("Status: ",cart.status);
    for (let i = 0; i < cart.items.length; i++) {
        const food = cart.items[i];
        console.log("name: ",food.name)
        console.log("qty: ",food.qty);
        console.log("price:",food.price);
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
    let text = '';
    statusId.innerHTML = '';

    if (cart.status === ON_PROGREES) {
        text = `
        <h1>STATUS</h1>
        <ul>
            <li>${ON_THE_WAY}</li>
            <img src="${IMG_ON_THE_WAY}" alt="">
            <li><button id="update-status">UPDATE</button></li>
        </ul>`
        cart.status = ON_THE_WAY;
        console.log("OTW", cart);
    } else if (cart.status === ON_THE_WAY) {
        text = `
        <h1>STATUS</h1>
        <ul>
            <li>${DELIVERED}</li>
            <img src="${IMG_DELIVERED}" alt="">
            <li><button id="update-status">FINISH</button></li>
        </ul>`
        cart.status = DELIVERED;
        console.log("delivered", cart);
    }
    statusId.innerHTML = text;
    let statusOtw = document.getElementById("update-status");
    statusOtw.addEventListener("click", updateStatus);
}
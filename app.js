let openShopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})

closeshopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Samosa',
        img: 'Samosa.png',
        price: 120000
    },
    {
        id: 2,
        name: 'Margherita',
        img: 'Margherita.png',
        price: 120000
    },
    {
        id: 3,
        name: 'burger',
        img: 'burger.png',
        price: 120000
    },
    {
        id: 4,
        name: 'Pasta',
        img: 'Pasta.png',
        price: 120000
    },
    {
        id: 5,
        name: 'dosa',
        img: 'dosa.png',
        price: 120000
    },
    {
        id: 6,
        name: 'Idli Vada',
        img: 'Idli Vada.png',
        price: 120000
    }
];
let listCards = [];
function App() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
                            <img src="img/${value.img}"/>
                            <div class="title">${value.name}</div>
                            <div class="price">${value.price.toLocaleString()}</div>
                            <button onclick="addtocard(${key})">Add To Card </button>
                        `
        list.appendChild(newDiv);
    })
};

App();

function addtocard(key) {
    if (listCards[key] == null) {
        listCards[key] == products[key];
        listCards[key].quantity = 1;
    }
    reloadcard();
}

function reloadcard() {
    listCard.innerHTML = '';
    let count = e;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
    })
    total.innerText = totalPrice.toLoca1eString();
    quantity.innerText = count;
}
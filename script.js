function Mc (){
    let previousText = document.querySelector(".chosen-shop");
    previousText.innerHTML = "";

    let mcElement = document.querySelector(".chosen-shop");
    let mc = food.Mc_Donner;

    let mcHTML = `<div class="mc-options">`;

    mc.forEach(function (id){
        mcHTML =
            mcHTML +
        `<table>
            <tr>
                <td>
                    <div class="img">
                        <img src="${id.img}" width="200px" alt="">
                    </div>
                </td>
                <td>
                    <div>
                        <span>${id.name}</span><br>
                        <span>${id.price} pound</span> <span>${id.kcal} kcal</span><br>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-outline">
                                        <input type="number" min="1" placeholder="Amount input" id="typeNumber" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>`;
        /*`<div class="img">
             <img width="200px" src="${id.img}" alt="">
        </div>
        <div>
            <span>${id.price} pound</span> <button>Add</button>
        </div>`;*/

    })
    mcHTML = mcHTML + `</div>`
    mcElement.innerHTML = mcHTML;

}


//KFC

function KFC() {
    let previousText = document.querySelector(".chosen-shop");
    previousText.innerHTML = "";
    let kfcElement = document.querySelector(".chosen-shop");
    //let kfc = food.KFC;
    let kfcHTML = `<button class="kfc-links" id="kfc-meals_for_one" type="button">meals for one</button><br>
        <button type="button" id="kfc-snacks_extras" class="kfc-links" >snacks extras</button><br>
        <button class="kfc-links" id="kfc-vegan" type="button">vegan</button><br>
        <button class="kfc-links" id="kfc-drinks" type="button">drinks</button><br>`;

    /*kfc.forEach(function (id){
        kfcHTML =
            kfcHTML + `
            `
    })
    kfcHTML = kfcHTML + `</div>`*/
    kfcElement.innerHTML = kfcHTML;


    let buttonVegan = document.getElementById("kfc-vegan");
    buttonVegan.addEventListener("click", function () {

        let previousText = document.querySelector(".chosen-shop");
        previousText.innerHTML = "";

        let kfcElement = document.querySelector(".chosen-shop");
        let kfc = food.KFC.vegan;
        let kfcHTML = `<div class="mc-options">`;
        kfc.forEach(function (id) {
            kfcHTML =
                kfcHTML +
                `<table>
            <tr>
                <td>
                    <div class="img">
                        <img src="${id.img}" width="200px" alt="">
                    </div>
                </td>
                <td>
                    <div>
                        <span>${id.name}</span><br>
                        <span>${id.price} pound</span> <span>${id.kcal} kcal</span><br>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-outline">
                                        <input type="number" min="1" placeholder="Amount input" id="typeNumber" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>`;
        })
        kfcHTML = kfcHTML + `</div>`
        kfcElement.innerHTML = kfcHTML;
    });


    let buttonDrinks = document.getElementById("kfc-drinks");
    buttonDrinks.addEventListener("click", function () {
        let previousText = document.querySelector(".chosen-shop");
        previousText.innerHTML = "";

        let kfcElement = document.querySelector(".chosen-shop");
        let kfc = food.KFC.drinks;
        let kfcHTML = `<div class="mc-options">`;
        kfc.forEach(function (id) {
            kfcHTML =
                kfcHTML +
                `<table>
            <tr>
                <td>
                    <div class="img">
                        <img src="${id.img}" width="200px" alt="">
                    </div>
                </td>
                <td>
                    <div>
                        <span>${id.name}</span><br>
                        <span>${id.price} pound</span> <span>${id.kcal} kcal</span><br>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-outline">
                                        <input type="number" min="1" placeholder="Amount input" id="typeNumber" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>`;
        })
        kfcHTML = kfcHTML + `</div>`
        kfcElement.innerHTML = kfcHTML;
    });


    let buttonSnacks = document.getElementById("kfc-snacks_extras");
    buttonSnacks.addEventListener("click", function () {
        let previousText = document.querySelector(".chosen-shop");
        previousText.innerHTML = "";

        let kfcElement = document.querySelector(".chosen-shop");
        let kfc = food.KFC.snacks_extras;
        let kfcHTML = `<div class="mc-options">`;
        kfc.forEach(function (id) {
            kfcHTML =
                kfcHTML +
                `<table>
            <tr>
                <td>
                    <div class="img">
                        <img src="${id.img}" width="200px" alt="">
                    </div>
                </td>
                <td>
                    <div>
                        <span>${id.name}</span><br>
                        <span>${id.price} pound</span> <span>${id.kcal} kcal</span><br>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-outline">
                                        <input type="number" min="1" placeholder="Amount input" id="typeNumber" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>`;
        })
        kfcHTML = kfcHTML + `</div>`
        kfcElement.innerHTML = kfcHTML;
    })


    let buttonKfcMealOne = document.getElementById("kfc-meals_for_one");
    buttonKfcMealOne.addEventListener("click", function () {

        let previousText = document.querySelector(".chosen-shop");
        previousText.innerHTML = "";

        let kfcElement = document.querySelector(".chosen-shop");
        let kfc = food.KFC.meals_for_one;
        let kfcHTML = `<div class="mc-options">`;
        kfc.forEach(function (id) {
            kfcHTML =
                kfcHTML +
                `<table>
            <tr>
                <td>
                    <div class="img">
                        <img src="${id.img}" width="200px" alt="">
                    </div>
                </td>
                <td>
                    <div>
                        <span>${id.name}</span><br>
                        <span>${id.price} pound</span> <span>${id.kcal} kcal</span><br>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-outline">
                                        <input type="number" min="1" placeholder="Amount input" id="typeNumber" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>`;
        })
        kfcHTML = kfcHTML + `</div>`
        kfcElement.innerHTML = kfcHTML;
    })
}




//ICE CREAM
function iceCream(){
    let previousText = document.querySelector(".chosen-shop");
    previousText.innerHTML = "";

    let iceElement = document.querySelector(".chosen-shop");
    let ice = food.ice_cream;

    let iceHTML = `<div class="ice-options">`;

    ice.forEach(function (id){
        iceHTML =
            iceHTML +`
            <div>
                <p>${id.name}, ${id.price} pound</p>
                <table>
                    <tr>
                        <td><span><input type="number" min="1" max="3" placeholder="Amount of balls" id="typeNumber" class="form-control" /></span></td>
                        <td><span><button>Add</button></span></td>
                    </tr>
                </table>
            </div>
            `

    })
    iceHTML = iceHTML + `</div>`
    iceElement.innerHTML = iceHTML;
}


let buttonMc = document.getElementById("button-MC");
buttonMc.addEventListener("click", Mc);

let buttonKFC = document.getElementById("button_KFC");
buttonKFC.addEventListener("click", KFC);

let buttonIceCream = document.getElementById("button-ice-cream");
buttonIceCream.addEventListener("click", iceCream);

let food = {
    "Mc_Donner" : [
        { "id": 1,
            "img": "https://www.thespruceeats.com/thmb/NRuxY8YJmof92GgShYoUFouVeIo=/2105x2105/filters:fill(auto,1)/aqIMG_1498fsq-5b343910c9e77c001a218bd0.jpg",
            "name": "German Doner Kebab",
            "kcal": 599,
            "price": 7.99
        },
        { "id": 2,
            "img": "https://scontent.fgba1-1.fna.fbcdn.net/v/t1.6435-9/95606637_116196573412319_8964008372122681344_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=973b4a&_nc_ohc=zpJUjMeBd28AX9cRjjC&_nc_ht=scontent.fgba1-1.fna&oh=00_AT_uzz2cvKiS5-90UsjE5QZaSTQkIvmizXzxIPrdF7eIhw&oe=62EDD506",
            "name": "Fresh shaurma",
            "kcal": 700,
            "price": 12
        },
        { "id": 3,
            "img": "https://littlesunnykitchen.com/wp-content/uploads/2021/02/Shish-Tawook-Recipe-4.jpg",
            "name": "Chicken shish",
            "kcal": 800,
            "price": 20
        },
        { "id": 4,
            "img": "https://turkishfoodie.com/wp-content/uploads/2018/07/Lamb-Shish-Kebab.jpg",
            "name": "Lamb shish",
            "kcal": 800,
            "price": 18
        },
        { "id": 5,
            "img": "https://the-challenger.ru/wp-content/uploads/2018/02/shutterstock_312906398-800x533.jpg",
            "name": "Tako with beef",
            "kcal": 350,
            "price": 5.99
        }
    ],
    "KFC" : {
        "meals_for_one": [
            {
                "id": 1,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/mealsforone/boxmeals/TRBM.jpg",
                "name": "TRILOGY BOX MEAL",
                "kcal": 1000,
                "price": 17
            },
            {
                "id": 2,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/mealsforone/chicken/4PC_MEAL.jpg",
                "name": "4 PIECE COLONEL’S MEAL",
                "kcal": 1000,
                "price": 16
            },
            {
                "id": 3,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/mealsforone/chicken/mighty-bucket-for-one.jpg",
                "name": "MIGHTY BUCKET FOR ONE MEAL",
                "kcal": 1000,
                "price": 18
            }
        ],
        "snacks_extras": [
            {
                "id": 1,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/snacksextras/sides/corn-cob.jpg",
                "name": "CORN COB",
                "kcal": 100,
                "price": 1
            },
            {
                "id": 2,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/snacksextras/sides/FRIES_RG_SO.jpg",
                "name": "REGULAR FRIES",
                "kcal": 120,
                "price": 2
            },
            {
                "id": 3,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/snacksextras/sides/COLESLAW_RG.jpg",
                "name": "REGULAR COLESLAW",
                "kcal": 30,
                "price": 3
            }
        ],
        "vegan": [
            {
                "id": 1,
                "img": "https://assets.kfcapi.com/fit-in/400x400/products/vegan/VEGANBURGER_ALC.jpg",
                "name": "ORIGINAL RECIPE VEGAN BURGER",
                "kcal": 300,
                "price": 8
            }
        ],
        "drinks": [
            {
                "id": 1,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/drinks/KRUSHEM_OREO_DRINK.jpg",
                "name": "OREO® KRUSHEMS",
                "kcal": 300,
                "price": 4
            },
            {
                "id": 2,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/drinks/KRUSHEM_MALTESER.jpg",
                "name": "MALTESERS® KRUSHEM",
                "kcal": 300,
                "price": 4
            },
            {
                "id": 3,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/drinks/DIETPEPSI_RG.jpg",
                "name": "REGULAR DIET PEPSI",
                "kcal": 200,
                "price": 2.50
            },
            {
                "id": 4,
                "img": "https://assets.kfcapi.com/fit-in/500x500/products/drinks/TANGO_RG.jpg",
                "name": "REGULAR TANGO",
                "kcal": 100,
                "price": 2
            }
        ]
    },

    "ice_cream" :[

        { "id": 1,
            "name": "Vanilla",
            "price": 2
        },
        { "id": 2,
            "name": "Elderflower",
            "price": 2
        },
        { "id": 3,
            "name": "Strawberry",
            "price": 2
        },
        { "id": 4,
            "name": "Blackcurrant",
            "price": 2
        },
        { "id": 5,
            "name": "Pistachio",
            "price": 2
        }
    ],
    "CHINESE" : [
        { "id": 1,
            "img": 1,
            "name": 1,
            "kcal": 1
        },
        { "id": 2,
            "img": 2,
            "name": 2,
            "kcal": 2
        },
        { "id": 3,
            "img": 1,
            "name": 1,
            "kcal": 1
        },
        { "id": 3,
            "img": 1,
            "name": 1,
            "kcal": 1
        },
        { "id": 3,
            "img": 1,
            "name": 1,
            "kcal": 1
        }
    ]
}

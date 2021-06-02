let items;
let productLeft = document.querySelector('.products__left');
let productRight = document.querySelector('.products__right__top');
let productPrice = document.querySelector('.products__right__bottom__buy__price');

let addcart = document.querySelector('#teddy-basket');
const quantity = document.querySelector('#quantity').value;

let str = document.location; //permet de récupérer l'url de la page
let url = new URL(str);
let id = url.searchParams.get("id");
//https://projet-oc-5.herokuapp.com/api/teddies/${id}
//http://localhost:3000/api/teddies/${id}
//Appel de notre API
fetch(`https://projet-oc-5.herokuapp.com/api/teddies/${id}`) //Rappel notre api + l'id de notre produit
    .then(async res => {  //Récupère le tableau json 
        const result = await res.json() //Donne un nom au tableau json récupéré
        items = result //Result deviens items
        //Appel de nos functions
        let infoProduit = {        
            quantity: quantity - 1,
            name: items.name,
            colors: items.colors,
            price: (items.price / 100),
            _id: items._id
        };
        main(infoProduit)         
    })
    .catch((error) => {
        console.log(error);
    })

function main(result){
    produitList()    
    selectcolor(result.colors)    
    addbasket()    
    onloadcartnumber()
    setProduits(result)
    addStorage(result)   
    test()
}


function produitList(){    
    productLeft.innerHTML +=
    `<img class="products__left__picture" src="${items.imageUrl}" alt="Grapefruit slice atop a pile of other slices"> `
    productRight.innerHTML += `
    <div class="products__right__top__container">
        <h2 class="products__right__top__container__title">Ours en peluche "${items.name}"</h2>
        <p class="products__right__top__container__description">${items.description}</p>         
    </div> `
    productPrice.innerHTML += `<p class="products__right__text__container__price">${(items.price / 100)} €</p>`
}



function addbasket(){    

    addcart.addEventListener("click", function() {
    const ProductQuantity = document.querySelector('#quantity').value;
    const quantity = parseInt(ProductQuantity);
    const nbrelement = document.getElementById("basketnumber");
    
    let productnumber = localStorage.getItem('basket');
    productnumber = parseInt(productnumber);
    if(productnumber)
    {
        localStorage.setItem('basket', productnumber + quantity);
        nbrelement.textContent = productnumber + quantity;
    }else{
        localStorage.setItem('basket', quantity);
        nbrelement.textContent = quantity;
    }

    });
}

function onloadcartnumber(){
    const nbrelement = document.getElementById("basketnumber");
    let productnumber = localStorage.getItem('basket');
    if(productnumber){
        nbrelement.textContent = productnumber;
    }

}

function setProduits(result){
    addcart.addEventListener("click", function() { 
    const quantity = document.querySelector('#quantity').value;  
    let cartItems = localStorage.getItem('productInCart');
   
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if (cartItems[result._id] == undefined){
            cartItems = {
                ...cartItems,
                [result._id]: result,
            }
        }
      cartItems[result._id].quantity = parseInt(cartItems[result._id].quantity) + parseInt(quantity);
    }else{
        result.quantity = quantity;
        cartItems = {
            [result._id]: result,
        }
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItems))
    });
}


function addStorage(result) {   
    addcart.addEventListener("click", function() {            
      let idProduct = JSON.parse(localStorage.getItem("id"));  
      if (idProduct === null) {      
        idProduct = [];
      }      
      idProduct.push(result._id);    
      localStorage.setItem("id", JSON.stringify(idProduct));  
    });
    
  }

function selectcolor(result){
    let color = document.querySelector("#color");   

    for (let u = 0; u < result.length; u++) {
            let option = document.createElement("option");
            color.appendChild(option);
            option.textContent = result[u];
            option.value = result[u];
    }
}


function test(){
    console.log(quantity)
    console.log(id)
}
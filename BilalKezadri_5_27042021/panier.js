let stockage = JSON.parse(localStorage.getItem("productInCart"));

const tablehtml = document.querySelector("#table-container");
const tablebody = document.querySelector("#products-body");
const totalprice = document.querySelector("#totalprice");
const btnclear = document.querySelector(".clear");
main(stockage)

function main(result){
  //test()
  if(result === null){
    emptyBasket()
  }else{
    baskettable(result)
    btnCommand()
    calculationPrice(result)
    mainForm(result)
  }
}

function emptyBasket(){
  const basketEmpty = `<table id="table-container" class="table">
  <tr>Panier vide</tr>
  </table>`
  tablehtml.innerHTML = basketEmpty;
 
}

function baskettable(result){
  let containerBasket = [];
  for(let products in result){
     containerBasket = containerBasket + `
     <tr>
      <td class="name-td">Nom : ${result[products].name} </td>
      <td class="quantity-td">quantite : ${result[products].quantity} </td>
      <td class="price-td">Price : ${result[products].price * result[products].quantity} </td>               
     </tr>       
     `
  }
  tablebody.innerHTML = containerBasket;
}

function btnCommand(){
  const btnsup = `<a href="index.html"><button type="button" onclick="clearCommand()" id="clear-command">Annuler la commande</button></a>`
  btnclear.innerHTML = btnsup;
}

function clearCommand(){
  if(stockage != null){
  localStorage.clear() //Vide le local storage
  alert(`Commande annulée. Vous allez être redirigé vers la page d'accueil.`)
  }
}

function calculationPrice(result){
  let totalPrice = []

  for(let products in result){
      let basketPrice = result[products].price * result[products].quantity;    
      totalPrice.push(basketPrice);      
  }
 
  const reducer = (accumulateur, currentValue) => accumulateur + currentValue;
  const total = totalPrice.reduce(reducer, 0); 
  const texttotalprice = `Le prix total est de ${total} `;
  totalprice.innerHTML = texttotalprice;
  
}




// Formulaire

// variable formulaire
let elementOrderId = JSON.parse(localStorage.getItem("id"));

let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");

let regexNom = /[a-zA-Z]/;
let regexPrenom = /[a-zA-Z]/;
let regexCourriel = /.+@.+\..+/;
let regexAdresse = /[0-9] [a-zA-Z]/;
let regexVille = /[a-zA-Z]/;

let TextErrorNom = "";
let TextErrorPrenom = "";
let TextErrorCourriel = "";
let TextErrorAdresse = "";
let TextErrorVille = "";

let ErrorNom = document.getElementById("ErrorNom");
let ErrorPrenom = document.getElementById("ErrorPrenom");
let ErrorEmail = document.getElementById("ErrorEmail");
let ErrorAdresse = document.getElementById("ErrorAdresse");
let ErrorVille = document.getElementById("ErrorVille");



function mainForm(result){
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    regex()
    sendInfo(result)
  });

}

function regex(){

  if (!regexNom.test(nom.value)) {
    TextErrorNom = "Prenom doit contenir des lettres";  
    ErrorNom.textContent = TextErrorNom;
    ErrorNom.style.color = "red";
  } else if ((regexNom.test = nom.value)) {
    ErrorNom.textContent = "";
  }

  if (!regexPrenom.test(prenom.value)) {
    TextErrorPrenom = "Prenom doit contenir des lettres";  
    ErrorPrenom.textContent = TextErrorPrenom;
    ErrorPrenom.style.color = "red";
  } else if ((regexPrenom.test = prenom.value)) {
    ErrorPrenom.textContent = "";
  }

  if (!regexCourriel.test(email.value)) {
    TextErrorCourriel = "Adresse email fausse suivez l 'exemple au dessus ";
    ErrorEmail.textContent = TextErrorCourriel;
    ErrorEmail.style.color = "red";
  } else if ((regexCourriel.test = email.value)) {
    ErrorEmail.textContent = "";
  }

  if (!regexAdresse.test(adresse.value)) {
    TextErrorAdresse = "Adresse non valide doit contenir des chiffre puis des lettres";
    ErrorAdresse.textContent = TextErrorAdresse;
    ErrorAdresse.style.color = "red";
  } else if ((regexAdresse.test = adresse.value)) {
    ErrorAdresse.textContent = "";
  }

  if (!regexVille.test(ville.value)) {
    TextErrorVille = "Ville doit contenir des lettres";
    ErrorVille.textContent = TextErrorVille;
    ErrorVille.style.color = "red";
  } else if ((regexVille.test = ville.value)) {
    ErrorVille.textContent = "";
  }

}

function sendInfo(){
  if (
    regexNom.test == nom.value &&
    regexPrenom.test == prenom.value &&
    regexCourriel.test == email.value &&
    regexAdresse.test == adresse.value &&
    regexVille.test == ville.value
  ) {

   
    let productsId = elementOrderId;
    let elementsOrder = {
      contact: { //Objet contact
        firstName: nom.value.trim(), //trim() supprime les espaces inutiles rajouté par l'utilisateur si il y en a
        lastName: prenom.value.trim(),
        address: adresse.value.trim(),
        city: ville.value.trim(),
        email: email.value.trim(),
      },
      products: productsId,  //Tableau des id des items
    };
    //https://projet-oc-5.herokuapp.com/api/teddies/order
    //http://localhost:3000/api/teddies/order
   fetch(`https://projet-oc-5.herokuapp.com/api/teddies/order`, {
        method: 'POST', //Methode d'envoi
        headers: new Headers({
            "Content-Type": "application/json"//On 'précise' que l'objet envoyé sera au format JSON
        }),
        body: JSON.stringify(elementsOrder), //l'objet est envoyé
    })
        .then(async result_ => {
            const result = await result_.json() //On attend le résultat de resul_.json() pour exécuter le reste
            removeBasket(result); //On stock notre order dans localStorage pour l'utiliser après
        })
        .catch(error => {
            console.log(error);
        })
}
}

function removeBasket(result) {

  let orderIdentity = JSON.parse(localStorage.getItem("orderId"));
  //suppression du local storage des produit panier apres commande si nouvel commande suppression total
  
  localStorage.removeItem("id");   
  localStorage.removeItem("productInCart");
  localStorage.removeItem("basket");
  orderIdentity = [];

  if (orderIdentity != null) {
    localStorage.removeItem("orderId");
    orderIdentity = [];
  }

  // integre la nouvelle commande apres l ancienne commande
  orderIdentity.push(result.orderId);
  localStorage.setItem("orderId", JSON.stringify(orderIdentity));
  //confirmationCommand(orderIdentity);
  location.href = "confirmation.html";
}

function test(){
  let totalPrice = [10, 20, 30] 
  const reducer = (accumulateur, currentValue) => accumulateur + currentValue;
  const total = totalPrice.reduce(reducer, 0); 
  console.log(total);


  if(JSON.parse(localStorage.getItem('orderId')) === null || JSON.parse(localStorage.getItem('orderId')).length < 1){      
      return console.log("orderId : false")
  }else{
      return console.log("orderId : true")
  }

}
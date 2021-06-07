let stockage = JSON.parse(localStorage.getItem("productInCart"));

const tablehtml = document.querySelector(".basket");
const tablebody = document.querySelector("#products-body");
const totalprice = document.querySelector("#products-footer");
const btnclear = document.querySelector(".clear");
main(stockage)

function main(result) {
  //test()
  if (result === null) {
    emptyBasket()
  } else {
    addrowontheTable(result)
    addBottonCommand()
    calculationPrice(result)
    mainForm(result)
  }
}

function emptyBasket() {
  const basketEmpty = `<div class="nothing">Votre panier est vide</div>`
  tablehtml.innerHTML = basketEmpty;

}

function addrowontheTable(result) {
  let containerBasket = [];
  for (let products in result) {
    containerBasket = containerBasket + `
     <tr>
      <td data-th="Article" class="name-td">${result[products].name} </td>
      <td data-th="Quantité" class="quantity-td">${result[products].quantity} </td>
      <td data-th="Prix" class="price-td">${result[products].price * result[products].quantity} €</td>               
     </tr>       
     `
  }
  tablebody.innerHTML = containerBasket;
}

function addBottonCommand() {
  const btnsup = `<a href="index.html"><button type="button" onclick="clearCommand()" id="clear-command">Annuler la commande</button></a>`
  btnclear.innerHTML = btnsup;
}

function clearCommand() {
  if (stockage != null) {
    localStorage.clear() //Vide le local storage
    alert(`Commande annulée. Vous allez être redirigé vers la page d'accueil.`)
  }
}

function calculationPrice(result) {
  let totalPrice = []

  for (let products in result) {
    let basketPrice = result[products].price * result[products].quantity;
    totalPrice.push(basketPrice);
  }

  const reducer = (accumulateur, currentValue) => accumulateur + currentValue;
  const total = totalPrice.reduce(reducer, 0);
  const texttotalprice = `<tr>
      <th class="name-td">Total</th>
      <td></td>
      <td data-th="Total" class="quantity-td">${total} € </td>
     </tr>       
     `


  ;
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

let FormVerificationNom = /[a-zA-Z]/;
let FormVerificationPrenom = /[a-zA-Z]/;
let FormVerificationCourriel = /.+@.+\..+/;
let FormVerificationAdresse = /[0-9] [a-zA-Z]/;
let FormVerificationVille = /[a-zA-Z]/;

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



function mainForm(result) {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (FormVerification()) {
      SendInformationToTheAPI(result)
    }
  });
}

function FormVerification() {
  if (!FormVerificationNom.test(nom.value)) {
    TextErrorNom = "Nom doit contenir des lettres";
    ErrorNom.textContent = TextErrorNom;
    ErrorNom.style.color = "red";
    return false;

  } else {
    ErrorNom.textContent = "";
  }

  if (!FormVerificationPrenom.test(prenom.value)) {
    TextErrorPrenom = "Prenom doit contenir des lettres";
    ErrorPrenom.textContent = TextErrorPrenom;
    ErrorPrenom.style.color = "red";
    return false;
  } else {
    ErrorPrenom.textContent = "";
  }

  if (!FormVerificationCourriel.test(email.value)) {
    TextErrorCourriel = "Adresse email fausse suivez l 'exemple au dessus ";
    ErrorEmail.textContent = TextErrorCourriel;
    ErrorEmail.style.color = "red";
    return false;
  } else {
    ErrorEmail.textContent = "";
  }

  if (!FormVerificationAdresse.test(adresse.value)) {
    TextErrorAdresse = "Adresse non valide doit contenir des chiffre puis des lettres";
    ErrorAdresse.textContent = TextErrorAdresse;
    ErrorAdresse.style.color = "red";
    return false;
  } else {
    ErrorAdresse.textContent = "";
  }

  if (!FormVerificationVille.test(ville.value)) {
    TextErrorVille = "Ville doit contenir des lettres";
    ErrorVille.textContent = TextErrorVille;
    ErrorVille.style.color = "red";
    return false;
  } else {
    ErrorVille.textContent = "";
  }
  return true;
}

function SendInformationToTheAPI() {
  let productsId = elementOrderId;
  let elementsOrder = {
    contact: { //Objet contact
      firstName: nom.value.trim(), //trim() supprime les espaces inutiles rajouté par l'utilisateur si il y en a
      lastName: prenom.value.trim(),
      address: adresse.value.trim(),
      city: ville.value.trim(),
      email: email.value.trim(),
    },
    products: productsId, //Tableau des id des items
  };
  //https://projet-oc-5.herokuapp.com/api/teddies/order
  //http://localhost:3000/api/teddies/order
  fetch(`https://projet-oc-5.herokuapp.com/api/teddies/order`, {
      method: 'POST', //Methode d'envoi
      headers: new Headers({
        "Content-Type": "application/json" //On 'précise' que l'objet envoyé sera au format JSON
      }),
      body: JSON.stringify(elementsOrder), //l'objet est envoyé
    })
    .then(async result_ => {
      const result = await result_.json() //On attend le résultat de resul_.json() pour exécuter le reste
      RemoveLocalStorage(result); //On stock notre order dans localStorage pour l'utiliser après
    })
    .catch(error => {
      console.log(error);
    })
}

function RemoveLocalStorage(result) {

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

function test() {
  let totalPrice = [10, 20, 30]
  const reducer = (accumulateur, currentValue) => accumulateur + currentValue;
  const total = totalPrice.reduce(reducer, 0);
  console.log(total);


  if (JSON.parse(localStorage.getItem('orderId')) === null || JSON.parse(localStorage.getItem('orderId')).length < 1) {
    return console.log("orderId : false")
  } else {
    return console.log("orderId : true")
  }

}
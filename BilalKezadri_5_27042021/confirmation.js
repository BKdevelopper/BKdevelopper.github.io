var IdCommand = JSON.parse(localStorage.getItem("orderId"));

if (IdCommand !== null) {
  let confirmation = document.querySelector('.confirmation');
  confirmation.textContent =
    `Votre commande n° : ${IdCommand} à bien été prise en compte`
}
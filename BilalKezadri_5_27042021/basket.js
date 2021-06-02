const nbrelement = document.getElementById("basketnumber");
let productnumber = localStorage.getItem('basket');
if(productnumber){
    nbrelement.textContent = productnumber;
}
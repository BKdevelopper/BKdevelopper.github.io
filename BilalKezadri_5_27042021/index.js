let items;
let $ProductInformation = document.querySelector('.container__produits');
//https://projet-oc-5.herokuapp.com/api/teddies
//http://localhost:3000/api/teddies
//Appel de notre API
fetch("https://projet-oc-5.herokuapp.com/api/teddies")
    .then(async result_ => { //On rend asynchrone notre fonction
        const result = await result_.json() //Le reste du code s'execute après l'execution de la promesse 
        result.forEach(result => {
            items = result //Result deviens teddy
            //Appel de nos functions
            ProductInformation()
        })
    })
    .catch(error => {
        console.log(error);
    })

    function ProductInformation(){
      
        $ProductInformation.innerHTML +=
        (`<div class="container__produits__box"> 
            <a href="./produit.html?id=${items._id}">                    
                <img class="container__produits__box__picture" src="${items.imageUrl}" alt="img">
                <div class="container__produits__box__text">
                <h2 class="container__produits__box__text__name">Peluche ${items.name}</h2>  
                <div class="container__produits__box__text__price">
                        <del class="container__produits__box__text__price-reduc">${parseInt((items.price / 100) * 1.1) } €</del>  
                        <p class="container__produits__box__text__price-true"><b>${items.price / 100 } € </b></p> 
                </div>            
                </div>
            </a>
            <p class="container__produits__box__promo">-10%</p>                                
        </div>
        `)
    }
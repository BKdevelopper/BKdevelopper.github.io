let items;
let $productList = document.querySelector('#container_produits');
//https://projet-oc-5.herokuapp.com/api/teddies
//http://localhost:3000/api/teddies
//Appel de notre API
fetch("https://projet-oc-5.herokuapp.com/api/teddies")
    .then(async result_ => { //On rend asynchrone notre fonction
        const result = await result_.json() //Le reste du code s'execute après l'execution de la promesse 
        result.forEach(result => {
            items = result //Result deviens teddy
            //Appel de nos functions
            productList()
        })
    })
    .catch(error => {
        console.log(error);
    })

    function productList(){
      
        $productList.innerHTML +=
        `<img class="teddy-picture" src="${items.imageUrl}" style="width:20%;" alt="Grapefruit slice atop a pile of other slices">
        <div>
            <h2>${items.name}</h2>
            <p>${items.description}</p> 
            <div>
                <a href="./produit.html?id=${items._id}">
                    <button type="button" id="tedddy-infos">Plus d'informations</button>
                </a>
            </div>               
        </div>   
    </div>`
    }
// gera a lista de categorias na página "nossos produtos"
var productsPageValidation = false;

// Nome do produto ou categoria 
var title = document.getElementById('title')

let generateCategories = ()=>{
    let categoriesList = document.getElementById("containerProducts")
    return (categoriesList.innerHTML = categories.map((x) => { 
        let {id,name,description,img }=x;


        return`
                
                    <div onclick ="generateProducts(${id})" id="${id}" class="blockProducts">
                        <div class="productsDetails">
                            <h3 >${name}</h3>
                            <p >${description} </p>
                        </div>
                        <div class="imgProducts">
                            <img  src=${img}>
                        </div>
                    </div>
                
            `
    
    }).join(""))

       
}


let generateProducts = (id)=>{

    let productsList = document.getElementById("containerProducts")
    
    return (productsList.innerHTML = id.map((x) => { 
        let {id,name,description,img,categorie }=x;
        
        title.innerHTML = categorie
        
        productsPageValidation = true
        

        

        return`
                
                    <div id="${id}" class="blockProducts">
                        <div class="productsDetails">
                            <h3 >${name}</h3>
                            <p >${description} </p>
                        </div>
                        <div class="imgProducts">
                            <img  src=${img}>
                        </div>
                    </div>
                
            `
     
    }).join(""))
    
}



// generateCategories()

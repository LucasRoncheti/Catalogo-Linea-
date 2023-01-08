//função para voltar uma página no histórico 

let backPage = () =>{
    if(productsPageValidation === true){
        generateCategories()
        title.innerHTML = "Nossos Produtos"
    }else{
        window.history.back()
    }
    
}
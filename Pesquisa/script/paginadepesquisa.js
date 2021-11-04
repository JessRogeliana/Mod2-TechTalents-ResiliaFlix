class Model 
{
    constructor() {}
}
  
class View 
{
    constructor() {}
}
  
class Controller 
{
    constructor(model, view) 
    {
        this.model = model
        this.view = view
    }
}

function storeUserInput()//pega a string inserida no formulário de busca
{
        alert("Busca realizada!")
        let userInput = document.getElementById("search-form").value;
        return userInput
        //alert(userInput) teste de funcionalidade
}

function validateInput()//mostra mensagem "digite um nome!" caso o usuário não digite nada
{
    let userInput = storeUserInput();

    if (userInput != "")
    {
        alert ("continuar busca!")
        return userInput
    }
    else
    {
        alert ("Digite um nome!")//placeholder, substituir pelo toast
    }
}

function triggerSearch()
{
    validateInput();
}


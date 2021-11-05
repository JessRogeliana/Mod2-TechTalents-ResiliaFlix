document.getElementById("search-form").addEventListener("search", function(){triggerSearch()})//eventListener

var resultsArray = []

function triggerSearch()//eventHandler
{
    let movieArray = createMoviesList()
    let userInput = document.getElementById("search-form").value;
    let userInputLCase = userInput.toLowerCase()
    let askForInput = "Digite um nome!"

    if (userInput != "")//valida se o input é válido e dá uma mensagem de erro em caso negativo.
    {
        //alert (userInputLCase) teste de funcionalidade

        for (let i = 0; i < movieArray.length; i++)
        {
            //alert(movieArray[i]) teste de funcionalidade
            if (movieArray[i].includes(userInputLCase))
            {
                resultsArray.push(movieArray[i])
                //alert (resultsArray)
            }
            else
            {
                continue
            }
        }

        if(resultsArray.length == 0)
        {
            alert("Filme não encontrado!")
        }
        else
        {
            return resultsArray
        }
    }
    else
    {
        alert(askForInput)
    }
}

function modifyCards()
{

    let arrToString = ""
    for(let i = 0; i < resultsArray.length; i++)
    {
        arrToString = resultsArray[i]
        alert(arrToString)

        switch (arrtoString)
        {
            case "a fantástica fábrica de chocolate":
                alert("a fantástica fábrica de chocolate")
            break

            case "a velha guarda":
                alert("a velha guarda")
            break

            case "batman: o cavaleiro das trevas ressurge":
                alert("batman: o cavaleiro das trevas ressurge")
            break

            case "constantine":
                alert("constantine")
            break

            case "harry potter e a pedra filosofal":
                alert("harry potter e a pedra filosofal")
            break

            case "kate":
                alert("kate")
            break

            case "marrocos":
                alert("marrocos")
            break

            case "matrix":
                alert("matrix")
            break

            case "onde vivem os monstros":
                alert("onde vivem os monstros")
            break

            case "orgulho e preconceito":
                alert("orgulho e preconceito")
            break

            case "os croods":
                alert("os croods")
            break

            case "os croods 2":
                alert("os croods 2")
            break
        }
    }
}

function createMoviesList()
{
    let moviesList = ["a fantástica fábrica de chocolate", "a velha guarda", "batman: o cavaleiro das trevas ressurge", "constantine", "harry potter e a pedra filosofal", "kate", "marrocos", "matrix", "onde vivem os monstros", "orgulho e preconceito", "os croods", "os croods 2"]
    return moviesList
}

modifyCards()
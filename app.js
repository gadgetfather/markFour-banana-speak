var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area")
var outputDiv = document.querySelector("#output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverURL + "?" +"text="+ text
}

function errorHandler(error){
    console.log("error is here", error)
    alert("Something wrong with server try again later!")
}



function clickHandler() {

    //outputDiv.innerText = "sdasdas "+ txtInput.value;
    var Inputtext = txtInput.value
    fetch(getTranslationUrl(Inputtext))
        .then(response => response.json())
        .then(json => {var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
            })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)
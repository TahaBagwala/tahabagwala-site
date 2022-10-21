var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#translate-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured. ", error);
    alert("Sorry! Something went wrong with the server. Please try again after some time.")
}

function clickHandler () {
    var inputText = txtInput.value;

    fetch(constructURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
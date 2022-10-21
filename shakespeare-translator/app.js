var button = document.querySelector("#translate-btn");
var inputTxt = document.querySelector("#input");
var outputTxt = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function constructURL(input){
    return serverURL + "?text=" + input;
};
function errorHandler (error){
    console.log("Error: ",error);
    alert("Something went wrong with the server. Can you try again after some time?");
};
function clickHandler(){
    fetch(constructURL(inputTxt.value))
        .then(res => res.json())
        .then(jsonfile => outputTxt.innerText = jsonfile.contents.translated)
        .catch(errorHandler)
};

button.addEventListener("click",clickHandler);
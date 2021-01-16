/**
 * This is the API we'll be working with:
 * https://disease.sh/

 * This is a free API that will give us up to date stats regarding COVID-19.

 */

function iLoaded(){
    console.log("I loaded!");
}

function iGotClicked(){
    fetch('https://disease.sh/v3/covid-19/all').then(response => {
        return response.json();
    }).then(parsedResponse => {
        document.getElementById('update-me').innerText = "Cases: " + parsedResponse.cases;
    });
}
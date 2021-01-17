/**
 * This is the API we'll be working with:
 * https://disease.sh/

 * This is a free API that will give us up to date stats regarding COVID-19.

 */

function buttonClicked(){
    getCovidStats();
    getMSFTStockData();
}

function getCovidStats(){
    fetch('https://disease.sh/v3/covid-19/all').then(response => {
        return response.json();
    }).then(parsedResponse => {
        document.getElementById('update-me').innerText = "Cases: " + parsedResponse.cases;
    });
}

function getMSFTStockData(){
    fetch("https://www.alphavantage.co/query?apikey=BGV184QL4OKWK73U&function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min", {
        "method": "GET",
        "headers": {
            "cookie": "__cfduid=d1eb3de7b8a0ee634119793c96ef5fa6d1610858853"
        }
    }).then(response => {
        return response.json()
    }).then(parsedResponse => {
        console.log(parsedResponse);
    }).catch(err => {
        console.error(err);
    });
}
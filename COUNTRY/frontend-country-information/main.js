const button = document.getElementById('search-button');
button.addEventListener('click', getCountryData);
//console.log(button);
// sla de referentie op naar het input-veld en zet er een event listener op die setQuery aanroept
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', setQuery)
//console.log(searchBar);
// sla de referentie naar het "anker" element op waarin we alle landen gaan toevoegen
const countryContainer = document.getElementById('countries');
console.log(countryContainer);
// maak query een globale variabele, zodat we deze zowel in de setQuery als in de getCountryData functie kunnen gebruiken
let query = '';

// geef het event object mee en haal de waarde eruit. Als er op 'enter' gedrukt wordt,
function setQuery(e) {
    query = e.target.value;
    if (e.keyCode === 13) {
        getCountryData();
    }
}

async function getCountryData() {
    // zorg ervoor dat als er een request gemaakt wordt, het zoekveldt leeggemaakt wordt
    searchBar.value = '';

    // sla de referentie naar onze error-message op en haal de tekst weg bij elke nieuwe zoekopdracht
    // (als er iets mis gaat, wordt 'ie in het catch blok opnieuw toegevoegd)
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
console.log(errorMessage);
    // sla de referentie op naar de country-container waarin de informatie van een land staat
    const previousSearchResult = document.getElementById('country');
    // als deze referentie bestaat (en er dus al een land op de pagina wordt weergegeven) dan halen we deze eerst weg
    if (previousSearchResult) {
        countryContainer.removeChild(previousSearchResult);
    }

    try {
        // maak een GET request naar het endpoint en voeg de searchquery als dynamische parameter in
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`);
        // haal het land-object uit de response
        const countryInfo = result.data[0];

        console.log(countryInfo);

        // maak een country-container en geef hem de id country
        // (zodat we 'm de volgende keer kunnen herkennen en kunnen checken of er al een land op de pagina staat)
        const country = document.createElement('div');
        country.setAttribute('id', 'country');

        // maak de <img> tag om de vlag in weer te geven
        const flag = document.createElement('img');
        // stop de image url in het src attribuut van img
        flag.setAttribute('src', countryInfo.flag);
        flag.setAttribute("width", "150px")
        country.appendChild(flag);

        // maak <h1> element voor de titel
        const countryName = document.createElement('h1');
        countryName.textContent = countryInfo.name;
        country.appendChild(countryName);

        // maak een <p> voor de informatie
        const population = document.createElement('p');
        population.textContent = `${countryInfo.name} is situated in ${countryInfo.subregion}. It has a population of ${countryInfo.population} people.`;
        country.appendChild(population);

        // maak een <p> voor nog meer informatie
        const capital = document.createElement('p');
        capital.textContent = `The capital is ${countryInfo.capital} ${createCurrencyDescription(countryInfo.currencies)}`;
        country.appendChild(capital);

        // maak een <p> voor de talen
        const languages = document.createElement('p');
        languages.textContent = createLanguageDescription(countryInfo.languages);
        country.appendChild(languages);

        // voeg de country <div> toe aan de countryContainer
        countryContainer.appendChild(country);
    } catch(e) {
        console.error(e);
        errorMessage.textContent = `${query} bestaat niet. Probeer het opnieuw!`;
    }
}

function createLanguageDescription(languages) {
    let output = 'They speak ';
    for (let i = 0; i < languages.length; i++) {
        if (i === languages.length - 1 && languages.length > 1 ) {
           return output = output + " and " + languages[i].name;
        }
        if (languages.length === 2 || i === languages.length - 2 || languages.length === 1) {
            output = output + languages[i].name;
        }
        else {
            output = output + languages[i].name + ", ";
        }
    } return output;
}

function createCurrencyDescription(currencies) {
    let output = 'and you can pay with ';

    if (currencies.length === 2) {
        return output + `${currencies[0].name} and ${currencies[1].name}'s`;
    }
    if (currencies.length ===1 ) {

        return output + `${currencies[0].name}'s`;
    }
}



// console.log("COUNTRY");
//
// const searchButton = document.getElementById("search-button");
// searchButton.addEventListener("click", getCountryInformation);
//
// const searchInfo = document.getElementById("search-bar");
// searchInfo.addEventListener('keyup', logKey);
//
// const countryContainer = document.getElementById("countries");
//
// let query = " ";
//
// function logKey(e) {
//     query = e.target.value;
//     if (e.keyCode === 13){
//         getCountryInformation();
//     }
//
// async function getCountryInformation() {
//         searchInfo.value = '';
//
//         const errorMessage = document.getElementById('error-message');
//         errorMessage.textContent = '';
//
//     const previousSearchResult = document.getElementById('country');
//     // als deze referentie bestaat (en er dus al een land op de pagina wordt weergegeven) dan halen we deze eerst weg
//     if (previousSearchResult) {
//         countryContainer.removeChild(previousSearchResult);
//     }
//
//     try {
//         // maak een GET request naar het endpoint en voeg de searchquery als dynamische parameter in
//         const result = await axios.get(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`);
//         // haal het land-object uit de response
//         const countryInfo = result.data[0];
//
//         console.log(countryInfo);
//
//         // maak een country-container en geef hem de id country
//         // (zodat we 'm de volgende keer kunnen herkennen en kunnen checken of er al een land op de pagina staat)
//         const country = document.createElement('div');
//         country.setAttribute('id', 'country');
//
//         // maak de <img> tag om de vlag in weer te geven
//         const flag = document.createElement('img');
//         // stop de image url in het src attribuut van img
//         flag.setAttribute('src', countryInfo.flag);
//         country.appendChild(flag);
//
//         // maak <h1> element voor de titel
//         const countryName = document.createElement('h1');
//         countryName.textContent = countryInfo.name;
//         country.appendChild(countryName);
//
//         // maak een <p> voor de informatie
//         const population = document.createElement('p');
//         population.textContent = `${countryInfo.name} is situated in ${countryInfo.subregion}. It has a population of ${countryInfo.population} people.`;
//         country.appendChild(population);
//
//         // maak een <p> voor nog meer informatie
//         const capital = document.createElement('p');
//         capital.textContent = `The capital is ${countryInfo.capital} and you can pay with ${createCurrencyDescription(countryInfo.currencies)}`;
//         country.appendChild(capital);
//
//         // maak een <p> voor de talen
//         const languages = document.createElement('p');
//         languages.textContent = createLanguageDescription(countryInfo.languages);
//         country.appendChild(languages);
//
//         // voeg de country <div> toe aan de countryContainer
//         countryContainer.appendChild(country);
//     } catch(e) {
//         console.error(e);
//         errorMessage.textContent = `${query} bestaat niet. Probeer het opnieuw!`;
//     }
// }
//
//
// //
// //     const country = "congo";
// //     //console.log(country);
// //     const urlCountry = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
// //     //console.log("COUNTRY GOES HERE", urlCountry, axios);
// //     const responseCountry = await axios.get(urlCountry);
// //     console.log("INFO: ", responseCountry);
// //     //console.log(responseCountry.data[0].name);
// //     const dataCountry = responseCountry.data[0];
// //     //console.log("CHECK DATA: ", dataCountry);
// //
// //
// //     const infoCountry = document.createElement('h1');
// //     infoCountry.textContent = `${dataCountry.name} is situated in ${dataCountry.region}. It has a population of ${dataCountry.population} people.`
// //
// //     console.log(infoCountry);
// //
// //     const countryCapital = `The capital is ${dataCountry.capital}`;
// //     console.log(countryCapital);
// //
// //     const amountCurrencies = dataCountry.currencies;
// //     function formatCurrencies() {
// //     if (amountCurrencies.length === 1) {
// //         return  `and you can pay with ${amountCurrencies[0].name}'s`;
// //     }
// //     if (amountCurrencies.length > 1){
// //         return `and you can pay with ${amountCurrencies[0].name}'s and ${amountCurrencies[1].name}'s`;
// //     }
// // }
// console.log(formatCurrencies());
//     const languages = dataCountry.languages;
// function createLanguages() {
//     let output = "They speak ";
//
//     for (let i = 0; i < languages.length; i++) {
//         if (i === languages.length - 1 && languages.length > 1 ) {
//            return output = output + " and " + languages[i].name;
//         }
//         if (languages.length === 2 || i === languages.length - 2 || languages.length === 1) {
//             output = output + languages[i].name;
//         }
//         else {
//             output = output + languages[i].name + ", ";
//         }
//     } return output;
// }console.log(createLanguages());
//
//
//
// }

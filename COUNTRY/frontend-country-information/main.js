console.log("COUNTRY");

const searchButton = document.getElementById("search-button");
//console.log(searchButton);
searchButton.addEventListener("click", getCountryInformation);


async function getCountryInformation() {
    const country = "Belgium";
        console.log(country);
    const urlCountry = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
        console.log("COUNTRY GOES HERE", urlCountry, axios);
    const responseCountry = await axios.get(urlCountry);
        console.log("INFO: ", responseCountry);
}

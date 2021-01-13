// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false
// ==========================================
const bigger = 10 > 20;
if (!bigger){
    console.log(bigger);
}

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true
// ==========================================
const unequal = 10 != 11;
if (unequal){
    console.log(unequal);
}

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false
// ==========================================
const check = "zoet" === "sappig";
if (!check){
    console.log(check);
}

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!'
// ==========================================
const rapport = 9;
if (rapport > 8) {
    console.log("Cum laude!");
}

// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================
const isRaining = false;
const temperature = 11;
if ((!isRaining) && (temperature > 21)) {
    console.log("Je kunt een korte broek aan");
}
if ((isRaining) || (temperature < 12)) {
    console.log("Doe een jas aan");
}
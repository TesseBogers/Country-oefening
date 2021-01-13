// ==========================================
// 1. Maak een for-loop die 3 keer "Hoera!" in de console logt
// ==========================================
for (let i = 0; i < 3; i++) {
    console.log("Hoera!")
}

// ==========================================
// 2. Maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan.
// Vanaf het getal 6 komt er >> voor ieder getal te staan.
// geeft:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================
for (let i = 0; i < 10; i++) {
    //console.log(i);
    if (i < 3){
        console.log(i);
    }
    if (i >= 3 && i < 6){
        console.log("> " + i);
    }
    if (i >= 6){
        console.log(">> " + i)
    }
}

// ==========================================
// 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// geeft:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// ....
// 15 is oneven

// tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// hier bestaat een speciale operator voor
// ==========================================
for (let i = 0; i < 16; i++) {
    if (i % 2 == 0){
        console.log(i + " is even");
    }
    if (i % 2 == 1) {
        console.log(i + " is oneven");
    }

}

function calculerTauxEmprunt() {
    const typeVehicule = document.getElementById("typeVehicule").value;
    const energieVehicule = document.getElementById("energieVehicule").value;
    const kilometrage = document.getElementById("kilometrage").value;
    const anneeVehicule = document.getElementById("anneeVehicule").value;
    const passagers = parseInt(document.getElementById("passagers").value);

    // Vérification du nombre de passagers pour qu'il ne dépasse pas 4
    if (passagers > 4) {
        alert("Le nombre de passagers ne peut pas dépasser 4.");
        return;
    }

    const scoresEcologiques = {
        'citadine': 8,
        'cabriolet': 6,
        'berline': 6.5,
        'suv/4x4': 4,
        'essence': 5,
        'électrique': 9,
        'gaz': 6,
        'diesel': 4,
        'hybride': 7,
        '5000-10000': 9,
        '10000-15000': 7,
        '15000-20000': 5,
        '20000-25000': 3,
        '25000-30000': 1,
        '1960-1970': 1,
        '1970-1980': 2,
        '1990-2000': 4,
        '2000-2010': 5,
        'après 2010': 7
    };

    const scoreVehicule = scoresEcologiques[typeVehicule] + scoresEcologiques[energieVehicule] + scoresEcologiques[kilometrage] + scoresEcologiques[anneeVehicule];

    let tauxEmprunt;
    if (scoreVehicule <= 10) {
        tauxEmprunt = 0.03;
    } else if (scoreVehicule <= 15) {
        tauxEmprunt = 0.0274;
    } else if (scoreVehicule <= 25) {
        tauxEmprunt = 0.0252;
    } else if (scoreVehicule <= 33) {
        tauxEmprunt = 0.021;
    } else {
        tauxEmprunt = 0.0185;
    }

    if (passagers === 1) {
        tauxEmprunt += 0.0011;
    } else if (passagers === 2) {
        tauxEmprunt -= 0.0017;
    } else if (passagers === 3) {
        tauxEmprunt -= 0.0029;
    } else if (passagers === 4) {
        tauxEmprunt -= 0.0053;
    }

    const resultat = document.getElementById("resultat");
    resultat.innerHTML = "Le taux d'emprunt est de " + (tauxEmprunt * 100).toFixed(2) + "%.";
}

"use strict";
let isDone = true;
let decimal = 45;
let fullName = "Elie";
let sayHello = `Say hello ${fullName}`;
let desNombres = [1, 2, 3];
let desNombre = [1, 2, 3, 4];
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Blueu"] = 2] = "Blueu";
})(Couleur || (Couleur = {}));
let couleur = Couleur.Blueu;
console.log(couleur);
// Toute sorte de type
let uneVariable = "La soupe";
// Function qui ne renvoit rien
function funky() {
    alert("une alerte");
}
let uneChaine = "Ceci est une chaine";
let taille1 = uneChaine.length;
let taille2 = uneChaine.length;

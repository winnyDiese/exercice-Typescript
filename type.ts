

let isDone:boolean = true
let decimal:number = 45
let fullName:String = "Elie"
let sayHello:String = `Say hello ${fullName}`

let desNombres:number[] = [1,2,3]
let desNombre: Array<number> = [1,2,3,4]

enum Couleur {Rouge,Vert,Blueu}
let couleur:Couleur = Couleur.Blueu
console.log(couleur)

// Toute sorte de type
let uneVariable:any = "La soupe"
// Function qui ne renvoit rien
function funky():void {
    alert("une alerte")
}

let uneChaine:any = "Ceci est une chaine"
let taille1:number = (<string>uneChaine).length
let taille2:number = (uneChaine as string).length


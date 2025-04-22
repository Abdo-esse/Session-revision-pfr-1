/*
Exercice 2 : Classement des étudiants par niveau
js
Copy
Edit
let students = [
  { name: "Khadija", results: { maths: 18, francais: 17, anglais: 19 } },
  { name: "Youssef", results: { maths: 14, francais: 12, anglais: 13 } },
  { name: "Meryem", results: { maths: 9, francais: 8, anglais: 10 } },
  { name: "Amine", results: { maths: 15, francais: 16, anglais: 15 } }
];
🎯 Objectif :
Créer une fonction niveauEtudiants() qui retourne :

js
Copy
Edit
[
  { name: "Khadija", moyenne: 18, niveau: "Excellent" },
  { name: "Youssef", moyenne: 13, niveau: "Bien" },
  { name: "Meryem", moyenne: 9, niveau: "Faible" },
  { name: "Amine", moyenne: 15.33, niveau: "Très Bien" }
]
Niveaux :

≥ 17 : "Excellent"

14–16.99 : "Très Bien"

10–13.99 : "Bien"

< 10 : "Faible"
*/

let students = [
    { name: "Khadija", results: { maths: 18, francais: 17, anglais: 19 } },
    { name: "Youssef", results: { maths: 14, francais: 12, anglais: 13 } },
    { name: "Meryem", results: { maths: 9, francais: 8, anglais: 10 } },
    { name: "Amine", results: { maths: 15, francais: 16, anglais: 15 } }
  ];


function niveauEtudiants() {
  let resultat=[]; 
    for(let i=0; i<students.length;i++){
      let moyenneResults=moyen(students[i].results)
      resultat.push(
        { name: students[i].name, moyenne: moyenneResults, niveau: trouveNiveau(moyenneResults)}
      )
    }
    return resultat
  }

  function moyen(moyenneResults){
    let sum=0;
    let count=0
    for (let key in moyenneResults) {
       sum+=moyenneResults[key]
       count++
  }
  return parseFloat((sum/count).toFixed(2) )   
  }
 
  function trouveNiveau(moyenneResults){
    if (moyenneResults<10) {
      return "Faible"
    } else if(moyenneResults>=10&&moyenneResults<14) {
      return "Bien"
    } else if(moyenneResults>=14&&moyenneResults<17) {
      return "Très Bien"
    }else if(moyenneResults>=17){
      return "Excellent"
    }
  }

console.log(niveauEtudiants())

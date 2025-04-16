let candidatures = []
var countId=1


function ajouterCandidature(nom, age, projet){

    let candidat={
        id: countId++,
        nom: nom,
        age: age,
        projet: projet,
        statut: "en attente"
    }
    candidatures.push(candidat)
}

function afficherToutesLesCandidatures(){
    console.table(candidatures)
}

function validerCandidature(id){
    candidatures.forEach(candidat => {
        if (candidat.id==id) {
           return candidat.statut="validée"
        }
    });
}
function rejeterCandidature(id){
    candidatures.forEach(candidat => {
        if (candidat.id==id) {
           return candidat.statut="rejetée"
        }
    });
}

function rechercherCandidat(nom){
    for (let i = 0; i < candidatures.length; i++) {
        if (candidatures[i].nom===nom) {
            return console.table(candidatures[i])
        }  
    }
    return console.log('not existe');
}

function filtrerParStatut(statut){
    let candidaturesFitrer=[]
    candidatures.forEach(candidat => {
        if (candidat.statut===statut) {
            return candidaturesFitrer.push(candidat)
        }
    });
    console.table(candidaturesFitrer);
    
}
function nbrandidatures(statut){
    let candidaturesFitrer=[]
    candidatures.forEach(candidat => {
        if (candidat.statut===statut) {
            return candidaturesFitrer.push(candidat)
        }
    });
    return candidaturesFitrer.length
    
}

function statistiques(){
    console.table(
        {
            "Total des candidatures :": candidatures.length,
            "Validées" :nbrandidatures("validée") ,
            "Rejetées " : nbrandidatures("rejetée") ,
            "En attente" : nbrandidatures("en attente")      
        }
    )
}
function trierParAge(desc = false){
    let AgeCandidate=[]
    candidatures.forEach(candidat => {
       AgeCandidate.push(candidat.age);
       });
       if (desc) {
        console.log(AgeCandidate.sort((a,b)=>b-a));
       }else{
        console.log(AgeCandidate.sort((a,b)=>a-b));        
       }        
}
function trierParNom(){
    let nomCandidate=[]
    candidatures.forEach(candidat => {
       nomCandidate.push(candidat.nom);
       });
        console.log(nomCandidate.sort());            
}

function resetSysteme(){
    candidatures.splice(0)
}

ajouterCandidature("Fatima Zahra", 22, "Plateforme de tutorat");
ajouterCandidature("Mohamed Amine", 119, "Application de dons alimentaires");
ajouterCandidature("Abdo", 12, "Application de dons alimentaires");

rejeterCandidature(1);
rejeterCandidature(2);

afficherToutesLesCandidatures()
rechercherCandidat("Abdo")
filtrerParStatut("rejetée")
statistiques()

trierParAge(true)
trierParNom()
resetSysteme()
afficherToutesLesCandidatures()
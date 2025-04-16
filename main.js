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
            candidat.statut="validée"
        }
    });
}
function rejeterCandidature(id){
    candidatures.forEach(candidat => {
        if (candidat.id==id) {
            candidat.statut="rejetée"
        }
    });
}
function rechercherCandidat(nom){
    candidatures.forEach(candidat => {
        if (candidat.nom===nom) {
            return console.table(candidat)
        }
    });
}
function filtrerParStatut(statut){
    let candidaturesFitrer=[]
    candidatures.forEach(candidat => {
        if (candidat.statut===statut) {
            candidaturesFitrer.push(candidat)
        }
    });
    console.table(candidaturesFitrer);
    
}
function nbrandidatures(statut){
    let candidaturesFitrer=[]
    candidatures.forEach(candidat => {
        if (candidat.statut===statut) {
            candidaturesFitrer.push(candidat)
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
    let nomCandidate=[]
    candidatures.forEach(candidat => {
       nomCandidate.push(candidat.age);
       });
       if (desc) {
        console.log(nomCandidate.sort((a,b)=>b-a));
       }else{
        console.log(nomCandidate.sort((a,b)=>a-b));        
       }        
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
rechercherCandidat("Fatima ")
filtrerParStatut("rejetée")
statistiques()

trierParAge(true)
resetSysteme()
afficherToutesLesCandidatures()
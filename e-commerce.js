let ventes = [
    { id: 1, categorie: "Electronique", produits: [{ nom: "TV", prix: 500 }, { nom: "PC", prix: 1000 }] },
    { id: 2, categorie: "Maison", produits: [{ nom: "Chaise", prix: 100 }, { nom: "Table", prix: 300 }] },
    { id: 3, categorie: "Electronique", produits: [{ nom: "Smartphone", prix: 800 }] },
    { id: 4, categorie: "Maison", produits: [{ nom: "Canapé", prix: 700 }] },
  ];


  function statistiquesVentes(){
    let resultat=[];
    for (let i = 0; i < ventes.length; i++) {           
     let index= resultat.findIndex(item=>ventes[i].categorie==item.categorie )
        if(index==-1){
           let item={
            categorie:ventes[i].categorie,
            totalProduits: ventes[i].produits.length,
            totalVentes: sumPrix(ventes[i].produits),
           }
           resultat.push(item)
        }else{
            for (let j = 0; j < resultat.length; j++) {
                if (resultat[j].categorie==ventes[i].categorie) {
                    resultat[j].totalProduits+=ventes[i].produits.length;
                    resultat[j].totalVentes+=sumPrix(ventes[i].produits)                    
                }                
            }
        }    
    }
    return resultat
}

function sumPrix(array){
    let sum=0;
    
    for (let i = 0; i < array.length; i++) {
        sum+=array[i].prix;
    }
    return sum
}
console.log(statistiquesVentes())

//   [
//     { categorie: "Electronique", totalProduits: 3, totalVentes: 2300 },
//     { categorie: "Maison", totalProduits: 3, totalVentes: 1100 }
//   ]

const movies = [
    { title: "Inception", year: 2010, genre: "Science-fiction", collection: 800 },
    { title: "Titanic", year: 1997, genre: "Romance", collection: 2187 },
    { title: "Avengers", year: 2012, genre: "Action", collection: 1500 },
    { title: "Interstellar", year: 2014, genre: "Science-fiction", collection: 675 },
    { title: "The Notebook", year: 2004, genre: "Romance", collection: 150 },
    { title: "Mad Max: Fury Road", year: 2015, genre: "Action", collection: 378 }
];
// ha l output
// {
//     "Science-fiction": [
//         { title: "Inception", year: 2010, collection: 800 },
//         { title: "Interstellar", year: 2014, collection: 675 }
//     ],
//     "Romance": [
//         { title: "Titanic", year: 1997, collection: 2187 },
//         { title: "The Notebook", year: 2004, collection: 150 }
//     ],
//     "Action": [
//         { title: "Avengers", year: 2012, collection: 1500 },
//         { title: "Mad Max: Fury Road", year: 2015, collection: 378 }
//     ]
// }

function trie(){
    let resultats={};
    for(let i=0;i<movies.length ;i++){

        if(!resultats[movies[i].genre]){
            resultats[movies[i].genre]=[]
        }   
        resultats[movies[i].genre].push(                  
        {title: movies[i].title,year:movies[i].year,collection:movies[i].collection}
        )   
    }
    return resultats
}

console.log(trie())
let students = [
    { name: "Alice", grades: [12, 14, 10, 16] },
    { name: "Bob", grades: [8, 9, 7] },
    { name: "Charlie", grades: [13, 13, 12] },
    { name: "Diana", grades: [6, 8, 9, 7] },
  ];
   // [
  //   { name: "Alice", average: 13, passed: true },
  //   { name: "Bob", average: 8, passed: false },
  //   { name: "Charlie", average: 12.67, passed: true },
  //   { name: "Diana", average: 7.5, passed: false }
  // ]


  function resultatStudents(){
    let resultat=[];
    let student;
   for (let i = 0; i < students.length; i++) {
    student={
         name: students[i].name,
         average:averageF(students[i].grades) , 
         passed: averageF(students[i].grades)>10?true:false

    }
      resultat.push(student)
    
   }
   return resultat;
  }

  function averageF(array){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i];        
    }
    return parseFloat((sum / array.length).toFixed(2));
  }
  console.log(resultatStudents());
  
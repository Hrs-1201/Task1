//1st QUE : Defined array with 6 elements and add an element at 1st, 4th and last position.

//1st Sollution

function addElement(){
    //1st Sollution
          const array = [3, 2, 1];
          const newFirstElement = 4;
          const newArray = [newFirstElement].concat(array);
    return newArray;
}


function secondExample(){
  //2nd Solution
    const ar  = ['Harsh' , 12 , 'vishal', 'dp' , 12 , 'okd'];
          ar.splice(3,0,"29");
          ar.splice(5,0,"29");
    return ar;
}

//2nd QUE : Defined array with 6 elements and remove an element from 4th position using any 2 solutions.

//1st solution

// Remove the element at position 4th (4th position)
function getEle(){
       const add = [1, 2, 3, 4, 5, 6];
       add.splice(3, 1);
    return(add);
}

//2nd Solution
// remove the element at index 3 (4th position)
function addEle(){
      const ele = [1, 2, 3, 4, 5, 6];
      const newEle = ele.slice(0, 3).concat(ele.slice(4));
    return(newEle);
}
//3rd QUE : Define 2 arrays and merge both arrays using any 2 solutions.
//1st Solutiion
function arrayEle(){
        const conc = [1, 2, 3];
        const conc2 = [4, 5, 6];
        const mergedConc = conc.concat(conc2);
    return(mergedConc);
} 

//2nd Solution
function defArray(){
         const array1 = [1, 2, 3];
         const array2 = [4, 5, 6];
         const mergedArray = [...array1, ...array2];

return(mergedArray); 
}

//4th QUE : Create array of objects with properties firstname, lastname and age and add 1 property(job) in every object. 
//1st solution
function addObject() {
  const people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Smith", age: 25 },
    { firstName: "Alice", lastName: "Johnson", age: 35 }
  ];
  
  const peopleWithJobs = people.map(person => ({
    ...person,
    job: "Software Engineer" // Replace with the desired job
  }));
     
  return(peopleWithJobs);
}
// const people = [
//   {firstname: "Harsh", 
//   lastname: "Panchal",
//   age: 25, }
//  ];
// const people2 = {...people, job:'devloper'};


//5th QUE : Create array of objects with properties firstname, lastname and age and remove item if item’s age is 40.
function removeObj(){
    const person = [
      { firstname: "Harsh", lastname: "panchal", age: 25 },
      { firstname: "Bobby", lastname: "comrade", age: 30 },
      { firstname: "raj", lastname: "pt", age: 40 }
    ];
    // Remove objects with age 40
    const person1 = person.filter(per => per.age !== 40);
    return(person1);
}

console.log(addElement())


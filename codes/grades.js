'use strict';

var array = [73,67,38,33];

function gradingStudents(grades) {
  // Write your code here
  const gradesArray = grades.map(grade => {
    var score = 0;
    var rounded = Math.ceil((grade + 1)/5)*5;
    
    if (rounded-grade < 3 && grade >= 38){
      score = rounded;
    } else {
      score = grade;
    }
    
    return score;
  
  });
  
  return gradesArray;
}

function main() {
  console.log(gradingStudents(array));
}

main();
import * as Big from 'big.js';

let MaxPointsInput = <HTMLInputElement> document.getElementById("MaxPointsInput");
let BaseGradeInput = <HTMLInputElement> document.getElementById("BaseGradeInput");
let PointsInput = <HTMLInputElement> document.getElementById("PointsInput");

let inputs = [MaxPointsInput, BaseGradeInput, PointsInput];

inputs.forEach(input => {
    input.addEventListener("input", function() {
        console.log(input.value)
    }
)
});

// function UpdateGrade(){
//     let MaxPoints = MaxPointsInput.value;

//     let grade = 
// }
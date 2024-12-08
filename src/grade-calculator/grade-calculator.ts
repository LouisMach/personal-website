import * as Big from 'big.js';

let MaxPointsInput = <HTMLInputElement> document.getElementById("MaxPointsInput");
let BaseGradeInput = <HTMLInputElement> document.getElementById("BaseGradeInput");
let PointsInput = <HTMLInputElement> document.getElementById("PointsInput");

let GradeLabel = <HTMLLabelElement> document.getElementById("Grade");

let MaxGrade = Big(10);

let inputs = [MaxPointsInput, BaseGradeInput, PointsInput];

inputs.forEach(input => {
    input.addEventListener("input", function() {
        UpdateGrade();
    }
)
});

function UpdateGrade(){
    let maxPoints = ParseStringToBig(MaxPointsInput.value);
    let baseGrade = ParseStringToBig(BaseGradeInput.value);
    let points = ParseStringToBig(PointsInput.value);

    // grade = (points / maxPoints) * (MaxGrade - baseGrade) + baseGrade
    let grade = (points.div(maxPoints)
                    .times(MaxGrade.minus(baseGrade))
                    .plus(baseGrade))

    GradeLabel.textContent = grade.toFixed(1, Big.roundUp);
}

function ParseStringToBig(text: string): Big{
    text = text.trim();
    let commaIndex = text.indexOf(",")
    let dotIndex = text.indexOf(".")
    
    let textHasComma = commaIndex > 0;
    let textHasDot = dotIndex > 0;
    if(textHasComma && textHasDot){
        if(commaIndex < dotIndex){
            // text looks like 10,000.5 so remove comma and parse
            text = text.replace(",","");
        }
        else{
            // text looks like 10.000,5 so remove period, replace comma and parse
            text = text.replace(".","")
            text = text.replace(",",".")
        }
    }
    else if(textHasComma){
        text = text.replace(",",".");
    }
    // remove any spaces in case it is formatted like 10 000(.,)5
    text = text.replace(" ","");
    return Big(text);
}
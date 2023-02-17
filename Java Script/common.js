// Function To get input Value
function GetValue(inputId){
    const InputValueElement = document.getElementById(inputId)
    const InputValueString = InputValueElement.value;
    const InputValue = parseInt(InputValueString);
    InputValueElement.value = '';
    return InputValue;
}

// 



document.getElementById('triangle-btn').addEventListener('click', function(){
    const TriangleValueB = GetValue('triangle-b')
    const TriangleValueH = GetValue('triangle-h')
    console.log(TriangleValueB, TriangleValueH)
    
})
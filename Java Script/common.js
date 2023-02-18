
// Function for Random Color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 


// Function To get input Value
function GetValue(inputId){
    const InputValueElement = document.getElementById(inputId)
    const InputValueString = InputValueElement.value;
    const InputValue = parseInt(InputValueString);
    InputValueElement.value = '';
    return InputValue;
}

// Function To get Text Input Value

function GetTextValue (inputTextId){
    const TextValue = document.getElementById(inputTextId);
    const TextValueString = TextValue.innerText;
    const TextInputValue = parseFloat(TextValueString)
    return TextInputValue;
}

// Function To Set Input value

function SetValue(inputId, OutputId){
    const SetValue = document.getElementById(inputId);
    SetValue.innerText = OutputId;
}


// Function To Create Table
function GetTableData(data1, data2, data3, button){
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${data1}</td>
    <td>${data2}</td>
    <td>${data3} cm<sup>2</sup></td> 
    <td>${button}</td> 
`
container.appendChild(tr)
}



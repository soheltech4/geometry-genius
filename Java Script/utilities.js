let serial = 0;
document.getElementById('triangle-btn').addEventListener('click', function(){
    const TriangleValueB = GetValue('triangle-b')
    const TriangleValueH = GetValue('triangle-h')

    if(isNaN(TriangleValueB) == true || isNaN(TriangleValueH)== true || TriangleValueB == " " || TriangleValueH == " "){
        return alert('Please Give Valid Number')
    }

    serial +=1;
    SetValue('triangle-side2', TriangleValueB)
    SetValue('triangle-side3', TriangleValueH)

    const TriangleName = document.getElementById('triangle-name').innerText
    const TriangleSide1 = GetTextValue('triangle-side1')
    const TriangleSide2 = GetTextValue('triangle-side2')
    const TriangleSide3 = GetTextValue('triangle-side3')

    const TriangleTotalValue = TriangleSide1 * TriangleSide2 * TriangleSide3

    GetTableData(serial, TriangleName, TriangleTotalValue)
})


document.getElementById('rectangle-btn').addEventListener('click', function(){
    const ValueW = GetValue('rectangle-w')
    const ValueI = GetValue('rectangle-i')

    if(isNaN(ValueW) == true || isNaN(ValueI)== true || ValueW == " " || ValueI == " "){
        return alert('Please Give Valid Number')
    }

    serial +=1;
    SetValue('rectangle-side1', ValueW)
    SetValue('rectangle-side2', ValueI)

    const Name = document.getElementById('rectangle-name').innerText
    const Side1 = GetTextValue('rectangle-side1')
    const Side2 = GetTextValue('rectangle-side2')

    const TotalValue = Side1 * Side2

    GetTableData(serial, Name, TotalValue)
})
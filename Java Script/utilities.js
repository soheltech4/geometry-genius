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
    const ValueW = GetValue('rectangle-W')
    const ValueI = GetValue('rectangle-I')

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



document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const ValueW = GetValue('parallelogram-b')
    const ValueI = GetValue('parallelogram-h')

    if(isNaN(ValueW) == true || isNaN(ValueI)== true || ValueW == " " || ValueI == " "){
        return alert('Please Give Valid Number')
    }

    serial +=1;
    SetValue('parallelogram-side1', ValueW)
    SetValue('parallelogram-side2', ValueI)

    const Name = document.getElementById('parallelogram-name').innerText
    const Side1 = GetTextValue('parallelogram-side1')
    const Side2 = GetTextValue('parallelogram-side2')

    const TotalValue = Side1 * Side2

    GetTableData(serial, Name, TotalValue)
})


document.getElementById('rhombus-btn').addEventListener('click', function(){
    const ValueD1 = GetValue('rhombus-d1')
    const ValueD2 = GetValue('rhombus-d2')

    if(isNaN(ValueD1) == true || isNaN(ValueD2)== true || ValueD1 == " " || ValueD2 == " "){
        return alert('Please Give Valid Number')
    }

    serial +=1;
    SetValue('rhombus-side2', ValueD1)
    SetValue('rhombus-side3', ValueD2)

    const Name = document.getElementById('rhombus-name').innerText
    const side1 = GetTextValue('rhombus-side1')
    const side2 = GetTextValue('rhombus-side2')
    const side3 = GetTextValue('rhombus-side3')

    const TotalValue = side1 * side2 * side3

    GetTableData(serial, Name, TotalValue)
})


document.getElementById('pentagon-btn').addEventListener('click', function(){
    const ValueD1 = GetValue('pentagon-p')
    const ValueD2 = GetValue('pentagon-b')

    if(isNaN(ValueD1) == true || isNaN(ValueD2)== true || ValueD1 == " " || ValueD2 == " "){
        return alert('Please Give Valid Number')
    }

    serial +=1;
    SetValue('pentagon-side2', ValueD1)
    SetValue('pentagon-side3', ValueD2)

    const Name = document.getElementById('pentagon-name').innerText
    const side1 = GetTextValue('pentagon-side1')
    const side2 = GetTextValue('pentagon-side2')
    const side3 = GetTextValue('pentagon-side3')

    const TotalValue = side1 * side2 * side3

    GetTableData(serial, Name, TotalValue)
})

document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ValueD1 = GetValue('ellipse-p')
    const ValueD2 = GetValue('ellipse-h')

    if(isNaN(ValueD1) == true || isNaN(ValueD2)== true || ValueD1 == " " || ValueD2 == " "){
        return alert('Please Give Valid Number')
    }

    serial +=1;
    SetValue('ellipse-side2', ValueD1)
    SetValue('ellipse-side3', ValueD2)

    const Name = document.getElementById('ellipse-name').innerText
    const side1 = GetTextValue('ellipse-side1')
    const side2 = GetTextValue('ellipse-side2')
    const side3 = GetTextValue('ellipse-side3')

    const TotalValue = 3.14 * side2 * side3

    GetTableData(serial, Name, TotalValue)
})

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html'
})
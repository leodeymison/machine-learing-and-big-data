const data = [
    {
        x1: 1,
        x2: 1,
        y: 3
    },
    {
        x1: 2,
        x2: 2,
        y: 7
    },
    {
        x1: 3,
        x2: 1,
        y: 5
    },
    {
        x1: 4,
        x2: 3,
        y: 11
    },
    {
        x1: 5,
        x2: 4,
        y: 14
    },
]
function Start(){
    var input01 = document.getElementById('input01')
    var input02 = document.getElementById('input02')
    if(input01.value == '' || input02.value == ''){
        return
    }

    var preview = document.getElementById('preview')

    var x1 = []; var x2 = [];var y = []
    data.forEach(element => {x1.push(element.x1)});
    data.forEach(element => {x2.push(element.x2)});
    data.forEach(element => {y.push(element.y)});

    var mediaX1 = media(x1)
    var mediaX2 = media(x2)
    var mediaY = media(y)

    var somaX1 = soma(x1)
    var somaX2 = soma(x2)
    var somaY = soma(y)
    
    var somaFinalX1 = subCalculos(x1, y, mediaX1, mediaY)
    var somaFinalX2 = subCalculos(x2, y, mediaX2, mediaY)

    var b1_X1 = B1(somaFinalX1.somaXxY, somaFinalX1.somaXraiz2)
    var b1_X2 = B1(somaFinalX2.somaXxY, somaFinalX2.somaXraiz2)

    var b0_X1 = B0(mediaY, b1_X1, mediaX1)
    var b0_X2 = B0(mediaY, b1_X2, mediaX2)

    var inputX1 = parseFloat(input01.value)
    var inputX2 = parseFloat(input02.value)

    var ŷ_x1 = ŷ(b0_X1, b1_X1, inputX1)
    var ŷ_x2 = ŷ(b0_X2, b1_X2, inputX2)

    var result = ((ŷ_x1+ŷ_x2) / 2).toFixed(2)

    preview.innerHTML = `
        ${result} bactérias
    `
}

function media(data){
    var value = 0
    data.forEach(element => {
        value += element
    })
    return value / data.length
}

function soma(data){
    var value = 0
    data.forEach(element => {
        value += element
    })
    return value
}

function subCalculos(dataX, dataY, mediaX, mediaY){
    var xMenos = []
    var yMenos = []
    dataX.forEach(element => {
        xMenos.push(element - mediaX)
    })
    dataY.forEach(element => {
        yMenos.push(element - mediaY)
    })

    var xyMenosMult = []
    for(let i = 0; i < xMenos.length; i++){
        xyMenosMult.push(xMenos[i]*yMenos[i])
    }
    var xMult = []
    xMenos.forEach(element => {
        xMult.push(element * element)
    })

    somaXxY = 0,
    somaXraiz2 = 0
    
    for(let i = 0; i < dataX.length; i++){
        somaXxY += xyMenosMult[i]
        somaXraiz2 += xMult[i]
    }

    return {
        somaXxY,
        somaXraiz2
    }
}

function B1(somaXxY,somaXraiz2){
    return somaXxY/somaXraiz2
}

function B0(mediaY, b1, mediaX){
    var b0 = mediaY - (b1 * mediaX)
    return b0
}

function ŷ(b0, b1, x){
    var y = b0 + b1 * x
    return y
}
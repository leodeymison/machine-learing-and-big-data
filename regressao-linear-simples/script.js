const data = [
    {
        x: 1,
        y: 3
    },
    {
        x: 2,
        y: 7
    },
    {
        x: 3,
        y: 5
    },
    {
        x: 4,
        y: 11
    },
    {
        x: 5,
        y: 14
    }
]

function RegressionLinearSimples(){
    var valueStart = document.getElementById('valueStart')
    if(valueStart.value == ''){
        return
    }

    var somaXY = somaXandY()
    var mediaXY =  mediaXandY(somaXY.somaX, somaXY.somaY)
    var x_Somatoria = x_SomatoriaFunc(mediaXY.mediaX)
    var y_Somatoria = y_SomatoriaFunc(mediaXY.mediaY)
    var XSmultiYS = XSmultiYSFunc(x_Somatoria, y_Somatoria)
    var VaizXS = VaizXSFunc(x_Somatoria)
    
    var b1 = XSmultiYS.soma/VaizXS.soma
    var b0 = mediaXY.mediaY-b1*mediaXY.mediaX

    var result = b0 + b1 * parseFloat(valueStart.value)
    result = result.toFixed(2)
    document.getElementById('preview').innerHTML = `
        ${result} bactérias
    `
}

function somaXandY(){
    var somaX = 0
    var somaY = 0
    data.forEach(element => {
        somaX += element.x
        somaY += element.y
    });
    return {
        somaX,
        somaY
    }
}

function mediaXandY(somaX, somaY){
    var quant = data.length
    var mediaX = somaX / quant
    var mediaY = somaY / quant
    return {
        mediaX, mediaY
    }
}

function x_SomatoriaFunc(valorMedia){
    var X_XSOMA = []
    data.forEach(element => {
        X_XSOMA.push(element.x-valorMedia)
    });
    return X_XSOMA
}
function y_SomatoriaFunc(valorMedia){
    var X_XSOMA = []
    data.forEach(element => {
        X_XSOMA.push(element.y-valorMedia)
    });
    return X_XSOMA
}

function XSmultiYSFunc(SX, SY){
    var result = []
    for(let i = 0; i < SX.length; i++){
        result.push(SX[i]*SY[i])
    }
    var soma = 0
    result.forEach(element => {
        soma += element
    });
    return {
        values: result,
        soma
    }
}
function VaizXSFunc(SX){
    var result = []
    SX.forEach(element => {
        result.push(element*element)
    })
    var soma = 0
    result.forEach(element => {
        soma += element
    });
    return {
        values: result,
        soma
    }
}
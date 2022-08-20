var Database = []

function push(){
    var valuesX = document.getElementById('valuesX')
    var valuesY = document.getElementById('valuesY')
    var list = document.getElementById('list')


    Database.push({
        x: parseFloat(valuesX.value),
        y: parseFloat(valuesY.value)
    })
    list.innerHTML += `
        <li>
            <p>${valuesX.value}</p>
            <p>${valuesY.value}</p>
        </li>
    `

}

function pearson(){
    if(Database.length < 2){
        alert('Coloque no mínimo duas linhas de dados')
        return 
    }
    var resultText = document.getElementById('result')

    var Values = []

    Database.forEach(element => {
        Values.push({
            xSquared: element.x*element.x,
            ySquared: element.y*element.y,
            xy: element.x*element.y
        })
    });
    var Calculations = {
        x: 0,
        y: 0,
        xSquared: 0,
        ySquared: 0,
        xy: 0,
    }

    for(let i = 0; i < Values.length; i++){
        Calculations.x += Database[i].x,
        Calculations.y += Database[i].y,
        Calculations.xSquared += Values[i].xSquared,
        Calculations.ySquared += Values[i].ySquared
        Calculations.xy += Values[i].xy
    }

    var result = (Calculations.xy - ((Calculations.x*Calculations.y)/Database.length)) / Math.sqrt((Calculations.xSquared-((Calculations.x*Calculations.x)/Database.length))*(Calculations.ySquared-((Calculations.y*Calculations.y)/Database.length)))
    result = result.toFixed(2) *100

    resultText.innerHTML = result+'%'
}

class Processor{
    static Process(data){
        var cut = data.split("\r\n")
        console.log(cut)
        var rows = []

        cut.forEach(row => {
            var array = row.split(",")
            rows.push(array)
        });

        return rows
    }
}


module.exports = Processor
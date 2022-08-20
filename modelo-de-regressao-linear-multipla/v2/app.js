var Reader = require('./index');
const Processor = require('./processor');
const Table = require('./Table');
var leitor = new Reader()

async function main(){
    var dados = await leitor.Read('./users.csv')
    var processed = Processor.Process(dados)
    var user = new Table(processed)
}

main()
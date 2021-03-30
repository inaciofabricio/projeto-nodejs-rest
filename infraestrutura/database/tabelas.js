class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente VARCHAR(11) NOT NULL, pet VARCHAR(50), servico VARCHAR(50) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, status VARCHAR(20) NOT NULL, observacoes text, PRIMARY KEY(id) )'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas atendimento criada com sucesso')
            }
        })
    }

    criarPets(){

        const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome VARCHAR(50) NOT NULL, imagem VARCHAR(200), PRIMARY KEY(id) )'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas Pets criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas
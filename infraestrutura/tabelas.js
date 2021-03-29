class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, pet VARCHAR(50), servico VARCHAR(50) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, status VARCHAR(20) NOT NULL, observacoes text, PRIMARY KEY(id) )'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabelas atendimento criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas
const conexao = require('../infraestrutura/database/conexao')
const uploadDearquivo = require('../infraestrutura/arquivos/uploadDeArquivos')

class Pets {

    adiciona(pet, res) {

        const sql = 'INSERT INTO Pets SET ?'

        uploadDearquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if (erro) {
                res.status(400).json({erro})
            }else{
                const novoPet = {nome : pet.nome, imagem : novoCaminho}
                conexao.query(sql, novoPet, (erro, result) => {
                    if(erro){
                        res.status(400).json(erro)
                    }else{
                        res.status(201).json(pet)
                    }
                })
            }
        })
    }
}

module.exports = new Pets
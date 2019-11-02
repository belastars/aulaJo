const tarefas = require("../model/tarefas.json");

exports.get = (req, res) =>{ // no Exportes . controller = requirimento e resposta => função
    console.log(req.url)
    res.status(200).send(tarefas)
   }


exports.getById = (req,res) =>{
    const id = req.params.id; // falamos expecifico do id então estaremos requisitando o parametro ID
    if(id < 1 || id > 4){
        res.redirect(301, "http://www.mercantec.com.br/noticias/esocial-erro-301-o-que-fazer/")
    }
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    res.status(200).send(tarefa)
}

exports.getFeito = (req,res) =>{

    const tarefaFeita = tarefas.filter(tarefa => {
        return tarefa.concluido == "true"
    })
    res.status(200).send(tarefaFeita)

}

exports.getByName = (req,res) =>{

    const nomeColaborador = req.params.nomeColaborador; // falamos expecifico do nome então estaremos requisitando o parametro nomeColaborador
    const name = tarefas.find(tarefa => tarefa.nomeColaborador == nomeColaborador) //find tras somente aquilo que a pessoa quer 
    res.status(200).send(name)
}


exports.getData = (req,res) =>{
    const concluido = req.params.concluido; // falamos expecifico do id então estaremos requisitando o parametro ID
    if(concluido == false){
        res.redirect(301, "http://www.mercantec.com.br/noticias/esocial-erro-301-o-que-fazer/")
    }
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    res.status(200).send(tarefa)
}

const express = require('express');  // declarando o pacote express
const app = express();  // chamar o express

//rotas
const index = require("./routes/index") // criar as conts para chamar as rotas 
const tarefas = require("./routes/tarefasRoutes") 

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Tyoe, Accept"
    )

    next()

})

app.use("/", index);
app.use("/tarefas", tarefas);

module.exports = app // Module significa que é possivel 
//utilizar o app (miduer)m em qualuqer outro objetp/arquivo
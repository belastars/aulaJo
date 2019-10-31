const express = require("express") // chamar a biblioteca do express 
const router = express.Router()

router.get("/", function(req,res){
    res.status(200).send({
        title:"PROJETO SEMANA PRATICA - COM API",
    })
})

module.exports = router;
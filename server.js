const app = require("./src/app") // a const chamada de app vai requerir  as rotas 
const port = 3000;  //  const porta = 3000 pode ser de 1000 para cima 

app.listen(port,function(){  //

console.log(`app esta rodando na porta ${port}`)  //

});

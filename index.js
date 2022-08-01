//carregar o módulo express

const express = require('express')

//executar o modulo express 

const app = express()

//definir o local padrao para os arquivos ejs
app.set('views','./')

//renderizar o arquivo index.ejs na requisição / (root)
app.get ('/',(req,res)=>{
    res.render('index.ejs',{nome:"Alunos Feiosos",Turma:"2EMIA", disciplina:"INW"})
})

//ligar o servidor da porta 1010

app.listen(1010) 


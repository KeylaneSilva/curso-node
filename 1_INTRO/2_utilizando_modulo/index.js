const fs = require('fs') //file system

fs.readFile('arquivo.txt', 'utf-8', (erro, data) =>{
  if(erro){
    console.log(erro)
  }

  console.log(data)
})
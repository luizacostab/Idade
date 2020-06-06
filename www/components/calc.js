// This is a JavaScript file

function exibirResult(){
  let nome = document.getElementById("name")
  let idade = document.getElementById("number")

  if(idade.value >= 18){
     document.write(`
       <style>
        .img{
          margin-left: 9%
        }
      </style>
     Oi, tudo bom ${nome.value}? Sua idade é ${idade.value} então você é maior de idade :) <br>
    Separamos essa imagem especialmente para você <3 <br>
      <img class="img" src="https://pics.me.me/me-tornei-aquilo-q-eu-mais-temia-maiordeidadee-sem-dinheiro-35170315.png" height="380" width="300" alt="Eita, a imagem não carregou">
     `)
  }
  else  document.write(`
     Oi, tudo bom ${nome.value}? Sua idade é ${idade.value} então você é menor de idade :) <br>
    Separamos essa imagem especialmente para você <3 <br>
      <img src="https://gerarmemes.s3.us-east-2.amazonaws.com/memes/thumb/7abb6684.jpg" alt="Eita, a imagem não carregou">
     `)
}
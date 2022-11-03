
/*
 busca por Id:getElementById()
 busca por Tag:getElmentByTagName()
 busca por Nome:getElementsByName()
 busca por Classe:getElementsByClasse()
 busca por Seletor:querySelector()-> o mais usual
 */

 let nome = window.document.getElementById("nome")
 let email = document.querySelector("#email")
 let assunto = document.querySelector("#assunto")

 let nomeOK = false
 let emailOk = false
 let assuntoOk = false
 let mapa = document.querySelector("#mapa")

 nome.style.width = "100%"
 email.style.width = "100%"

 function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length <3 ) {
    txtNome.innerHTML = "Nome Inválido"
    txtNome.style.color = "red"
    } else{
    txtNome.innerHTML = "Nome Válido" 
    txtNome.style.color = "green" 
    let nomeOK = true     
    }
 }

 function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 ||email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        let emailOk = true
    }
 }
 function ValidaAssunto(){
   let txtAssunto = document.querySelector("#txtAssunto")

   if(assunto.value.length >= 2){
      txtAssunto.innerHTML = "<h1> Teste h1</h1>"
      txtAssunto.style.color = "red"
   } else{

    txtAssunto.innerHTML = "Texto válido"
      txtAssunto.style.color = "green"
      let assuntoOK = true
 }
   }

   function enviar (){
   if(nomeOK == true && emailOk == true&& assuntoOk == true){
   } else{
    alert ("Preencha o formulário corretamente")
   }
    }

    function mapaZoom() {
   mapa.style.width ="800px"
   mapa.style.height = "600px"

    }
 function mapaNormal() {
   mapa.style.width ="450px"
   mapa.style.height = "200px"


 }
//está função vai carregar a hora exata do seu computador e colocar como fundo da página web
/**carregado imagen livres do pixel para criação desse projeto
 * utilizei o Gimp para pegar o codigo hexadecimal de uma cor da img selecionada para colocar no fundo da imagem
 * com uma simples estrutura de condição conforme o período do dia passar o background da página muda
 */
function carregar(){

    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById('imagem')
    var saud = window.document.getElementById('saudação')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        
        img.src = 'manhasemfundo.jpg'
        document.body.style.backgroundColor = '#9fd6fd'
        saud.innerHTML = `Bom Dia`
    }
    else if(hora>=12 && hora <18){
        
        img.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = '#879aa8'
        saud.innerHTML = `Boa Tarde`
    }
    else{
        
        img.src ='img/noite.jpg'
        document.body.style.backgroundColor = '#9e81bb'
        saud.innerHTML = `Boa Noite`
    }
}
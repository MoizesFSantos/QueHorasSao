//this function will load the exact time from your computer and place it as the bottom of the web page
/**loaded free pixel images for the creation of this project
 *I used Gimp to get the hex code of a color from the selected image to place at the bottom of the image
 *  with a simple condition structure as the time of day passes the page background changes
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
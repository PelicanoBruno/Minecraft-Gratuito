var canvas = new fabric.Canvas('myCanvas')
var playerX = 10
var playerY = 10
var LarguraBloco = 30
var AlturaBloco = 30
var player = ""
var bloco = ""
function PlayerAtualizar(){
    fabric.Image.fromURL("player.png", function(Img){
        player = Img
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top:playerY,
            left:playerX
        })
        canvas.add(player)
    })
}
function BlocoAtualizar(tipo){
    fabric.Image.fromURL(tipo, function(Img){
        bloco = Img
        bloco.scaleToWidth(LarguraBloco);
        bloco.scaleToHeight(AlturaBloco);
        bloco.set({
            top:playerY,
            left:playerX
        })
        canvas.add(bloco)
    })
}
window.addEventListener("keydown", apertar)
function apertar(e){
    numero = e.keyCode
    console.log(numero)
    if(numero == "71"){
        BlocoAtualizar("ground.png")
    }
    if(numero == "83"){
        BlocoAtualizar("cloud.jpg")
    }
    if(numero == "68"){
        BlocoAtualizar("dark_green.png")
    }
    if(numero == "78"){
        BlocoAtualizar("roof.jpg")
    }
    if(numero == "87"){
        BlocoAtualizar("trunk.jpg")
    }
    if(numero == "85"){
        BlocoAtualizar("unique.png")
    }
    if(numero == "66"){
        BlocoAtualizar("wall.jpg")
    }
    if(numero == "89"){
        BlocoAtualizar("yellow_wall.png")
    }
    if(numero == "76"){
        BlocoAtualizar("light_green.png")
    }
    if(numero == "40"){
        down()
    }
    if(numero == "38"){
        up()
    }
    if(numero == "37"){
        left()
    }
    if(numero == "39"){
        right()
    }
    if(e.shiftKey == true && numero == "187"){
        LarguraBloco = LarguraBloco + 10
        AlturaBloco = AlturaBloco + 10
        document.getElementById("Largura").innerHTML = LarguraBloco
        document.getElementById("Altura").innerHTML = AlturaBloco
    }
    if(e.shiftKey == true && numero == "189"){
        LarguraBloco = LarguraBloco - 10
        AlturaBloco = AlturaBloco - 10
        document.getElementById("Largura").innerHTML = LarguraBloco
        document.getElementById("Altura").innerHTML = AlturaBloco
    }
}
function down(){
    playerY = playerY + AlturaBloco
    canvas.remove(player)
    PlayerAtualizar()
}
function up(){
    playerY = playerY - AlturaBloco
    canvas.remove(player)
    PlayerAtualizar()
}
function left(){
    playerX = playerX - LarguraBloco
    canvas.remove(player)
    PlayerAtualizar()
}
function right(){
    playerX = playerX + LarguraBloco
    canvas.remove(player)
    PlayerAtualizar()
}

function getMoon(pen,ult){
    var moon = 'none';
    if (!ult || !pen ){ moon = 'none' }
    else if(ult > 100){ moon = 'none'}
    else if(ult < 3){ moon = 'nova'}
    else if(ult > 96){ moon = 'cheia'}
    else if(ult > pen){ moon = 'crescente'}
    else { moon = 'minguante'}
    return moon;
}
function getValues(){
    var pen = document.getElementById("penultima").value;
    var ult = document.getElementById("ultima").value;

    switch (getMoon(pen,ult)) {
        case 'nova':
            document.getElementById("moon-img").src = "./assets/img/nova.png";
            document.getElementById("moon-name").innerHTML = "Lua nova";
            document.getElementById("moon-name").style.color = "#ffffff";
            break;
        case 'crescente':
            document.getElementById("moon-img").src = "./assets/img/crescente.png";
            document.getElementById("moon-name").innerHTML = "Lua crescente";
            document.getElementById("moon-name").style.color = "#ffffff";
            break;
        case 'cheia':
            document.getElementById("moon-img").src = "./assets/img/cheia.png";
            document.getElementById("moon-name").innerHTML = "Lua cheia";
            document.getElementById("moon-name").style.color = "#ffffff";
            break;
        case 'minguante':
            document.getElementById("moon-img").src = "./assets/img/minguante.png";
            document.getElementById("moon-name").innerHTML = "Lua minguante";
            document.getElementById("moon-name").style.color = "#ffffff";
            break;
    
        default:
            document.getElementById("moon-img").src = "./assets/img/none.png";
            document.getElementById("moon-name").innerHTML = "Sem informações";
            document.getElementById("moon-name").style.color = "#616161";
            break;
    }
}
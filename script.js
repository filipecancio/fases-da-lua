function getValues(){
    var v_penultima = document.getElementById("penultima").value;
    var v_ultima = document.getElementById("ultima").value;

    switch (parseInt(v_ultima,10)) {
        case 1:
            document.getElementById("moon-img").src = "./assets/img/nova.png";
            document.getElementById("moon-name").innerHTML = "Lua nova";
            document.getElementById("moon-name").style.color = "#ffffff";
            break;
        case 2:
            document.getElementById("moon-img").src = "./assets/img/crescente.png";
            document.getElementById("moon-name").innerHTML = "Lua crescente";
            document.getElementById("moon-name").style.color = "#ffffff";
            break;
        case 3:
            document.getElementById("moon-img").src = "./assets/img/cheia.png";
            document.getElementById("moon-name").innerHTML = "Lua cheia";
            document.getElementById("moon-name").style.color = "#ffffff";
            break;
        case 4:
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
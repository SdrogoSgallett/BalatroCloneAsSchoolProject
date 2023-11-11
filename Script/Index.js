function GeneraCarta(){
    const GameArea = document.getElementById("GameArea");
    const Carta = document.createElement("div");
    Carta.setAttribute("class","Card");
    const suits = document.createElement("div");
    suits.setAttribute("class","Black suit");
    suits.innerText = "♣";
    const value = document.createElement("div");
    value.setAttribute("class","Black rank");
    value.innerText = "10";
    Carta.appendChild(suits);
    Carta.appendChild(value);
    GameArea.appendChild(Carta);
}
function OnLoad(){
    GeneraCarta();
}
const cards=['🍉','🍹','☀️','🌊','🤿','🍉','🍹','☀️','🌊','🤿']
let score=0;
let s=document.querySelector("#score")
const cardBack="o";
let arrayId=[]
const board =document.getElementById("board");
  // Player object
  function Player(id, name) {
    this.id = id;
    this.name = name;
    this.cards = [];
    this.active = false;
    this.addScore = function () {
      this.pairs++;
    };
    this.showMe = function () {
      document.getElementById(
        `player${id}`
      ).innerHTML = `<div name="player" id="player1">${this.name} found ${this.pairs} pairs</div>`;
    };
    this.myTurn = function () {
      document.getElementById(`player${id}`).classList.add("activePlayer");
    };
  }
  const numOfPlayers = 2;
  if (
    document.getElementById(`player1`).value == undefined ||
    document.getElementById(`player2`).value == undefined
  ) {
    for (let p = 0; p < numOfPlayers; p++) {
      let playerName = document.getElementById(`player${p + 1}`).value;
      players.push(new Player(p + 1, playerName));
    }
    activePlayer = players[0];
    players[0].active = true;
    players.forEach((v) => v.showMe());
    players[0].myTurn();
  }
function shuffle(arr){
    for(let i =arr.length-1;i>0;i--){
        const random=Math.floor(Math.random()*(i+1));
      [arr[i],arr[random]]=[arr[random],arr[i]];
    }
    return arr;
}

function createCard(card){
    const cardEl = document.createElement("div")
    cardEl.innerHTML=cardBack
    cardEl.id = i;
    cardEl.className="card";
    return cardEl;
  }
  shuffle(cards);
  for(i in cards){ 
    const cardBack1=createCard(i);
    board.appendChild(cardBack1);
  }
  
  board.addEventListener('click',(e) =>{
    if(e.target == board){}
    else{
    e.target.innerHTML = cards[e.target.id]
    const cardId=e.target
    arrayId.push(cardId)
    if(arrayId.length==2){
      if(arrayId[0].innerHTML == arrayId[1].innerHTML){
        score++;
        s.textContent=`score: ${score}`;
        arrayId= [];
      }else{
        setTimeout(()=>{
        arrayId[0].innerHTML = cardBack;
        arrayId[1].innerHTML = cardBack;
        arrayId= [];
      },300)
    }
  }}
  })


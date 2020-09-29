class card {
    constructor(rank,suit){
        this.rank=rank;
        this.suit=suit;
    }
    
}
class Deck {
    constructor() {
      this.deck = [];
      
      const suits = ['Clubs' , 'Diamonds', 'Hearts', 'Spades' ];
      const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in ranks) {
          this.deck.push(new card(ranks[value],suits[suit]));
        }
      }
    }
  }
  
 class Player {
      constructor() {
          this.score=0;
          this.crd=deal(5);
      }
      displayScore(){
          for(let i=0;i<this.crd.length;i++){
              switch(this.crd[i].rank){
                  case 'Ace':
                  case 'Queen':
                  case 'King':
                  case 'Jack': this.score+=10;
                  break;
                  case '8':this.score+=20;
                  break;
                  case '2':this.score+=2;
                  break;
                  case '3':this.score+=3;
                  break;
                  case '4':this.score+=4;
                  break;
                  case '5':this.score+=1;
                  break;
                  case '6':this.score+=6;
                  break;
                  case '7':this.score+=7;
                  break;
                  case '9':this.score+=9;
                  break;
                  case '10':this.score+=10;
                  break;
              }
          }
          return this.score;
      }
     /* takeTurn(){
        let show = Hand();
        for(let i=0;i< this.crd.length;i++){
            let val=this.crd[i];
            if(val.suit===show.suit){
                discardplie=this.crd[i].pop();
            }
            else if(val.rank===show.rank){
                discardplie=this.crd[i].pop();
            }
            else if(val.rank==='8'){
                discardplie=this.crd[i].pop();
            }
            else{
                this.crd.unshift(drawpile[0]);
                
            }
        }
    }*/
    displayState() {
        console.log(this.crd);
    } 

  }

  function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * i);
         let temp = deck[i];
         deck[i] = deck[j];
         deck[j] = temp;
     }
     return deck;
 }
 function deal(limit) {
     return cards.splice(0,limit);
 }
 
 function Hand() {
     return cards[0];
 }
 

function main(){
    const deck1 = new Deck();
    cards=shuffle(deck1.deck);
    let discardplie=deal(0);
    let drawpile=cards;
    let one = new Player();
    let two = new Player();
    console.log("Cards of player 1: \n"+ one.displayState() +" And Score: "+one.displayScore);
    console.log("Cards of player 2: \n"+ two.displayState() +" And Score: "+two.displayScore);
}
main();

const gameDips = document.querySelector('.gameDisplay')
const playerLife = document.querySelector('#count')
let lifeCount = 5;
playerLife.textContent = lifeCount;
const msgBox = document.querySelector('.massages');
const mgsTxt = document.querySelector('#textpic')
const half = document.querySelector('#half')
const show = document.querySelector('#show');
const hint = document.querySelector('#hint')




const getData = () => {
    return  [
        {imgSrc: "img/buldings.jpg", name: "bulding"},
        {imgSrc: "img/colorfull.jpg", name: "color full"},
        {imgSrc: "img/dont-know.jpg", name: "dont know"},
        {imgSrc: "img/duck.jpg", name: "duck"},
        {imgSrc: "img/items.jpg", name: "items"},
        {imgSrc: "img/keyboard.jpg", name: "keyboard"},
        {imgSrc: "img/office.jpg", name: "office"},
        {imgSrc: "img/weardpic.jpg", name: "weard pic"},
        {imgSrc: "img/buldings.jpg", name: "bulding"},
        {imgSrc: "img/colorfull.jpg", name: "color full"},
        {imgSrc: "img/dont-know.jpg", name: "dont know"},
        {imgSrc: "img/duck.jpg", name: "duck"},
        {imgSrc: "img/items.jpg", name: "items"},
        {imgSrc: "img/keyboard.jpg", name: "keyboard"},
        {imgSrc: "img/office.jpg", name: "office"},
        {imgSrc: "img/weardpic.jpg", name: "weard pic"}
    ]
}
//  randamiz the imgs
const randam = () => {
    const cardData = getData();
    cardData.sort( () => Math.random() - 0.5);  
   
    
    return cardData
    
    

}

// generate card or images
const CardGenerate = () => {
    const cardData = randam();
    // console.log(cardData);
    // generate html
    cardData.forEach((item) => {
      const card = document.createElement('div')
      const face = document.createElement('img')
      const back = document.createElement('div')
      card.classList.add('card')
      face.classList.add('face')
      back.classList.add('back')
    //   for card name attribute
    card.setAttribute('name', item.name)
    //   link of img
    face.src = item.imgSrc;
    gameDips.appendChild(card)
    card.appendChild(face)
    card.appendChild(back)
    // event listner for card click or toggle it
  card.addEventListener('click', (e) => {
     card.classList.toggle('toggleCard')

    //  for checking card
    checkCard(e);
  })
    
    })
    
}
// checkCard function
const checkCard = (e) => {
    const clickedCard = e.target;
     clickedCard.classList.add('flipped');
     let toggleCard = document.querySelectorAll('.toggleCard')
     let flippedCard = document.querySelectorAll('.flipped');     
     if(flippedCard.length === 2){
        if(flippedCard[0].getAttribute('name') === flippedCard[1].getAttribute('name')){
            flippedCard.forEach((card) => {
                card.classList.remove('flipped')
                card.style.pointerEvents = 'none'
                
            })
            
        } else{
            flippedCard.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => {
                    card.classList.remove('toggleCard')

                },1000)
              
            })
            lifeCount--;
            playerLife.textContent = lifeCount;
 // lose msg logic
      if (lifeCount === 0) {
        msgBox.classList.remove('msg-hidden')
        mgsTxt.textContent = 'You Lose !'
        setTimeout(() => {
        msgBox.classList.add('msg-hidden')
        restart()
        },3000)
             }
            }

            
            // cheack for winner 
            if (toggleCard.length === 16) {
                    // console.log("you won");
                    msgBox.classList.remove('msg-hidden')
                    mgsTxt.textContent = 'You Wonn!'
                    setTimeout(() => {
                    msgBox.classList.add('msg-hidden')
                          restart()
                    },3000)
                    
            }
     
                       // life line



// life line 50/50 
// if (toggleCard.length == 3) {
    
//          half.classList.add('glow')
//          console.log("hsadfhaifhiso");
//         }   

//  for show cards
if (toggleCard.length >= 8) {
    
    show.classList.add('glow')
    let card = document.querySelectorAll('.card')
    show.addEventListener('click', () => {
        card.forEach((item) => {
            item.classList.add('toggleCard')
            setTimeout(() => {
            item.classList.remove('toggleCard')

            },1100)
        })
    })

}
if (toggleCard.length >= 10) {
    hint.classList.add('glow');

    const card = document.querySelectorAll('.card');
    const pickedCard = cardPicker();

    let matchedCards = [];

    card.forEach((item) => {
        if (pickedCard.getAttribute('name') === item.getAttribute('name')) {
            matchedCards.push(item);
        }
    });

    hint.addEventListener('click', () => {
        if (matchedCards.length === 2) {
            matchedCards.forEach((card) => {
                card.classList.add('glow');
                setTimeout(() => {
                card.classList.remove('glow');

                },5000)
            });
        }
    });
}}

}

// card picker
const cardPicker = () => {
    const allCards = Array.from(document.querySelectorAll('.card'));
    let pickedCard;

    // Ensure that pickedCard is a valid DOM element and not already toggled
    do {
        pickedCard = allCards[Math.floor(Math.random() * allCards.length)];
    } while (!pickedCard || pickedCard.classList.contains('toggleCard'));

    return pickedCard;
}

//  restart the game
const restart = () => {
    let cardData = randam();
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    gameDips.style.pointerEvents = "none"
    cardData.forEach((item, index) => {
        
        cards[index].classList.remove("toggleCard")
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all'
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            gameDips.style.pointerEvents = "all"

        },1000)
      
    });
    lifeCount = 5;
    playerLife.textContent = lifeCount;

}

CardGenerate()

// over lay / instruction menual!!

let overlay = document.querySelector('.overlay')
let closeBtn = document.querySelector('.close-btn')

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden')
})

const gameDips = document.querySelector('.gameDisplay')
const playerLife = document.querySelector('#count')
let lifeCount = 7;
playerLife.textContent = lifeCount;

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

                },1800)
              
            })
            lifeCount--;
            playerLife.textContent = lifeCount;

     if (lifeCount === 0) {
                restart();
             }
        }  
     }
}

//  restart the game
const restart = () => {
    let cardData = randam();
    let face = document.querySelectorAll('.face')
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
    lifeCount = 7;
    playerLife.textContent = lifeCount;
}
CardGenerate()
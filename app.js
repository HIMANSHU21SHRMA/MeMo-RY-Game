// Storage Section

const gameDisp = document.querySelector('.gameDisplay');
const lifeCount = document.querySelector('#count');
const playerLife = 6;
lifeCount.textContent = playerLife;

// generation the data / card
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
};
// random pic picker/ function
const randomPic = () =>{
const cardData = getData();
cardData.sort(() => Math.random() - 0.5);
return cardData;

}

// generate html/
const cardGenerate = () => {
const cardData = randomPic();
cardData.forEach((item) => {
    // console.log(item);
    
    const card = document.createElement('div')
    const face = document.createElement('img')
    const back = document.createElement('div')
    card.classList = 'card'
    face.classList = 'face'
    back.classList = 'back'
// add img
face.src = item.imgSrc
    // append it
    gameDisp.appendChild(card)
    card.appendChild(face)
    card.appendChild(back)

    card.addEventListener('click', (e) => {
        card.classList.add("toggleCard")
        checkCard(e)
    })
})
}
//  check toggled card
const checkCard = (e) => {
    const checkCard = e.target;
    console.log(checkCard);
    
}

cardGenerate()
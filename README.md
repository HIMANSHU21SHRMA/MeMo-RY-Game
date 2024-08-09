# Memory Game

A fun and interactive memory game where players match pairs of cards. The game includes special lifelines that can be used to gain an advantage.

## Features

- **Interactive Gameplay**: Click on cards to reveal them and try to find matching pairs.
- **Lifelines**: 
  - **50/50 Lifeline**: Unlocks after making 3 correct matches. When activated, it highlights three cards: two with matching images and one random card.
  - **Show Cards**: Unlocks after making 4 correct matches. Reveals all cards temporarily to help the player remember their positions.
  - **Hint Lifeline**: Unlocks after making 5 correct matches. When activated, it highlights a pair of matching cards.

## Game Instructions

1. **Start the Game**: The game board consists of a grid of cards, all face down. Click on a card to reveal the image underneath.
2. **Match Cards**: Try to find and match pairs of cards by remembering their positions. 
3. **Use Lifelines**: As you progress, lifelines become available:
   - **50/50 Lifeline**: Highlights three cards (two matching and one random) to aid in finding a pair.
   - **Show Cards**: Temporarily reveals all the cards on the board.
   - **Hint Lifeline**: Highlights a pair of matching cards.
4. **Win or Lose**: The game ends when all pairs are matched (you win) or when you run out of lives (you lose).

## Game Logic

- **Card Generation**: The cards are generated and shuffled randomly at the start of the game.
- **Matching Mechanism**: When two cards are flipped, their names are compared to see if they match. If they do, they stay revealed; otherwise, they flip back after a short delay.
- **Lifelines**:
  - **50/50 Lifeline**: Selects two matching cards and one random card from the remaining face-down cards. These cards are then highlighted when the lifeline is activated.
  - **Show Cards**: Reveals all cards for a short period, then hides them again, except for those that were already matched.
  - **Hint Lifeline**: Highlights a pair of matching cards when activated.

## Code Overview

```javascript
// Function to randomly shuffle cards and generate the game !
const CardGenerate = () => {
    // generating code
}

// Function to check if two flipped cards match
const checkCard = (e) => {
    // checking card / matching card
}

// 50/50 Lifeline Logic
if (toggleCard.length >= 6) {
    //  the 50/50 lifeline
}

// Show Cards Logic
if (toggleCard.length >= 8) {
    //  the Show Cards lifeline
}

// Hint Lifeline Logic
if (toggleCard.length >= 10) {
    // Code for implementing the Hint lifeline
}

// Card Picker Logic
const cardPicker = () => {
    // Code for picking random cards for lifelines
}

// Function to restart the game
const restart = () => {
    // Code to reset the game 
}

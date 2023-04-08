'use strict';

// Элементы выбора
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let diceNumber;
let currentScore;
let activePlayer;
const totalScores = [];
let isPlaying;

// Инициализация начальных значений
const initGame = () => {
    isPlaying = true;
    currentScore = 0;
    activePlayer = 0;
    score1Element.textContent = 0;
    score0Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    totalScores[0] = totalScores[1] = 0;
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    diceElement.classList.add('hidden');
}



// Переключение игроков
const switchActivePlayer = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

// function diceRoll (i) {
//     setTimeout(function() {
//         diceNumber = Math.trunc(Math.random()*6) + 1;
//         diceElement.setAttribute('src', `dice${diceNumber}.png`);
//         if(--i) diceRoll (i);
//         diceElement.classList.remove('hidden'); 
//     }, 200);
//     diceElement.classList.add('hidden');
// }

initGame();

// Бросок кубика
btnRoll.addEventListener("click", () => {
	if (isPlaying) {
        const diceNumber = Math.trunc(Math.random()*6) + 1;
        diceElement.classList.remove('hidden');
        diceElement.src = `dice${diceNumber}.png`;
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchActivePlayer();
        }
    }
})


// Кнопка сохранить очки
btnHold.addEventListener('click', () => {
    if (isPlaying) {
        totalScores[activePlayer] += currentScore;
        // if (activePlayer) score1Element.textContent = totalScores[activePlayer];
        // else score0Element.textContent = totalScores[activePlayer];
        document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
        if (totalScores[activePlayer] >= 100) {
            isPlaying = false;
            diceElement.classList.add('hidden');
            document.querySelector(`#name--${activePlayer}`).textContent = `ИГРОК ${activePlayer+1} WIN`;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        } else {
            switchActivePlayer();
        }
    }
})


//кнопка Новая игра
btnNew.addEventListener('click', initGame);








// let scorePlayer1 = document.querySelector('#score--0').textContent;
// let scorePlayer2 = document.querySelector('#score--1').textContent;
// const SCORE_WIN = 100;
// let scorePlayer1Saved = document.querySelector('.current--0').textContent;
// let scorePlayer2Saved = document.querySelector('.current--1').textContent;
// let diceNumber;
// let dice = document.querySelector('.dice');


// const isActivPlayer = (player) => {
// 	return document.querySelector(`.${player}`).classlist.content('player--active');
// }

// //переключение игроков
// const changePlayer = (player1, player2) => {
// 	document.querySelector(`.${player1}`).classlist.toggle('player--active');
// 	document.querySelector(`.${player2}`).classlist.toggle('player--active');
// 	scorePlayer1, scorePlayer2 = 0;
// }


// //выключение кнопок
// const disableBtn = (btn1, btn2) => {
// 	document.querySelector(`.${btn1}`).disable = true;
// 	document.querySelector(`.${btn2}`).disable = true;
// }

// //показать/скрыть кубик
// const hiddenDice = (diceNumber) => {
// 	document.querySelector(`.dice-${diceNumber}`).classList.toggle('hidden');
// }

// console.log('click');

// //кнопка "new game"
// document.querySelector('.btn--new').addEventListener("click", () => {
//     console.log('click');
// 	document.querySelector('.score--0').textContent = '0';
// 	scorePlayer2 = 0;
//     scorePlayer1Saved = 0;
//     scorePlayer2Saved = 0;
// })

// //кнопка "бросок кубика"
// document.querySelector('.btn--roll').addEventListener('click', () => {
// 	for (let i = 0; i<50; i++) {
//         diceNumber = Math.trunc(Math.random()*6) + 1;
// 	    dice.setAttribute('src', `dice${diceNumber}.png`);
//         setTimeout(50);
//     }
//     diceNumber = Math.trunc(Math.random()*6) + 1;
// 	dice.setAttribute('src', `dice${diceNumber}.png`);
// 	if (diceNumber === '1') {
// 		changePlayer('player--0', 'player--1');
// 	} else if (isActivPlayer('player--0')){
// 		scorePlayer1 += diceNumber;
// 	} else if (isActivPlayer('player--1')){
// 		scorePlayer2 += diceNumber; 
//     }
// })

// //кнопка "сохранение очков"
// document.querySelector('.btn-save-score').addEventListener('click', () => {
// 	scorePlayer1Saved += scorePlayer1;
// 	scorePlayer2Saved += scorePlayer2;
// 	if (scorePlayer1Saved >= SCORE_WIN) {
// 		//Player 1 WIN
// 		disableBtn('btn--roll', 'btn--hold');
// 	} else if (scorePlayer2Saved >= SCORE_WIN) {
// 		//Player 2 WIN
// 		disableBtn('btn--roll', 'btn--hold');
// 	}
// 	changePlayer('player--0', 'player--1');
// 	hiddenDice(diceNumber);
// })



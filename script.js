const rollDice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const p0_currentScore = document.getElementById('current--0');
const p1_currentScore = document.getElementById('current--1');
const player_1 = document.querySelector('.player--1');
const player_0 = document.querySelector('.player--0');
const hold_btn = document.querySelector('.btn--hold');
const score_p0 = document.getElementById('score--0');
const score_p1 = document.getElementById('score--1');
const p0_name = document.getElementById('name--0');
const p1_name = document.getElementById('name--1');
const new_btn = document.querySelector('.btn--new');


function handlingActivation() {
	if (player_0.classList.contains('player--active')) {
		p0_currentScore.textContent = 0;
		player_1.classList.add('player--active');
		player_0.classList.remove('player--active');
	} else {
		p1_currentScore.textContent = 0;
		player_0.classList.add('player--active');
		player_1.classList.remove('player--active');
	}
}

function handlingCurrentScore() {
	if (player_0.classList.contains('player--active')) {
		let content = +p0_currentScore.textContent;
		p0_currentScore.textContent = content + randomNum;
	} else {
		let content = +p1_currentScore.textContent;
		p1_currentScore.textContent = content + randomNum;
	}
}

rollBtn.addEventListener('click', function () {
	randomNum = Math.floor(Math.random() * 6 + 1);
	rollDice.setAttribute('src', `dice-${randomNum}.png`);
	if (randomNum === 1) {
		handlingActivation();
	} else {
        handlingCurrentScore();
	}
});

hold_btn.addEventListener('click', function(){
    if(player_0.classList.contains('player--active')){
        let content = +p0_currentScore.textContent;
        let score = +score_p0.textContent;
        score_p0.textContent = score+content;
        let p0_score = score+content;
        p0_currentScore.textContent=0;
        if(p0_score >= 100){
             p0_name.textContent = 'PLAYER 1 WIN THE GAME';
        }
        else{
            player_1.classList.add('player--active');
            player_0.classList.remove('player--active'); 
        }
    }
    else{
        if(player_1.classList.contains('player--active')){
            let content = +p1_currentScore.textContent;
            let score = +score_p1.textContent;
            score_p1.textContent = score+content;
            let p1_score = score+content;
            p1_currentScore.textContent=0;
            if(p1_score >= 100){
                 p1_name.textContent = 'PLAYER 2 WIN THE GAME';
            }
            else{
                player_0.classList.add('player--active');
                player_1.classList.remove('player--active'); 
            }
        }
    }


})


new_btn.addEventListener('click', function(){
    player_0.classList.add('player--active');
    player_1.classList.remove('player--active');
    score_p0.textContent=0;
    score_p1.textContent=0;
    p0_currentScore.textContent=0;
    p1_currentScore.textContent=0;
	rollDice.setAttribute('src', ``);
    p1_name.textContent='PLAYER 2';
    p0_name.textContent='PLAYER 1';
    
    })
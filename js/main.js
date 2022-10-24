const submitBtn = document.querySelector('.card__submitn-btn');
const cardBack = document.querySelector('.card__back');
const cardUserOpinion = document.querySelector('.card__user-opinion');
const opinionBtns = document.querySelectorAll('.card__rate');
const opinonText = document.createElement('p');
const noOpinion = document.querySelector('.no-opinion');

const opinonFunction = (e) => {

    //active opinon btn color
	opinionBtns.forEach((btn) => {
		btn.classList.remove('background-color');
	});
	e.target.classList.add('background-color');

    //text
	if (cardUserOpinion.classList.contains('card__no-opinion')) {
		cardUserOpinion.removeChild(noOpinion);
		const opinion = e.target.textContent;
		opinonText.textContent = `You selected ${opinion} of of 5`;
		cardUserOpinion.classList.remove('card__no-opinion');
        
        
	} else {
		const opinion = e.target.textContent;
		opinonText.textContent = `You selected ${opinion} of of 5`;

	}
};

const backCardOpen = () => {
	cardBack.classList.add('top');
};

cardUserOpinion.append(opinonText);

submitBtn.addEventListener('click', backCardOpen);
opinionBtns.forEach((btn) => {
	btn.addEventListener('click', opinonFunction);
});

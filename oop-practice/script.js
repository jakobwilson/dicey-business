

class Die {
	constructor() {
		this.div = document.createElement('div');
		this.div.className = 'die';
		this.value = this.roll();
		this.render();
		document.getElementById('dice-container').appendChild(this.div);
	}

	roll() {
		this.value = Math.floor(Math.random() * 6) + 1;
		this.render();
		return this.value;
	}

	render() {
		this.div.textContent = this.value;
	}

	remove() {
		this.div.remove();
	}
}

const dice = [];

document.getElementById('generate-die').addEventListener('click', () => {
	const die = new Die();
	dice.push(die);
});

document.getElementById('roll-dice').addEventListener('click', () => {
	dice.forEach(die => die.roll());
});

document.addEventListener('click', event => {
	if (event.target.classList.contains('die')) {
		event.target.roll();
	}
});

document.addEventListener('dblclick', event => {
	if (event.target.classList.contains('die')) {
		const index = dice.findIndex(die => die.div === event.target);
		dice[index].remove();
		dice.splice(index, 1);
	}
});

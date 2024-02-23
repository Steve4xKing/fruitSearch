const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO

	return results;
}



let searchStr = "";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function searchHandler(e) {
	let potentialFruit = [];
	// TODO
	if (alphabet.includes(e.key.toLowerCase())){
		searchStr += e.key.toLowerCase();
	} else if (e.key === "Backspace") {
		searchStr = searchStr.slice(0, -1);
	}
	for(let fruit of fruits){
		if (fruit.toLowerCase().includes(searchStr)){
			potentialFruit.push(fruit);
		}
	}
	showSuggestions(potentialFruit);
}

function showSuggestions(potentialFruit) {
	suggestions.innerHTML = '';

	if (searchStr === ''){
		potentialFruit = [];
		return;
	}

	for (let fruit of potentialFruit){
		const li = document.createElement('li');
		li.textContent = fruit;
		suggestions.appendChild(li);
	}
}

function useSuggestion(e) {
	// TODO
	let choice = e.target.innerText;
	input.value = choice;
	searchStr = choice;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
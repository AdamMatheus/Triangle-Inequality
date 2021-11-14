const s1 = document.querySelector('#input1');
const s2 = document.querySelector('#input2');
const s3 = document.querySelector('#input3');
const button = document.querySelector('#button-addon2');
const result = document.querySelector('#result');

button.addEventListener('click', triangle);
function triangle() {
	Side1 = +s1.value;
	Side2 = +s2.value;
	Side3 = +s3.value;

	if (Side1 > 0 && Side2 > 0 && Side3 > 0) {
		if (Side1 + Side2 > Side3 && Side1 + Side3 > Side2 && Side2 + Side3 > Side1) {
			if (Side1 == Side2 && Side2 == Side3) {
				result.innerHTML = 'This is Equilateral Triangle';
			} else if (Side1 == Side2 || Side2 == Side3 || Side1 == Side3) {
				result.innerHTML = 'This is Isosceles Triangle';
			} else {
				result.innerHTML = 'This is Scalene Triangle';
			}
		} else {
			result.innerHTML = 'It`s not possible to draw this triangle with given values';
		}
	} else {
		result.innerHTML = 'Please, enter positive numbers';
	}
}
window.addEventListener('keyup', function(event) {
	if (event.code == 'Enter' || event.code == 'NumpadEnter') {
		event.preventDefault;
		triangle(event.code);
	}
});

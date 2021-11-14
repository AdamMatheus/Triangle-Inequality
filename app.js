function checkinputs() {
	//  var = parseInt(document.Name_Of_Element_Form.Field_Name(Input).value);
	/* Input Fields */

	inp1 = parseInt(document.Triangle_Inputs.input1.value);
	inp2 = parseInt(document.Triangle_Inputs.input2.value);
	inp3 = parseInt(document.Triangle_Inputs.input3.value);
	/* Side options */
	a = inp1 + inp2;
	b = inp1 + inp3;
	c = inp2 + inp3;
	sides = [ a, b, c ];
	const calc = sides.reduce(
		(a, b, c) =>
			a + b >= c && b + c >= a && a + c >= b ? `${'You can draw'}` : `${'You can not draw this triangle'}`
	);
	console.log(calc);

	if (a == b && b == c) {
		alert('Equalateral');
	}
	if (a == b && a != c) {
		alert('Isosceles');
	}
	if (a != b && a == c) {
		alert('Isosceles');
	}

	if (a != b && a != c && b != c) {
		alert('Scalene!');
	}
}

function calcCircleArea(r) {
	var area;
	area = r*r;
	document.body.innerHTML += '<div>r = ' + r + '; ' + 'a = ' + area + '</div><br/>';
}

calcCircleArea('7');
calcCircleArea('1.5');
calcCircleArea('20');
function calcCircleArea(r) {
	var area;
	area = Math.PI*Math.pow(r,2);
	document.body.innerHTML += '<div>r = ' + r + '; ' + 'a = ' + area + '</div><br/>';
}

calcCircleArea('7');
calcCircleArea('1.5');
calcCircleArea('20');

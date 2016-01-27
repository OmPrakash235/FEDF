function currentTime() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var hh = h;
	var p;
	
	if(hh>12){
		hh = hh - 12;
		p = 'PM';
	}
	else if(hh==12){
		hh = 12;
		p = 'PM';
	}
	else if(hh==0){
		hh = 12;
		p = 'AM';
	}
	else{
		hh = h;
		p = 'AM';
	}
	
	if(m<10){
		m = '0' + m;
	}
	
	console.log('12 Hour Format: ' + hh + ':' + m + ' ' + p);
	console.log('24 Hour Format: ' + h + ':' + m);
}

currentTime();
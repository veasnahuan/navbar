var nav = document.getElementById('navLink'),
	btn = document.getElementById('navBut');

(function(){
	classSwitch();
}('docReady', window));

btn.addEventListener('click', function(){
	nav.classList.toggle('hide');
	nav.classList.toggle('show');
});

window.addEventListener('resize', classSwitch);

function classSwitch(){
	var width = window.innerWidth;
	if(width <= 768){
		nav.classList.add('hide');
		nav.classList.remove('show');
	}else{
		nav.classList.remove('hide');
		nav.classList.add('show');
	}
}

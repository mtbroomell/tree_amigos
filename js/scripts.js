/*
*	Submission Script
*/

var submit = document.getElementById('form_submit');

submit.addEventListener('click', function(){
	var name = document.getElementById('name').value;
	sessionStorage.setItem('klein_name', name);

	var results = document.getElementById('results');
	results.innerHTML = sessionStorage.getItem('klein_name');
})
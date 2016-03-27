/*
*	Submission Script
*/

// Get the form submission and add eventlistener to it
var submit = document.getElementById('form_submit');

submit.addEventListener('click', function(){
	// Get Form Scope Vars & set them to Session Storage
	var name = document.getElementById('name').value;
	var title = document.getElementById('title').value;
	var runAmt = document.getElementById('runAmt').value;
	var picksPerRun = document.getElementById('picksPerRun').value;

	// Create new Project Object
	var projArgs = {
		'name': name,
		'title': title,
		'runAmt': runAmt,
		'picksPerRun': picksPerRun
	}

	var project = new Project(projArgs);
	console.log(project);

	// Grab Results Container
	var results = document.getElementById('results');
})
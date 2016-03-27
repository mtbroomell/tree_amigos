// Form Listener - dynamically add rows for amount of species
var numSpeciesContainer = document.getElementById('numSpecies');
numSpeciesContainer.addEventListener('change', function(){
	var spec_num = numSpeciesContainer.value;
	var spec_row = "<td class='spec_name'><input placeholder='Species Name'></input></td><td class='spec_range_bot'><input placeholder='Range Min'></input></td><td class='spec_range_top'><input placeholder='Range Max'></input></td>";
	var spec_tgt = document.getElementById('species-container');
	if(spec_tgt.innerHTML != "") { 
		spec_tgt.innerHTML = "";
	}
	var i;
	for(i=0; i<spec_num; i++) {
	
		var spec_row_container = document.createElement('tr');
		spec_row_container.innerHTML = spec_row;
		spec_tgt.appendChild(spec_row_container);
		spec_row_container.id = "spec_row_" + (i+1);

		console.log(spec_row_container);

	}
});

// Get the form submission and add eventlistener to it
var submit = document.getElementById('form_submit');

submit.addEventListener('click', function(){
	// Get Form Scope Vars & set them to Session Storage
	var name = document.getElementById('name').value;
	var title = document.getElementById('title').value;
	var runAmt = document.getElementById('runAmt').value;
	var picksPerRun = document.getElementById('picksPerRun').value;
	var numSpecies = document.getElementById('numSpecies').value;


	// Create new Project Object
	var projArgs = {
		'name': name,
		'title': title,
		'runAmt': runAmt,
		'picksPerRun': picksPerRun,
		'numSpecies': numSpecies
	}

	var project = new Project(projArgs);
	console.log(project);

	// Grab Results Container
	var results = document.getElementById('results');
})
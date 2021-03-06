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
		spec_row_container.setAttribute('class','spec_row');
		spec_row_container.id = "spec_row_" + (i+1);

	}
});

// Get the form submission and add eventlistener to it
var submit = document.getElementById('form_submit');

submit.addEventListener('click', function(){
	// Get Form Scope Vars
	var name = document.getElementById('name').value;
	var title = document.getElementById('title').value;
	var runAmt = filterInt(document.getElementById('runAmt').value);
	var picksPerRun = filterInt(document.getElementById('picksPerRun').value);
	var numSpecies = filterInt(document.getElementById('numSpecies').value);
	var rangeMin = filterInt(document.getElementById('rangeMin').value);
	var rangeMax = filterInt(document.getElementById('rangeMax').value);

	// Create new Project Object
	var projArgs = {
		'name': name,
		'title': title,
		'runAmt': runAmt,
		'picksPerRun': picksPerRun,
		'numSpecies': numSpecies,
		'rangeMin': rangeMin,
		'rangeMax': rangeMax
	}

	// Species Objects
	// Clear Session Storage prior to setting for results
	sessionStorage.clear();
	var species = $('.spec_row');
	var i;
	for(i=0; i<species.length; i++) {
		var spec_name = $(species[i]).find('.spec_name input')[0].value;
		var spec_range_min = $(species[i]).find('.spec_range_bot input')[0].value;
		var spec_range_top = $(species[i]).find('.spec_range_top input')[0].value;
		if(spec_name != "" && spec_range_min != "" && spec_range_top != "") {
			sessionStorage.setItem('species_'+(i+1), spec_name + ", " + spec_range_min + ", " + spec_range_top);			
		}
	}

	// Store Project as SessionStorage
	for ( var prop in projArgs ) {
		sessionStorage.setItem('klein_' + prop, projArgs[prop]);
	}

	window.location = '../kleinulator/results.html';
})
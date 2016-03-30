(function(){

	// TESTING Iterate over Session Storage
	substr = "klein_"
	for(var prop in sessionStorage) {
		if(prop.indexOf(substr) > -1){
			document.write(prop + " : " + sessionStorage[prop] + "<br/>");			
		}
	}

	spec_sub = 'species_';
	for(var prop in sessionStorage) {
		if(prop.indexOf(spec_sub) > -1){
			document.write(prop + " : " + sessionStorage[prop] + "<br/>");			
		}
	}	

})(document, window);

$(document).ready(function(){
	// Species Factory
	var species = [];
	for (var i = 0; i <= sessionStorage.length; ++i) {
		spec_sub = 'species_';
		var temp = sessionStorage.key(i);
		if(typeof temp == 'string'){
			if(temp.indexOf(spec_sub) > -1) {
				var subTemp = sessionStorage.getItem(temp);
				var subSplit = subTemp.split(", ");
				var subTempObj = new Species({
					'sp_name': subSplit[0],
					'sp_low': subSplit[1],
					'sp_high': subSplit[2]
				});
				species.push(subTempObj);
			}	
		}
	}

	// Project Info
	var proj_name = sessionStorage.getItem('klein_name');
	var proj_numspec = filterInt(sessionStorage.getItem('klein_numSpecies'));
	var proj_ppr = filterInt(sessionStorage.getItem('klein_picksPerRun'));
	var proj_ranmax = filterInt(sessionStorage.getItem('klein_rangeMax'));
	var proj_ranmin = filterInt(sessionStorage.getItem('klein_rangeMin'));
	var proj_title = sessionStorage.getItem('klein_title');
	var proj_runamt = filterInt(sessionStorage.getItem('klein_runAmt'));

	var proj_args = {
		'name': proj_name,
		'title': proj_title,
		'runAmt': proj_runamt,
		'picksPerRun': proj_ppr,
		'numSpecies': proj_numspec,
		'minRange': proj_ranmin,
		'maxRange': proj_ranmax
	}
	var project = new Project(proj_args);
	console.log(project);
	console.log(project.rng());
	console.log(project.rng());
	console.log(project.rng());
	console.log(project.rng());
	console.log(project.rng());

	// Project RunTime
	for(var i = 0; i < species.length; i++) {
		var row = $("<td>" + species[i].sp_name + "</td><td>" + species[i].sp_hit + "</td>");
		$('#results-table tbody').append(row);
	}

});
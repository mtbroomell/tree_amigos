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
					'sp_low': filterInt(subSplit[1]),
					'sp_high': filterInt(subSplit[2]),
					'sp_hit': 0
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

	// Project RunTime
	for(var b = 0; b < project.runAmt; b++ ){
		for(var i= 0; i < project.picksPerRun; i++){
			ran = project.rng();
			for(var a= 0; a < species.length; a++){
				if(ran >= species[a].sp_low && ran <= species[a].sp_high) {
					species[a].sp_hit += 1;
					$("#" + species[a].sp_name + "-row .hit").text(species[a].sp_hit);
				}
				if(i == (project.picksPerRun - 1)){
					for(var a = 0; a < species.length; a++){
						var row = $("<tr id='" + species[a].sp_name + "-row-" + b + "'><td>" + species[a].sp_name + "</td><td class='hit'>" + species[a].sp_hit + "</td></tr>");
						if(species[a].sp_hit == 0){
							console.log(species[a].sp_name)
						}
						$('#results-table tbody').append(row);
					}
				}
			}
		}
		for(var a = 0; a < species.length; a++){
			species[a].sp_hit = 0;
		}
	}
});
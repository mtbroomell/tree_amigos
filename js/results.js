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
	// Project Info

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
	for(var i = 0; i < species.length; i++) {
		var row = $("<td>" + species[i].sp_name + "</td><td>" + species[i].sp_hit + "</td>");
		$('#results-table tbody').append(row);
	}
});
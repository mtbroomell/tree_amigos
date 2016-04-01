/*
*	Project class
*/

var Project = function(o){
	this.title = o.title;
	this.name = o.name;
	this.runAmt = o.runAmt;
	this.picksPerRun = o.picksPerRun;
	this.numSpecies = o.numSpecies;
	this.minRange = o.minRange;
	this.maxRange = o.maxRange;

	// Random Number Generation Method
	this.rng = function() {
		var ran = Math.floor(Math.random() * (this.maxRange - this.minRange + 1)) + this.minRange;
		return ran;
	}

	// Diversity Index Method
	this.sds = function(species, project){
		var hit_temp = 0; 
		var ppr_temp;
		for(var i = 0; i<species.length; i++){
			hit_temp = hit_temp + (species[i].sp_hit * (species[i].sp_hit - 1));
		}
		ppr_temp = project.picksPerRun * (project.picksPerRun - 1);
		var solution = 1 / (hit_temp / ppr_temp);
		return solution;
	}
}
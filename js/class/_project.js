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

	var rng = function() {
		var ran = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
	}
}
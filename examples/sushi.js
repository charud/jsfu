/**
 * Buying sushi with Alice and Bob
 * -------------------------------
 * Demonstrates asynchronous requests 
 * with automatic continuation and 
 * how to execute such functions in parallel
 */

var colors = { red: '\033[31m',
			   blue: '\033[34m',
			   gray: '\033[1;30m',
			   reset: '\033[0m' }


///// Helpers ////////////////////////////////////////////////// 

/**
 * Retrieve current timestamp in a nice to read format
 */
function getTimestamp() {
	var date = new Date();
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();		
	return colors.gray + '[' + time + ']' + ' ';
}

/**
 * Fake an asynchronous request that takes 1-2 second(s):
 */
function getDelayed(obj, callback, log) {
	setTimeout( => {
		if(log) {
			console.log(getTimestamp() + colors.gray + '> ' + log + ':', obj, colors.reset);
		}
		callback(obj);
	}, Math.random()*1200+800);
}


///// Asynchronous Data Retrieval /////////////////////////////// 

/**
 * Retrieve the current location asynchronously 
 */
function getLocation(callback) {
	getDelayed('Stockholm', callback, 'getLocation');
}

/**
 * Retrieve the closest store asynchonously 
 */
function getClosestStore(location, callback) {	
	getDelayed({ 
		name: location + ' Sushi',
		buy: function(dish) { return dish; }}, 
	callback, 'getClosestStore');
}


///// Cannot have sushi without any humans to eat it ///

/**
 * An object to represent a sushi loving human.
 * These humans are good multitaskers,
 * They do all of their eating asynchronously.
 */
function Human(name) {
	this.name = name;
}

Human.prototype.eat = function(sushi, callback) {
	var opinion = (sushi == 'tamago') ? 'Yummy!' : 'Yucky!';
	getDelayed(opinion, callback);
}

Human.prototype.say = function(utterance) {
	console.log(getTimestamp() +
				colors.blue + 
				this.name + ": " + 
				colors.reset + 
				utterance);
}

///// Actual logic //////////////////////////////////// 

var alice = new Human('Alice');
var bob = new Human('Bob');

// var a = working(§); <- bracket } symbol below async call 
//                        that's not part of the wrapping function 
// 						  is not yet supported. so cannot do this yet.

alice.say("Lunch break! Let's get some food!");
bob.say("Let's do it in parallel!");

lunchBreak(alice);
lunchBreak(bob);

function working(whenDone) {
	getDelayed(null, whenDone);
}

/**
 * A function does not need to be asynchronous itself 
 * to run other asynchronous methods. 
 */
function lunchBreak(human) 
{	
	var sushi = getSushi(§);
	human.say("I got some " + sushi + ", let's eat!");
	var opinion = human.eat(sushi, §);
	human.say("That was " + opinion);
}

/**
 * Get some sushi asynchronously by composing 
 * two other asynchronous functions 
 */
function getSushi(callback) 
{
	var city = getLocation(§);
	var store = getClosestStore(city, §);
	var sushi = store.buy('tamago');
	callback(sushi);
}
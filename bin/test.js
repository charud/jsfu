 writeAsync = (text, callback) => {
 	setTimeout(function() {
 		callback(text);
 	}, 1000);
 }
// 
// writeAsync('text', (r) => {
// 	console.log(r);
// });

function wrapAsync() 
{
	var r = writeAsync('Bob', §);
	console.log(r);

	var r = writeAsync('After Bob', §);
	console.log(r);
}

wrapAsync();
var r = writeAsync('Alice', §);
console.log(r);


//
// await test = writeAsync('text');
// console.log("Done");
//
// writeAsync('text').then((r) => {
// 	console.log("Done");
// });
# jsfu

Improve your Javascript fu with language extensions


## Featuers 

Transpile your code with jsfu and get access to:

### Automatic Continuation ###

The Automatic Continuation feature will replace the `§` symbol  
with a callback containing any code that comes below the function call.

It will turn

```js
	var foo = bar(123, §, 123);
	x(foo);
```

into

```js
	bar(123, function(foo) { x(foo); }, 123);
```

Another example before transcompilation:

```js
	function getSushi(piece, callback) {
		// Lunch hour. Need to stand in line first.
		setTimeout(function() { callback(piece); }, 5000);
	}

	var sushi = getSushi('tamago', §);
	console.log(sushi + ' was good');
```

After transcompilation:

```js
	function getSushi(piece, callback) {
		// Lunch hour. Need to stand in line first.
		setTimeout(function() { callback(piece); }, 5000);
	}

	getSushi('tamago', function(sushi) {
		console.log(sushi + ' was good');
	});
```

#### Async Wrapping 

Parallel calls are supported by encapsulating the code inside a function:

Without async wrapping:

```js
	var r = A($);
 	var r = C($);
 	var r = B($);
```

This will first run A  
When A is completed C will run  
When C is completed B will run  

With async wrapping:

```js
 	function runAC() {
 		var a = A($);
 	    var c = C($); 
 	}
 	runAC();
    var b = B($);
```

This will run A and B in parallel  
When A is completed C will run

### Command line

jsfu supports reading from stdin and stdout using  

`-s` or `--stdin` for stdin
`-p` or `--print` for stdout  

Example: 

```bash
	$ echo '(a, b) => {}' | ./bin/jsfu -sp | grep function
	function(a, b) {}
```

## License 

(The MIT License)

Copyright (c) 2012 Charlie Rudenstål &lt;charlie4@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
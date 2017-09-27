//reuire is available globally, to import other modules
var path = require("path");

var hello = "Hello World from Node js";
console.log(hello);

//console.log(global.hello) does not work since unlike browser, every file is its own module, 
//variables in a file are added to own module and not global
//No need to specify global namespace since it is assumed
global.console.log(hello);

//string functions are available globally
var justNode = hello.slice(17);

//template strings
console.log(`Rock on World from ${justNode}`);

console.log(__dirname);
console.log(__filename);

console.log(`Rock on world from ${path.basename(__filename)}`);

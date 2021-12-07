//This is a comment stuff in here will NOT run in the code
//You make one by using //

/*
This is a comment but it's a mutli line comment
So anything in here will not run in the code
You can make one with /* and * /
*/

console.log("Hello World"); //This will print Hello World to the "console." You can think of a console as the output of your code


var name = "John"; //A var is a variable, which is a place to store information
let age = 25; //A let is a variable that can change
const boo = true; //A const is a variable that cannot change, or a "constant"

//Using var is more reliable than let but if you're trying to debug your code you should switch to let

/*
console.log(foo) // ReferenceError AKA crash
let foo = "bar"
console.log(foo) // Output: bar

console.log(bar) // Output: undefined
var bar = "foo" //But now it will be defined and now output "foo"
console.log(bar) // Output: foo

For more information on the difference between let and var, please see the following link:
https://stackoverflow.com/a/11444416 
*/

name = "Sara"; //This is how we can change the value of a variable
age = "twenty five"; //As you can see, we can change a number to a string if we wanted to
/* 
There are five types of variables
1. String   - Can store anything such as letters, numbers, and symbols (like $, %, &, 𐐘, ඞ, etc.)
2. Number   - Can store numbers
3. Boolean  - Can store true or false
4. Object   - Can store objects
5. Array    - Can store arrays
*/

var string = "This is a string!";
var number = 25;
var boolean = true;

var object = {
    //Key: Key Value
    name: "John",
    age: 25
}; //An object is a collection of data that is stored in key value pairs
console.log(object)
//We can also just get 1 value from an object by using a dot then the key
console.log(object.name);

var array = ["John", "Sara", "Bob"]; //An array is a list of data that is stored in a sequence

console.log(array); //This will print the whole array to the console
console.log(array[0]); //This will print the first item in the array to the console

var isCool = true;

var start = 0
var end = 1

for (var i = start; i < end; i++) { //This is a little complicated but basically it is a loop that runs a certain amount of times

    console.log(i); //This will print 0, 1, and 2 to the console
    //JS/NodeJS doesnt count like 1,2,3 it counts like 0,1,2 so this is why we have to start at 0 and end at 2

    if (isCool) { //This is check if the variable is true or false or if it is 1 or 0

        /*
        0 = false
        1 = true
        */
        console.log("is cool");
    } else {
        console.log("is not cool");
        isCool = false; //we can change the value of a variable in this case we are changing it to false
    }
}

var coolinportedModule = require("http"); //This is how we import a module in nodejs

//NodeJS has a few built in modules
/*
1. http             - This is a module that allows us to make requests to a server
2. fs               - This is a module that allows us to read and write files
3. path             - This is a module that allows us to work with file paths
4. os               - This is a module that allows us to work with the operating system
5. url              - This is a module that allows us to work with URLs
6. util             - This is a module that allows us to work with the console
7. querystring      - This is a module that allows us to work with query strings
8. events           - This is a module that allows us to work with events
9. assert           - This is a module that allows us to work with assertions
10. string_decoder  - This is a module that allows us to work with strings
11. buffer          - This is a module that allows us to work with buffers
12. child_process   - This is a module that allows us to work with child processes
13. cluster         - This is a module that allows us to work with clusters
14. dgram           - This is a module that allows us to work with datagrams
15. dns             - This is a module that allows us to work with DNS
16. readline        - This is a module that allows us to work with readline
17. repl            - This is a module that allows us to work with the REPL
18. vm              - This is a module that allows us to work with virtual machines
19. zlib            - This is a module that allows us to work with zlib

The most common modules I use are fs, path, http(I don't use http directly I use express) and OS
For the stuff we are doing we will only ever be using OS, FS, and Path so I will only go over those later
*/


/*
--Functions--
A function is a block of code that can be used multiple times
You can pass variables into a function and it(the function) will use the variables in the code
*/

function greet(name) {
    console.log("Hello " + name); //As you can see this is a function that takes in a variable and prints it to the console
}

greet("John"); //This will run (call) the function and pass in the string "John"
greet(isCool); //We can also pass variables into a function BUT we have to make sure it is a string, number or boolean
//if its an object or an array you will get an error and need to change it to a string with the following: JSON.stringify(<variableHere>)

greet(JSON.stringify(object))
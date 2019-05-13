# Intermediate Javascript Assessments

### Without using Google answer the following:

1. What is the difference between .map() and .filter()?
filter allows you to remove an element if it registers false.
map allows you to run against every element in an array and returns a new array based on an existing array.

filter is for taking a jQuery object or array and producing a new jQuery object or array that only contains a subset of the entries in the original — that is, we apply a filter to it, getting only the entries that match the filter. So the result will be the same size (if you don't remove anything) or smaller, but never larger, and will only have entries from the original.

map is for taking a jQuery object or array and producting a new jQuery object or array with new, different entries based on the entries in the original. The result will always be the same size as the original, but the entries in the result could be completely different from the original's.

So as you can see, they do different things: filter produces a subset of the entries from the original, while map produces a result of the same size as the original but with (potentially) completely different contents.

2. Why would you use object destructuring?
it allows you to extract information from an object. you can pull multiple at the same time.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes they are more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and soon we’ll see how these are handled too.

3. What is the difference between var, let, and const?
var was ES5 syntax. it was scoped to the nearest function. It will go to the nearest code.
let and const are more for scoping. let can be reassigned and it will be scoped to the nearest block. Const on the other hand will be used when you are not planning on reassigning the variable.


he main differences between var and let and const are, as you said, `let` and `const` are bound to the block where they are declared

Lets see an example,

function temp() {
    if (1 !== 1) {
        var a = 1;
    }
    console.log(a);
}

This will print `undefined` when `temp` is invoked. Because, all the variables declared, with `var`, anywhere within the current function are hoisted. It means that the `var` declarations are processed during the compile time and the JavaScript engine will know that there is a variable with the name `a` exists somewhere within the function, but the value will be assigned only when then assignment expression is executed. Till then it will have the default value `undefined`. That is what happens in this case.

`let`

'use strict';
function temp() {
    if (1 !== 1) {
        let a = 1;
    }
    console.log(a);
}
temp();

Now, the code will throw a `ReferenceError`, because `let` makes sure that the variable `a` is visible only to the `if` block. So, the code outside the block will not know about the variable `a`. This is similar to C, C++ or JAVA way of using variables.

`const`

`const` is similar to C or C++'s `const` only. Once you assign a value to the variable declared as `const`, you cannot assign some other value to the const variable. For example,

'use strict';
const a = 1;
a = 2;

will throw `TypeError: Assignment to constant variable.`


4. Why is testing important?
testing will help find bugs during the development phase. it allows you to logically think through your codes.

Testing is important aspect for any project despite it being a web or mobile based application. However, excluding the testing part will have an adverse effect on the project. If one aims to release a bug free product, performing javascript testing at every phase is the solution. It helps to detect bugs and helps in releasing a stable application. Also testing helps in early detection of bugs before merging it to production. No matter if it’s a client or customer, everyone expects a high-quality product at the end and expect that they have been provided a stable product which will not crash or throw error when it’s live. javascript testing helps to identify bugs during the development phase and fixing those bugs before the release helps users to get a reliable product.

5. What is a higher order function?
a higher function is a function that can take itself or other functions as an argument or cam return a function as itself.

A function that accepts and/or returns another function is called a higher-order function.


6. What is the difference between a class and an object?

a class is a template for objects while an object has a state in which all of the properties have values.

A class is a blueprint from which you can create the instance, i.e., objects.	An object is the instance of the class, which helps programmers to use variables and methods from inside the class.
A class is used to bind data as well as methods together as a single unit.	object acts as a variable of the class.
Classes have logical existence.	Objects have a physical existence.
A class doesn't take any memory spaces when a programmer creates one.	An object takes memory when a programmer creates one.
The class has to be declared only once.	Objects can be declared several times depending on the requirement.

7. What did you learn during the group project this week? Please include any additional feedback you may have.




### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?
<link rel="stylesheet" type="text/css" href="entercsshere.css">


2. What is the difference between a div and a span?
div will create a line break whereas a span will not.

The primary difference between a div and a span is their default behavior. By default, a <div> is a block-level-element and a <span> is an inline element. In other words, if you want to adjust a small portion of text and not break it out of the current line, you should use a <span>. If you need to modify a large division, the height, move an element, or contain other elements, you should use a <div>.

3. What is a CSS class? When should you use an id instead of a class?
class is an identifier. You can use ID for the same thing but it will not allow you to identify more than one at a time.

The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

4. Name 4 semantic HTML tags.
<div>
<span>
<header>
<h1-6>
<html>
<br>
<p>
<script>
<ul>


5. What are three options for creating responsive design?

onlick, hover, transform.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers? front end developmnet is what you manage on the browser. you'll be respoinsible for the look feel and design of the webpage.

React JS is a good example of something that you will use primarily for front end. CSS, HTML, and java script for the most part.


2. What is block scope in JavaScript?
you can declare variables that are limited in scope

3. How would you explain the idea of "inheritance" in object oriented programming?

inheritance is basically the ability to pass down items from the parent to the child. it allows you to pass through objects and functions.

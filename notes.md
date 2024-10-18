## Notes ##
- if you run into any problems with mergining not showing up run the command 'git config pull.rebase false' and it will revert you back before any of the merge conflicts.


- path to pem file ` ./deployFiles.sh -k ../../Desktop/cs260/260server.pem -h trackyourboardgames.com -s startup'

# 260 Midterm Prep

## In the following code, what does the `<link>` element do?
The `<link>` element is used to link external resources to the HTML document. Most commonly, it links CSS files for styling the page. You'll need to understand how to include external stylesheets in your HTML.

## In the following code, what does a `<div>` tag do?
The `<div>` tag is a block-level element used to group content together for styling or layout purposes. It doesn’t affect the content visually unless styled with CSS, but it is essential for structuring HTML.

## What is the difference between the `#title` and `.grid` selector?
`#title` is an ID selector, and IDs are unique to a single element. `.grid` is a class selector, and classes can be applied to multiple elements. Understanding the scope and use of IDs and classes is key in CSS.

## What is the difference between padding and margin?
Padding is the space inside an element, between its content and its border. Margin is the space outside the element, separating it from other elements. Both are part of the CSS box model.

## Given this HTML and this CSS, how will the images be displayed using flex?
Flexbox is a layout model in CSS that allows you to align and distribute space among items in a container. You should understand properties like `flex-direction`, `justify-content`, and `align-items` to predict image alignment.

## What does the following padding CSS do?
Padding defines the space between an element's content and its border. If you’re given a CSS rule like `padding: 10px;`, it applies 10px padding on all four sides. You’ll need to understand shorthand like this.

## What does the following code using arrow syntax function declaration do?
Arrow functions are a concise way to write functions in JavaScript. They have a different behavior for `this` binding compared to regular functions. You’ll need to know how they work syntactically and conceptually.

## What does the following code using `map` with an array output?
The `map()` function creates a new array by applying a function to each element of the original array. You should understand how it transforms arrays.

## What does the following code output using `getElementById` and `addEventListener`?
`getElementById()` selects an element by its ID, and `addEventListener()` adds a listener that triggers when a specific event occurs, like a click. You’ll need to be comfortable with manipulating the DOM using these methods.

## What does the following line of JavaScript do using a `#` selector?
The `#` in CSS and JavaScript refers to an element by its ID. For example, `document.querySelector('#id')` selects an element with that specific ID.

## Which of the following are true? (Mark all that are true about the DOM)
The Document Object Model (DOM) is the interface for manipulating HTML and XML documents. You should know how the DOM represents a document structure and allows scripts to access elements.

## By default, the HTML `<span>` element has a default CSS display property value of:
The `<span>` tag is an inline element, meaning its default display property is `inline`.

## How would you use CSS to change all the `<div>` elements to have a background color of red?
You would write a CSS rule like `div { background-color: red; }` to target all `<div>` elements.

## How would you display an image with a hyperlink in HTML?
You wrap an `<img>` tag inside an `<a>` tag like so: `<a href="url"><img src="image.jpg"></a>`.

## In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
The order is content, padding, border, margin.

## Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
You could wrap "trouble" in a `<span>` with a class or ID, and then style it: `<span class="green">trouble</span>`. The CSS would be `.green { color: green; }`.

## What will the following code output when executed using a for loop and `console.log`?
To answer this, you'll need to understand how loops iterate over data and how `console.log()` outputs values during each iteration.

## How would you use JavaScript to select an element with the id of `byu` and change the text color of that element to green?
You would use `document.getElementById('byu').style.color = 'green';`.

## What is the opening HTML tag for a paragraph, ordered list, unordered list, second-level heading, first-level heading, third-level heading?
- Paragraph: `<p>`
- Ordered list: `<ol>`
- Unordered list: `<ul>`
- Second-level heading: `<h2>`
- First-level heading: `<h1>`
- Third-level heading: `<h3>`

## How do you declare the document type to be HTML?
At the top of the document, declare `<!DOCTYPE html>`.

## What is valid JavaScript syntax for `if`, `else`, `for`, `while`, `switch` statements?
Example syntax:
```javascript
if (condition) { ... } else { ... }
for (let i = 0; i < 10; i++) { ... }
while (condition) { ... }
switch (variable) { case 'value': ... }

build-lists: true
footer: IDM 231: Scripting for IDM I
slidenumbers: true
autoscale: true
theme: Dark Mode

# IDM 231

## Variables

^ A script will have to temporarily store the bits of information it needs to do its job. It can store this data in variables.

^ When you write JavaScript, you have to tell the interpreter every individual step that you want it to perform. This sometimes involves more detail than you might expect.

---

## Area of a Wall

$$
width * height = area
$$

1. Remember the value for width
1. Remember the value for height
1. Multiply width by height to get the area
1. Return the result to the user

^ Think about calculating the area of a wall; in math the area of a rectangle is obtained by multiplying two numbers: width times height.

^ You may be able to do calculations like this in your head, but when writing a script to do this calculation, you need to give the computer very detailed instructions. You might tell it to perform the following four steps in order: (_click through list_)

^ In this case, you would use variables to "remember" the values for width and height. This also illustrates how a script contains very explicit instructions about exactly what you want the computer to do. You can compare variables to short-term memory, because once you leave the page, the browser will forget any information it holds.

---

### Concept of a Variable

$$
2x + y = 11
$$

^ A variable is a good name for this concept because the data stored in a variable can change (or vary) each time a script runs.

^ The use of variables to represent numbers or other kinds of data is very similar to concepts used in algebra (where letters are used to represent numbers). There is one key difference, however. The equals sign does something very different in programming.

---

## Declare a Variable

```javascript
var quantity;
```

^ Before you can use a variable, you need to announce that you want to use it. This involves creating the variable and giving it a name. Programmers say that you **declare** the variable.

^ `var` is what's called a _keyword_. The JavaScript interpreter knows that this keyword is used to create a variable.

^ In order to use the variable, you must give it a name. In this case, the variable is called _quantity_.

---

### Variable Naming Conventions

```javascript
// camelCase
var myQuantity;

// Underscores
var my_quantity;
```

^ If a variable name is more than one word, it is usually written in either camelCase, or with underscores.

---

## Assigning a Value

```javascript, [.highlight: 5-8]
var quantity;
var subTotal;
var grandTotal;

quantity = 3;
subTotal = 7;
grandTotal = 10;
```

^ Once you name a variable, you can set the value. The equals sign is an _assignment operator_. It says that you're assigning a value to the variable. It's also used to update the value at any time. Until you've assigned a value, the variable is considered _undefined_.

^ Where a variable is declared can have an effect on whether the rest of the script can use it. This is known as _scope_.

---

## Data Types

```javascript
// numeric data type: numbers
myNumber = 0.75;

//string data type: letters/characters
myString = 'Hello World!';

//boolean data type: `true` and `false`
myBoolean = true;
```

^ JavaScript distinguishes between numbers, strings, and true or false values known as booleans. In addition to these three data types, JavaScript also has others (arrays, objects, undefined, and null).

---

### Numeric Data Type

```javascript
// numeric data type: numbers
myNumber = 0.75;
myOtherNumber = 5272;
negativeNumber = -23678;
```

^ For tasks that involve counting or calculating sums, you will use numbers 0-9. For example, five thousand, two hundred and seventy-two would be written 5272 (note there is no comma between the thousands and the hundreds). You can also have negative numbers (such as -23678) and decimals (three quarters is written as 0.75).

^ Numbers are not only used for things like calculators; they are also used for tasks such as determining the size of the screen, moving the position of an element on a page, or setting the amount of time an element should take to fade in.

---

### String Data Type

```javascript
//string data type: letters/characters
myString = 'Hello World!';
```

^ Note how the string data type is enclosed within a pair of quotes. These can be single or double quotes, but the opening quote must match the closing quote. Strings can be used when working with any kind of text. They are frequently used to add new content into a page and they can contain HTML markup.

---

### Boolean Data Type

```javascript
//boolean data type: `true` and `false`
myBoolean = true;
```

^ It might seem a little abstract at first, but the Boolean data type is actually very helpful. You can think of it a little like a light switch - it is either on or off. Booleans are helpful when determining which part of a script should run.

---

## Naming Rules: Variables

1. Must begin with a letter, dollar sign ($), or an underscore ( \_ )
1. Can not contain dashes or periods
1. Can not use _keywords_ or _reserved_ words
1. Are case sensitive
1. Should describe the info they will represent
1. Should use _camelCase_ or _under\_scores_ for multi word variables

---

## Examples

(but wait...)

^ Before we jump into some examples, let's quickly talk about how we can debug and work with Javascript in the browser. When we write scripts, we have to be able to test our code at various stages of development, and debug it when problems arise.

---

## Console

```javascript
console.log('hello world');

console.log(myVariable);

console.log('myVariable: ' + myVariable);
```

^ Browsers that have a console have a console object, which has several methods that your script can use to display data in the console. The `console.log()` method can write data from a script to the console. Such notes can tell you how far a script has run and what values it has received. Console messages are logged to the console window inside of the browsers Devtools. Let's look at some examples.

^ _(examples/variables/variables.html)_

---

## Defining Variables: ES6 Enhancements

^ ES6 refers to the official specification for JavaScript that was released in 2015. It offers some enhancements to core JavaScript concepts that we should look at. We'll talk more about the specifics of ES6 later in the term, but let's focus on some of the key ingredients ES6 includes as we touch on each topic, starting with how we declare our variables.

---

### Declaring A Variable

- `var`
- `let`
- `const`

^ We said earlier that before we can use a variable, we have to declare it using the keyword _(click)_ `var`, which tells the JavaScript interpreter that we're creating a variable.

^ There are two alternatives to the `var` keyword, _(click)_ `let` and _(click)_ `const`. The benefits of both of these will be more apparent next week when we talk about functions, but for now we're going to introduce both keywords and review their basic use.

---

### `let` Keyword

```javascript
var one = 1;
one = 'one';

let one = 1;
one = 'one';
one = .5 + .5;
```

^ When we assign a variable using either the `var` or `let` keyword, the value of that variable can change.

---

### `const` Keyword

```javascript
let one = 1;
one = 'one';

const one = 1;
one = 'one'; // ⚠️ Syntax Error!
```

^ If we assign a variable using the `const` keyword, it is considered a _constant_, and its value can not be changed. This can be very helpful in writing our scripts if we have a value that is critical and we want to guarantee it is not changed accidentally as our scripts execute.

---

### Can I Use ES6

- [https://caniuse.com/#feat=let](https://caniuse.com/#feat=let)
- [https://caniuse.com/#feat=const](https://caniuse.com/#feat=const)

^ The additional benefits of using `let` and `const` over `var` will be revealed as the term goes on, but for now you should know that these options exist, and are to be favored over using `var` whenever possible.

^ _(examples/variables/es6.html)_

---

## Arrays

^ An array is a special type of variable. It doesn't just store one value; it stores a list of values.

^ You should consider using an array whenever you are working with a list or a set of values that are related to each other. Arrays are especially helpful when you do not know how many items a list will contain because, when you create the array, you do not need to specify how many values it will hold. If you don't know how many items a list will contain, rather than creating enough variables for a long list (when you might only use a small percentage of them), using an array is considered a better solution.

---

[.build-lists: false]

### Shopping List

1. cheese
1. spinach
1. bread
1. eggs

^ For example, an array can be suited to storing the individual items on a shopping list because it is a list of related items. Additionally, each time you write a new shopping list, the number of items on it may differ.

---

### Creating an Array

```javascript
var colors = ['white', 'black', 'custom'];

var colors = [
              'white',
              'black',
              'custom'
            ];

var colors = new Array('white', 'black', 'custom')
```

^ You create an array and give it a name just like you would any other variable (using the var keyword followed by the name of the array). The values are assigned to the array inside a pair of square brackets, and each value is separated by a comma. The values in the array do not need to be the same data type, so you can store a string, a number and a Boolean all in the same array.

^ This technique for creating an array is known as an array literal. It is usually the preferred method for creating an array. You can also write each value on a separate line:

---

### Values in an Array

```javascript
var colors = ['white', 'black', 'custom'];
```

| Index | Value |
| :-----: | :-----: |
| 0 | white |
| 1 | black |
| 2 | custom |

^ Values in an array are accessed as if they are in a numbered list. It is important to know that the numbering of this list starts at zero (not one).

^ Each item in an array is automatically given a number called an index. This can be used to access specific items in the array. Consider the following array which holds three colors:

^ Confusingly, index values start at 0 (not 1), so the following table shows items from the array and their corresponding index values:

---

### Access Items in an Array

```javascript
var colors = ['white', 'black', 'custom'];
//               0        1         2

var itemThree = colors[2];

console.log('itemThree: ' + itemThree);
// itemThree: custom
```

^ To retrieve the third item on the list, the array name is specified along with the index number in square brackets. Here you can see a variable called `itemThree` is declared. Its value is set to be the third color from the `color` array.

---

### Array Length

```javascript
var colors = ['white', 'black', 'custom'];

var numColors = colors.length;

console.log('numColors: ' + numColors);
// numColors: 3
```

^ Each array has a property called length, which holds the number of items in the array. The name of the array is followed by a period which is then followed by the `length` keyword.

---

### Changing Array Values

```javascript
var colors = ['white', 'black', 'custom'];

colors[3] = 'beige';

console.log(colors[3]);
// beige
```

^ To access a value from an array, after the array name you specify the index number for that value inside square brackets. You can change the value of an item an array by selecting it and assigning it a new value just as you would any other variable (using the equals sign and the new value for that item).

^ _(examples/variables/arrays.html)_

---

## Expressions

^ An expression evaluates into (results in) a single value. Broadly speaking there are two types of expressions.

---

### Assign a Value

```javascript
var color = 'beige';
```

^ In order for a variable to be useful, it needs to be given a value. As you have seen, this is done using the assignment operator (the equals sign).

---

### Two or More Values

```javascript
var area = 3 * 2;
```

^ You can perform operations on any number of individual values (see next page) to determine a single value. For example...

^ The value of area is now 6. Here the expression three times two evaluates into 6. This example also uses the assignment operator, so the result of the expression three times two is stored in the variable called area.

---

## Operators

```javascript
color = 'beige';              // assignment operator
area = 3 * 2;                 // arithmetic operator
greeting = 'Hi ' + 'Molly';   // string operator
buy = 3 > 5;                  // comparison operator
buy = (5 > 3) && (2 < 4);     // logical operator
```

^ Expressions rely on things called operators; they allow programmers to create a single value from one or more values.

---

### Arithmetic Operators

| Name | Operator | Purpose |
| ---- | -------- | ------- |
| addition | + | Adds values |
| subtraction | - | subtracts values |
| division | / | divides two values |
| multiplication | * | multiples values |
| increment | ++ | adds one to the current number |
| decrement | -- | subtracts one from the current number |
| modulus | % | divides two numbers & returns remainder |

^ JavaScript contains the following mathematical operators, which you can use with numbers. You may remember some from math class.

---

#### Order of Operations

$$
2 + 4 + 10
$$

$$
2 + 4 * 10
$$

^ The calculation from left to right: total = 2 + 4 + 10 = 16.

^ But in the second example, the total is 42, not 60 because multiplication and division happen before addition and subtraction.

---

#### Use Parenthesis

$$ (2 + 4) * 10 $$

^ To change the order in which operations are performed, place the calculation you want done first in parentheses.

---

#### [fit] Please Excuse My Dear Aunt Sally

---

### Arithmetic Operators Example

```javascript
var subtotal = (13 + 1) * 5;      // 70
var shipping = 0.5 * (13 + 1);    // 7

var total = subtotal + shipping;  // 77
```

---

### String Operator

```javascript
var firstName = 'Ivy';
var lastName = 'Stone';
var fullName = firstName + ' ' + lastName;
var greeting = 'Hello ' + fullName + '!';
```

^ There is just one string operator, the + symbol. It is used to join the strings on either side of it. There are many occasions where you may need to join two or more strings to create a single value. Programmers call the process of joining together two or more strings to create one new string **concatenation**.

---

### Concatenation vs Template Literals

```javascript
var firstName = 'Ivy';
var lastName = 'Stone';
var fullName = firstName + ' ' + lastName;
var greeting = 'Hello ' + fullName + '!';
```

^ While we're at it, let's take a quick look at another ES6 enhancement. Using the plus sign to mix our variables into a string can (and will) become difficult and/or annoying. As these values integrate more and more variables and get more complex, possibly including multiple single/double quotes in a single output, our job defining these values becomes more difficult.

---

### Template Literals

```javascript
`string text ${expression} string text`
```

^ Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

^ Template literals are enclosed by the back-tick character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (`${expression}`).

---

### Template Literals Example

```javascript
var firstName = 'Ivy';
var lastName = 'Stone';
var fullName = firstName + ' ' + lastName;
var greeting = 'Hello ' + fullName + '!';
//
var fullName = `${firstName} ${lastName}`;
var greeting = `Hello ${fullname}!`;
```

---

### Can I Use Template Literals

- [https://caniuse.com/#feat=template-literals](https://caniuse.com/#feat=template-literals)

^ _(examples/variables/es6.html)_

---

### Other Operators

```javascript, [.highlight: 4-5]
color = 'beige';              // assignment operator
area = 3 * 2;                 // arithmetic operator
greeting = 'Hi ' + 'Molly';   // string operator
buy = 3 > 5;                  // comparison operator
buy = (5 > 3) && (2 < 4);     // logical operator
```

^ As we saw, there are other operators that are used for comparison and logic related tasks. We'll get into those in more detail later.

^ _(examples/variables/operators.html)_

---

## For Next Week

^ _assignments/01-variables/_

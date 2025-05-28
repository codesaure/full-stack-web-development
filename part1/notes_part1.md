# INTRODUCTION TO REACT

## Introduction to React

### Component

### JSX

### Multiple components

### props: passing data to components

### Possible error message

### Some notes

### Do not render objects

## JavaScript

### Variables

### Arrays

### Functions

### Object methods and "this"

### Classes

### JavaScript materials

## Component state, eveng handlers

### Component helper functions

### Destructuring

### Page re-rendering

### Stateful component

### Event handling

### An event handler is a function

### Passing state to child components

### Changes in state cause re-rendering

### Refactoring the components

## A more complex state, debugging React apps

### Complex state

### Handling arrays

### Update of the state is asynchronous

### Conditional rendering

### Old React

### Debugging React apps

### Rules of Hooks

### Eveng Handling revisited

### A function that returns a function

### Passing Event Handlers to Child Components

### Do not define Components within Components

### Useful Reading


I promise to keep the console open all the time during this course, and for the rest of my life when I'm doing web development.

Here we will use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which are described in a newer version of JavaScript known as [ECMAScript 6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), also called ES6.

Any JavaScript code within the curly braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component.

It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using [JSX](https://react.dev/learn/writing-markup-with-jsx). Although JSX looks like HTML, we are dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript. The compilation is handled by [Babel](https://babeljs.io/repl/). Projects created with Vite are configured to compile automatically

A newline is an empty element, which in HTML can be written as follows: <br>
but when writing JSX, the tag needs to be closed: <br />

A core philosophy of React is composing applications from many specialized reusable components.
Another strong convention is the idea of a root component called App at the top of the component tree of the application.

First letter of React component names must be capitalized.

Because the root element is stipulated, we have "extra" div elements in the DOM tree. This can be avoided by using [fragments](https://react.dev/reference/react/Fragment), i.e. by wrapping the elements to be returned by the component with an empty element like this: <> </>

In React, the individual things rendered in braces must be primitive values, such as numbers or strings. Objects cause the error "Objects are not valid as a React child

React also allows arrays to be rendered if the array contains values ​​that are eligible for rendering (such as numbers or strings)

JAVASCRIPT

let -> normal variable
const -> constant variable. can't be changed.
Although a variable declared with const cannot be reassigned to a different value, the contents of the object it references can still be modified.

Individual items of an array are easy to assign to variables with the help of the [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Ex:
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t

The complete process, without cutting corners, of defining an arrow function is as follows:

const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

During this course, we will define all functions using the arrow syntax.

Contrary to other languages, in JavaScript the value of this is defined based on how the method is called. When calling the method through a reference, the value of this becomes the so-called global object and the end result is often not what the software developer had originally intended.
Losing track of this when writing JavaScript code brings forth a few potential issues.
There are several mechanisms by which the original this can be preserved. One of these is using a method called [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):


COMPONENT STATE, EVENT HANDLERS

Imports the useState function: import { useState } from 'react'
The function body that defines the component begins with the function call: const [ counter, setCounter ] = useState(0)
The function call adds state to the component and renders it initialized with the value zero. 
The function returns an array that contains two items. We assign the items to the variables counter and setCounter
The counter variable is assigned the initial value of state, which is zero. 
The variable setCounter is assigned a function that will be used to modify the state.
When the state modifying function setCounter is called, React re-renders the component which means that the function body of the component function gets re-executed

Event handlers must always be a function or a reference to a function. The button will not work if the event handler is set to a variable of any other type.
Defining event handlers directly in the attribute of the button is not necessarily the best possible idea.
You will often see event handlers defined in a separate place.

Changes in state cause re-rendering
When one of the buttons is clicked, the event handler is executed.
The event handler changes the state of the App component with the setCounter function
Calling a function that changes the state causes the component to re-render.



A MORE COMPLEX STATE, DEBUGGING REACT APPS
It is forbidden in React to mutate state directly, since it can result in unexpected side effects.
Changing state has to always be done by setting the state to a new object. 
If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object and setting that as the new state.


Functions returning functions can be utilized in defining generic functionality that can be customized with parameters
# useState() Hook

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/Al0nC4ZZn)

## Array Destructuring

[Array Destructuring repl](https://replit.com/@rkgallaway/array-destructuring#index.js)

## Hooks

What is a hook?  A function.

> A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

```javascript
let ryan = {
  name: 'Ryan',
  age: 48
}

let lucky = {
  name: 'Lucky H. Dog',
  age: 4
}


let family = [ryan, lucky]

const [ first ] = family;

// how to set up state in a functional component
const [ count, setCount ] = useState(0);
const [ moreState, setMoreState ] = useState(family);

// how do I access "Lucky H. Dog" from the moreState variable
moreState[1].name

// increment count
let newCount = count +1;
setCount(newCount);
```

useState returns two pieces.  The first is the state variable.  The second is the "mechanism" or function that allows us to change the state variable.

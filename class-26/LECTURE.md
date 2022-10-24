#  React

## React Refresher

[React Refresher Github](https://github.com/rkgallaway/react-refresher/blob/main/README.md)
[Deployed Site](https://jocular-marzipan-d44cbf.netlify.app/)

### Review Questions:
1. What is state?
  - Information about the COMPONENT - it can change.  State is a POJO
1. how do you create state in a class component?
  - ```javascript
    constructor(props){
      super(props);
      this.state = {
        key: value,
      }
    }
  ```
1. What are props?
  - also a POJO, key difference is they are passed to the component (like function parameters) where as state is managed within the component.  a component CANNOT change its props.  passed in, not out
1. Can component props change?
  - if that prop is state of another prop, remember state can be manipulated
1. Can component state change?
  - yes!!!
1. What React lifecycle method must every CLASS component have?
  - render() with a return
1. What React lifecycle method must be used when establishing class component state?
  - constructor();
1. What React lifecycle method would you use to load data on a page without user interaction?
  - componentDidMount()
1. In what order are React lifecycle methods called within a class?
  - constructor, render, componentDidMount
1. can state be passed as props?  If so, what would that look like in code?
  - ```javascript
    <Header greeting={this.state.greeting}/>
  ```

## React Testing

### Behavior Driven Development

- React Testing Library
  - sits on top of jest
  - significant React specific functionality

- How will my component behave as a user interacts with the app / component?
- What do we expect to test for?  behavior?  functionality (in our reducers / pure functions)  both... it depends.  


## React and eslint

- DO NOT bring in the class config `.eslintrc.json` file.  That particular file is for the backend.  

- We will intentionally use Create React App and VSCode's built in linter functionality.  it isn't perfect, but gets about 95%.  

## Code Challenge

some translations:
- `int j <-- i - 1` => the variable j will be an integer and assigned the value of `i - 1`
- `int temp <-- arr[i]` => the variable temp will be an integer and assigned the value of `arr[i]`

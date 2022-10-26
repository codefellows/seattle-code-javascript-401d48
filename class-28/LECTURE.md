# useEffect() Hook 

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/oDkSzEewP)

## Review

### Code Challenge 27 - Merge Sort

see `inclass-demo/review-merge-sort` once class is over... 

### Lab-27

see class recording

## Lifecycle events!

In Class components, how did we manage lifecycle events
```javascript
class App extends React.Component{
  constructor(){
    super(props);
  }

  componentDidMount(){
    console.log('something mounted!')
  }

  componentWillReceiveProps(props){
    console.log('I got some props!)
  }

  componentDidUpdate(){
    console.log('something updated!');
  }

  componentWillUnmount(){
    console.log('something unmounted...)
  }
}
```

in function components, we have ONE lifecycle hook that can handle "everything":  useEffect();

### useEffect() Hook

WHY
- manage lifecycle events
- manage side-effects

useEffect will handle all handle all of the following cases
- must do the thing correctly...
  - every time an event occurs (greedy)
  - can do a thing ONCE when an event occurs
  - when state is updated
  - when a component unmounts - important to turn things off!  

  ### NOTE:
  - we are using a dev environment build.  we may see things happen more than "ONCE"
  - msw for testing can be an option for integration testing.  not sure it's necessary

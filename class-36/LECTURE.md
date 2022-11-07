# Class 36: Global Application State with Redux


## Redux Implementation

### Packages (`npm i`)
- `redux`
- `react-redux`
- `redux-devtools-extension`

### New Chrome Extension

Redux Devtools 
- Any site using Redux, we can confirm sate functionality with this extension

## Redux Implementation

- Create a store
  - create (at least one) reducer with initial state
  - create a store "hub" i.e. our index.js
- in our store, we combine reducers
- and finally use the createStore method to provide our store for consumption


#### bringing into our react app

- import provider (in index.js) to establish React Context
- import connect method in component to consume redux
- mapStateToProps and connect to consume state
- mapDispatchToProps and connect to update state

### initial state example for lab

if using one reducer, this works great!  You could also have a category and product reducer.  Today, totally your choice!

```js
let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};
```

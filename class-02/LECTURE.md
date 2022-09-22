# Class 02: Express (Routing / Middleware)

## Warmup

map function that takes an array and callback - see solution in `warmup` folder

## Object Destructuring

[Object Repl](https://replit.com/@rkgallaway/object-destructing#index.js)

## Review Lab 01

- Stephen: action failing, likely need same version of node.  Actions setup - should just need yml file from configs.
- Alan: nvm issue - we can resolve in Remo
- 

## More HTTP Requests

### Query Parameter

Send Query Parameter:  `http://localhost:3002/hello?name=Lucky`

retrieve by extracting from the request.query object

### Path Parameter

Send Path Parameter:  `http://localhost:3002/hello/Ryan`

retrieve by:  

```javascript
app.use(anotherLogger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

// running logger middle on this route only
app.get('/hello/:name', logger, (req, res, next) => {

  // params object will look like
  // req.params = {
    // name: Ryan //the thing that comes after the slash, notice Ryan in example above  
  }
  // retrieve by extracting from the params object
  let { name } = req.params;
  res.status(200).send('success');
});

function logger (req, res, next){
  console.log(`REQUEST: ${req.method}, ${req.originalUrl}`);
  next();
}

function anotherLogger (req, res, next){
  console.log(`REQUEST: ${req.method}, ${req.originalUrl}!!!!!!`);
  next();
}
```

## Whiteboard

[Class-02 Freehand](https://projects.invisionapp.com/freehand/document/AP9MIsisS)

## TODO

- Postgres setup confirmed today please


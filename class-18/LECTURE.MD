# AWS: API Gateway, DynamoDB and Lambda

## Warmup

[tree traversal repl](https://replit.com/@rkgallaway/tree-traversal#index.js)

[tree traversal solution](https://replit.com/@rkgallaway/tree-traversal-solution#index.js)

## Code Review

How to approach (write out an algorithm). 

#### What we need to do, and an approach to get proof of life 

#### - ONE possible iterative approach

- prove we can work within the code console and interact with lambda
  - set up basic test event 
  - interact with json object similar to a populated images.json
  - log some things out
- create S3 bucket
  - upload a populated images.json 
  - prove I can non-dynamically grab images.json from S3 bucket
  - log some things out possibly setup onChange S3 put test event to interact with an expected event object
- when an image uploads to S3
  - get image properties and log them out
  - add a new object to images.json 
  - put changed array in images.json in S3 bucket WHEN an image is uploaded
- delete images.json from S3 bucket now that we have proof of life
  - when getting images.json, if file does not exist, create an image data array to work with, if images.json does exist note we have a parsed image data array to work with.
  - when image is uploaded, confirm image details added to images data array and put in images.json in S3 bucket, 
  - confirm we are putting into out array, AND putting updated array in a newly created images.json file
- lastly, when we update our image data array, confirm if name exists we update the data instead of adding new data

## DynamoDB and Dynamoose

similar to MongoDB and Mongoose

similar-ish postgres and sequelize

## API Gateway

we will use this as the connection between our DynamoDB and our route handlers (Lambdas)

# Class 04: Relational Data Modeling

## Warmup

see class repo 
[Reduce Repl](https://replit.com/@rkgallaway/401d47-reduce#index.js)

## Code Review

What do we need?

#### Binary Search

[You Tube Demo](https://www.youtube.com/watch?v=7lGiPItOVCM)

what is Big O for space and time?

#### Lab-03 Code Review

- bring your questions to class!
- we will do a significant code review!

## Relational Data Modeling

Mongo is a non relational database and if a customer had multiple orders we likely saw something like this in our table:
![Mongo](assets/mongo-class-04.png)

Postgres is a relational database and gives us the opportunity to join multiple tables together
![Postgres](assets/postgres-class-04.png)

we will create relations today amongst our models

## Abstract CRUD operations from our REST method handlers

> we repeat ourselves a lot in our get all, get one, post, put and delete REST routes.  Additionally, we aren't following the single responsibility principle as well as we could be in our route handlers.  Today we will see one possible way to abstract out our crud operations and create a modelInterface to manage the crud, allowing our route handlers to handle the rest operations

## Demo Code File Scaffold (approximation)

![File Structure](assets/file-structure-class-04.png)

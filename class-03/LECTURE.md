# Class 03: CRUD (with SQL) and REST (with Express)

## Warm Up

See warm up folder

## Code Review

#### Code Challenge 02:

see whiteboard for insights.  one possible approach, iterate from the back of the array moving the back elements one spot toward the end, one at a time.  when you get to the midpoint, assign the value

#### Lab-02: 

Express Routing:
 - Elaine:  middleware test
 - Branden G:  app.use vs app.all - 
 - Robert: can share code...  THANKS
 - Xavier: person route uses query param not path param

### Be Sure To Start Postgres

- windows users specifically, you may need to start and stop postgres (use alias if it works) - get help in Remo if not up and going

## psql cli commands

- list databases:  `\l`
- quit: `\q`
- change collection (use different DB): `\c database-name`
- show database tables: `\dt`
- show all contents of database: `\d`
- see contents of table:  `SELECT * FROM "customers";` 
- another see contents of table: `TABLE "customers";`

## Postgres Libraries

- pg
- sequelize (ORM - Object Relational Mapping)
- sequelize-cli
- sqlite3

## See Readme for more logisitics

- start by running `npm run db:config`
- make necessary changes to config folder

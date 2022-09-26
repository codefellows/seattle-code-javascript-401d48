# Class-06: Basic Authentication

See relevant info: Available in the [class README](README).

## Warmup

> will be given in class

## Announcements

- Feedback:  
- One on One meetings:  

## Review

- Node / Node Modules

- Express

- RESTful Routing

- CRUD with Sequelize

Now, Where we are going!

## Encoding vs Encryption

both are transformations: 

> details in lecture


## Basic Authentication

what is the difference between authentication and authorization?

> details in class

## TDD: Basic AUth Router

## Express Server Template EXAMPLE

[https://github.com/rkgallaway/express-server-template](https://github.com/rkgallaway/express-server-template)

note:  please create your own repos from scratch unless using starter code.

## Demo Code Starter

[https://github.com/rkgallaway/auth-demo](https://github.com/rkgallaway/auth-demo)

note:  for class-06 this code find the starter code on main branch.  as we iterate find on `starter-code` branch

### Lab-06 Application Structure (proposed)

> NOTE: The majority of our work for this server will be done within the `src/auth` folder. The rest of the system should be generic express. Why? It's our intention to be able to "lift" the `auth` folder and "drop" it into any other server (such as our API server) and be able to use authorization to "protect" those CRUD routes. This makes our entire auth system very modular. Think of `index.js` and `server.js` as nothing more than the basics to get a server started, with 100% of the actual logic living within the `auth` module

Note:  this file structure does NOT include all recommended and necessary config files and folders

```text
├── .gitignore
├── .eslintrc.json
├── __tests__  
│   ├── auth.router.test.js
│   ├── basic-auth.test.js
│   ├── 500.test.js
├── src
│   ├── auth
│   │   ├── router.js
│   │   ├── middleware
│   │   │   ├── basic.js
│   │   ├── models
│   │   │   ├── users-model.js
│   ├── middleware
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── server.js
├── index.js
└── package.json
```

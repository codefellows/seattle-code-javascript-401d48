# Class-06: Basic Authentication

See relevant info: Available in the [class README](README.md).

## Announcements

- Feedback:  
- One on One meetings:  

## Review - Add to Google Doc if you need

- Node / Node Modules

- Express

- RESTful Routing

- CRUD with Sequelize

Now, Where we are going!

## Encoding vs Encryption

both are transformations: 

What does encoding mean?
- a transformation of text that uses a standard communication method.  Base64 is what we will use
- Rob:  assigning pattern to overlay on an initial file
- Hayden:  not necessarily secure

Why encode?  When we encrypt we send username:password, the colon will not hash.  we need to first encode so that we can encrypt.

What does Encryption mean?
- hides information from everyone using salt and pepper
  - can only be decrypted using a key
  - salt: random noise / filler
  - pepper: secret variable
  - we will use bcrypt 
  - we can hash a password more than one
- Keelen: convert data into code (something secrete)
- Stephen: a type of encoding that requires a key

we create a hash, when we encrypt.  we can also we hashed the password

Why do we encrypt:  
- safeguard information
- Stephen: Manage liability

## WHiteboard

[Class-06 Freehand](https://projects.invisionapp.com/freehand/document/cy3fl6X7P)

## Basic Authentication

what is the difference between authentication and authorization?

authentication - are you who you say you are

authorization - are you allowed to do the thing based on the role you have been given

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

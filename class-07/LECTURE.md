# Bearer Auth

See relevant info: Available in the [class README](README.md).

## Warm Up

Practice. Practice. Practice. This should take a minute or 3 tops.
- [Linked List Traversal Practice](https://replit.com/@rkgallaway/liinkedlist-traversal#index.js)
- [Linked List Traversal Solution](https://replit.com/@rkgallaway/liinkedlist-traversal-solution#index.js)

## Code Review

### Code Challenge 06

[Google Doc for Code Challenge questions](https://docs.google.com/document/d/16NwZC_DEHNxNEVZWwLlsJlNPl9EZmt-FBnjpgMSlIdk/edit?usp=sharing)

### Lab-06 Code Review

- Xavier: how to unit test basicAuth

## WHiteboard

[Class-07 Freehand](https://projects.invisionapp.com/freehand/document/BDXY2l9Sr)

## Bearer Auth

How will we implement Bearer Auth?
- by using token.  to bear or have something..  that thing is a token

How will we generate a token?
- jsonwebtoken(jwt) pronounced jot

What is the anatomy of a token?
- a. header
- b. payload: data content / body (user info, roles)
- c. signature: SECRET

How is a jwt signed?
- with our Secret
- JWTs can be either signed, encrypted or both. If a token is signed, but not encrypted, everyone can read its contents, but when you don't know the private key, you can't change it. Otherwise, the receiver will notice that the signature won't match anymore.

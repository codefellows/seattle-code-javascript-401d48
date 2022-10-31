# React Context

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/B2cDumvN1)

## Global State With Context

Context is an object that can be consumed (read/updated) by ant children of the provider.

- Provider: maintains an internal state that is accessible to ANY child of the provider
- Consumers: child components that may opt into context values/behaviors.

When to use:  when you need to share information across multiple sibling components.  

* Settings read by all components.
    * Theme values.
    * Twitter, emails, lists of products.

When not to use: Forms / Complex Component groups that directly share values that other sibling components have no business accessing
  * Input values.
  * Component toggle value.

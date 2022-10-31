# LAB - Context API

**To Do List Manager Phase 1:** Incorporate configuration settings to the application

In this phase, we'll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

1. Create a new React app named `todo-app`
1. Delete the existing `src` directory
1. Paste in the `src` folder from the `lab/starter-code`
1. `npm install` any missing dependencies by comparing `package.json` files.  Note: installing most recent versions is ideal.
1. `npm start` and confirm that the application loads in the browser
1. Create an **EMPTY** GitHub Repository named `todo-app`
1. Follow GitHub instructions labeled "…or push an existing repository from the command line"

> Create and work in a new branch for today called `context-settings`.  Immediately `ACP` after adding your newly created repo to GIthub; this will add starter-code to your repo and give you the option to rollback changes to the base starter code if necessary.

## Business Requirements

Refer to the [To Do System Overview](../../apps-and-libraries/todo/README.md) for a complete review of the application, including Business and Technical requirements along with the development road map.

## Phase 1 Requirements

In Phase 1, we're going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

- Style the application using the [Mantine  Component API](https://mantine.dev/pages/getting-started/){target:_blank}

- Properly modularize the application into separate components

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Hide completed items

![To Do with Pagination](todo.png)

## Technical Requirements / Notes

> Create a settings Context that can define how our components should display elements to the User.

1. Implement the React `context` API for defining `settings` across the entire application.
   - Create a `context` for managing application display settings and provide this at the application level.
   - Display or Hide completed items (boolean).
   - Number of items to display per screen (number).
   - Default sort field (string).
   - Manually set (hard code) those state settings in the context provider's state, they should not be changeable.

1. Consume and utilize `context` values throughout your components
   - Show a maximum of a certain number of items per screen in the `<List />` component
     - Use the Mantine `Pagination` component to let the users navigate a long list of items
   - Hide completed items in the list (the ability to show will be added in a later lab)

### Pagination Notes:

- Only display the first `n` items in the list, where `n` is the number to display per screen in your settings context.
  - If you have more than `n` items in the list, the `Pagination` Component will add a button that, when clicked, will replace the list with the next `n` items in the list.
  - the `Pagination` Component will also manage the previous (<) and next(>) arrow buttons upon correct implementation.

### Application Structure (proposed)

In this proposal:

- `styles.scss` files may or may not be necessary for each component
- unit tests are placed in the component directory (testing one file only)
- integration tests are placed in the `__tests__` directory (testing more than one file)

```text
├── public
├── src
│   ├── __tests__
│   │   │   └── empty for now...
│   ├── Components
│   │   ├── AddForm
│   │   │   └── AddForm.jsx
│   │   ├── Footer
│   │   │   └── Footer.jsx
│   │   ├── Header
│   │   │   └── Header.jsx
│   │   ├── List
│   │   │   └── List.jsx
│   │   ├── ToDo
│   │   │   └── ToDo.jsx
│   │   │   └── styles.scss  
│   ├── Context
│   │   ├── Settings
│   │   │   └── Settings.jsx
│   │   │   └── settings.test.js
│   ├── hooks
│   │   └── form.js
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Stretch Goals

- Sort the items based on any of the keys (i.e. difficulty)
- In your Context, read the settings in from an object in Local Storage and use that as the initial state

### Testing

- Tests should assert all behavioral functionality
- Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
  - Can they see context?

### Documentation

- Describe how global state is consumed by the components
- Describe the operation of the hook: `useForm()`

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations

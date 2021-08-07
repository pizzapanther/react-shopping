# React Checklist

Checklist for setting up you your React App.

## Start App

- [x] Created Git repo
- [x] Cloned repo
- [x] cd into repo and run `npx create-react-app .`

## React Router

- [x] Design App URLs
- [x] Wrapped app in `BrowserRouter` component
- [x] Added routes `Switch` component
- [x] Added 404 to `Switch`

## Redux Setup

- [x] Created a data store (`store.js`)
- [x] Created a reducer with an initial state (`reducer.js`)
- [x] Wrapped app in `Provider` component
- [x] Connect a component to the data store with `connect()`, `mapStateToProps`, and `mapDispatchToProps`

## Redux Write

- [x] Created an action (`action.js`)
- [x] In Reducer: created a switch for the action type
  - [x] deepcopy state
  - [x] modify data
  - [x] return new state

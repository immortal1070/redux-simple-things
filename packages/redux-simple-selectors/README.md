# Redux Simple Events

[![npm version](https://img.shields.io/npm/v/redux-simple-selectors.svg)](https://www.npmjs.com/package/redux-simple-selectors)

`redux-simple-selectors` aims to make the selectors generation as easy as possible.

You can just take the initial state of your Redux application and generate selectors out of it.

It gives the predictable and readable mapping with `reselect` features and `equals` function from `Ramda`.

# Getting started

## Install

```sh
$ npm install redux-simple-selectors
```
or

```sh
$ yarn add redux-simple-selectors
```

## Usage Example

Suppose we have a typical Redux reducers with initialState.

```javascript
const initialState = {
  todoData: {
    nestedData: ""
  },
  loading: true
}

function todoAppReducer(state = initialState, action) {
// ...
```
One can just generate selectors out of initialState
```javascript
import {fillSimpleSelectors} from 'redux-simple-selectors'

export const todoAppStoreRouting = {
  ...fillSimpleSelectors(initialState, CONFIGS_REDUCER_ROOT)
}
```
And then use it in the application:
```javascript
import {useSelector} from 'react-redux'
import {todoAppStoreRouting} from '../store/todoAppStore'
///...
const configMetadatas = useSelector(configsStoreRouting.nestedData.selector)
```

E.g. for next initialState:
```javascript
const initialState = {
  todoData: {
    nestedData: ""
  },
  loading: true
}
```
There will be next selectors generated:
```javascript
configsStoreRouting.todoData
configsStoreRouting.todoData.nestedData
configsStoreRouting.loading
```

# Redux Simple Events
[![npm version](https://img.shields.io/npm/v/redux-simple-events.svg)](https://www.npmjs.com/package/redux-simple-events)

The idea of this project is to propose one of the solutions for the known "Redux boilerplate" problem.

# Getting started
## Install

```sh
$ npm install redux-simple-events
```
or
```sh
$ yarn add redux-simple-events
```

### Which problems this project tries to solve
In the past I was storing all the Redux-related files in different folders:
* action types
* action creators
* reducers

Which was causing these files grow and it was quite hard to debug.
Also for small pages it always meant to insert code into several files just for 1 action, which is quite inconvenient.

When you search for usages of action creator you don't see which reducers and sagas are using it.

### Solution
To solve this problem I used the next approach which works perfect for small pages.

type, action creator and reducer are described as a `Event` object.action

*Benefits*
* easy to debug
* when you create an action usually you want to control and see what does it do with state
* minimal boilerplate
* not a silver bullet of course - for big complex logic it's probably not suitable

### Implementation
Idea is to describe events in one file:
```javascript
import {initEvents} from 'redux-simple-events'

const {event, allEvents} = initEvents()

export const configsAppMounted = event({
  type: 'CONFIGS_APP_MOUNTED',
  action: (paramFromUrl) => ({
     payload: {
       paramFromUrl
     }
   })
})

export const configMetadatasLoaded = event({
  type: 'CONFIGS_METADATAS_LOADED',
  action: (configMetadatas) => ({
    payload: {
      configMetadatas
    }
  }),
  reducer: (state, action) => {
    const {configMetadatas} = action.payload
    return {
      ...state,
      configMetadatas,
      loading: false
    }
  }
})
// ...
export const configsEvents = allEvents
```
GenerateReducers from the events and pass it to Redux:

```javascript
import {configsEvents} from './configsEvents'

const createRootReducer = () =>
  combineReducers({
    [CONFIGS_REDUCER_ROOT]: generateReducers(initialState, configsEvents)
  })
```

After that just export the event object and dispatch event using `.action` method
```javascript
import {configsAppMounted} from '../../store/events/configurations/configsEvents'
//...
useEffect(() => {
  dispatch(configsAppMounted.action(paramFromUrl))
}, [])
```

Or catch action in redux-saga:
```javascript
import {configsAppMounted, configMetadatasLoaded} from '../../store/events/configurations/configsEvents'

function* getConfigMetadatas() {
  const response = yield call(configsResource.getConfigMetadatas)
  yield put(events.configMetadatasLoaded.action(response.data))
}

export function* configsSagaWatcher() {
  yield takeEvery(events.configsAppMounted.type, getConfigMetadatas)
}
```


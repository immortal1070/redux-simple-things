import {Action, ReducersMapping, State, Event} from '../types'

/**
 * Returns map [eventName -> reducer]
 */
export const eventsToReducersMap = (events: Event[] = []): ReducersMapping => {
  const reducersMapping: ReducersMapping = {}
  events.forEach((event) => {
    if (event.reducer) {
      reducersMapping[event.type] = event.reducer
    }
  })
  return reducersMapping
}

/**
 * Applies reducer if action is present in the reducersMapping
 */
export const applyReducer = (
  state: State,
  action: Action,
  reducersMapping: ReducersMapping
): State => {
  if (reducersMapping[action.type]) {
    return reducersMapping[action.type](state, action)
  }
  return state
}

/**
 * Generates the reducers which could be passed to Redux.
 */
export const generateReducers = (initialState: State, events: Event[]) => {
  const reducers = eventsToReducersMap(events)
  return (state = initialState, action: Action = {} as Action): State => {
    return applyReducer(state, action, reducers)
  }
}

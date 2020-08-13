import {Action, ReducersMapping, State, Event} from './types'

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
export const applyReducerFromMap = (
  state: State,
  action: Action,
  reducersMapping: ReducersMapping
): State => {
  if (reducersMapping[action.type]) {
    return reducersMapping[action.type](state, action)
  }
  return state
}

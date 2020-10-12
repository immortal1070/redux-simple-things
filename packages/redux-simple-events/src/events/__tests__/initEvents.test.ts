import initEvents from '../initEvents'
import {Action, ActionCreator, ActionTemplate, Event, State} from '../../types'

describe('initEvents', () => {
  const pageOpenedType = 'PAGE_OPENED'
  const pageOpenedActionCreator = (someOpenParam: unknown): ActionTemplate => ({
    payload: {
      someOpenParam
    }
  })
  const pageOpenedReducer = (state: State, action: Action): State => {
    return {
      ...state,
      opened: true,
      ...action.payload
    }
  }

  const pageOpenedEventTemplate: Event = {
    type: pageOpenedType,
    action: pageOpenedActionCreator,
    reducer: pageOpenedReducer
  }

  const pageClosedEventTemplate: Event = {
    type: 'PAGE_CLOSED',
    action: () => ({}),
    reducer: (state) => {
      return {
        ...state,
        opened: false
      }
    }
  }

  it('initEvents inserts new event in the allEvents array', () => {
    const {event, allEvents} = initEvents()
    const pageOpenedEvent = event(pageOpenedEventTemplate)
    expect(allEvents).toContain(pageOpenedEvent)
    const pageClosedEvent = event(pageClosedEventTemplate)
    expect(allEvents).toContain(pageClosedEvent)
    expect(allEvents).toHaveLength(2)
  })

  it('event method sets type correctly', () => {
    const {event} = initEvents()
    const pageOpenedEvent = event(pageOpenedEventTemplate)
    expect(pageOpenedEvent.type).toEqual(pageOpenedType)
  })

  it('event method creates action creator correctly', () => {
    const {event} = initEvents()
    const pageOpenedEvent = event(pageOpenedEventTemplate)
    expect(pageOpenedEvent.action().type).toEqual(pageOpenedType)
    const someOpenParam = 'someOpenParam'
    expect(pageOpenedEvent.action(someOpenParam)).toEqual({
      type: pageOpenedType,
      ...pageOpenedActionCreator(someOpenParam)
    })
  })

  it('event method creates reducer correctly', () => {
    const {event} = initEvents()
    const pageOpenedEvent = event(pageOpenedEventTemplate)
    expect(pageOpenedEvent.type).toEqual(pageOpenedType)
    const state = {}
    const action = {
      type: 'something',
      payload: {
        someOpenParam: 'someOpenParam'
      }
    }
    expect(pageOpenedEvent.reducer?.(state, action)).toEqual(
      pageOpenedReducer(state, action)
    )
  })
})

import {
  applyReducer,
  eventsToReducersMap,
  generateReducers
} from '../eventMapping'

import {pageClosedEvent, pageOpenedEvent, testData} from './testData'

describe('eventMapping', () => {
  const emptyState = {}
  it('eventsToReducersMap type->reducer mapping is correct', () => {
    const reducersMap = eventsToReducersMap(testData)

    expect(Object.keys(reducersMap).length).toEqual(2)

    expect(Object.keys(reducersMap)).toContain(pageClosedEvent.type)
    expect(Object.keys(reducersMap)).toContain(pageOpenedEvent.type)

    expect(reducersMap[pageClosedEvent.type](emptyState)).toEqual(
      pageClosedEvent.reducer(emptyState)
    )

    expect(reducersMap[pageOpenedEvent.type](emptyState, {}).opened).toEqual(
      true
    )

    expect(reducersMap[pageClosedEvent.type](emptyState, {}).opened).toEqual(
      false
    )
  })

  it('eventsToReducersMap processes undefined correctly', () => {
    const reducersMap = eventsToReducersMap(undefined)
    expect(Object.keys(reducersMap).length).toEqual(0)
  })

  it('eventsToReducersMap processes empty array correctly', () => {
    const reducersMap = eventsToReducersMap([])
    expect(Object.keys(reducersMap).length).toEqual(0)
  })

  it('applyReducer applies reducer correctly', () => {
    const reducers = eventsToReducersMap(testData)
    expect(
      applyReducer(emptyState, {type: pageClosedEvent.type}, reducers)
    ).toEqual(pageClosedEvent.reducer(emptyState))
  })

  it(`applyReducer doesn't change state if no action is present`, () => {
    const reducersMap = eventsToReducersMap(testData)
    expect(applyReducer(emptyState, {type: 'dummy'}, reducersMap)).toEqual(
      emptyState
    )
  })

  it(`generateReducers creates correct reducers`, () => {
    const reducers = generateReducers(emptyState, testData)
    const event = pageClosedEvent
    expect(reducers(emptyState, event.action())).toEqual(
      event.reducer(emptyState)
    )
  })
})

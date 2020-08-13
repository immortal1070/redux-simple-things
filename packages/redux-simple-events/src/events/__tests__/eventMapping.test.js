import {eventsToReducersMap} from '../eventMapping'

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

    expect(reducersMap[pageOpenedEvent.type](emptyState).opened).toEqual(true)

    expect(reducersMap[pageClosedEvent.type](emptyState).opened).toEqual(false)
  })

  it('eventsToReducersMap processes undefined correctly', () => {
    const reducersMap = eventsToReducersMap(undefined)
    expect(Object.keys(reducersMap).length).toEqual(0)
  })

  it('eventsToReducersMap processes empty array correctly', () => {
    const reducersMap = eventsToReducersMap([])
    expect(Object.keys(reducersMap).length).toEqual(0)
  })
})

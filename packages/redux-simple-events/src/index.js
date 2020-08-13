import {applyReducerFromMap, eventsToReducersMap} from './events/eventMapping'
import initEvents from './events/initEvents'
import {fillSimpleSelectors} from './events/selectorsFactory'

export {
  eventsToReducersMap,
  applyReducerFromMap,
  fillSimpleSelectors,
  initEvents
}

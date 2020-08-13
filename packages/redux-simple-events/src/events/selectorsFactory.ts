import {State} from './types'
import {createSelectorCreator, defaultMemoize} from 'reselect'
import {isPlainObject} from '../utils/objectUtils'
import {clone, equals, path} from 'ramda'

/**
 * selector with deep equals instead of "==="
 */
const createSelector = createSelectorCreator(defaultMemoize, equals)

const selectorFieldName = 'selector'

const fillSelectorsRec = (object: State, ...pathParams: string[]): State => {
  if (object) {
    if (!object[selectorFieldName]) {
      // eslint-disable-next-line no-param-reassign
      object[selectorFieldName] = createSelector(
        path(pathParams),
        (value) => value
      )
    }
    Object.keys(object)
      .filter((key) => key !== selectorFieldName)
      .forEach((key) => {
        // eslint-disable-next-line prettier/prettier
        if (!isPlainObject(object[key] as State)) {
          // eslint-disable-next-line no-param-reassign
          object[key] = {}
        }
        // eslint-disable-next-line prettier/prettier
        fillSelectorsRec(object[key] as State, ...[...pathParams], key)
      })
  }
  return object
}

/**
 * Builds selectors for each field in the initialState using reselect lib.
 *
 * e.g. for state
 * const initialState = {
    samlConfigs: [],
    operation: OperationTypes.OVERVIEW,
    types: {
        protocolVersionTypes: [],
    ...

    this will return object
    {
        samlConfigs: {
            selector: >correct selector<
       },
       operation: {
            selector: >correct selector<
       },
       types: {
            selector: >correct selector<,
            protocolVersionTypes: {
                selector: >correct selector<,
            }
       },
    }

 Usage:
 const protocolVersionTypes = useSelector(samlConfigStoreRouting.types.protocolVersionTypes._selector)

 */
export const fillSimpleSelectors = (
  initialState: State,
  ...pathParams: string[]
): State => {
  const stateDeepCopy = clone(initialState)
  return fillSelectorsRec(stateDeepCopy, ...[...pathParams])
}

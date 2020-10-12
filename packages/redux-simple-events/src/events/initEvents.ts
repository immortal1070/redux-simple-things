import {ActionCreator, ActionTemplate, Event} from '../types'

/**
 * "event" is an object which joins
 * 1) "redux action type" constant
 * 2) "redux action" itself
 * 3) "redux reducer" for this action.
 *
 * returns "event" function which will create the event object, based on template.
 * See usages for more details.
 *
 * allEvents array will be filled when event() is called
 */

interface InitEvents {
  event: (eventTemplate: Event) => Event
  allEvents: Event[]
}

export default (): InitEvents => {
  const allEvents: Event[] = []

  const actionCreatorWrapper = (type: string, action: ActionCreator) => {
    return (...params: unknown[]): ActionTemplate => {
      const actionObj = action ? {...action(...params)} : {}
      return {
        ...actionObj,
        type
      }
    }
  }

  const event = (eventTemplate: Event): Event => {
    const {type} = eventTemplate
    const event = {...eventTemplate}
    event.action = actionCreatorWrapper(type, event.action)
    allEvents.push(event)
    return event
  }

  return {
    /**
     * Consumes object with type, action and reducer;
     * {
                type: 'SAML_CONFIG_PAGE_OPENED',
                action: (initOperation, initSamlConfigId) => ({
                    payload: {
                        initOperation,
                        initSamlConfigId
                    }
                }),
                reducer: (state) => {
                    return {
                        ...state,
                        loading: true
                    }
                }
            }

     provides object with the same fields which can be already used usual in Redux flows.
     */
    event,
    /**
     * "allEvents" array will be filled when event() is called
     */
    allEvents
  }
}

import initEvents from '../initEvents'

const {event, allEvents} = initEvents()

export const pageOpenedEvent = event({
  type: 'PAGE_OPENED',
  action: (someOpenParam) => ({
    payload: {
      someOpenParam
    }
  }),
  reducer: (state, action) => {
    return {
      ...state,
      opened: true,
      ...action.payload
    }
  }
})

export const pageClosedEvent = event({
  type: 'PAGE_CLOSED',
  action: () => ({}),
  reducer: (state) => {
    return {
      ...state,
      opened: false
    }
  }
})

export const testData = allEvents

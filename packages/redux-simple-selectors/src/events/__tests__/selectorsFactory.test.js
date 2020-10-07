import {fillSimpleSelectors} from '../selectorsFactory'

const initialState = {
  loading: false,
  users: [],
  dictionary: {
    countries: [],
    cities: {
      districts: []
    }
  }
}

const testState = {
  users: [
    {
      name: 'Duncan',
      lastname: 'Macleod'
    }
  ],
  dictionary: {
    countries: ['Russia', 'Germany', 'Bulgaria']
  }
}

describe('selectorsFactory', () => {
  const simpleSelectors = fillSimpleSelectors(initialState)

  it('first level selectors are created', () => {
    const usersSelector = simpleSelectors.users.selector
    expect(usersSelector(testState)).toEqual(testState.users)
  })

  it('nested level selectors are created', () => {
    const countriesSelector = simpleSelectors.dictionary.countries.selector
    expect(countriesSelector(testState)).toEqual(testState.dictionary.countries)
  })

  it('if state does not have nested data, then selector returns undefined', () => {
    const districtsSelector =
      simpleSelectors.dictionary.cities.districts.selector
    expect(districtsSelector(testState)).toEqual(undefined)
  })
})

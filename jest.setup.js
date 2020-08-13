require('@babel/polyfill')
window.R = require('ramda')
window.bm = null

Object.defineProperty(window, 'scroll', {
    value: (x, y) => {}
})

Object.defineProperty(window, 'requestAnimationFrame', {
    value: () => {}
})

Object.defineProperty(window, 'pageYOffset', {
    writable: true,
    value: 0
})
const spyScrollTo = jest.fn()
Object.defineProperty(window, 'scrollTo', {value: spyScrollTo})

Object.defineProperty(document, 'offsetHeight', {
    value: 100
})

Object.defineProperty(window, 'innerHeight', {
    value: 0
})

Object.defineProperty(navigator, 'userAgent', {
    writable: true,
    value: 'chrome'
})

import extractMask from './extract-mask'
import { regExTokens } from '../../../utils'

test('Date 99/99/9999)', () => {

  const tokens = [
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 2, end: 3, keyChar: false, regEx: '/' },
    { token: '99', start: 3, end: 5, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 5, end: 6, keyChar: false, regEx: '/' },
    { token: '9999', start: 6, end: 10, keyChar: true, regEx: regExTokens['9'] }
  ]
  
  expect(extractMask(tokens)).toEqual([
    { token: '/', start: 2 },
    { token: '/', start: 5 },
  ])
})

test('Phone (99) 9999-9999)', () => {

  const tokens = [
    { token: '(', start: 0, end: 1, keyChar: false, regEx: '(' },
    { token: '99', start: 1, end: 3, keyChar: true, regEx: regExTokens['9'] },
    { token: ') ', start: 3, end: 5, keyChar: false, regEx: ') ' },
    { token: '9999', start: 5, end: 9, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 9, end: 10, keyChar: false, regEx: '-' },
    { token: '9999', start: 10, end: 14, keyChar: true, regEx: regExTokens['9'] },
  ]

  expect(extractMask(tokens)).toEqual([
    { token: '(', start: 0 },
    { token: ') ', start: 3 },
    { token: '-', start: 9 },
  ])
})

test('extractMask("9999999")', () => {

  const tokens = [
    { token: '999999', start: 0, end: 6, keyChar: true, regEx: regExTokens['9'] },
  ]

  expect(extractMask(tokens)).toEqual([])
})

test('extractMask("99999AAAA")', () => {

  const tokens = [
    { token: '999999', start: 0, end: 5, keyChar: true, regEx: regExTokens['9'] },
    { token: 'AAAA', start: 5, end: 10, keyChar: true, regEx: regExTokens['A'] },
  ]

  expect(extractMask(tokens)).toEqual([])
})

test('extractMask("99***99-AAA")', () => {

  const tokens = [
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '***', start: 2, end: 5, keyChar: true, regEx: regExTokens['*'] },
    { token: '99', start: 5, end: 7, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 7, end: 8, keyChar: false, regEx: '-' },
    { token: 'AAA', start: 8, end: 11, keyChar: true, regEx: regExTokens['A'] }
  ]

  expect(extractMask(tokens)).toEqual([
    { token: '-', start: 7 },
  ])
})

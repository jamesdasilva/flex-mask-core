import Tokens from './tokens'
import { regExTokens, escapeChars, escapeCharsFn } from '../../helpers/utils'

const createContext = () => ({
  direction: 'right'
})

let context

beforeEach(() => {
  context = createContext()
});

test('Date 99/99/9999', () => {
  context.stringMask = '99/99/9999'

  Tokens(context)

  expect(context.tokens).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 2, end: 3, keyChar: false, regEx: '/' },
    { token: '99', start: 3, end: 5, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 5, end: 6, keyChar: false, regEx: '/' },
    { token: '9999', start: 6, end: 10, keyChar: true, regEx: regExTokens['9'] }
  ])
})

test('Phone (99) 9999-9999', () => {

  context.stringMask = '(99) 9999-9999'

  Tokens(context)

  expect(context.tokens).toEqual([
    { token: '(', start: 0, end: 1, keyChar: false, regEx: escapeChars['('] },
    { token: '99', start: 1, end: 3, keyChar: true, regEx: regExTokens['9'] },
    { token: ') ', start: 3, end: 5, keyChar: false, regEx: escapeCharsFn(') ') },
    { token: '9999', start: 5, end: 9, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 9, end: 10, keyChar: false, regEx: escapeCharsFn('-') },
    { token: '9999', start: 10, end: 14, keyChar: true, regEx: regExTokens['9'] },
  ])
})

test('Custom 99***99-AAA', () => {
  context.stringMask = '99***99-AAA'

  Tokens(context)

  expect(context.tokens).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '***', start: 2, end: 5, keyChar: true, regEx: regExTokens['*'] },
    { token: '99', start: 5, end: 7, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 7, end: 8, keyChar: false, regEx: escapeCharsFn('-') },
    { token: 'AAA', start: 8, end: 11, keyChar: true, regEx: regExTokens['A'] }
  ])
})

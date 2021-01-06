import extractTokens from './extract-tokens'
import { regExTokens, escapeChars, escapeCharsFn } from '../../../utils'

test('Date 99/99/9999)', () => {
  const mask = extractTokens('99/99/9999')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 2, end: 3, keyChar: false, regEx: '/' },
    { token: '99', start: 3, end: 5, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 5, end: 6, keyChar: false, regEx: '/' },
    { token: '9999', start: 6, end: 10, keyChar: true, regEx: regExTokens['9'] }
  ])
})

test('extractTokens("(99) 9999-9999")', () => {
  const mask = extractTokens('(99) 9999-9999')
  expect(mask).toEqual([
    { token: '(', start: 0, end: 1, keyChar: false, regEx: escapeChars['('] },
    { token: '99', start: 1, end: 3, keyChar: true, regEx: regExTokens['9'] },
    { token: ') ', start: 3, end: 5, keyChar: false, regEx: escapeCharsFn(') ') },
    { token: '9999', start: 5, end: 9, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 9, end: 10, keyChar: false, regEx: escapeCharsFn('-') },
    { token: '9999', start: 10, end: 14, keyChar: true, regEx: regExTokens['9'] },
  ])
})

test('extractTokens("99-A")', () => {
  const mask = extractTokens('99-9//A')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 2, end: 3, keyChar: false, regEx: escapeCharsFn('-') },
    { token: '9', start: 3, end: 4, keyChar: true, regEx: regExTokens['9'] },
    { token: '//', start: 4, end: 6, keyChar: false, regEx: '//' },
    { token: 'A', start: 6, end: 7, keyChar: true, regEx: regExTokens['A'] },
  ])
})

test('extractTokens("99***99-AAA")', () => {
  const mask = extractTokens('99***99-AAA')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '***', start: 2, end: 5, keyChar: true, regEx: regExTokens['*'] },
    { token: '99', start: 5, end: 7, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 7, end: 8, keyChar: false, regEx: escapeCharsFn('-') },
    { token: 'AAA', start: 8, end: 11, keyChar: true, regEx: regExTokens['A'] }
  ])
})

test('extractTokens("99-9+(9")', () => {
  const mask = extractTokens('99-9+(9')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 2, end: 3, keyChar: false, regEx: escapeCharsFn('-') },
    { token: '9', start: 3, end: 4, keyChar: true, regEx: regExTokens['9'] },
    { token: '+(', start: 4, end: 6, keyChar: false, regEx: escapeCharsFn('+(') },
    { token: '9', start: 6, end: 7, keyChar: true, regEx: regExTokens['9'] },
  ])
})

test('extractTokens("$%99-9+(9@#")', () => {
  const mask = extractTokens('$%99-9+(9@#')
  expect(mask).toEqual([
    { token: '$%', start: 0, end: 2, keyChar: false, regEx: escapeCharsFn('$%') },
    { token: '99', start: 2, end: 4, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 4, end: 5, keyChar: false, regEx: escapeCharsFn('-') },
    { token: '9', start: 5, end: 6, keyChar: true, regEx: regExTokens['9'] },
    { token: '+(', start: 6, end: 8, keyChar: false, regEx: escapeCharsFn('+(') },
    { token: '9', start: 8, end: 9, keyChar: true, regEx: regExTokens['9'] },
    { token: '@#', start: 9, end: 11, keyChar: false, regEx: escapeCharsFn('@#') },
  ])
})

test('extractTokens("999999")', () => {
  const mask = extractTokens('999999')
  expect(mask).toEqual([
    { token: '999999', start: 0, end: 6, keyChar: true, regEx: regExTokens['9'] },
  ])
})

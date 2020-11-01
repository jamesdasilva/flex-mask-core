import {expect, test} from '@jest/globals'
import extractMask from './extract-mask'

test('Date format - extractMask("99/99/9")', () => {
  const mask = extractMask('99/99/9999')
  expect(mask).toEqual([
    { token: '/', start: 2, end: 3, keyChar: false  },
    { token: '/', start: 5, end: 6, keyChar: false  },
  ])
})
test('extractMask("99-A")', () => {
  const mask = extractMask('99-9//A')
  expect(mask).toEqual([
    { token: '-', start: 2, end: 3, keyChar: false  },
    { token: '//', start: 4, end: 6, keyChar: false  },
  ])
})
test('extractMask("99***99-AAA")', () => {
  const mask = extractMask('99***99-AAA')
  expect(mask).toEqual([
    { token: '-', start: 7, end: 8, keyChar: false  },
  ])
})
test('extractMask("99-9+(9")', () => {
  const mask = extractMask('99-9+(9')
  expect(mask).toEqual([
    { token: '-', start: 2, end: 3, keyChar: false },
    { token: '+(', start: 4, end: 6, keyChar: false },
  ])
})
test('extractMask("$%99-9+(9@#")', () => {
  const mask = extractMask('$%99-9+(9@#')
  expect(mask).toEqual([
    { token: '$%', start: 0, end: 2, keyChar: false },
    { token: '-', start: 4, end: 5, keyChar: false },
    { token: '+(', start: 6, end: 8, keyChar: false },
    { token: '@#', start: 9, end: 11, keyChar: false },
  ])
})
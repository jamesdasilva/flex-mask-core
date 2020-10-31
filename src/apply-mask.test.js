
import applyMask from './apply-mask'

test('applyMask()', () => {
  const mask = [
    { token: '-', start: 2, end: 3 },
    { token: '+', start: 4, end: 5 },
  ]
  const value = '999'
  const valueWithMask = applyMask(mask, value)
  expect(valueWithMask).toBe('99-9+')
})
test('applyMask()', () => {
  const mask = [
    { token: '-', start: 2, end: 3 },
    { token: '+(', start: 4, end: 6 },
  ]
  const value = '9999'
  const valueWithMask = applyMask(mask, value)
  expect(valueWithMask).toBe('99-9+(9')
})
test('applyMask()', () => {
  const mask = [
    { token: '$%', start: 0, end: 2 },
    { token: '-', start: 4, end: 5 },
    { token: '+(', start: 6, end: 8 },
    { token: '@#', start: 9, end: 11 },
  ]
  const value = '9999'
  const valueWithMask = applyMask(mask, value)
  expect(valueWithMask).toBe('$%99-9+(9@#')
})

import extractMask from './extract-mask'
import removeMask from './remove-mask'
import applyMask from './apply-mask'

test('Date format - extractMask("99/99/9999")', () => {

  const maskStr = '99/99/9999'
  
  expect(extractMask(maskStr)).toEqual([
    { token: '/', start: 2 },
    { token: '/', start: 5 },
  ])
})

test('extractMask("(99) 9999-9999")', () => {

  const maskStr = '(99) 9999-9999'

  expect(extractMask(maskStr)).toEqual([
    { token: '(', start: 0 },
    { token: ') ', start: 3 },
    { token: '-', start: 9 },
  ])
})

test('extractMask("9999999")', () => {

  const maskStr = '9999999'

  expect(extractMask(maskStr)).toEqual([])
})

test('extractMask("99999AAAA")', () => {

  const maskStr = '99999AAAA'

  expect(extractMask(maskStr)).toEqual([])
})

test('extractMask("99-9//A")', () => {

  const maskStr = '99-9//A'

  expect(extractMask(maskStr)).toEqual([
    { token: '-', start: 2 },
    { token: '//', start: 4 },
  ])
})

test('extractMask("99***99-AAA")', () => {

  const maskStr = '99***99-AAA'

  expect(extractMask(maskStr)).toEqual([
    { token: '-', start: 7 },
  ])
})

test('extractMask("99-9+(9")', () => {

  const maskStr = '99-9+(9'

  expect(extractMask(maskStr)).toEqual([
    { token: '-', start: 2 },
    { token: '+(', start: 4 },
  ])
})

test('extractMask("$%99-9+(9@#")', () => {

  const maskStr = '$%99-9+(9@#'

  expect(extractMask(maskStr)).toEqual([
    { token: '$%', start: 0 },
    { token: '-', start: 4 },
    { token: '+(', start: 6 },
    { token: '@#', start: 9 },
  ])
})
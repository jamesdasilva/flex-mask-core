import extractMask from './extract-mask'

test('extractMask("99-9+")', () => {
  const mask = extractMask('99-9+')
  expect(mask).toEqual([
    { token: '-', start: 2, end: 3 },
    { token: '+', start: 4, end: 5 },
  ])
})
test('extractMask("99-9+(9")', () => {
  const mask = extractMask('99-9+(9')
  expect(mask).toEqual([
    { token: '-', start: 2, end: 3 },
    { token: '+(', start: 4, end: 6 },
  ])
})
test('extractMask("$%99-9+(9@#")', () => {
  const mask = extractMask('$%99-9+(9@#')
  expect(mask).toEqual([
    { token: '$%', start: 0, end: 2 },
    { token: '-', start: 4, end: 5 },
    { token: '+(', start: 6, end: 8 },
    { token: '@#', start: 9, end: 11 },
  ])
})
import extractMask from './extract-mask'

test('Date format - extractMask("99/99/9")', () => {
  const mask = extractMask('99/99/9999')
  expect(mask).toEqual([
    { token: '/', start: 2 },
    { token: '/', start: 5 },
  ])
})
test('extractMask("99-A")', () => {
  const mask = extractMask('99-9//A')
  expect(mask).toEqual([
    { token: '-', start: 2 },
    { token: '//', start: 4 },
  ])
})
test('extractMask("99***99-AAA")', () => {
  const mask = extractMask('99***99-AAA')
  expect(mask).toEqual([
    { token: '-', start: 7 },
  ])
})
test('extractMask("99-9+(9")', () => {
  const mask = extractMask('99-9+(9')
  expect(mask).toEqual([
    { token: '-', start: 2 },
    { token: '+(', start: 4 },
  ])
})
test('extractMask("$%99-9+(9@#")', () => {
  const mask = extractMask('$%99-9+(9@#')
  expect(mask).toEqual([
    { token: '$%', start: 0 },
    { token: '-', start: 4 },
    { token: '+(', start: 6 },
    { token: '@#', start: 9 },
  ])
})
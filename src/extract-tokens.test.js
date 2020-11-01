import extractTokens from './extract-tokens'

test('Date format - extractTokens("99/99/9999")', () => {
  const mask = extractTokens('99/99/9999')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true },
    { token: '/', start: 2, end: 3, keyChar: false },
    { token: '99', start: 3, end: 5, keyChar: true },
    { token: '/', start: 5, end: 6, keyChar: false },
    { token: '9999', start: 6, end: 10, keyChar: true }
  ])
})
test('extractTokens("99-A")', () => {
  const mask = extractTokens('99-9//A')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true },
    { token: '-', start: 2, end: 3, keyChar: false },
    { token: '9', start: 3, end: 4, keyChar: true },
    { token: '//', start: 4, end: 6, keyChar: false },
    { token: 'A', start: 6, end: 7, keyChar: true },
  ])
})
test('extractTokens("99***99-AAA")', () => {
  const mask = extractTokens('99***99-AAA')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true },
    { token: '***', start: 2, end: 5, keyChar: true },
    { token: '99', start: 5, end: 7, keyChar: true },
    { token: '-', start: 7, end: 8, keyChar: false },
    { token: 'AAA', start: 8, end: 11, keyChar: true }
  ])
})
test('extractTokens("99-9+(9")', () => {
  const mask = extractTokens('99-9+(9')
  expect(mask).toEqual([
    { token: '99', start: 0, end: 2, keyChar: true },
    { token: '-', start: 2, end: 3, keyChar: false },
    { token: '9', start: 3, end: 4, keyChar: true },
    { token: '+(', start: 4, end: 6, keyChar: false },
    { token: '9', start: 6, end: 7, keyChar: true },
  ])
})
test('extractTokens("$%99-9+(9@#")', () => {
  const mask = extractTokens('$%99-9+(9@#')
  expect(mask).toEqual([
    { token: '$%', start: 0, end: 2, keyChar: false },
    { token: '99', start: 2, end: 4, keyChar: true },
    { token: '-', start: 4, end: 5, keyChar: false },
    { token: '9', start: 5, end: 6, keyChar: true },
    { token: '+(', start: 6, end: 8, keyChar: false },
    { token: '9', start: 8, end: 9, keyChar: true },
    { token: '@#', start: 9, end: 11, keyChar: false },
  ])
})
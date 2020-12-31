import expandQuantifiers from './expand-quantifiers'

test('expandQuantifiers("^7>9") === "9999999"', () => {
  const stringMask = '^7>9' 
  expect(expandQuantifiers(stringMask)).toBe('9999999')
})
test('expandQuantifiers("^11>*") === "***********"', () => {
  const stringMask = '^11>*'
  expect(expandQuantifiers(stringMask)).toBe('***********')
})
test('expandQuantifiers("^21>A") === "AAAAAAAAAAAAAAAAAAAAA"', () => {
  const stringMask = '^21>A'
  expect(expandQuantifiers(stringMask)).toBe('AAAAAAAAAAAAAAAAAAAAA')
})
test('expandQuantifiers("999^2>A") === "999AAAA"', () => {
  const stringMask = '999^4>A'
  expect(expandQuantifiers(stringMask)).toBe('999AAAA')
})
test('expandQuantifiers("**^4>9") === "**9999"', () => {
  const stringMask = '**^4>9'
  expect(expandQuantifiers(stringMask)).toBe('**9999')
})
test('expandQuantifiers("^4>9AA") === "9999AA"', () => {
  const stringMask = '^4>9AA'
  expect(expandQuantifiers(stringMask)).toBe('9999AA')
})
test('expandQuantifiers("**^4>9AA") === "**9999AA"', () => {
  const stringMask = '**^4>9AA'
  expect(expandQuantifiers(stringMask)).toBe('**9999AA')
})
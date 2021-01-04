import expandQuantifiers from './expand-quantifiers'

test('expandQuantifiers("^7>9;") === "9999999"', () => {
  const stringMask = '^7>9;' 
  expect(expandQuantifiers(stringMask)).toBe('9999999')
})

test('expandQuantifiers("^11>*;") === "***********"', () => {
  const stringMask = '^11>*;'
  expect(expandQuantifiers(stringMask)).toBe('***********')
})

test('expandQuantifiers("^21>A;") === "AAAAAAAAAAAAAAAAAAAAA"', () => {
  const stringMask = '^21>A;'
  expect(expandQuantifiers(stringMask)).toBe('AAAAAAAAAAAAAAAAAAAAA')
})

test('expandQuantifiers("999^2>A;") === "999AAAA"', () => {
  const stringMask = '999^4>A;'
  expect(expandQuantifiers(stringMask)).toBe('999AAAA')
})

test('expandQuantifiers("**^4>9;") === "**9999"', () => {
  const stringMask = '**^4>9;'
  expect(expandQuantifiers(stringMask)).toBe('**9999')
})

test('expandQuantifiers("^4>9;AA") === "9999AA"', () => {
  const stringMask = '^4>9;AA'
  expect(expandQuantifiers(stringMask)).toBe('9999AA')
})

test('expandQuantifiers("**^4>9;AA") === "**9999AA"', () => {
  const stringMask = '**^4>9;AA'
  expect(expandQuantifiers(stringMask)).toBe('**9999AA')
})

test('expandQuantifiers("99^4>A;A") === "99AAAAA"', () => {
  const stringMask = '99^4>A;A'
  expect(expandQuantifiers(stringMask)).toBe('99AAAAA')
})
test('expandQuantifiers("^3>9;.999.999-99") === "999.999.999-99"', () => {
  const stringMask = '^3>9;.999.999-99'
  expect(expandQuantifiers(stringMask)).toBe('999.999.999-99')
})

test('expandQuantifiers("^3>9;.^3>9;.999-99") === "999.999.999-99"', () => {
  const stringMask = '^3>9;.^3>9;.999-99'
  expect(expandQuantifiers(stringMask)).toBe('999.999.999-99')
})

test('expandQuantifiers("^3>9;.^3>9;.^3>9;-99") === "999.999.999-99"', () => {
  const stringMask = '^3>9;.^3>9;.^3>9;-99'
  expect(expandQuantifiers(stringMask)).toBe('999.999.999-99')
})

test('expandQuantifiers("^3>9;.^3>9;.^3>9;-^2>9;") === "999.999.999-99"', () => {
  const stringMask = '^3>9;.^3>9;.^3>9;-^2>9;'
  expect(expandQuantifiers(stringMask)).toBe('999.999.999-99')
})

test('expandQuantifiers("^39.999.999-99") === " ^39.999.999-99"', () => {
  const stringMask = '^39.999.999-99'
  expect(expandQuantifiers(stringMask)).toBe('^39.999.999-99')
})

test('expandQuantifiers("999.999.999-99") === "999.999.999-99"', () => {
  const stringMask = '999.999.999-99'
  expect(expandQuantifiers(stringMask)).toBe('999.999.999-99')
})

test('expandQuantifiers("") === ""', () => {
  const stringMask = ''
  expect(expandQuantifiers(stringMask)).toBe('')
})

test('expandQuantifiers(null) === null', () => {
  const stringMask = null
  expect(expandQuantifiers(stringMask)).toBe(null)
})

test('expandQuantifiers(undefined) === undefined', () => {
  const stringMask = undefined
  expect(expandQuantifiers(stringMask)).toBe(undefined)
})

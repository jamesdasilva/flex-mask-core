import expandQuantifiers from './expand-quantifiers'

test('expandQuantifiers("^7>9;") === "9999999"', () => {
  const mask = {
    stringMask: '^7>9;'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '9999999'
  })
})

test('expandQuantifiers("^11>*;") === "***********"', () => {
  const mask = {
    stringMask: '^11>*;'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '***********'
  })
})

test('expandQuantifiers("^21>A;") === "AAAAAAAAAAAAAAAAAAAAA"', () => {
  const mask = {
    stringMask: '^21>A;'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: 'AAAAAAAAAAAAAAAAAAAAA'
  })
})

test('expandQuantifiers("999^2>A;") === "999AAAA"', () => {
  const mask = {
    stringMask: '999^4>A;'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '999AAAA'
  })
})

test('expandQuantifiers("**^4>9;") === "**9999"', () => {
  const mask = {
    stringMask: '**^4>9;'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '**9999'
  })
})

test('expandQuantifiers("^4>9;AA") === "9999AA"', () => {
  const mask = {
    stringMask: '^4>9;AA'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '9999AA'
  })
})

test('expandQuantifiers("**^4>9;AA") === "**9999AA"', () => {
  const mask = {
    stringMask: '**^4>9;AA'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '**9999AA'
  })
})

test('expandQuantifiers("99^4>A;A") === "99AAAAA"', () => {
  const mask = {
    stringMask: '99^4>A;A'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '99AAAAA'
  })
})

test('expandQuantifiers("^3>9;.999.999-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.999.999-99'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
})

test('expandQuantifiers("^3>9;.^3>9;.999-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.^3>9;.999-99'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
})

test('expandQuantifiers("^3>9;.^3>9;.^3>9;-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.^3>9;.^3>9;-99'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
})

test('expandQuantifiers("^3>9;.^3>9;.^3>9;-^2>9;") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.^3>9;.^3>9;-^2>9;'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
})

test('expandQuantifiers("^39.999.999-99") === " ^39.999.999-99"', () => {
  const mask = {
    stringMask: '^39.999.999-99'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '^39.999.999-99'
  })
})

test('expandQuantifiers("9^3>.999;") === "9.999.999.999"', () => {
  const mask = {
    stringMask: '9^3>.999;'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '9.999.999.999'
  })
})

test('expandQuantifiers("999^3>.999;,99") === "999.999.999.999,99"', () => {
  const mask = {
    stringMask: '999^3>.999;,99'
  }
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '999.999.999.999,99'
  })
})

test('expandQuantifiers("999.999.999-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '999.999.999-99'
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
})

test('expandQuantifiers("") === ""', () => {
  const mask = {
    stringMask: ''
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: ''
  })
})

test('expandQuantifiers(null) === null', () => {
  const mask = {
    stringMask: null
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: null
  })
})

test('expandQuantifiers(undefined) === undefined', () => {
  const mask = {
    stringMask: undefined
  } 
  expandQuantifiers(mask)
  expect(mask).toEqual({
    stringMask: undefined
  })
})

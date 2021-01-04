import expandQuantifiers from './expand-quantifiers'

test('expandQuantifiers("^7>9;") === "9999999"', () => {
  const mask = {
    stringMask: '^7>9;'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '9999999'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^11>*;") === "***********"', () => {
  const mask = {
    stringMask: '^11>*;'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '***********'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^21>A;") === "AAAAAAAAAAAAAAAAAAAAA"', () => {
  const mask = {
    stringMask: '^21>A;'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: 'AAAAAAAAAAAAAAAAAAAAA'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("999^2>A;") === "999AAAA"', () => {
  const mask = {
    stringMask: '999^4>A;'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '999AAAA'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("**^4>9;") === "**9999"', () => {
  const mask = {
    stringMask: '**^4>9;'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '**9999'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^4>9;AA") === "9999AA"', () => {
  const mask = {
    stringMask: '^4>9;AA'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '9999AA'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("**^4>9;AA") === "**9999AA"', () => {
  const mask = {
    stringMask: '**^4>9;AA'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '**9999AA'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("99^4>A;A") === "99AAAAA"', () => {
  const mask = {
    stringMask: '99^4>A;A'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '99AAAAA'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^3>9;.999.999-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.999.999-99'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^3>9;.^3>9;.999-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.^3>9;.999-99'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^3>9;.^3>9;.^3>9;-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.^3>9;.^3>9;-99'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^3>9;.^3>9;.^3>9;-^2>9;") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '^3>9;.^3>9;.^3>9;-^2>9;'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("^39.999.999-99") === " ^39.999.999-99"', () => {
  const mask = {
    stringMask: '^39.999.999-99'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '^39.999.999-99'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("9^3>.999;") === "9.999.999.999"', () => {
  const mask = {
    stringMask: '9^3>.999;'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '9.999.999.999'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("999^3>.999;,99") === "999.999.999.999,99"', () => {
  const mask = {
    stringMask: '999^3>.999;,99'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '999.999.999.999,99'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("999.999.999-99") === "999.999.999-99"', () => {
  const mask = {
    stringMask: '999.999.999-99'
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: '999.999.999-99'
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers("") === ""', () => {
  const mask = {
    stringMask: ''
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: ''
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers(null) === null', () => {
  const mask = {
    stringMask: null
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: null
  })
  expect(next).toHaveBeenCalled()
})

test('expandQuantifiers(undefined) === undefined', () => {
  const mask = {
    stringMask: undefined
  } 
  const next = jest.fn();
  expandQuantifiers(mask, next)
  expect(mask).toEqual({
    stringMask: undefined
  })
  expect(next).toHaveBeenCalled()
})

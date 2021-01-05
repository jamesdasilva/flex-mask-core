import extractPrefix from './extract-prefix'

test("extractPrefix(''R$ ;999,99)", () => {
  const mask = {
    stringMask: "''R$ ;999,99" 
  } 
  const next = jest.fn();
  extractPrefix(mask, next)
  expect(mask).toEqual({
    prefix: "R$ ",
    stringMask: "999,99"
  })
  expect(next).toHaveBeenCalled()
})

test("extractPrefix(''# ;^5>9;)", () => {
  const mask = {
    stringMask: "''# ;^5>9;" 
  } 
  const next = jest.fn();
  extractPrefix(mask, next)
  expect(mask).toEqual({
    prefix: "# ",
    stringMask: "^5>9;" 
  })
  expect(next).toHaveBeenCalled()
})

test("extractPrefix(''#CPF ;^3>9;.^3>9;.^3>9;-^2>9;)", () => {
  const mask = {
    stringMask: "''#CPF ;^3>9;.^3>9;.^3>9;-^2>9;" 
  } 
  const next = jest.fn();
  extractPrefix(mask, next)
  expect(mask).toEqual({
    prefix: "#CPF ",
    stringMask: "^3>9;.^3>9;.^3>9;-^2>9;"
  })
  expect(next).toHaveBeenCalled()
})
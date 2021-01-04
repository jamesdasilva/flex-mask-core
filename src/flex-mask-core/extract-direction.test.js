import extractDirection from './extract-direction'

test('extractDirection("123456789")', () => { 
  const mask = {
    stringMask: '123456789' 
  } 
  const next = jest.fn();
  extractDirection(mask, next)
  expect(mask).toEqual({
    direction: "right",
    stringMask: "123456789"
  })
  expect(next).toHaveBeenCalled()
})

test('extractDirection(">>123456789")', () => {
  const mask = {
    stringMask: '>>123456789' 
  } 
  const next = jest.fn();
  extractDirection(mask, next)
  expect(mask).toEqual({
    direction: "right",
    stringMask: "123456789"
  })
  expect(next).toHaveBeenCalled()
})

test('extractDirection("<<12345||678910")', () => {
  const mask = {
    stringMask: '<<12345||678910' 
  } 
  const next = jest.fn();
  extractDirection(mask, next)
  expect(mask).toEqual({
    direction: "left",
    stringMask: "12345||678910"
  })
  expect(next).toHaveBeenCalled()
})

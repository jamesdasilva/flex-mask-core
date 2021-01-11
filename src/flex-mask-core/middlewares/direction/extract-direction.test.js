import extractDirection from './extract-direction'

test('extractDirection("123456789")', () => { 

  const maskStr = '123456789' 

  expect(extractDirection(maskStr)).toEqual({
    direction: "right",
    stringMask: "123456789"
  })
})

test('extractDirection(">>123456789")', () => {

  const maskStr = '>>123456789' 

  expect(extractDirection(maskStr)).toEqual({
    direction: "right",
    stringMask: "123456789"
  })
})

test('extractDirection("<<12345||678910")', () => {

  const maskStr = '<<12345||678910' 

  expect(extractDirection(maskStr)).toEqual({
    direction: "left",
    stringMask: "12345||678910"
  })
})

import defineWhichDirection from './extract-direction'

test('defineWhichDirection("123456789")', () => {
  const stringMask = '123456789' 
  expect(defineWhichDirection(stringMask)).toEqual({
    direction: "right",
    maskStr: "123456789"
  })
})

test('defineWhichDirection(">>123456789")', () => {
  const stringMask = '>>123456789' 
  expect(defineWhichDirection(stringMask)).toEqual({
    direction: "right",
    maskStr: "123456789"
  })
})

test('defineWhichDirection("<<12345||678910")', () => {
  const stringMask = '<<12345||678910' 
  expect(defineWhichDirection(stringMask)).toEqual({
    direction: "left",
    maskStr: "12345||678910"
  })
})

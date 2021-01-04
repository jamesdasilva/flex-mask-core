import defineWhichDirection from './define-which-direction'

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

test('defineWhichDirection("<<123456789")', () => {
  const stringMask = '<<123456789' 
  expect(defineWhichDirection(stringMask)).toEqual({
    direction: "left",
    maskStr: "123456789"
  })
})

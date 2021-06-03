import Direction from './direction'

test('Direction("123456789")', () => { 

  const context = {
    stringMask: '123456789' 
  } 

  Direction(context)

  expect(context).toEqual({
    direction: "right",
    stringMask: "123456789"
  })
})

test('Direction(">>123456789")', () => {
  const context = {
    stringMask: '>>123456789' 
  } 

  Direction(context)

  expect(context).toEqual({
    direction: "right",
    stringMask: "123456789"
  })
})

test('Direction("<<12345||678910")', () => {

  const context = {
    stringMask: '<<12345||678910' 
  } 

  Direction(context)

  expect(context).toEqual({
    direction: "left",
    stringMask: "12345||678910"
  })
})

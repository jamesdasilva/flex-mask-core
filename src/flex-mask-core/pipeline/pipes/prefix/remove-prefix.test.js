import removePrefix from './remove-prefix'

test('removePrefix("R$ 111,00", "R$ ") === "111,00"', () => {
  const context = {
    value: "R$ 111,00",
    prefix: 'R$ '
  }
  removePrefix(context)
  expect(context).toEqual({
    value: "111,00",
    prefix: 'R$ '
  })
})

test('removePrefix("#111", "#") === "111"', () => {
  const context = {
    value: "#111",
    prefix: '#'
  }
  removePrefix(context)
  expect(context).toEqual({
    value: "111",
    prefix: '#'
  })
})

test('removePrefix("111", "#") === "111"', () => {
  const context = {
    value: "111",
    prefix: '#'
  }
  removePrefix(context)
  expect(context).toEqual({
    value: "111",
    prefix: '#'
  })
})

test('removePrefix("111", "") === "111"', () => {
  const context = {
    value: "111",
    prefix: ''
  }
  removePrefix(context)
  expect(context).toEqual({
    value: "111",
    prefix: ''
  })
})

test('removePrefix("", "") === ""', () => {
  const context = {
    value: '',
    prefix: ''
  }
  removePrefix(context)
  expect(context).toEqual({
    value: '',
    prefix: ''
  })
})
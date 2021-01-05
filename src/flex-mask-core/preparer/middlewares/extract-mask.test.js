import extractMask from './extract-mask'

test('Date format - extractMask("99/99/9999")', () => {
  const context = {
    stringMask: '99/99/9999',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "99/99/9999",
    direction: 'right',
    mask: [
      { token: '/', start: 2 },
      { token: '/', start: 5 },
    ]
  })
  expect(next).toHaveBeenCalled()
})

test('extractMask("(99) 9999-9999")', () => {
  const context = {
    stringMask: '(99) 9999-9999',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "(99) 9999-9999",
    direction: 'right',
    mask: [
      { token: '(', start: 0 },
      { token: ') ', start: 3 },
      { token: '-', start: 9 },
    ]
  })
  expect(next).toHaveBeenCalled()
})

test('extractMask("9999999")', () => {
  const context = {
    stringMask: '9999999',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "9999999",
    direction: 'right',
    mask: []
  })
  expect(next).toHaveBeenCalled()
})

test('extractMask("99999AAAA")', () => {
  const context = {
    stringMask: '99999AAAA',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "99999AAAA",
    direction: 'right',
    mask: []
  })
  expect(next).toHaveBeenCalled()
})

test('extractMask("99-9//A")', () => {
  const context = {
    stringMask: '99-9//A',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "99-9//A",
    direction: 'right',
    mask: [
      { token: '-', start: 2 },
      { token: '//', start: 4 },
    ]
  })
  expect(next).toHaveBeenCalled()
})

test('extractMask("99***99-AAA")', () => {
  const context = {
    stringMask: '99***99-AAA',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "99***99-AAA",
    direction: 'right',
    mask: [
      { token: '-', start: 7 },
    ]
  })
  expect(next).toHaveBeenCalled()
})

test('extractMask("99-9+(9")', () => {
  const context = {
    stringMask: '99-9+(9',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "99-9+(9",
    direction: 'right',
    mask: [
      { token: '-', start: 2 },
      { token: '+(', start: 4 },
    ]
  })
  expect(next).toHaveBeenCalled()
})

test('extractMask("$%99-9+(9@#")', () => {
  const context = {
    stringMask: '$%99-9+(9@#',
    direction: 'right'
  } 
  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "$%99-9+(9@#",
    direction: 'right',
    mask: [
      { token: '$%', start: 0 },
      { token: '-', start: 4 },
      { token: '+(', start: 6 },
      { token: '@#', start: 9 },
    ]
  })
  expect(next).toHaveBeenCalled()
})
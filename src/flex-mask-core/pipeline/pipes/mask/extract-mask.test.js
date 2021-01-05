import extractMask from './extract-mask'
import removeMask from './remove-mask'

const createContext = () => ({
  direction: 'right',
  prevHooks: []
})

let context

beforeEach(() => {
  context = createContext()
});

test('Date format - extractMask("99/99/9999")', () => {

  context.stringMask = '99/99/9999'

  const next = jest.fn();
  extractMask(context, next)

  expect(context).toEqual({
    stringMask: "99/99/9999",
    direction: 'right',
    mask: [
      { token: '/', start: 2 },
      { token: '/', start: 5 },
    ],
    prevHooks: [ removeMask ]
  })

  expect(next).toHaveBeenCalled()
})

test('extractMask("(99) 9999-9999")', () => {

  context.stringMask = '(99) 9999-9999'

  const next = jest.fn();
  extractMask(context, next)

  expect(context).toEqual({
    stringMask: "(99) 9999-9999",
    direction: 'right',
    mask: [
      { token: '(', start: 0 },
      { token: ') ', start: 3 },
      { token: '-', start: 9 },
    ],
    prevHooks: [ removeMask ]
  })

  expect(next).toHaveBeenCalled()
})

test('extractMask("9999999")', () => {

  context.stringMask = '9999999'

  const next = jest.fn();
  extractMask(context, next)
  expect(context).toEqual({
    stringMask: "9999999",
    direction: 'right',
    mask: [],
    prevHooks: [ removeMask ]
  })

  expect(next).toHaveBeenCalled()
})

test('extractMask("99999AAAA")', () => {

  context.stringMask = '99999AAAA'

  const next = jest.fn();
  extractMask(context, next)

  expect(context).toEqual({
    stringMask: "99999AAAA",
    direction: 'right',
    mask: [],
    prevHooks: [ removeMask ]
  })

  expect(next).toHaveBeenCalled()
})

test('extractMask("99-9//A")', () => {

  context.stringMask = '99-9//A'

  const next = jest.fn();
  extractMask(context, next)

  expect(context).toEqual({
    stringMask: "99-9//A",
    direction: 'right',
    mask: [
      { token: '-', start: 2 },
      { token: '//', start: 4 },
    ],
    prevHooks: [ removeMask ]
  })

  expect(next).toHaveBeenCalled()
})

test('extractMask("99***99-AAA")', () => {

  context.stringMask = '99***99-AAA'

  const next = jest.fn();
  extractMask(context, next)

  expect(context).toEqual({
    stringMask: "99***99-AAA",
    direction: 'right',
    mask: [
      { token: '-', start: 7 },
    ],
    prevHooks: [ removeMask ]
  })

  expect(next).toHaveBeenCalled()
})

test('extractMask("99-9+(9")', () => {

  context.stringMask = '99-9+(9'

  const next = jest.fn();
  extractMask(context, next)

  expect(context).toEqual({
    stringMask: "99-9+(9",
    direction: 'right',
    mask: [
      { token: '-', start: 2 },
      { token: '+(', start: 4 },
    ],
    prevHooks: [ removeMask ]
  })

  expect(next).toHaveBeenCalled()
})

test('extractMask("$%99-9+(9@#")', () => {

  context.stringMask = '$%99-9+(9@#'

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
    ],
    prevHooks: [ removeMask ]
  })
  expect(next).toHaveBeenCalled()
})
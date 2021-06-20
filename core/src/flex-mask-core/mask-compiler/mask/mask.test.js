import Mask from './mask'
import removeMask from './remove-mask'
import applyMask from './apply-mask'
import { regExTokens } from '../../helpers/utils'

const createContext = () => ({
  direction: 'right',
  beforeExec: [],
  afterExec: []
})

let context

beforeEach(() => {
  context = createContext()
});

test('Date 99/99/9999)', () => {

  context.tokens = [
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 2, end: 3, keyChar: false, regEx: '/' },
    { token: '99', start: 3, end: 5, keyChar: true, regEx: regExTokens['9'] },
    { token: '/', start: 5, end: 6, keyChar: false, regEx: '/' },
    { token: '9999', start: 6, end: 10, keyChar: true, regEx: regExTokens['9'] }
  ]

  Mask(context)
  
  expect(context).toEqual({
    direction: 'right',
    tokens: [
      { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
      { token: '/', start: 2, end: 3, keyChar: false, regEx: '/' },
      { token: '99', start: 3, end: 5, keyChar: true, regEx: regExTokens['9'] },
      { token: '/', start: 5, end: 6, keyChar: false, regEx: '/' },
      { token: '9999', start: 6, end: 10, keyChar: true, regEx: regExTokens['9'] }
    ],
    mask: [
      { token: '/', start: 2 },
      { token: '/', start: 5 },
    ],
    beforeExec: [ removeMask ],
    afterExec: [],
    exec: applyMask
  })
})

test('Phone (99) 9999-9999")', () => {

  context.tokens = [
    { token: '(', start: 0, end: 1, keyChar: false, regEx: '(' },
    { token: '99', start: 1, end: 3, keyChar: true, regEx: '[0-9]' },
    { token: ') ', start: 3, end: 5, keyChar: false, regEx: ') ' },
    { token: '9999', start: 5, end: 9, keyChar: true, regEx: '[0-9]' },
    { token: '-', start: 9, end: 10, keyChar: false, regEx: '-' },
    { token: '9999', start: 10, end: 14, keyChar: true, regEx: '[0-9]' }
  ]

  Mask(context)

  expect(context).toEqual({
    direction: 'right',
    tokens: [
      { token: '(', start: 0, end: 1, keyChar: false, regEx: '(' },
      { token: '99', start: 1, end: 3, keyChar: true, regEx: '[0-9]' },
      { token: ') ', start: 3, end: 5, keyChar: false, regEx: ') ' },
      { token: '9999', start: 5, end: 9, keyChar: true, regEx: '[0-9]' },
      { token: '-', start: 9, end: 10, keyChar: false, regEx: '-' },
      { token: '9999', start: 10, end: 14, keyChar: true, regEx: '[0-9]' }
    ],
    mask: [
      { token: '(', start: 0 },
      { token: ') ', start: 3 },
      { token: '-', start: 9 },
    ],
    beforeExec: [ removeMask ],
    afterExec: [],
    exec: applyMask
  })
})


test('No mask 99999AAAA")', () => {

  context.tokens = []

  Mask(context)

  expect(context).toEqual({
    direction: 'right',
    tokens: [],
    mask: [],
    beforeExec: [ removeMask ],
    afterExec: [],
    exec: applyMask
  })
})

test('Custom mask 99-9+(9', () => {

  context.tokens = [
    { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
    { token: '-', start: 2, end: 3, keyChar: false, regEx: '-' },
    { token: '9', start: 3, end: 4, keyChar: true, regEx: regExTokens['9'] },
    { token: '+(', start: 4, end: 6, keyChar: false, regEx: '+(' },
    { token: '9', start: 6, end: 7, keyChar: true, regEx: regExTokens['9'] },
  ]

  Mask(context)

  expect(context).toEqual({
    direction: 'right',
    tokens: [
      { token: '99', start: 0, end: 2, keyChar: true, regEx: regExTokens['9'] },
      { token: '-', start: 2, end: 3, keyChar: false, regEx: '-' },
      { token: '9', start: 3, end: 4, keyChar: true, regEx: regExTokens['9'] },
      { token: '+(', start: 4, end: 6, keyChar: false, regEx: '+(' },
      { token: '9', start: 6, end: 7, keyChar: true, regEx: regExTokens['9'] },
    ],
    mask: [
      { token: '-', start: 2 },
      { token: '+(', start: 4 },
    ],
    beforeExec: [ removeMask ],
    afterExec: [ ],
    exec: applyMask
  })
})

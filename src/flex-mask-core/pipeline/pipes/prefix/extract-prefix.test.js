import extractPrefix from './extract-prefix'
import removePrefix from './remove-prefix'
import applyPrefix from './apply-prefix'

const createContext = () => ({
  prevHooks: [],
  rearHooks: []
})

let context

beforeEach(() => {
  context = createContext()
});

test("extractPrefix(''R$ ;999,99)", () => {
  context.stringMask = "''R$ ;999,99"
  const next = jest.fn();
  extractPrefix(context, next)
  expect(context).toEqual({
    prefix: "R$ ",
    stringMask: "999,99",
    prevHooks: [ removePrefix ],
    rearHooks: [ applyPrefix ]
  })
  expect(next).toHaveBeenCalled()
})

test("extractPrefix(''# ;^5>9;)", () => {
  context.stringMask = "''# ;^5>9;"
  const next = jest.fn();
  extractPrefix(context, next)
  expect(context).toEqual({
    prefix: "# ",
    stringMask: "^5>9;",
    prevHooks: [ removePrefix ],
    rearHooks: [ applyPrefix ]
  })
  expect(next).toHaveBeenCalled()
})

test("extractPrefix(''#CPF ;^3>9;.^3>9;.^3>9;-^2>9;)", () => {
  context.stringMask = "''#CPF ;^3>9;.^3>9;.^3>9;-^2>9;"
  const next = jest.fn();
  extractPrefix(context, next)
  expect(context).toEqual({
    prefix: "#CPF ",
    stringMask: "^3>9;.^3>9;.^3>9;-^2>9;",
    prevHooks: [ removePrefix ],
    rearHooks: [ applyPrefix ]
  })
  expect(next).toHaveBeenCalled()
})
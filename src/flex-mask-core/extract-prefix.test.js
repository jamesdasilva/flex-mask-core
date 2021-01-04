import extractPrefix from './extract-prefix'

test("extractPrefix(''R$ ;999,99)", () => {
  expect(extractPrefix("''R$ ;999,99")).toEqual({
    prefix: "R$ ",
    maskStr: "999,99",
  })
})

test("extractPrefix(''# ;^5>9;)", () => {
  expect(extractPrefix("''# ;^5>9;")).toEqual({
    prefix: "# ",
    maskStr: "^5>9;",
  })
})

test("extractPrefix(''#CPF ;^5>9;)", () => {
  expect(extractPrefix("''#CPF ;^3>9;.^3>9;.^3>9;-^2>9;")).toEqual({
    prefix: "#CPF ",
    maskStr: "^3>9;.^3>9;.^3>9;-^2>9;",
  })
})
import extractPrefix from './extract-prefix'

test("extractPrefix(''R$ ;999,99)", () => {

  const maskStr = "''R$ ;999,99"

  expect(extractPrefix(maskStr)).toEqual({
    prefix: "R$ ",
    maskStr: "999,99"
  })
})

test("extractPrefix(''# ;^5>9;)", () => {

  const maskStr = "''# ;^5>9;"

  expect(extractPrefix(maskStr)).toEqual({
    prefix: "# ",
    maskStr: "^5>9;",
  })
})

test("extractPrefix(''#CPF ;^3>9;.^3>9;.^3>9;-^2>9;)", () => {

  const maskStr = "''#CPF ;^3>9;.^3>9;.^3>9;-^2>9;"

  expect(extractPrefix(maskStr)).toEqual({
    prefix: "#CPF ",
    maskStr: "^3>9;.^3>9;.^3>9;-^2>9;",
  })
})
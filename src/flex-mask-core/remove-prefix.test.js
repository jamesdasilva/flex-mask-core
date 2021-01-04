import removeValuePrefix from './remove-prefix'

test('removeValuePrefix("R$ 111,00", "R$ ") === "111,00"', () => {
  expect(removeValuePrefix("R$ 111,00", "R$ ")).toBe("111,00")
})

test('removeValuePrefix("#111", "#") === "111"', () => {
  expect(removeValuePrefix("#111", "#")).toBe("111")
})

test('removeValuePrefix("111", "#") === "111"', () => {
  expect(removeValuePrefix("111", "#")).toBe("111")
})

test('removeValuePrefix("111", "") === "111"', () => {
  expect(removeValuePrefix("111", "")).toBe("111")
})

test('removeValuePrefix("", "") === ""', () => {
  expect(removeValuePrefix("", "")).toBe("")
})